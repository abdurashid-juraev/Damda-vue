<template>
  <div class="hotels-singel-body">
    <div>
      <ul class="hotels-singel-url">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/Sanatory">Санатории</router-link></li>
        <li>Sanatory Item</li>
      </ul>
    </div>
    <div class="hotel-address-content">
      <div class="hotel-address-inner">
        <div class="hotel-name">Sanatory Item</div>
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
        <div>
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
        <div class="hotel-info-blocks">
          <span><img src="@/assets/images/svg/wifi.svg" alt="" /> </span
          ><span>Wi-Fi</span>
        </div>
        <div class="hotel-info-blocks">
          <span
            ><img
              class="meeting"
              src="@/assets/images/svg/meeting.svg"
              alt=""
            /> </span
          ><span>Комната/зал для проведения переговоров и конференц</span>
        </div>
        <div class="hotel-info-blocks">
          <span
            ><img src="@/assets/images/svg/washing-machine.svg" alt="" /> </span
          ><span>Прачечная</span>
        </div>
      </div>
      <div class="col-md-3 col-mod">
        <div class="hotel-info-blocks">
          <span><img src="@/assets/images/svg/parkov.svg" alt="" /> </span
          ><span>Парковка</span>
        </div>
        <div class="hotel-info-blocks">
          <span
            ><img
              class="booking"
              src="@/assets/images/svg/booking.svg"
              alt=""
            /> </span
          ><span>Круглосуточная стойка регистрации</span>
        </div>
        <div class="hotel-info-blocks">
          <span><img src="@/assets/images/svg/restaurant.svg" alt="" /> </span
          ><span>Ресторан</span>
        </div>
      </div>
      <div class="col-md-3 col-mod">
        <div class="hotel-info-blocks">
          <span><img src="@/assets/images/svg/breakfast.svg" alt="" /> </span
          ><span>Завтрак</span>
        </div>
        <div class="hotel-info-blocks">
          <span
            ><img
              class="booking"
              src="@/assets/images/svg/family.svg"
              alt=""
            /> </span
          ><span>Семейные номера, зал для проведения</span>
        </div>
        <div class="hotel-info-blocks">
          <span
            ><img src="@/assets/images/svg/ironing-board.svg" alt="" /> </span
          ><span>Глажка</span>
        </div>
      </div>
      <div class="col-md-3 col-mod">
        <div class="hotel-info-blocks">
          <span
            ><img
              class="booking"
              src="@/assets/images/svg/fitness.svg"
              alt=""
            /> </span
          ><span>Фитнес-центр</span>
        </div>
      </div>
    </div>
    <div class="row m-t-40 m-b-40">
      <div class="col-md-3"></div>
    </div>
    <div class="row m-b-30">
      <div class="col-md-3">
        <div class="hotel-info-text">
          <div>
            <img src="@/assets/images/svg/docs.svg" alt="" />
            <div>Условия</div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div>
          <p>Время заезда и выезда 12:00/14:00</p>
          <br />
          <p>Размещение детей до 6 лет на имеющихся кроватях, бесплатно.</p>
          <br />
          <p>Размещение домашних животных недопустимо.</p>
          <br />
          <p>Есть охраняемая парковка и бесплатный вай-фай.</p>
          <br />
          <p>В стоимость номера включен, завтрак, бассейн и тренажерный зал.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12"><hr class="m-b-30"></div>
    </div>
    <div class="row m-b-20">
      <div class="col-md-3">
        <div class="hotel-booking-info">
          <div>
            <div>
              <img src="@/assets/images/svg/booking.svg" alt="" />
            </div>
            <div class="bron-title"><b>Бронирование</b></div>
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
                v-model="hotelDateGo"
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
    </div>
    <div class="row">
      <div class="col-md-12 p-t-15">
        <comp-hotel-booking-card v-for="i in 3" :key="i" />
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
      hotelDateGo2: null,
      hotelDateGo: null,
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
    DatePicker,
    compHotelBookingCard,
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

<style>
</style>