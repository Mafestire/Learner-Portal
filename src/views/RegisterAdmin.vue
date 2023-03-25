<template>
    <LandingNav />
    <div>
        <form @submit.prevent="registerForm">
            <h2>Welcome to the team</h2>
            <h4>Lets create your account</h4>
            <div class="info">
                <div class="info1">
                    <label for="">First Name</label>
                    <br>
                    <input type="text" v-model="register.firstName" placeholder="Enter First name" required>
                    <br>
                    <label for=""> Last Name</label>
                    <br>
                    <input type="text" v-model="register.lastName" placeholder="Enter Last name" required>
                    <br>
                    <label for="">email Address</label>
                    <br>
                    <input type="email" v-model="register.emailAddress" placeholder="Enter conatct no." required>
                    <br>
                    <label for="">Hosted Picture</label>
                    <br>
                    <input type="text" v-model="register.adminProfile" placeholder="Enter email" required>
                    <br>
                    <label for="">Password</label>
                    <br>
                    <input type="password" v-model="register.adminPassword" placeholder="Enter Child's First name" required>
                    <br>
                </div>
                <p class="lead">{{ message }}</p>
                </div>
                <input type="submit" class="btn btn-secondary" value="SIGN UP">
                <br>
                <router-link to="/login" class="link">Already have an account? Log In</router-link>
        </form>
    </div>
</template>

<script>
import LandingNav from '@/components/LandingNav.vue';
export default {
    components: {
    
    LandingNav
},
    name: "registerAdmin",
    data() {
        return {
            register: {
                firstName: "",
                lastName: "",
                emailAddress: "",
                adminPassword: "",
                adminProfile: ""
            }
        };
    },
    computed: {
        message() {
            return this.$store.state.message;
        }
    },
    methods: {
        registerForm() {
            this.$store.dispatch("registerAdmin", this.register);
        }
    },
}
</script>

<style scoped>
form {
    width: 25rem;
    transform: translateY(10%);
    margin-left: auto;
    margin-right: auto;
    color: #CE3375;
}

.link {
    text-decoration: none;
    color: #CE3375;
}

label {
    color: #CE3375;
}

.btn {
    margin-bottom: 1rem;
    padding: .2rem;
    background-color: #CE3375;
    color: #00CCFF;
    cursor: pointer;
}

input {
    background-color: #CE3375;
    color: black;
    text-align: center;
    border: none;
}

select {
    background-color: #CE3375;
}


p {
    font-size: .8rem;
}

h4 {
    margin-bottom: 1rem;
}

.lead {
    margin-bottom: 1rem;
}

@media (width < 576px) {
    form {
        width: 10rem;
        box-shadow: none;
        border: none;
        color: #CE3375;
        margin-left: .7rem;
        font-size: 1rem;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info1 {
        border-right: none;
    }
}
</style>