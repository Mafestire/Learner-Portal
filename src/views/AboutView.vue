<template>
  <div>
    <div class="welcome" id="about">
      <div class="images">
        <img src="https://i.postimg.cc/6QbVmchq/plane2.gif" alt="" srcset="">
        <img src="https://i.postimg.cc/029frzr8/shine.gif" alt="" srcset="">
      </div>
      <h2>About Mange Day Care</h2>
      <div class="info">
        <img src="https://i.postimg.cc/G364SVw6/star-removebg-preview.png" alt="" srcset="">

        <p class="about">For 20 years we have been guiding, partnering and supporting responsible parents with their
          belief that
          quality education is the foundation to a successful life. We understand the deep emotional bonds you create
          at home, and our intention is to continue nurturing this guiding principle. We believe NO child should start
          life at a DISADVANTAGE . Educating and nurturing our future leaders within a safe and supported environment
          is our mission, and one we wont take lightly.
          Highly qualified staff
          Safe & secure environment
          Strong principles & values

          Located at the heart of a growing township Mfuleni, we pride ourselves in working hard to develop not just the physical growth but cognitive development.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {

}
</script>

<style>
@import url('https://i.postimg.cc/6QbVmchq/plane2.gif');

.about {
  width: 30rem;
  color: black;
  margin-top: .7rem;
  font-size: 1.2rem;
}

h2 {
  margin-top: 1rem;
  margin-left: 2rem;
  color: #CE3375;
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
}

@media (width < 576px) {
  .about{
    font-size: 1rem;
    width: 13rem;
    margin-left: auto;
    margin-right: auto;
  }
  .info{
    display: flex;
    flex-direction: column;
   
    text-align: center;
  }
  .info img{
    display: none;
  }
  h2{
    margin-left: .5rem;
  }
}

@media (width > 576px) {
  .about{
    font-size: 1rem;
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
  .info{
    display: flex;
    flex-direction: column;
   
    text-align: center;
  }
  .info img{
    display: none;
  }
  h2{
    margin-left: .5rem;
  }
}

@media (width > 992px) {
  .about{
    font-size: 1rem;
    width: 30rem;
    margin-left: auto;
    margin-right: auto;
  }
  .info{
    display: flex;
    flex-direction: column;
   
    text-align: center;
  }
  
  h2{
    margin-left: .5rem;
  }
}
</style>
