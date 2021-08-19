<template>
  <div id="app">
    <AppContainer>
      <AppContent />
    </AppContainer>
  </div>
</template>

<script>
import AppContainer from "./components/appContainer/AppContainer.vue";
import AppContent from "./components/appContent/AppContent.vue";

const isServer = () => {
  return !(typeof window !== "undefined" && window.document);
};

export default {
  name: "App",
  components: {
    AppContainer,
    AppContent,
  },
  created: () => {
    console.info(`isServer: ${isServer()}`);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
