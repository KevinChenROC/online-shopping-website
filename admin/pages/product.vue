<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>

        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center;">Add a new product</h2>
            <form>
              <!-- Category dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>

              <!-- Owner dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option">
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>

              <!-- Title-->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input type="text" class="a-input-text" style="width: 100%" />
              </div>
              <!-- Price-->

              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="number" class="a-input-text" style="width: 100%" />
              </div>

              <!-- Description-->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  placeholder="Please provide some description"
                  style="width: 100%"
                />
              </div>

              <!-- Photo-->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 10px">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" />
                    <p style="margin-top: -70px">photo name</p>
                  </label>
                </div>
              </div>

              <!-- button -->
              <hr />
              <div class="a-spacing-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>
