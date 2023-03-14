<template>
    <div class="back">
        <div class="cov">

            <form action="">
                <h2>Welcome Back</h2>
                <h4>Please Log In</h4>
                <label for="">User Email</label>
                <br>
                <input type="text">
                <br>
                <label for="">User Password</label>
                <br>
                <input type="password">
                <br>
                <button>LOG IN</button>
                <br>
               <p>Do not have an account? let's sign you up <button>SIGN UP</button></p>
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
    transform: translateY(60%);
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
input{
    background-color: wheat;
    color: black;
}
p{
    font-size: .7rem;
}
</style>