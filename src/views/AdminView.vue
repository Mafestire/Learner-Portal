<template>
    <div class="land">

        <div class="cont">
            <div class="users container">
                <h1>Users</h1>
                <button type="button" class="btn btn-dark my-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add User
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add User</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="createUser" method="POST">
                                    <p>First Name</p>
                                    <input class="col-12 my-3" id="Name" type="text" name="firstName" required>
                                    <p>Last Name</p>
                                    <input class="col-12 my-3" id="Brand" type="text" name="lastName" required>
                                    <p>Email Address</p>
                                    <input class="col-12 my-3" id="Price" type="text" name="emailAdd" required>
                                    <p>User Role</p>
                                    <input class="col-12 my-3" id="Price" type="text" name="userRole" required>
                                    <p>Profile Image</p>
                                    <input class="col-12 my-3" id="img" type="text" name="userProfile" required>
                                </form>


                                <div class="table crud-table">
                                    <table class="table align-middle container-sm">
                                        <thead class="">
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Role</th>
                                            <th>Profile Image</th>
                                            <th>Edit</th>
                                        </thead>
                                        <tbody id="shoe-list" class="">
                                            <tr v-for="user in users" :key="user.id" style="font-size: 14px;">
                                                <td>{{ user.firstName }}</td>
                                                <td>{{ user.lastName }}</td>
                                                <td>{{ user.userRole }}</td>
                                                <td><img :src="user.userProfile" style="width: 60px; height: 50px;"></td>
                                                <td>
                                                    <a class="btn btn-dark btn-md edit" data-bs-toggle="modal"
                                                        :data-bs-target="`#editModal${user.userID}`" id="addCart"
                                                        style="font-size: 12px;">Edit</a>
                                                    <div class="modal fade" :id="`editModal${user.userID}`"
                                                        :key="user.userID" tabindex="-1" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div class="modal-dialog">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Edit
                                                                        Product</h5>
                                                                    <button type="button" class="btn-close bg-light"
                                                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <form autocomplete="off">
                                                                        <p>First Name</p>
                                                                        <input class="col-12 my-3" id="Name" type="text"
                                                                            :value="user.firstName" required>
                                                                        <p>Last Name</p>
                                                                        <input class="col-12 my-3" id="Brand" type="text"
                                                                            :value="user.lastName" required>
                                                                        <p>Email Address</p>
                                                                        <input class="col-12 my-3 emailAdd" id="Price"
                                                                            type="text" :value="user.emailAdd" required>
                                                                        <p>User Role</p>
                                                                        <input class="col-12 my-3" id="Price" type="text"
                                                                            :value="user.userRole" required>
                                                                        <p>Profile Image</p>
                                                                        <input class="col-12 my-3" id="img" type="text"
                                                                            :value="user.userProfile" required>
                                                                        <div class="modal-footer">
                                                                            <button type="Submit" @click="editUser"
                                                                                class="btn btn-light"
                                                                                data-bs-dismiss="modal" id="submit"
                                                                                value="submit">Edit
                                                                                User</button>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" class="btn btn-danger btn-md delete"
                                                        @click="deleteUser" style="font-size: 12px;">Del</button>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>


                            <div class="products container">
                                <h1>Products</h1>
                                <button type="button" class="btn btn-dark my-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2">
                                    Add Product
                                </button>
                            </div>
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Product Name</p>
                                            <input class="col-12 my-3" id="Name" type="text" required>
                                            <p>Product Description</p>
                                            <input class="col-12 my-3" id="Brand" type="text" required>
                                            <p>Product Price</p>
                                            <input class="col-12 my-3" id="Price" type="text" required>
                                            <p>Image URL</p>
                                            <input class="col-12 my-3" id="img" type="text" required>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="submit" class="btn btn-primary" @click="addProduct">Save
                                                changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table crud-table">
                                <table class="table align-middle container-sm">
                                    <thead class="">
                                        <th>Name</th>
                                        <th>Brand</th>
                                        <th>Price</th>
                                        <th>Image</th>
                                        <th>Edit</th>
                                    </thead>
                                    <tbody id="shoe-list" class="">
                                        <tr v-for="item in items" :key="item.id" style="font-size: 14px;">
                                            <td>{{ item.prodName }}</td>
                                            <td>{{ item.prodDescription }}</td>
                                            <td>R{{ item.price }}</td>
                                            <td><img :src="item.imgURL" style="width: 60px; height: 50px;"></td>
                                            <td>
                                                <a href="#" class="btn btn-dark btn-md edit" data-bs-toggle="modal"
                                                    :data-bs-target="`#editModal${item.id}`" id="addCart"
                                                    style="font-size: 12px;">Edit</a>
                                                <div class="modal fade" :id="`editModal${item.id}`" :key="item.id"
                                                    tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Edit Product
                                                                </h5>
                                                                <button type="button" class="btn-close bg-light"
                                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <form autocomplete="off" class="itemForm">
                                                                    <div class="productDetails">
                                                                        <p>Product Name</p>
                                                                        <input class="col-12 my-3" id="Name" type="text"
                                                                            :value="item.prodName" required>
                                                                        <p>Product Description</p>
                                                                        <input class="col-12 my-3" id="Brand" type="text"
                                                                            :value="item.prodDescription" required>
                                                                        <p>Product Price</p>
                                                                        <input class="col-12 my-3" id="Price" type="text"
                                                                            :value="item.price" required>
                                                                        <p>Image URL</p>
                                                                        <input class="col-12 my-3" id="img" type="text"
                                                                            :value="item.imgURL" required>
                                                                        <div class="modal-footer">
                                                                            <button type="Submit" @click="editProduct"
                                                                                class="btn btn-light"
                                                                                data-bs-dismiss="modal" id="submit"
                                                                                value="submit">Edit Product</button>
                                                                        </div>
                                                                    </div>


                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-danger btn-md delete"
                                                style="font-size: 12px;" @click="deleteProduct">Del</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>

<script>
import axios from "axios";
methods: {
    async editUser(id) {
        try {
            await axios.put(`https://learner-portal-8hg3.onrender.com ${id}`);
        }
    }
}

</script>

<!-- <script>
// import LandingNav from "@/components/LandingNav.vue";
// export default {
//     name: LandingNav,
// component: {LandingNav}
// }

import axios from "axios";

data() {
       return {
           items: [],
           users: []
       };
   },
   created() {
       this.getProducts();
       this.fetchUsers();
   },
   methods: {
    async editUser(id) {
           try {
               await axios.put(`https://sneaker-station-sqk8.onrender.com/users${id}`);
               this.fetchUsers();
           } catch(err) {
               console.log(err);
           }
       },
    
    async fetchUsers() {
           try{
               const response = await axios.get("https://sneaker-station-sqk8.onrender.com/users");
               this.users = response.data.results;
               console.log(response);
           } catch (err) {
               console.log(err);
           }
       },
       async deleteUser(id) {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/users${id}`);
               this.fetchUsers();
           } catch(err) {
               console.log(err);
           }
       },
       async deleteUser(id) {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/users${id}`);
               this.fetchUsers();
           } catch(err) {
               console.log(err);
           }
       },
       async getProducts() {
           try{
               const response = await axios.get("https://sneaker-station-sqk8.onrender.com/products");
               this.items = response.data.results;
               console.log(response);
           } catch (err) {
               console.log(err);
           }
       },
       async editProduct(id) {
           try {
               await axios.put(`https://sneaker-station-sqk8.onrender.com/products${id}`);
               this.fetchUsers();
           } catch(err) {
               console.log(err);
           }
       },
       async addProduct() {
           try{
               const response = await axios.post("https://sneaker-station-sqk8.onrender.com/products");
               this.addProduct();
           } catch(err) {
               console.log(err);
           }
       },
       async deleteProduct(id) {
           try {
               await axios.delete(`https://sneaker-station-sqk8.onrender.com/products${id}`);
               this.getProducts();
           } catch(err) {
               console.log(err);
           }
       },
   },
};
</script> -->

<style scoped></style>