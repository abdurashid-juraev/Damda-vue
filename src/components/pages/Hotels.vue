<template>
  <div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="hotel-search-wrap">
          <form>
            <input class="hotel-search" type="text" placeholder="Поиск" />
            <button class="hotel-search-btn">
              <img src="@/assets/images/svg/search-icon.svg" alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div>
          <form @submit.prevent="" class="hotel-form" action="">
            <div class="select-wrap">
              <label for="country">Страна</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="Узбекистан"
                  :options="hotelSelectCountry"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <label for="country">Регион</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="Выберите регион"
                  :options="regions"
                  label="name"
                  v-model="selected"
                  @input="getDistrict"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <label for="country">Район</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="Выберите район"
                  :options="districts"
                  label="name"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <label for="party">Заезд</label>
              <DatePicker
                placeholder="Выберите дату"
                class="hotel-date"
                v-model="hotelDateGo"
                type="datetime"
              ></DatePicker>
            </div>
            <div class="select-wrap">
              <label for="party">Выезд</label>
              <DatePicker
                placeholder="Выберите дату"
                class="hotel-date"
                v-model="hotelDateGo"
                type="datetime"
              ></DatePicker>
            </div>
            <div class="hotel-select-family">
              <div>
                <label for="country">Взрослых</label>
                <div class="custom-select">
                  <v-select
                    class="style-chooser"
                    placeholder="0"
                    :options="childs"
                  ></v-select>
                </div>
              </div>
              <div>
                <label for="country">Дети</label>
                <div class="custom-select">
                  <v-select
                    class="style-chooser"
                    placeholder="0"
                    :options="children"
                  ></v-select>
                </div>
              </div>
            </div>
            <div class="select-wrap">
              <label for="country">Номеров</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="0"
                  :options="hotelRoomNumbers"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <label for="country">Сортировка</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="По популярности"
                  :options="hotelRooms"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap m-b-40">
              <p>
                <label for="amount">Диапозон цен</label>
                <VueSimpleRangeSlider
                  :min="0"
                  :max="1000"
                  v-model="number"
                ></VueSimpleRangeSlider>
              </p>
            </div>
            <div class="select-wrap">
              <div>
                <div
                  @click="show = !show"
                  class="m-b-10 hotel-comfort hotel-slide-btn"
                >
                  Удобства
                </div>
                <slide-up-down :active="show">
                  <div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck1"
                      />
                      <label class="form-check-label" for="defaultCheck1"
                        >Парковка</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck2"
                      />
                      <label class="form-check-label" for="defaultCheck2"
                        >Wi-Fi</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck3"
                      />
                      <label class="form-check-label" for="defaultCheck3"
                        >Круглосуточная стойка регистрации</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck4"
                      />
                      <label class="form-check-label" for="defaultCheck4"
                        >Завтрак</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck5"
                      />
                      <label class="form-check-label" for="defaultCheck5"
                        >Обед/ужин</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck6"
                      />
                      <label class="form-check-label" for="defaultCheck6"
                        >Семейные номера</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck7"
                      />
                      <label class="form-check-label" for="defaultCheck7"
                        >Глажка</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck8"
                      />
                      <label class="form-check-label" for="defaultCheck8"
                        >Фитнес-центр</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck9"
                      />
                      <label class="form-check-label" for="defaultCheck9"
                        >Прачечная</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck10"
                      />
                      <label class="form-check-label" for="defaultCheck10"
                        >Бассейн</label
                      >
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="defaultCheck11"
                      />
                      <label class="form-check-label" for="defaultCheck11"
                        >Ресторан</label
                      >
                    </div>
                  </div>
                </slide-up-down>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <div>
          <div class="m-b-35">
            <a class="hotel-link" href="#!"> Гостиницы</a>
            <div>
              <h3>{{ localised("hello") }}</h3>
              <h3>{{ localised("goodbye") }}</h3>
              <button @click="activLocale = 'en'">English</button>
              <button @click="activLocale = 'ru'">Russian</button>
            </div>
          </div>
          <div class="hotel-title m-b-25">
            Хостелы, гостиницы и отели Узбекистана - цены, фото, онлайн
            бронирование
          </div>
        </div>
        <div class="row">
          <comp-hotel-card
            v-for="hotelCard in banners"
            :key="hotelCard.id"
            :linkPage="getLink(hotelCard)"
            :hotelCardImg="getImage(hotelCard.image)"
            :hotelCardTitle="hotelCard.description"
            :hotelCardAddress="hotelCard.address"
            :hotelCardMap="hotelCard.title"
            :hotelCardPrice="hotelCard.contact"
          ></comp-hotel-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";
import compHotelCard from "../HotelCard.vue";

export default {
  data() {
    return {
      activLocale: "ru",
      messages: {
        en: {
          hello: "Hello",
          goodbye: "GoodBye",
        },
        ru: {
          hello: "Привет",
          goodbye: "Пока",
        },
      },
      districts: [],
      selected: "",
      regions: [],
      banners: [],
      hotelCards: [
        {
          id: 1,
          linkPage: "HotelSingel",
          cardImg: "http://picsum.photos/610",
          cardTitle: "Grand Kanton 1",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 1",
          cardMap: "На карте 1",
          cardPrice: "85000",
        },
        {
          id: 2,
          cardImg: "http://picsum.photos/611",
          cardTitle: "Grand Kanton 2",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 2",
          cardMap: "На карте 2",
          cardPrice: "85002",
        },
        {
          id: 3,
          cardImg: "http://picsum.photos/612",
          cardTitle: "Grand Kanton 3",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 3",
          cardMap: "На карте 3",
          cardPrice: "85003",
        },
        {
          id: 4,
          cardImg: "http://picsum.photos/613",
          cardTitle: "Grand Kanton 4",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 4",
          cardMap: "На карте 4",
          cardPrice: "85004",
        },
        {
          id: 5,
          cardImg: "http://picsum.photos/614",
          cardTitle: "Grand Kanton 5",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 5",
          cardMap: "На карте 5",
          cardPrice: "85005",
        },
        {
          id: 6,
          cardImg: "http://picsum.photos/615",
          cardTitle: "Grand Kanton 6",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 6",
          cardMap: "На карте 6",
          cardPrice: "85006",
        },
      ],
      show: false,
      number: 5,
      hotelDateGo: null,
      hotelSelectCountry: [
        "Узбекистан",
        "Кыргызстан",
        "Азербайджан",
        "Армения",
        "Грузия",
        "Таджикистан",
      ],
      hotelSelectRegion: [
        "Бухара",
        "Джизак",
        "Кашкадаря",
        "Ташкентская область",
        "Ташкент",
        "Фергана",
        "Андижан",
      ],
      hotelSelectRayon: [
        "Андижан",
        "Бухара",
        "Джизак",
        "Кашкадаря",
        "Ташкентская область",
        "Ташкент",
        "Фергана",
      ],
      childs: ["1", "2", "3", "4", "5", "6"],
      children: ["1", "2", "3", "4", "5", "6", "7"],
      hotelRoomNumbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
      hotelRooms: ["По популярности", "Сначала дешевые", "Сначала дорогие"],
    };
  },
  components: {
    compHotelCard,
    DatePicker,
    VueSimpleRangeSlider,
  },
  mounted() {
    //api.gastromahalla.uz/v1/organization?include=image&region_id=1
    axios.get("organization?include=image").then((response) => {
      // console.log(response.data.data);
      this.banners = response.data.data;
    });
    axios.get("country/region").then((response) => {
      // console.log(response.data.data);
      this.regions = response.data.data;
    });
  },
  methods: {
    localised(key) {
      return this.messages[this.activLocale][key];
    },
    getImage(image) {
      if (image) {
        return image.thumbnails.medium;
      }
      return "http://picsum.photos/480";
    },
    getDistrict(region) {
      //////
      axios.get(`country/district?region_id=${region.id}`).then((response) => {
        // console.log(response.data.data);
        this.districts = response.data.data;
      });
      console.log(region);
      //
      // organization?include=image&region_id=1
      axios
        .get(`organization?include=image&region_id=${region.id}`)
        .then((response) => {
          console.log(response.data.data);
          this.banners = response.data.data;
        });
    },
    getLink(item) {
      if (item.type == 65) {
        return `Hotels/${item.id}`;
      } else {
        return "RanchSingel";
      }
    },
  },
};
</script>
<style>
.hotel-slide-btn {
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
}
.form-check label {
  font-size: 16px;
  font-weight: 600;
}
.form-check label,
input {
  cursor: pointer;
}
.hotel-comfort:after {
  left: 85px;
  top: 10px;
  cursor: pointer;
}
</style>
<style>
.mx-datepicker {
  width: 100%;
  padding: 0 10px;
  padding: 0;
  cursor: pointer;
}
.mx-input {
  height: auto;
  padding: 10px 30px 10px 20px;
  font-size: 18px;
  cursor: pointer;
}
.mx-table-date td,
.mx-table-date th {
  font-size: 16px;
  font-weight: 600;
}
.mx-time-column .mx-time-item {
  cursor: pointer;
  font-size: 16px;
}

.mx-btn {
  font-size: 16px;
}
.style-chooser {
  background-color: #fff;
}
.style-chooser input,
.v-select svg {
  cursor: pointer;
}
.vs__dropdown-menu {
  min-width: 100px;
}
.style-chooser .vs__dropdown-toggle {
  padding: 10px 0;
}
.vs__selected,
.vs__search,
.vs__search:focus {
  margin: 0;
}
.vs__clear {
  display: none;
}
.v-select .style-chooser .vs--open .vs--single .vs__searchable {
  width: 50px !important;
}
.simple-range-slider {
  cursor: pointer;
}
.simple-range-slider .simple-range-slider-popover label {
  padding: 0 5px;
  font-size: 14px;
  margin: 0;
}
</style>
