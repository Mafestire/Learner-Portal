<template>
    <div class="single">
        <div class="cards">
            <div class="card" style="width: 18rem;">
                <img :src="product?.imgURL" style="width: 10rem; height: 11rem; ">
                <div class="card-body">
                    <h5 class="card-title">{{ product?.prodName }}</h5>
                    <p class="card-text">{{ product?.prodDescription }}</p>
                    <p class="card-text">{{ product?.category }}</p>
                    <p class="card-text">{{ product?.price }}</p>
                </div>
            </div>
        </div>
        <!-- <router-link :to="{ name: 'cart', params: { id: cart.ID } }">add to cart</router-link> -->

        <router-link to="/products">Close</router-link>
    </div>
</template>

<script>
export default {
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
    width: 40rem;
    margin-left: 18rem;
    margin-top: 5rem;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>