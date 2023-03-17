<template>
  <NavMain />
  <div class="container-fluid min-vh-100">
    <router-view />
  </div>
</template>

<script>
import NavMain from "./components/NavBarComp.vue"
export default {
  components: { NavMain }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  position: sticky;
  background-color: #69E2FF;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #CE3375;
}
</style>
