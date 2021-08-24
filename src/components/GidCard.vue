<template>
  <router-link class="card-gid" :to="`${linkPage}`">
    <div class="card-gid-img">
      <img :src="cardImg" alt="" />
      <span class="hover-shadow"></span>
      <span class="card-gid-photos"
        ><img :src="cardIcon" alt="" /><span>5</span></span
      >
    </div>
    <div class="card-gid-content">
      <div class="card-gid-name">
        {{ gidName }}
      </div>
      <div class="card-gid-address">
        {{ gidAddress }}
      </div>
      <div class="card-gid-lang">Языки</div>
      <div class="card-gid-flags">
        <img
          :src="gidLangFlag.langFlag"
          alt=""
          v-for="gidLangFlag in gidLangFlags"
          :key="gidLangFlag.id"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      gidLangFlags: [
        { id: 1, langFlag: require("@/assets/images/png/united-states.png") },
        { id: 2, langFlag: require("@/assets/images/png/united-states.png") },
      ],
    };
  },
  props: [
    "linkPage",
    "cardImg",
    "cardIcon",
    "gidName",
    "gidLang",
    "gidAddress",
    "gidLangFlag",
  ],
};
</script>

<style>
</style>