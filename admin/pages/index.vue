<template>
  <main>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">
            All products
          </h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <NuxtLink to="/products" class="a-button-buy-again"
            >Add a new product</NuxtLink
          >

          <NuxtLink to="/category" class="a-button-history margin-right-10"
            >Add a new category</NuxtLink
          >
          <NuxtLink to="/owner" class="a-button-history margin-right-10"
            >Add a new owner</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="a-spacing-large"></div>

    <!-- Listing page -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="col-xs-2 col-lg-2 col-mg-3 col-sm-6 br bb"
        >
          <div class="history-box">
            <!-- Product image -->
            <a href="#" class="a-link-normal">
              <img :src="product.photo" class="img-fluid" />
            </a>
            <!-- Product title -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div>{{ product.title }}</div>
              </span>
            </div>
            <!-- Product rating -->
            <div class="a-row">
              <a href="#">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small">(1732)</span>
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span>${{ product.price }}</span>
              </span>
            </div>
            <!-- Product Buttons -->
            <div class="a-row">
              <NuxtLink
                :to="`/products/${product._id}`"
                class="a-button-history margin-right-10"
              >
                Update</NuxtLink
              >
              <a
                @click="onDeleteProduct(product._id, index)"
                class="a-button-history margin-right-10"
                >Delete</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("http://localhost:3000/api/products");
      console.log(response);
      return {
        products: response.products
      };
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async onDeleteProduct(id, index) {
      try {
        let response = await this.$axios.$delete(
          `http://localhost:3000/api/products/${id}`
        );
        console.log(response.success);
        if (response.success) {
          //remove the product with the index
          this.products.splice(index, 1);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style></style>
