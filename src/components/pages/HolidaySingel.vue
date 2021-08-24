<template>
  <div class="hotels-singel-body">
    <div>
      <ul class="hotels-singel-url">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/Holiday">Зоны отдыха</router-link></li>
        <li>Holiday Item</li>
      </ul>
    </div>
    <div class="hotel-address-content">
      <div class="hotel-address-inner">
        <div class="hotel-name">Holiday Item</div>
        <div class="address-link">
          <img src="@/assets/images/svg/map-location.svg" alt=":(" /><a
            href="#!"
            >На карте</a
          >
        </div>
      </div>
      <div class="hotel-name-address">
        <div class="hotel-name-address-inner">
          <img src="@/assets/images/svg/location.svg" alt="" />
          <span>Ташкент, Мирзо-Улугбекский район,</span>
        </div>
        <div class="hotel-name-address-inner">
          <span>1-я ул. Шивли, 1</span>
          <span class="hotel-gost"
            ><img src="@/assets/images/svg/visibility.svg" alt="" />
            <span>4800</span></span
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <div class="m-b-50">
          <div class="thumb m-b-30">
            <div
              @slideChange="onTopChange"
              v-swiper:swiperTop="swiperOptionTop"
              class="swiper gallery-top"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in 5" :key="i">
                  <img :src="`http://picsum.photos/400/30${i}`" alt=":(" />
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <div
              @slideChange="onThumbnailChange"
              v-swiper:swiperThumbs="swiperOptionThumbs"
              class="swiper gallery-thumbs"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="i in 5" :key="i">
                  <img :src="`http://picsum.photos/400/30${i}`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="hotel-booking-info">
          <div>
            <div>
              <img src="@/assets/images/svg/booking.svg" alt="" />
            </div>
            <div class="bron-title">Бронирование</div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="hotel-yesNo-checkbox">
          <div class="rezident-title">Резидент</div>
          <p class="onoff">
            <input type="checkbox" value="1" id="checkboxID" />
            <label for="checkboxID"></label>
          </p>
        </div>
        <div class="hotel-booking-wrap">
          <div class="hotel-booking-chek-in a-center">
            <div class="date-info">Заезд:</div>
            <div>
              <DatePicker
                placeholder="Выберите дату"
                class="hotel-date"
                v-model="hotelDateGo2"
                type="datetime"
              ></DatePicker>
            </div>
          </div>
          <div class="hotel-booking-chek-out">
            <div class="hotel-booking-chek-out-inner a-center">
              <div class="date-info">Выезд:</div>
              <div>
                <DatePicker
                  placeholder="Выберите дату"
                  class="hotel-date"
                  v-model="hotelDateGo2"
                  type="datetime"
                ></DatePicker>
              </div>
            </div>
            <div class="booking-link">
              <a class="hotel-booking-link" href="#!">Показать</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 p-t-15">
        <comp-hotel-booking-card v-for="item in 3" :key="item" />
      </div>
      <div class="col-md-12">
        <hr />
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="hotel-info-text">
            <div>
              <img src="@/assets/images/svg/book.svg" alt="" />
              <div>Примечания</div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div>
            <p class="p-t-15">
              Городской налог для иностранных граждан не входит в стоимость
              номера. Дополнительный завтрак оплачивается отдельно. Услуги
              прачечной оплачиваются отдельно.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import compHotelBookingCard from "../HotelBookingCard.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      hotelDateGo: null,
      hotelDateGo2: null,
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  components: {
    compHotelBookingCard,
    DatePicker,
  },
  directives: {
    swiper: directive,
  },
  methods: {
    onThumbnailChange(val) {
      this.swiperTop.slideTo(val.activeIndex);
    },
    onTopChange(val) {
      this.swiperThumbs.slideTo(val.activeIndex);
    },
  },
};
</script>

<style scoped>
.a-center {
  display: flex;
  align-items: baseline;
}
</style>