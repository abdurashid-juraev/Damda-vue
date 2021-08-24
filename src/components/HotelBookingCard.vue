<template>
  <div>
    <div class="hotel-booking-card">
      <div class="hotel-card-img-wrap">
        <img :src="cardImg" alt="" />
      </div>
      <div class="hotel-booking-card-content">
        <ul class="hotel-card-titles">
          <li>Трёхместный номер</li>
          <li>Стандартная кровать</li>
          <li>Завтрак включён</li>
        </ul>
        <div class="hotel-booking-price">
          <div class="hotel-card-select">
            <div class="select-count">
              <label for="country">Дети</label>
              <div class="custom-select">
                <v-select
                  class="style-chooser"
                  placeholder="0"
                  :options="childs"
                ></v-select>
              </div>
            </div>

            <div class="select-count">
              <label for="country">Число гостей</label>
              <div class="custom-select">
                <v-select
                  class="style-chooser"
                  placeholder="0"
                  :options="childs"
                ></v-select>
              </div>
            </div>
            <div class="select-count">
              <label for="country">Количество</label>
              <div class="custom-select">
                <v-select
                  class="style-chooser"
                  placeholder="0"
                  :options="childs"
                ></v-select>
              </div>
            </div>
          </div>
          <ul class="hotel-price">
            <li>Цена</li>
            <li>450 000 сўм</li>
          </ul>
        </div>
        <div @click="show = !show" class="hotel-booking-hide">
          Описание номера
        </div>
      </div>
    </div>

    <slide-up-down :active="show">
      <div class="hotel-booking-slide-card hotel-booking-card">
        <div class="hotel-card-img-wrap">
          <img :src="cardImg" alt="" />
          <span class="hotel-img-position"
            ><span class="slide-position"
              ><img src="@/assets/images/svg/photo-camera.svg" alt="" />
              <span>15</span></span
            >
          </span>
        </div>
        <div class="booking-slide-content">
          <div class="booking-slide-title">Услуги и удобства</div>
          <ol class="hotel-room-info">
            <li>Wi-Fi</li>
            <li>Балкон</li>
            <li>Ванна</li>
            <li>Вешалка для одежды</li>
            <li>Кондиционер</li>
            <li>Рабочий стол</li>
            <li>Телевизор</li>
          </ol>
        </div>
      </div>
    </slide-up-down>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      childs: ["1", "2", "3", "4", "5", "6"],
    };
  },
  props: ["cardImg"],
};
</script>
<style scoped>
.select-count {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.custom-select {
  width: 150px;
  border: 0;
}
</style>
<style>
.hotel-booking-hide {
  cursor: pointer;
}
@media (max-width: 768px) {
  .hotel-booking-card {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border: 1px solid #d3d3d3;
  }

  .hotel-booking-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }
  .hotels-singel-body .hotel-booking-card .hotel-card-img-wrap {
    max-width: 100%;
    margin-bottom: 15px;
  }
  .hotel-card-titles {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .hotels-singel-body .hotel-booking-card .hotel-card-titles li {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
  .hotels-singel-body .hotel-booking-card .hotel-booking-price {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    font-size: 20px;
  }
  .hotels-singel-body .hotel-booking-card .hotel-card-select {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .hotel-booking-price .custom-select {
    width: 100%;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .hotels-singel-body .hotel-booking-card .hotel-price li:first-child {
    font-size: 22px;
  }
  .hotels-singel-body .hotel-booking-card .hotel-price li {
    font-size: 22px;
    font-weight: 600;
  }
  .hotels-singel-body .hotel-booking-hide {
    margin-left: 0;
  }
}
</style>