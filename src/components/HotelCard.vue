<template>
  <div class="col-md-6">
    <router-link :to="`/${linkPage}`" class="hotel-card">
      <div class="hotel-img">
        <img :src="hotelCardImg" alt="" />
        <span class="hotel-card-shadow"></span>
        <span class="hotel-img-position"
          ><span>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
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
      <div class="hotel-card-content">
        <div class="m-b-15">{{ hotelCardTitle }}</div>
        <div class="hotel-address">
          {{ hotelCardAddress }}
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="hotel-map-link">
            <span
              ><img src="@/assets/images/svg/map-location.svg" alt=":(" /></span
            ><span> {{ hotelCardMap }} </span>
          </div>
        </div>
        <div class="col-md-6">
          <div class="hotel-price-info">
            <div>Цена:</div>
            <div>
              от <span> {{ hotelCardPrice }} </span> сўм в сутки
            </div>
          </div>
        </div>
      </div>
      <div></div>
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
    "hotelCardImg",
    "hotelCardTitle",
    "hotelCardAddress",
    "hotelCardMap",
    "hotelCardPrice",
  ],
};
</script>

<style>
.hotel-card {
  padding-bottom: 0 !important;
  border-bottom: 0;
}
.hotel-card .hotel-img {
  position: relative;
  width: 100%;
  height: 275px !important;
}
.hotel-card .hotel-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hotel-map-link {
  padding-top: 0;
  height: 100%;
  border-right: 1px solid #000;
  padding-bottom: 15px;
}
.hotel-card-content:after {
  display: none;
}
.hotel-price-info {
  text-align: center;
  padding: 20px;
}
</style>