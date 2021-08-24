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
            <div>
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
            <div class="select-wrap">
              <label for="country">Сортировка</label>
              <div class="custom-select">
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
          <div class="m-b-35"><a class="hotel-link" href="#!">Туры</a></div>
          <div class="hotel-title m-b-25">
            Экскурсии и туры по городам Узбекистан
          </div>
        </div>
        <div class="row">
          <div class="col-md-6" v-for="turCard in turCards" :key="turCard.id">
            <comp-tour-card
              :pageLink="turCard.linkPage"
              :cardImg="turCard.cardImg"
              :cardTitle="turCard.cardTitle"
              :cardAddress="turCard.cardAddress"
              :cardPrice="turCard.cardPrice"
              :id="turCard.id"
            ></comp-tour-card>
          </div>
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
import compTourCard from "../TourCard.vue";
export default {
  data() {
    return {
      show: false,
      number: 15,
      hotelDateGo: null,
      turCards: [
        {
          id: 1,
          linkPage: "TourSingel",
          pageLink: "TourSingel",
          cardImg: "http://picsum.photos/640",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район",
          cardPrice: "170000",
          modal: false,
        },
        {
          id: 2,
          cardImg: "http://picsum.photos/641",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270 2",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 2",
          cardPrice: "170000 2",
        },
        {
          id: 3,
          cardImg: "http://picsum.photos/643",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270 3",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 3",
          cardPrice: "170000 3",
        },
        {
          id: 4,
          cardImg: "http://picsum.photos/644",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270 4",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 4",
          cardPrice: "170000 4",
        },
        {
          id: 5,
          cardImg: "http://picsum.photos/645",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270 5",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 5",
          cardPrice: "170000 5",
        },
        {
          id: 6,
          cardImg: "http://picsum.photos/646",
          cardTitle: "Чарвак ор: кафе 'Болажон', ID 270 6",
          cardAddress: "Узбекистан, Ташкент, Яккасарайский район 6",
          cardPrice: "170000 6",
        },
      ],
      hotelRooms: ["По популярности", "Сначала дешевые", "Сначала дорогие"],
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
    };
  },
  components: {
    DatePicker,
    VueSimpleRangeSlider,
    compTourCard,
  },
};
</script>

<style>
</style>