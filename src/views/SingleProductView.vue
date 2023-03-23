<template>
    <div class="spin" v-if="product == undefined">
        <SpinnerComp />
    </div>
    <div class="single">

        <div class="cards">
            <div class="card" style="width: 18rem;">
                <img :src="product?.imgURL" style="width: 13rem; height: 11rem; ">
                <div class="card-body">
                    <h5 class="card-title">{{ product?.prodName }}</h5>
                    <p class="card-text" style="font-size: 1.4rem; margin-top: 1rem;">{{ product?.prodDescription }}</p>
                    <p class="card-text" style="font-size: 1.4rem; margin-bottom: 1rem;">{{ product?.category }}</p>
                    <p class="card-text"> R{{ product?.price }}</p>
                </div>
            </div>
        </div>
        <!-- <router-link :to="{ name: 'cart', params: { id: cart.ID } }">add to cart</router-link> -->

        <router-link class="link" to="/products">Close</router-link>
    </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
    components: {
        SpinnerComp
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },

    mounted() {
        this.$store.dispatch("fetchProduct", this.$route.params.id);
    }
}
</script>

<style scoped>
.single {
    width: 23rem;
    height: 19rem;
    margin-left: 27rem;
    margin-top: 8rem;
    /* background: rgba(255, 255, 255, 0.25); */
    box-shadow: 0 8px 32px 0 #CE3375;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid #CE3375;
}

 img{
    margin-left: -25rem;
    margin-top: 3.7rem;
    background: wheat;
    box-shadow: 0 8px 32px 0 #CE3375;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid #CE3375;
}

.card-body{
    font-size: 2rem;
    margin-top: -11rem;
    margin-left: 6rem;
    margin-bottom: 2rem;
}

.link{
    text-decoration: none;
    transform: translateY(12%);
}
</style>