<template>
    <div class="back">
        <div class="cov">

            <form action="" @submit.prevent="loginUser">
                <h2>Welcome Back</h2>
                <h4>Please Log In</h4>
                <label for="" >User Email</label>
                <br>
                <input type="text" v-model="emailAddress" required>
                <br>
                <label for="">User Password</label>
                <br>
                <input type="password" v-model="userPassword" required>
                <br>
                <button>LOG IN</button>
                <br>
               <!-- <p>Do not have an account? let's sign you up <button>SIGN UP</button></p> -->
               <router-link to="/signin" class="link">Do not have an account? let's sign you up </router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    computed:{
        user(){
            return this.$store.state.user
        }
    },
    data(){
        return{
            logger: {
            emailAddress: "",
            userPassword: "",
            }
        };
    },
    methods: {
        async loginUser(){
            await this.$store.dispatch("login", this.logger);
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
input{
    background-color: #9EECFF;
    color: black;
}
p{
    font-size: .7rem;
}
.link{
  text-decoration: none;
  color: #CE3375;
}
</style>