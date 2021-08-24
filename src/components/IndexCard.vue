<template>
  <div class="col-md-4 m-b-30">
    <router-link :to="`/${linkPage}`" class="indexCard">
      <div class="indexCard-img-wrap">
        <img :src="indexCardImg" alt="" />
        <span class="hover-shadow"
          ><span class="icon"> <img :src="indexCardIcons" alt="" /> </span
        ></span>
      </div>
      <div class="indexCard-contant">
        <div class="indexCard-title">
          <span> {{ indexCardTitle }}</span>
        </div>
        <p>
          {{ indexCardText }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: [
    "linkPage",
    "indexCardTitle",
    "indexCardImg",
    "indexCardIcons",
    "indexCardText",
  ],
};
</script>

<style>
</style>