<template>
    <LandingNav/>
    <div class="contacts">
        <div class="cont">
            <h2>Share with us your views</h2>
            <h6>Ask any questions or lets arrange a visit</h6>
        </div>
        <div class="contact">
            <div class="fo">
                <form action="">
                    <label for="">FirstName</label>
                    <br>
                    <input type="text" required>
                    <br>
                    <label for="">LastName</label>
                    <br>
                    <input type="text" required>
                    <br>
                    <label for="">Email</label>
                    <br>
                    <input type="text" required>
                    <br>
                    <label for="">Contact No.</label>
                    <br>
                    <input type="text" required>
                    <br>
                    <label for="">Message</label>
                    <br>
                    <textarea name="" id="" cols="30" rows="5" required></textarea>
                    <br>
                    <button>Submit</button>
                </form>
            </div>
            <div class="info">

                <h2>Find us on:</h2>
                <i class="fa-solid fa-envelope"></i> mange@gmail.com
                <br>
                <i class="fa-solid fa-location-dot"></i> 72 Qoqonga street ext6 Mfuleni Cape Town
                <br>
                <i class="fa-solid fa-phone"></i> 27 79 7772 808
            </div>
        </div>
    </div>
</template>

<script>
import LandingNav from '@/components/LandingNav.vue';

export default {
    components: { LandingNav }
}
</script>

<style  scoped>
.cont {
    font-size: 1.8rem;
    color: #CE3375;
    margin-top: 3rem;
}

input,
textarea {
    background-color: wheat;
    border: none;
    border-bottom: 1px solid #CE3375;
    text-align: center;
}

label {
    font-size: 1.2rem;
}

.contact {
    display: flex;
    margin-top: 3rem;
    justify-content: space-around;
    color: #CE3375;
}

form {
    margin-left: 4rem;
}

i {
    font-size: 1.2rem;
}

.info {
    margin-top: 3rem;
    margin-right: 7rem;
    display: flex;
    flex-direction: column;
}

button {
    margin-top: 1rem;
    background-color: #CE3375;
    color: #00CCFF;
    padding: .2rem;
}

@media (width < 576px) {
    .cont {
        font-size: 1rem;
    }

    .contact {
        display: flex;
        flex-direction: column;
        
    margin-left: auto;
    margin-right: auto;
    }

     .info {

        margin-left: auto;
        margin-right: auto;
        font-size: .8rem;
    }

    .fo{
        margin-right: 5rem;
    }

    label {
        font-size: 1rem;
    }

    input,
    textarea {
        font-size: 1rem;
        width: 7rem;
    }
}</style>