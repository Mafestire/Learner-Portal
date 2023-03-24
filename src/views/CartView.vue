<template>
<NavMain/>

    <div class="cart">
<table>
    <thead>
        <th>Items</th>
        <th>Quantity</th>
        <th>Price</th>
        
    </thead>
    <tbody>
        <tr>
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
        }
    },

    mounted() {
        this.$store.dispatch("addCart", this.$route.params.id);
    }
    }
</script>
 
<style scoped>
table{
    width: 35rem;
}
h3{
    margin-left: -15rem;
}
</style>