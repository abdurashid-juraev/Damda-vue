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
          <form class="hotel-form" action="">
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
                  :options="hotelSelectRegion"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <label for="country">Район</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="Выберите район"
                  :options="hotelSelectRayon"
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
            <a class="hotel-link" href="#!">Зоны отдыха</a>
          </div>
          <div class="hotel-title m-b-25">
            Зоны отдыха Узбекистана - адреса, контакты, фото и бронирование
          </div>
        </div>
        <div class="row">
          <comp-hotel-card
            v-for="hotelCard in hotelCards"
            :key="hotelCard.id"
            :linkPage="hotelCard.linkPage"
            :hotelCardImg="hotelCard.cardImg"
            :hotelCardTitle="hotelCard.cardTitle"
            :hotelCardAddress="hotelCard.cardAddress"
            :hotelCardMap="hotelCard.cardMap"
            :hotelCardPrice="hotelCard.cardPrice"
          ></comp-hotel-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/dist/vueSimpleRangeSlider.css";
import compHotelCard from "../HotelCard.vue";
export default {
  data() {
    return {
      hotelCards: [
        {
          id: 1,
          linkPage: "HolidaySingel",
          cardImg: "http://picsum.photos/700",
          cardTitle: "Grand Kanyon 1",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 1",
          cardMap: "На карте 1",
          cardPrice: "55000",
        },
        {
          id: 2,
          cardImg: "http://picsum.photos/701",
          cardTitle: "Grand Kanyon 2",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 2",
          cardMap: "На карте 2",
          cardPrice: "55005",
        },
        {
          id: 3,
          cardImg: "http://picsum.photos/702",
          cardTitle: "Grand Kanyon 3",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 3",
          cardMap: "На карте 3",
          cardPrice: "55003",
        },
        {
          id: 4,
          cardImg: "http://picsum.photos/704",
          cardTitle: "Grand Kanyon 4",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 4",
          cardMap: "На карте 4",
          cardPrice: "55050",
        },
        {
          id: 5,
          cardImg: "http://picsum.photos/705",
          cardTitle: "Grand Kanyon 5",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 5",
          cardMap: "На карте 5",
          cardPrice: "55000",
        },
        {
          id: 6,
          cardImg: "http://picsum.photos/706",
          cardTitle: "Grand Kanyon 6",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 6",
          cardMap: "На карте 6",
          cardPrice: "55600",
        },
      ],
      show: false,
      number: 15,
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
      hotelRoomNumbers: ["1", "2", "3", "4", "5", "6", "7", "8"],
      childs: ["1", "2", "3", "4", "5", "6"],
      children: ["1", "2", "3", "4", "5", "6", "7"],
      hotelRooms: ["По популярности", "Сначала дешевые", "Сначала дорогие"],
    };
  },
  components: {
    DatePicker,
    VueSimpleRangeSlider,
    compHotelCard,
  },
};
</script>

<style>

</style>