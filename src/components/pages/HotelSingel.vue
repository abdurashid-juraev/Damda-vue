<template>
  <div class="hotels-singel-body">
    <div>
      <ul class="hotels-singel-url">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/Hotels">Гостиницы</router-link></li>
        <li>Hotel Item</li>
      </ul>
    </div>
    <div class="hotel-address-content">
      <div class="hotel-address-inner">
        <div class="hotel-name">
          {{ organization.title }}
          <!-- Hotel Item -->
        </div>
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
          <!-- <span>Ташкент, Мирзо-Улугбекский район,</span> -->
          {{ organization.address }}
        </div>
        <div class="hotel-name-address-inner">
          <span>
            <!-- 1-я ул. Шивли, 1 -->
          </span>
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
      <div class="col-md-3">
        <div class="hotel-info-text">
          <div>
            <img src="@/assets/images/svg/hotel2.svg" alt="" />
            <div>О гостинице</div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div>
          <p>
            Отель Оазис Асака, расположен в уютном и тихом районе близ центра
            города Ташкента. Персонал, работающий в отеле всегда рад своим
            гостям, и предоставит все возможные условия, наполняя ваш отдых
            гостеприимством восточного народа. Отель находится в 10 минутах езды
            от Международного Аэропорта и в 5 минутах от железнодорожного
            вокзала.
          </p>
          <p>
            При входе в отель, вы попадаете в оазис, прямо как путник заблудший
            в пустыне, верблюдов вы там не встретите но, вас будет ждать, алея с
            красиво рассаженными деревьями, скамеечками, удобно расположенными у
            входа в гостиницу. Комфортабельные номера, огромный бассейн со
            спортзалом и финской сауной, дополнят ваш отдых, делая ваше тело
            здоровым, а дух свободным и чистым.
          </p>
          <p>
            Есть множество достопримечательностей поблизости, женский монастырь
            с возвышенными на нем золотыми куполами, сияющими на солнце. Музей
            железнодорожной техники, находится буквально в 5 минутах езды от
            отеля, где возможно увидеть поезда из разных времен, а если проехать
            чуть дальше, вы попадете прямо в сердце столицы, на площадь Амира
            Тимура, вокруг которой и построен прекрасный город Ташкент. Стоит
            испробовать блюда из местной кухни, вкус которых, будет сопровождать
            вас, все проведенное время в солнечном городе и в Оазисе Ташкента.
          </p>
        </div>
      </div>
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
      <div class="col-md-12">
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 p-t-15">
        <comp-hotel-booking-card :cardImg="getImage(organization.image)" />
      </div>
      <div class="col-md-12">
        <hr />
      </div>
      <div class="col-md-12">
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
                {{ organization.description }}
                <!-- Городской налог для иностранных граждан не входит в стоимость
              номера. Дополнительный завтрак оплачивается отдельно. Услуги
              прачечной оплачиваются отдельно. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { directive } from "vue-awesome-swiper";
import compHotelBookingCard from "../HotelBookingCard.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  data() {
    return {
      organization: [],
      hotelDateGo2: null,
      hotelDateGo: null,
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, 
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, 
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
    getImage(image) {
      if (image) {
        return image.thumbnails.medium;
      }
      return "http://picsum.photos/500";
    },
  },
  mounted() {
    axios
      .get(`organization/${this.$route.params.id}?include=image`)
      .then((response) => {
        console.log(response.data.data);
        // console.log(this.$route.params.id);
        this.organization = response.data.data;
      });
  },
};
</script>
<style scoped>
.a-center {
  display: flex;
  align-items: baseline;
}
.select-count {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-select {
  width: 120px;
  border: 0;
}
@media (max-width: 768px) {
  .thumb {
    height: auto;
  }
  .hotels-singel-body .hotel-yesNo-checkbox {
    display: flex;
    justify-content: center;
    font-size: 18px;
    margin-bottom: 15px;
  }
  .hotels-singel-body .hotel-booking-info img {
    margin: 0 auto 10px auto;
    width: 60px;
    height: 60px;
  }
  .bron-title {
    font-size: 25px;
    margin-bottom: 15px;
  }
  .rezident-title {
    font-size: 22px;
  }

  .hotels-singel-body .hotel-booking-chek-out-inner,
  .hotel-booking-chek-in,
  .hotel-booking-chek-out,
  .hotel-booking-wrap {
    display: flex;
    align-items: center;
    margin-right: 0;
    font-size: 20px;
    margin-bottom: 15px;
  }
  .hotel-booking-wrap input {
    margin: 5px 0 10px 0;
  }
  .date-info {
    font-size: 24px;
  }
}
</style>
<style>
.thumb {
  height: 480px;
}
.swiper .swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper.gallery-top {
  height: 80%;
  width: 100%;
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .swiper.gallery-top {
    height: 30%;
  }
}
.swiper.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
}
.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>