<template>
  <div id="app">
    <audio-player
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'audio-player': () => import('./components/AudioPlayer.vue'),
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
