<template>
  <div id="app">
    <ul>
      <li v-for="message in messages">
        [{{ message.at }}] {{ message.body }}
      </li>
    </ul>
    <input type="text" v-model="newMessage" @keyup.enter="sendNewMessage(newMessage)">
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
    }
  },
  methods: {
    sendNewMessage (message) {
      this.channel.push("new_msg", {body: this.newMessage});
      this.newMessage = '';
    }
  },
  mounted () {
    // Channel
    this.channel = socket.channel("rooms:lobby", {})

    // Receive message
    this.channel.on("new_msg", payload => {
      payload.at = Date();
      this.messages.push(payload);
    });

    // Join channel
    this.channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) })
  }
}
</script>

<style>
</style>
