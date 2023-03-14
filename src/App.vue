<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/login">Log In</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link to="/admin">Admin</router-link> | 
    <router-link to="/services">Services</router-link>
  </nav>
  <!-- <NavMain/> -->
  <router-view/>
</template>

<script>
// import NavMain from "@/components/NavMain.vue"
// export default {
//   name: NavMain,
//   component: {NavMain}
// }
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
