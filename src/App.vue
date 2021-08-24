<template>
  <div id="app">
    <div>
      <comp-header></comp-header>
      <main class="m-t-50">
        <div class="container">
          <router-view></router-view>
        </div>
      </main>
      <comp-footer></comp-footer>
    </div>
  </div>
</template>

<script>
import compHeader from "@/components/layout/Header.vue";
import compFooter from "@/components/layout/Footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    compHeader,
    compFooter,
  },
};
</script>

<style>
@import url("./assets/css/vendor.min.css");
@import url("./assets/css/main.css");
a {
  text-decoration: none !important;
  color: inherit !important;
}
a:hover {
  text-decoration: none;
  color: inherit;
}
.navbar-expand-lg .navbar-nav .nav-link {
  padding: 0 !important;
}

.hotel-link {
  text-decoration: underline !important;
}
.hotel-link:hover {
  text-decoration: none !important;
}
.router-link-active span {
  color: dodgerblue;
}
body {
  background-color: #f5f5f5 !important;
}
.hotel-card {
  padding-bottom: 0 !important;
}
</style>
