<template>
  <div class="">
    <menubar />

    <div class="col-12">
      <p>即将推出 ...</p>
    </div>
  </div>
</template>

<script lang="ts">
import menubar from "./menubar.page.vue"; // Import the Menubar component

export default {
  name: "HealthEducation",
  components: {
    menubar,
  },
  thods: {},
  data() {
    return {
      value: 0,
    };
  },
};
</script>

<style>
</style>