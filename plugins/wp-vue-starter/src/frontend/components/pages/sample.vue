<template>
  <div class="lineidDiv">
    <div>
      <Button label="Primary">
        <router-link :to="{ name: 'Home', params: { lineId: 'null' } }">General</router-link>
      </Button>
    </div>

    <div>
      <Button label="Primary">
        <router-link :to="{ name: 'Home', params: { lineId: '123456' } }">Line Id</router-link>
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sample",
  methods: {},
  data() {
    return {
      lineId: null,
    };
  },
};
</script>

<style scoped>

</style>
