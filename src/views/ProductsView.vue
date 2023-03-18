<template>
    <div class="products">
        <h2>Products</h2>
        <div class="cards">
            <div class="card" v-for="product in products" :key="product.ID" style="width: 18rem;">
                <img :src="product.imgURL" style="width: 10rem; height: 11rem; ">
                <div class="card-body">
                    <h5 class="card-title">{{ product.prodName }}</h5>
                    <!-- <p class="card-text">{{ product.prodDescription }}</p> -->
                    <p class="card-text">{{ product.category }}</p>
                    <p class="card-text">{{ product.price }}</p>
                    <router-link :to="{ name: 'product', params: { id: product.ID } }">view more</router-link> |
                    <router-link :to="{ name: 'cart', params: { id: product.ID } }">add to cart</router-link>
                </div>
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

    mounted() {
        this.$store.dispatch("fetchProducts");
    }

}
</script>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-left: 4.5rem;
}

.card {
    border: 1px solid #CE3375;
    display: flex;
    width: 10rem;
    padding: 1rem;
}

.card-body {
    margin-top: 3rem;
}

.card:hover {
    background-color: #f34490;
}
</style>