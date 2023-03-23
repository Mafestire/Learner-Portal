<template>
    <div class="products">
        <h2>Products</h2>
        <div class="spin" v-if="products == undefined">
            <SpinnerComp />
        </div>

        <div class="sort" style="margin: 1rem;">
            <button @click="sortProducts()">Sort price</button>
        </div>

        <div class="cards">
            <div class="card" v-for="product in products" :key="product.ID" style="width: 18rem;">
                <img :src="product.imgURL" style="width: 10rem; height: 11rem; ">
                <div class="card-body">
                    <h4 class="card-title">{{ product.prodName }}</h4>
                    <!-- <p class="card-text">{{ product.prodDescription }}</p> -->
                    <p class="card-text" style="font-size: 1rem;">{{ product.category }}</p>
                    <p class="card-text">R{{ product.price }}</p>
                    <router-link id="link" :to="{ name: 'product', params: { id: product.ID } }">view more</router-link> |
                    <router-link id="link" :to="{ name: 'cart', params: { id: product.ID } }">add to cart</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
    components: {
        SpinnerComp
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    },
    methods: {
        sortProducts() {
            this.$store.commit("sortProducts");
        }
    },

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
    border: 2px solid #CE3375;
    display: flex;
    width: 10rem;
    padding: 1rem;
    color: #CE3375;
    font-size: 1.3rem;
}

.card-body {
    margin-top: 3rem;
}

.card:hover {
    background-color: #CE3375;
    color: black;
}

#link{
    font-size: 1rem;
}
</style>