<template>
    <div class="nav">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link to="/"></router-link> <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link> |
                    <router-link to="/contact">Contact</router-link> |
                    <router-link to="/login">Log In</router-link> |
                    <router-link to="/register">Register</router-link> |
                    <router-link to="/admin">Admin</router-link> |
                    <router-link to="/services">Services</router-link> |
                    <router-link to="/products">Products</router-link> |
                    <router-link to="/cart">Cart</router-link>

                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 20px;
    position: sticky;
}    /* background-color: #69E2FF; */


nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #CE3375;
}
</style>