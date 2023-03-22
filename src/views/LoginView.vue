<template>
    <div class="back">
        <div class="cov">

            <form @submit.prevent="login">
                <h2>Welcome Back</h2>
                <h4>Please Log In</h4>
                <label>User Email</label>
                {{ this.logUser?.firstName }}
                <br>
                <input type="text" v-model="logger.emailAddress" required>
                <br>
                <label for="">User Password</label>
                <br>
                <input type="password" v-model="logger.userPassword" required>
                <br>
                <p class="lead">{{ message }}</p>
                <button type="submit" class="btn btn-secondary">LOG IN</button>
                <br>
                <!-- <p>Do not have an account? let's sign you up <button>SIGN UP</button></p> -->
                <router-link to="/register" class="link">Do not have an account? let's sign you up </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logger: {
                emailAddress: "",
                userPassword: "",
            }
        };
    },

    computed: {
        logUser(){
            return this.$store.state.userLogged
        },
        message() {
            return this.$store.state.message
        }
    },

    methods: {
        login() {
            this.$store.dispatch("login", this.logger);
        },

    },
}
</script>

<style scoped>
.back {
    background-image: url(https://i.postimg.cc/8kt0fkwS/children-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 40rem;
}

form {
    width: 20rem;
    padding: 1.5rem;
    box-shadow: 0 8px 32px 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid;
    transform: translateY(50%);
    margin-left: 25rem;
    color: #CE3375;
}

label {
    color: #CE3375;
}

button {
    margin-top: 1rem;
    background-color: #CE3375;
    color: #00CCFF;
}

input {
    background-color: #9EECFF;
    color: black;
}

p {
    font-size: .7rem;
}

.link {
    text-decoration: none;
    color: #CE3375;
}
</style>