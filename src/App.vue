<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

// export default defineComponent({
//   setup() {
    
//   },
// })
</script>
<style lang="scss">
  @import "./assets/styles/_colors";
  @import "./assets/styles/_reset";
  @import "./assets/styles/_typography";
</style>