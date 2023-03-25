<template>
    <div>
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mange</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page"> <router-link to="/">Home</router-link> |
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"> <router-link to="/about">About</router-link> |
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"> <router-link to="/contact">Contacts</router-link> |
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Log In
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/login">User</a></li>
                                <li><a class="dropdown-item" href="/login-admin">Admin</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Sign Up
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/register">User</a></li>
                                <li><a class="dropdown-item" href="/register-admin">Admin</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>