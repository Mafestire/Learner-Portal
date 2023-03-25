<template>
    <LandingNav />
    <div class="back">
        <div class="cov">

            <form @submit.prevent="logAdmin">
                <h2>Admin</h2>
                <h4>Please Log In</h4>
                <label>User Email</label>
                {{ this.logAdmin?.firstName }}
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
                <router-link to="/register-admin" class="link">Do not have an account? let's sign you up </router-link>
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
        logAdmin() {
            return this.$store.state.logAdmin
        },
        message() {
            return this.$store.state.message
        },

    },

    methods: {
        async loginAdmin() {
            await this.$store.dispatch("loginAdmin", this.logger);
             if (this.loginAdmin) {
                this.$router.push('/admin')
            }
        },




    }
}
</script>

<style scoped>
form {
    width: 20rem;
    padding: 1.5rem;
    /* box-shadow: 0 8px 32px 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px); */
    /* border-radius: 10px; */
    /* border: 1px solid; */
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

/* form:hover {
    width: 23rem;
    font-size: 1.5rem;
    margin-top: -5rem;

} */

@media (width < 567px) {
    form {
        /* margin-right: auto;
        margin-left: auto; */
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