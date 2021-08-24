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
          <h1 class="m-b-25">Экскурсии и туры по городам Узбекистан</h1>
          <h4 class="m-b-20">Ничего не найдено. Измените условие поиска</h4>
          <p class="p">
            На сайте Damda.uz даже самый взыскательный турист найдет для себя
            тур по душе: мы предлагаем вам экскурсии и туры по
            достопримечательностям Узбекистана. Стоимость тура указана на сайте,
            поэтому вы без труда сможете рассчитать бюджет найти для себя самый
            выгодный вариант поездки в Узбекистан. В цену любого тура на нашем
            сайте уже включена стоимость трансфера и услуги гида.
          </p>
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
export default {
  data() {
    return {
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
      hotelDateGo: null,
      hotelRooms: ["По популярности", "Сначала дешевые", "Сначала дорогие"],
      childs: ["1", "2", "3", "4", "5", "6"],
      children: ["1", "2", "3", "4", "5", "6", "7"],
      hotelRoomNumbers: ["1", "2", "3", "4", "5", "6"],
      show: false,
      number: 6,
    };
  },
  components: {
    VueSimpleRangeSlider,
    DatePicker,
  },
};
</script>

<style>
.p {
  max-width: 800px;
}
.hotel-search:focus {
  transition: all 0.3s;
  outline: none;
  box-shadow: 0 0 7px 0 #1e90ff;
}
</style>