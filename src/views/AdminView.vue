<template>
    <div class="admin" v-if="loginAdmin">
        <div class="users">
            <h1>Users</h1>
            <table id="users">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Contact No.</th>
                    <th>Email Add.</th>
                    <th>Relationship</th>
                    <th>Role</th>
                    <th>Child's Name</th>
                    <th>Child's Surname</th>
                    <th>Child's Age</th>
                    <th>Child's Gender</th>
                    <th>Enrolment</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    <tr v-for="user in fetchUsers" :key="user.userID">
                        <td>{{ user.userID }}</td>
                        <td>{{ user.firstName }}</td>
                        <td>{{ user.lastName }}</td>
                        <td>{{ user.contactNo }}</td>
                        <td>{{ user.emailAddress }}</td>
                        <td>{{ user.relationship }}</td>
                        <td>{{ user.userRole }}</td>
                        <td>{{ user.childFirstName }}</td>
                        <td>{{ user.childLastName }}</td>
                        <td>{{ user.childAge }}</td>
                        <td>{{ user.childGender }}</td>
                        <td>{{ user.enrollment }}</td>
                        <td><router-link to="/update">edit</router-link></td>
                        <td><button @click="deleteUser(user.userID)">delete</button></td>
                    </tr>
                </tbody>
            </table>
            <!-- <button><router-link to="register">Add User</router-link></button> -->

                <!-- MODAL -->
                <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

        </div>

        <div class="admins">
            <h1>Admins</h1>
            <table id="admins">
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Add.</th>
                    <th>Profile</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>

                <tbody>
                    <tr v-for="admin in fetchAdmins" :key="admin.adminID">
                        <td>{{ admin.adminID }}</td>
                        <td>{{ admin.firstName }}</td>
                        <td>{{ admin.lastName }}</td>
                        <td>{{ admin.emailAddress }}</td>
                        <td>{{ admin.Profile }}</td>
                        <td><button>edit</button></td>
                        <td><button @click="deleteAdmin(admin.adminID)">delete</button></td>
                    </tr>
                </tbody>
            </table>
            <button>Add Admin</button>

        </div>

        <div class="products">
            <h1>Products</h1>
            <table id="products">
                <thead>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Update</th>
                    <th>Delete</th>
                </thead>

                <tbody>
                    <tr v-for="product in fetchProducts" :key="product.ID">
                        <td>{{ product.ID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.prodDescription }}</td>
                        <td>{{ product.category }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.prodQuantity }}</td>
                        <!-- <td>{{ product.imgURL }}</td> -->
                        <td><img :src="product.imgURL" style="width: 5rem;"> </td>
                        <td><button>edit</button></td>
                        <td><button @click="deleteProducts(product.ID)">delete</button></td>
                    </tr>
                </tbody>
            </table>
            <button>Add Product</button>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        fetchUsers() {
            return this.$store.state.users;
        },
        fetchProducts() {
            return this.$store.state.products;
        },
        fetchAdmins() {
            return this.$store.state.admins;
        }
    },

    created() {
        this.$store.dispatch("fetchUsers");
        this.$store.dispatch("fetchProducts");
        this.$store.dispatch("fetchAdmins");
    },
    methods: {
        deleteUser(id){
            this.$store.dispatch("deleteUser", id);
            this.$store.dispatch("fetchUsers");
        },
        deleteAdmin(id){
            this.$store.dispatch("deleteAdmin", id);
            this.$store.dispatch("fetchAdmins");
        },
        deleteProducts(id){
            this.$store.dispatch("deleteProducts", id);
            this.$store.dispatch("fetchProducts");
        },
    },
}


</script>

<style scoped>
table {
    width: 100%;
    padding: .5rem;
    margin-top: .5rem;
    background-color: wheat;
}

#users{
    background-color: wheat !important;
}

#users tr,
#admins tr,
#products tr:hover {
    background-color: #f34490;
}

h1{
    color: #CE3375;
}

.admins,
.users,
.products {
    margin-top: 1.5rem;
}

.products {
    justify-content: space-between;
    /* display: flex; */
    margin-top: 30px;
}

thead {
    color: black;
    /* border: 1px solid #CE3375; */

}

tbody {
    color: black;
    /* border: 1px solid #CE3375; */

}

.modal-content {
    background: #CE3375;
}

.modal-body p {
    margin: 0;
    padding: 0;
    font-size: 20px;
    color: black;
    width: 30rem;
}

.modal-body input {
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    height: 40px;
    color: black;
    text-align: center;
}

.modal-header {
    color: black;
    border-bottom: 0px;
}

.modal-footer {
    border-top: 0px;
}

.btn-close {
    background-color: black;
}</style>