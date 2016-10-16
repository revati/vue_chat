<template>
  <div id="app">
    <ul id="list">
      <li v-for="message in messages">
        [{{ message.at }}] {{ message.body }}
      </li>
      <li>... <span v-if="isTyping">Someone is typing</span></li>
    </ul>

    <input type="text" v-model="newMessage" @keyup="sendIsTyping()" @keyup.enter="sendNewMessage(newMessage)">
  </div>
</template>

<script>
import socket from './socket'

export default {
  data () {
    return {
      messages: [],
      newMessage: "",
      channel: null,
      isTyping: false,
      timeout: null,
    }
  },
  methods: {
    sendNewMessage (message) {
      this.channel.push("new_msg", {body: this.newMessage});
      this.newMessage = '';
    },
    appendMessage (payload) {
      payload.at = Date()
      this.messages.push(payload)
      this.isTyping = false
    },
    sendIsTyping () {
      this.channel.push("typing", {});
    },
    markAsTyping () {
      clearTimeout(this.timeout)

      this.timeout = setTimeout(() => this.isTyping = false, 1000)
      this.isTyping = true
    }
  },
  mounted () {
    // Channel
    this.channel = socket.channel("rooms:lobby", {})

    // Receive message
    this.channel.on("new_msg", this.appendMessage)
    this.channel.on("typing", this.markAsTyping)

    // Join channel
    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }
}
</script>

<style>
</style>
