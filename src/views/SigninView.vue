<template>
    <div class="back">
        <div class="cov">

            <form action="" @submit.prevent="registerForm" method="POST">
                <h2>Welcome</h2>
                <h4>Lets create your account</h4>
                <div class="info">
                    <div class="info1">
                        <label for="">Parent's First Name</label>
                        <br>
                        <input type="text" v-model="register.firstName" placeholder="Enter First name" required>
                        <br>
                        <label for="">Parent's Last Name</label>
                        <br>
                        <input type="text" v-model="register.lastName" placeholder="Enter Last name" required>
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text" v-model="register.childFirstName" placeholder="Enter Child's First name" required>
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text" v-model="register.childLastName" placeholder="Enter Child's Last name" required>
                        <br>
                        <label for="">Child's age</label>
                        <br>
                        <input type="number" v-model="register.childAge" placeholder="Enter Child's Age" required>
                        <br>
                        <label for="">Child's gender</label>
                        <br>
                        <select name="gender" id="gender" v-model="register.childGender" required>
                            <option value="">select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <br>
                    </div>
                    <div class="info2">
                        <label for="">Role</label>
                        <br>
                        <select name="role" id="role" v-model="register.userRole"  required>
                            <option value="">select</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Guardian</option>
                        </select>
                        <br>
                        <label for="">Relationship</label>
                        <br>
                        <select name="relations" id="relations" v-model="register.relationship" required>
                            <option value="">select</option>
                            <option value="female">Mother</option>
                            <option value="male">Father</option>
                            <option value="male">Aunt</option>
                            <option value="male">Grandparent</option>
                        </select>
                        <br>
                        <label for="">Enrolement</label>
                        <br>
                        <select name="enrolment" id="enrolment" v-model="register.enrollment" required>
                            <option value="">select</option>
                            <option value="female">Infancy 0 - 18 months</option>
                            <option value="male">Toddlers 18 months - 3 years</option>
                            <option value="male">Children 4 - 5 years</option>
                        </select>
                        <br>
                        <label for="">User Email</label>
                        <br>
                        <input type="text" v-model="register.emailAddress" placeholder="Enter Email" required>
                        <br>
                        <label for="">Create Password</label>
                        <br>
                        <input type="password" v-model="register.userPassword" placeholder="Enter Password" required>
                        <label for="">Confirm Password</label>
                        <br>
                        <input type="password" v-model="register.confirmPassword" placeholder="Confirm Password" required>
                        <br>
                    </div>
                </div>
                <button>SIGN UP</button>
                <br>
                <router-link to="/login" class="link">Log In</router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default{
name: 'registerUser',
data(){
    return{
        register:{
            firstName: "",
            lastName: "",
            emailAddress: "",
            contactNo: "",
            childFirstName: "",
            childLastName: "",
            childAge: "",
            childGender: "",
            userRole: "",
            relationship: "",
            enrollment: "",
            userPassword: "",
            confirmPassword: "",
        }
    };
},
methods: {
    async registerForm(){
        await this.$store.dispatch("registerUser", this.register);
        this.register.firstName = "";
        this.register.lastName = "";
        this.register.emailAddress = "";
        this.register.contactNo = "";
        this.register.childFirstName = "";
        this.register.childLastName = "";
        this.register.childAge = "";
        this.register.childGender = "";
        this.register.userRole = "";
        this.register.relationship = "";
        this.register.enrollment = "";
        this.register.userPassword = "";
        this.register.confirmPassword = "";
    }
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
    width: 25rem;
    padding: 1.5rem;
    box-shadow: 0 8px 32px 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid;
    transform: translateY(10%);
    margin-left: 24rem;
    color: #CE3375;
}

.link{
   text-decoration: none;
    color: #CE3375;
}

label {
    color: #CE3375;
}

button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: .2rem;
    background-color: #CE3375;
    color: #00CCFF;
}

input {
    background-color: #9EECFF;
    color: black;
    text-align: center;
}

select{
    background-color: #9EECFF;
}


p {
    font-size: .8rem;
}

.info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
 
}

.info1{
    border-right: 1px solid black;
    padding-right: 1rem;
}

.info2{
    padding-left: 1rem;
}
.info2 label{
    margin-top: 2rem;
}
h4{
    margin-bottom: 1rem;
}
</style>