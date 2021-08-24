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
              <label for="country">Сортировка</label>
              <div>
                <v-select
                  class="style-chooser"
                  placeholder="По популярности"
                  :options="hotelRooms"
                ></v-select>
              </div>
            </div>
            <div class="select-wrap">
              <div>
                <div @click="show = !show" class="m-b-5">
                  <span class="right-arrow">Знание языков</span>
                </div>
                <slide-up-down :active="show">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1"
                      >Русский</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck2"
                    />
                    <label class="form-check-label" for="defaultCheck2"
                      >Английский</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck3"
                    />
                    <label class="form-check-label" for="defaultCheck3"
                      >Узбекский</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck4"
                    />
                    <label class="form-check-label" for="defaultCheck4"
                      >Немецкийк</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck5"
                    />
                    <label class="form-check-label" for="defaultCheck5"
                      >Арабский</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck6"
                    />
                    <label class="form-check-label" for="defaultCheck6"
                      >Турецкий</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck7"
                    />
                    <label class="form-check-label" for="defaultCheck7"
                      >Итальянский
                    </label>
                  </div>
                </slide-up-down>
              </div>
            </div>
            <div class="select-wrap">
              <div>
                <div @click="show2 = !show2" class="m-b-5">
                  <span class="right-arrow"> Работаю по следующим городам</span>
                </div>
                <slide-up-down :active="show2">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck8"
                    />
                    <label class="form-check-label" for="defaultCheck8"
                      >Самарканд</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck9"
                    />
                    <label class="form-check-label" for="defaultCheck9"
                      >Бухара</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck10"
                    />
                    <label class="form-check-label" for="defaultCheck10"
                      >Ташкент</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck11"
                    />
                    <label class="form-check-label" for="defaultCheck11"
                      >Хива</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck12"
                    />
                    <label class="form-check-label" for="defaultCheck12"
                      >Шахрисабз</label
                    >
                  </div>
                </slide-up-down>
              </div>
            </div>
            <div class="select-wrap">
              <div>
                <div @click="show3 = !show3" class="m-b-5">
                  <span class="right-arrow"> Услуги</span>
                </div>
                <slide-up-down :active="show3">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="defaultCheck13"
                    />
                    <label class="form-check-label" for="defaultCheck13"
                      >транспорт</label
                    >
                  </div>
                </slide-up-down>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <div>
          <div class="m-b-35"><a class="hotel-link" href="#!">Гиды</a></div>
          <div class="hotel-title m-b-25"></div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="gidCard in gidCards" :key="gidCard.id">
            <comp-gid-card
              :linkPage="gidCard.link"
              :cardImg="gidCard.cardImg"
              :cardIcon="gidCard.cardIcon"
              :gidName="gidCard.gidName"
              :gidAddress="gidCard.gidAddress"
              :gidLangFlags="gidCard.langFlags"
            ></comp-gid-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import compGidCard from "@/components/GidCard.vue";
export default {
  data() {
    return {
      gidCards: [
        {
          id: 1,
          link: "GidSingel",
          cardImg: "http://picsum.photos/600",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
        {
          id: 2,
          cardImg: "http://picsum.photos/601",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
        {
          id: 3,
          cardImg: "http://picsum.photos/610",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
        {
          id: 4,
          cardImg: "http://picsum.photos/620",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
        {
          id: 5,
          cardImg: "http://picsum.photos/630",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
        {
          id: 6,
          cardImg: "http://picsum.photos/640",
          cardIcon: require("@/assets/images/svg/photo-camera.svg"),
          gidName: "Шерзод Умаров",
          gidAddress: "Самаркандская область, Самарканд ",
          gidLangFlags: "gidLangFlags",
        },
      ],
      show: false,
      show2: false,
      show3: false,
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
    compGidCard,
  },
};
</script>

<style>
.right-arrow {
  position: relative;
  font-weight: 700;
}
.right-arrow::after {
  content: "";
  position: absolute;
  top: 9px;
  right: -20px;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #808080;
}
</style>