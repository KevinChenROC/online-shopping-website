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
          <a class="a-button-buy-again">Add a new product</a>

          <a to="/category" class="a-button-history margin-right-10"
            >Add a new category</a
          >
          <a to="/owner" class="a-button-history margin-right-10"
            >Add a new owner</a
          >
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>

    <!-- Listing page -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-xs-2 col-lg-2 col-mg-3 col-sm-6 br bb">
          <div class="history-box">
            <!-- Product image -->
            <a href="#" class="a-link-normal">
              <img src="#" class="img-fluid" />
            </a>
            <!-- Product title -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">Title</div>
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
              <span class="a-color-tertiary a-size-small asin-reviews"
                >(1732)</span
              >
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">Price</span>
              </span>
            </div>
            <!-- Product Buttons -->
            <div class="a-row">
              <a class="a-button-history margin-right-10">Update</a>
              <a href="#" class="a-button-history margin-right-10">Delete</a>
            </div>
          </div>
        </div>
        <div class="col-xs-2 col-lg-2 col-mg-3 col-sm-6 br bb">
          <div class="history-box">
            <!-- Product image -->
            <a href="#" class="a-link-normal">
              <img src="#" class="img-fluid" />
            </a>
            <!-- Product title -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">Title</div>
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
              <span class="a-color-tertiary a-size-small asin-reviews"
                >(1732)</span
              >
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">Price</span>
              </span>
            </div>
            <!-- Product Buttons -->
            <div class="a-row">
              <a class="a-button-history margin-right-10">Update</a>
              <a href="#" class="a-button-history margin-right-10">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
