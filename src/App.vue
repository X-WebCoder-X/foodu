<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "@/components/Footer.vue";
  import Header from "@/components/Header.vue"

export default {
  components: {
    Footer,
    Header
  }
}
</script>
<style>
  @font-face {
    font-family: "Tenor Sans";
    src: url("@/fonts/TenorSans-Regular.ttf");
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Tenor Sans", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* max-width: 375px; */
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

.left-right-arrow {
  width: 124px;
}

.container {
  margin: 0 auto;
  width: 93%;
}

</style>
