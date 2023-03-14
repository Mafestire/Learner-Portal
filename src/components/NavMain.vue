<template>
    <div>
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <router-link to="/">Home</router-link> 
            </li>
            <li class="nav-item">
                <router-link to="/about">About</router-link> 
            </li>
            <li class="nav-item">
                <router-link to="/contact">Contact</router-link> 
            </li>
            <li class="nav-item">
                <router-link to="/signin">Sign In</router-link> 
            </li>
            <li class="nav-item">
                <router-link to="/landing">Land</router-link>  
            </li>
            <li class="nav-item">
                <router-link to="/services">Services</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>