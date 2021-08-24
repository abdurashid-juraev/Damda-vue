<template>
  <div class="hotel-card">
    <router-link :to="`${pageLink}`" >
      <div class="hotel-img">
        <img :src="cardImg" alt="" />
        <span class="hotel-card-shadow"></span>
        <span class="hotel-img-position"
          ><span>
            <svg viewBox="0 0 512 512">
              <g>
                <g>
                  <path
                    d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268

			c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514

			c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482

			s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514

			C512,93.417,453.532,30,376,30z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg> </span
          ><span
            ><img src="@/assets/images/svg/photo-camera.svg" alt="" />
            <span>15</span></span
          >
        </span>
      </div>
      <div class="ranch-card-content">
        <div class="ranch-card-content-inner">
          <div class="m-b-15">{{ cardTitle }}</div>
          <div class="hotel-address">{{ cardAddress }}</div>
        </div>
        <div class="ranch-card-price">
          Цена: от
          <b>{{ cardPrice }} </b>сўм в сутки
        </div>
        <div>
          <div>
            <b-modal
              v-if="modalShow"
              @hide="modalShow = false"
              id="modal-center"
              centered
              title="Календарь брони"
            >
              <div class="">
                <div>
                  <b-calendar locale="ru-RU"></b-calendar>
                </div>
              </div>
            </b-modal>
          </div>
        </div>
      </div>
    </router-link>
    <b-button @click="modalShow = true" class="b-btn" v-b-modal.modal-center>
      <b>Календарь брони </b>
    </b-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalShow: false,
      calendarData: {},
    };
  },
  props: ["cardImg", "cardTitle", "cardAddress", "cardPrice", "id", "pageLink"],
  components: {},
};
</script>

<style>
.b-calendar-inner {
  width: 465px !important;
}
.b-btn {
  color: black !important;
  background: none !important;
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
  display: flex !important;
  margin: auto !important;
  position: relative;
  font-weight: bold;
}
.b-btn::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  right: -10px;
  top: 10px;
  background-image: url("../assets/images/svg/arrow-down.svg");
}

.ranch-card-price {
  margin-bottom: 5px !important;
}
</style>