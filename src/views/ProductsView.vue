<template>
    <div class="products">
        <h2>Products</h2>
        <div class="card" v-for="product in products" :key="product.prodName" style="width: 18rem;">
            <img :src="product.imgURL" style="width: 10rem;">
            <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.prodDescription }}</p>
                <p class="card-text">{{ product.category }}</p>
                <p class="card-text">{{ product.price }}</p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>
</template>

<script>
// import ProductsCom from '../components/ProductsCom.vue'
export default {
    // components: { ProductsCom }
    computed: {
        products() {
            return this.$store.state.products;
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    }

}
</script>

<style scoped>
.prods {
    height: 40rem;
    background-color: aliceblue;
}

.prods h2 {
    color: red;
    font-size: 35px;
}
</style>