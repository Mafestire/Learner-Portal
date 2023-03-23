<template>
    <div class="back">
        <div class="cov">

            <form @submit.prevent="registerForm">
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
                        <label for="">Contact Number</label>
                        <br>
                        <input type="number" v-model="register.contactNo" placeholder="Enter conatct no." required>
                        <br>
                        <label for="">Email Address</label>
                        <br>
                        <input type="text" v-model="register.emailAddress" placeholder="Enter email" required>
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text" v-model="register.childFirstName" placeholder="Enter Child's First name"
                            required>
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text" v-model="register.childLastName" placeholder="Enter Child's Last name" required>
                        <br>
                        <label for="">Child's age</label>
                        <br>
                        <input type="number" v-model="register.childAge" placeholder="Enter Child's Age" required>
                        <br>

                    </div>
                    <div class="info2">
                        <label for="">Child's gender</label>
                        <br>
                        <select name="gender" id="gender" v-model="register.childGender" required>
                            <option value="">select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <br>
                        <label for="">Role</label>
                        <br>
                        <select name="role" id="role" v-model="register.userRole" required>
                            <option value="">select</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Guardian</option>
                        </select>
                        <br>
                        <label for="">Relationship</label>
                        <br>
                        <select name="relations" id="relations" v-model="register.relationship" required>
                            <option value="">select</option>
                            <option value="Mother">Mother</option>
                            <option value="Father">Father</option>
                            <option value="Aunt">Aunt</option>
                            <option value="Grandparent">Grandparent</option>
                        </select>
                        <br>
                        <label for="">Enrolement</label>
                        <br>
                        <select name="enrolment" id="enrolment" v-model="register.enrollment" required>
                            <option value="">select</option>
                            <option value="Infancy">Infancy 0 - 18 months</option>
                            <option value="Toddlers">Toddlers 18 months - 3 years</option>
                            <option value="Children">Children 4 - 5 years</option>
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
                        <input type="password" placeholder="Confirm Password" required>
                        <br>
                    </div>
                </div>
                <div>
                    <p class="lead">{{ message }}</p>
                </div>
                <input type="submit" class="btn btn-secondary" value="SIGN UP">
                <br>
                <router-link to="/login" class="link">Already have an account? Log In</router-link>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'registerUser',
    data() {
        return {
            register: {
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
                userPassword: ""
            }
        };
    },
    computed: {
        message() {
            return this.$store.state.message
        }
    },
    methods: {
        registerForm() {
            this.$store.dispatch("registerUser", this.register);
        }

    },
}
</script>

<style scoped>
form {
    width: 25rem;
    padding: 1.5rem;
    box-shadow: 0 8px 32px 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid;
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
}

select {
    background-color: #CE3375;
}


p {
    font-size: .8rem;
}

.info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

}

.info1 {
    border-right: 1px solid black;
    padding-right: 1rem;
}

.info2 {
    padding-left: 1rem;
}

.info2 label {
    margin-top: 2rem;
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
        padding: 1.5rem;
        box-shadow: none;
        border: none;
        color: #CE3375;
        margin-left: auto;
        margin-right: auto;
        font-size: 1rem;
        transform: translateY(0%);
        backdrop-filter: blur(0px);
        -webkit-backdrop-filter: blur(0px);
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info1 {
        border-right: none;
        padding-right: 1rem;
    }

    .info2 {
        margin-left: -1.6rem;

    }

    #enrolment {
        margin-left: -.5rem;

    }
}
</style>