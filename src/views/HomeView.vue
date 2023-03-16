<template>
  <div>
    <div class="home">
      <div class="text">
        <h1>Welcome</h1>
        <p>Mange Day Care has the best care ypur children, for 20 years we have been guiding, partnering and supporting
          responsible parents with their belief that
          quality education is the foundation to a successful life....
          <router-link to="/about" class="link">read more</router-link>
        </p>
      </div>

      <div class="cont">
        <h2>interested in enrolling with us?</h2>
        <p>Reserve a space or book a visit </p>
        <router-link to="/contact" class="link">Right Here</router-link>
      </div>

      <div class="services">
        <h2>Our Services</h2>
        <div class="serv">
          <div class="one">
            <h3>Care for Babies</h3>
            <img src="https://i.postimg.cc/pVCvCjJh/baby2.jpg" alt="" srcset="">
          </div>
          <div class="two">
            <h3>Classes for Pre-School</h3>
            <img src="https://i.postimg.cc/0yxHBX59/chil1.jpg" alt="" srcset="">
          </div>
          <div class="three">
            <h3>Classes for Toddlers</h3>
            <img src="https://i.postimg.cc/NGmDv8zF/tod1.png" alt="" srcset="">
          </div>
        </div>
        <router-link to="/services" class="link2">
          <h6>more about our services</h6>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  computed: {
    sortAndFilterProducts() {
      let sortedProducts = this.sortProducts();
      let filteredProducts = this.filteredProducts(sortedProducts);
      let searchProducts = this.searchProducts(filteredProducts);
      return searchProducts;
    },
  },
  methods: {

    sortPrice() {
      this.$store.commit("sortProductsPrice")
    },
    sortProducts() {
      let sort = this.sortBy;
      return this.sortProducts.sort((a, b) => {
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
      });
    },
    filteredProducts(products) {
      if (this.filterBy === 'all') {
        return products;
      } else {
        return products.filter(product => product.category === this.filterBY);
      }
    },
    searchProducts(products) {
      if (this.search === '') {
        return products;
      } else {
        return products.filter(product => product.name.toLowerCase().includes(this.searchProducts.toLowerCase()));
      }
    }
  }
}
</script>

<!-- <style>
@import url('https://i.postimg.cc/6QbVmchq/plane2.gif');

.about {
  width: 30rem;
  /* margin-left: 22rem; */
  margin-top: .7rem;
  font-size: 1.2rem;
}

h2,
h4 {
  margin-top: 1rem;
  margin-left: 2rem;
}

img {
  width: 5rem;
}

.info {
  display: flex;
}

.info img {
  width: 25rem;
}

.images {
  display: flex;
  justify-content: space-around;
}</style> -->

<style scoped>
.link {
  text-decoration: none;
  color: #CE3375;
}

.link2 {
  text-decoration: none;
  color: #CE3375;
  font-size: 2rem;
}

.text {
  width: 23rem;
  margin-left: 27rem;
  margin-top: 1rem;
}

h1,
h2 {
  color: #CE3375;
}

p {
  margin-top: 2rem;
}

img {
  margin-top: 1rem;
  width: 20rem;
}

.serv {
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}

.services {
  margin-top: 3rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #CE3375;
  border-top: 1px solid #CE3375;
}

.cont {
  margin-top: 5rem;
  border: 1px solid #CE3375;
}
</style>