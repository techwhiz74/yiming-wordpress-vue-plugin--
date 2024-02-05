<template>
  <div id="vue-backend-app">
    <h1>WP Vue Plugin</h1>
    <router-view name="tab"></router-view>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style>

</style>