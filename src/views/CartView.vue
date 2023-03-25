<template>
    <NavMain />


    <div class="cart" v-if="logUser">
        <table>
            <thead>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>

            </thead>
            <tbody>
                <tr v-for="cart in fetchCart" :key="cart.userID">
                    <td>{{ cart?.prodName }}</td>
                    <td>2</td>
                    <td>{{ cart?.price }}</td>
                    <td>delete</td>
                </tr>
            </tbody>
        </table>
        <h3 class="total">Total Price:</h3>
        <h4>Checkout</h4>
    </div>
</template>

<script>
import NavMain from "@/components/NavBarComp.vue";

export default {
    components: {
        NavMain
    },

    computed: {
        cart() {
            return this.$store.state.cart;
        },
        logUser() {
            return this.$store.state.userLogged;
        },
        fetchCart() {
            return this.$store.state.users;
        },
    },

    mounted() {
        this.$store.dispatch("addCart", this.$route.params.id);
        this.$store.dispatch("fetchCart");
        this.$store.dispatch("fetchUser")
    }
}
</script>
 
<style scoped>
table {
    width: 35rem;
}

h3 {
    margin-left: -15rem;
}
</style>