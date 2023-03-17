<template>
    <div class="products">
        <!-- {{ products }} -->
        <div class="card" v-for="product in fetchProducts" :key="product.prodName" style="width: 18rem;">
            <img :src="product.imgURL" style="width: 10rem;">
            <div class="card-body">
                <h5 class="card-title">{{ product.prodName }}</h5>
                <p class="card-text">{{ product.prodDescription }}</p>
                <p class="card-text">{{ product.category }}</p>
                <p class="card-text">{{ product.price }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    },

    created() {
        this.$store.dispatch("fetchProducts");
    }

}
</script>