<template>
    <LandingNav />
    <div class="back">
        <div class="cov">

            <form @submit.prevent="login">
                <h2>User</h2>
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
                <router-link to="/register" class="link">Do not have an account? let's sign you up </router-link>
            </form>
        </div>
    </div>
</template>

<script>
import LandingNav from '@/components/LandingNav.vue'
export default {
    components: {
        LandingNav
    },
    data() {
        return {
            logger: {
                emailAddress: "",
                userPassword: "",
            }
        };
    },

    computed: {
        logUser() {
            return this.$store.state.userLogged
        },
        message() {
            return this.$store.state.message
        }
    },

    methods: {
      async  login() {
           await this.$store.dispatch("login", this.logger);
             if (this.logUser) {
                this.$router.push({name: 'dashboard'});
            }

            }
        },
    }
</script>

<style scoped>
form {
    width: 20rem;
    padding: 1.5rem;
    transform: translateY(20%);
    margin-right: auto;
    margin-left: auto;
    color: #CE3375;
}

label {
    color: #CE3375;
}

button {
    margin-top: 1rem;
    font-size: .7rem;
    padding: .2rem;
    background-color: #CE3375;
    color: #00CCFF;
}

input {
    background-color: wheat;
    color: black;
    border: none;
    border-bottom: 1px solid #CE3375;
}

p {
    font-size: .7rem;
}

.link {
    text-decoration: none;
    color: #CE3375;
}

@media (width < 567px) {
    form {
        margin-left: 1rem;
        width: 10rem;
        transform: translateY(0%);
        font-size: 1rem;
        box-shadow: none;
        border: none;
    }

    input {
        width: 8rem;
    }
}
</style>