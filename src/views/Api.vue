<template>
  <ul>
    <li v-for="page in pages">
      <strong>{{ page.title }}</strong> - {{ page.contents }}
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      pages: []
    }
  },
  mounted () {
    this.$http.get('api/pages').then(response => this.pages = response.body.pages)
  }
}
</script>
<style>

</style>