<template>
  <div id="app">
    <div class="container p-2">
      <h1>Vue toastr notifications</h1>
      <button v-on:click="submitForm()" class="btn btn-primary">Toastr</button>
  </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    submitForm(){
      this.$toasted.show('Hello, Vue Toastr Notification')
    }
  }
}
</script>