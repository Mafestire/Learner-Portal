<template>
    <div class="back">
        <div class="cov">

            <form action="">
                <h2>Welcome</h2>
                <h4>Lets create your account</h4>
                <div class="info">
                    <div class="info1">
                        <label for="">Parent's First Name</label>
                        <br>
                        <input type="text">
                        <br>
                        <label for="">Parent's Last Name</label>
                        <br>
                        <input type="text">
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text">
                        <br>
                        <label for="">Child's Last Name</label>
                        <br>
                        <input type="text">
                        <br>
                        <label for="">Child's age</label>
                        <br>
                        <input type="number">
                        <br>
                        <label for="">Child's gender</label>
                        <br>
                        <select name="gender" id="gender">
                            <option value="">select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                        <br>
                    </div>
                    <div class="info2">
                        <label for="">Role</label>
                        <br>
                        <select name="role" id="role">
                            <option value="">select</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Guardian</option>
                        </select>
                        <br>
                        <label for="">Relationship</label>
                        <br>
                        <select name="relations" id="relations">
                            <option value="">select</option>
                            <option value="female">Mother</option>
                            <option value="male">Father</option>
                            <option value="male">Aunt</option>
                            <option value="male">Grandparent</option>
                        </select>
                        <br>
                        <label for="">Enrolement</label>
                        <br>
                        <select name="enrolment" id="enrolment">
                            <option value="">select</option>
                            <option value="female">Infancy 0 - 18 months</option>
                            <option value="male">Toddlers 18 months - 3 years</option>
                            <option value="male">Children 4 - 5 years</option>
                        </select>
                        <br>
                        <label for="">User Email</label>
                        <br>
                        <input type="text">
                        <br>
                        <label for="">Create Password</label>
                        <br>
                        <input type="password">
                        <label for="">Confirm Password</label>
                        <br>
                        <input type="password">
                        <br>
                    </div>
                </div>
                <button>SIGN UP</button>
                <br>
                <p>alredy have an account?<button>LOG IN</button></p>
            </form>
        </div>
    </div>
</template>

<script>

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
    /* background-color: #2a410a; */
    padding: 1.5rem;
    /* background: #CE3375; */
    box-shadow: 0 8px 32px 0;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid;
    transform: translateY(30%);
    margin-left: 22rem;
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
    background-color: wheat;
    color: black;
border: 1px solid #00CCFF ;
}

select{
    background-color: wheat;
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
</style>