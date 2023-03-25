<template>
    <NavMain />
    <div class="products" v-if="logUser">
        <h2>Products</h2>
        <div class="spin" v-if="products == undefined">
            <SpinnerComp />
        </div>

        <div class="sort" style="margin: 1rem;">
            <button @click="sortProducts()">Sort price</button>
        </div>

        <div class="cards">
            <div class="card" v-for="product in products" :key="product.ID">
                <img :src="product.imgURL">
                <div class="card-body">
                    <h4 class="card-title">{{ product.prodName }}</h4>
                    <!-- <p class="card-text">{{ product.prodDescription }}</p> -->
                    <p class="card-text" style="font-size: 1rem;">{{ product.category }}</p>
                    <p class="card-text">R{{ product.price }}</p>
                    <router-link id="link" :to="{ name: 'product', params: { id: product.ID } }">view more</router-link> |
                    <router-link id="link" :to="{ name: 'cart', params: { id: product.ID } }"><i
                            class="fa-solid fa-cart-shopping"></i></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import NavMain from "@/components/NavBarComp.vue"

export default {
    components: {
        SpinnerComp,
        NavMain
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        logUser() {
            return this.$store.state.userLogged;
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
    /* margin-left: 3rem; */
}

.card {
    border: 2px solid #CE3375;
    display: flex;
    width: 15rem;
    height: 24rem;
    padding: 1rem;
    color: #CE3375;
    margin-left: 3rem;
    font-size: 1.3rem;
}

.card:hover {
    background-color: #CE3375;
    color: black;
}

img {
    width: 10rem;
    height: 11rem;
}

#link {
    font-size: 1rem;
    color: black;
}

#link:hover {
    color: wheat;
}

@media (width < 576px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
        margin-left: 1.3rem;
    }

    .card {
        border: 2px solid #CE3375;
        display: flex;
        width: 10rem;
        height: 21rem;
        padding: 1rem;
        color: #CE3375;
        font-size: 1.3rem;

    }

    img {
        width: 5rem;
        height: 6rem;
        margin-left: 1.2rem;
    }

}

@media (width > 576px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-left: 1.3rem;
    }

    .card {
        border: 2px solid #CE3375;
        display: flex;
        width: 10rem;
        height: 21rem;
        padding: 1rem;
        color: #CE3375;
        font-size: 1.3rem;

    }

    img {
        width: 5rem;
        height: 6rem;
        margin-left: 1.2rem;
    }
}

@media (width > 900px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-left: 1.3rem;
    }

    .card {
        border: 2px solid #CE3375;
        display: flex;
        width: 15rem;
        height: 24rem;
        padding: 1rem;
        color: #CE3375;
        font-size: 1.3rem;
    }

    img {
        width: 10rem;
        height: 11rem;
    }
}
</style>