<template>
  <div class="col-md-3">
    <router-link to="#!" class="indexCard">
      <div class="indexCard-img-wrap">
        <img :src="blogCardImg" alt="" />
        <span class="card-element">
          {{ blogCardImgLink }}
        </span>
      </div>
      <div class="indexCard-contant">
        <div class="indexCard-title title2">
          <span>
            {{ blogCardTitle }}
          </span>
        </div>
        <p>
          {{ blogCardtext }}
        
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
  props: ["blogCardImg", "blogCardImgLink", "blogCardTitle", "blogCardtext"],
};
</script>

<style scoped>
.card-element:hover {
  transition: all 0.3s;
  background: #d3d3d3;
}
</style>