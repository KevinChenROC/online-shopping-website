<template>
  <div>
    <NavBar></NavBar>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
}
</style>
