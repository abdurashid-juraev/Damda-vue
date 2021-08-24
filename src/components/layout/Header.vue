<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <router-link class="navbar-brand" to="/">LOGO</router-link>
              <ul class="nav-menu-user2">
                <li id="btnLang2" class="nav-lang-btn">
                  Uz
                  <img
                    id="img2"
                    src="@/assets/images/svg/arrow-down.svg"
                    alt=""
                  />
                  <ul id="navLang2" class="nav-lang-dropdown">
                    <li><a href="#!">Eng</a></li>
                    <li><a href="#!">Rus</a></li>
                    <li><a href="#!">Uz</a></li>
                  </ul>
                </li>
                <li class="hidden-li"><a href="#!">ВОЙТИ</a></li>
              </ul>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Hotels">
                      <span> Гостиницы</span>
                      <span class="sr-only">(current)</span></router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Ranch">
                      <span>Дачи/дома</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Holiday">
                      <span>Зоны отдыха</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Sanatory">
                      <span>Санатории</span>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/Tour">
                      <span>Туры</span>
                    </router-link>
                  </li>
                  <li class="nav-item gid-btn">
                    <span
                      @click="linkOpen = !linkOpen"
                      class="nav-link"
                      href="#!"
                    >
                      <span>Ещё</span>
                      <ul :class="{ 'd-none': linkOpen }" class="header-gid">
                        <li>
                          <router-link to="/Gid">
                            <span>Gid</span>
                          </router-link>
                        </li>
                      </ul>
                    </span>
                  </li>
                </ul>
                <div class="navbar-text">
                  <ul class="nav-menu-user">
                    <li
                      id="btnLang"
                      @click="langOpen = !langOpen"
                      class="nav-lang-btn"
                    >
                      Uz
                      <img
                        id="img"
                        src="@/assets/images/svg/arrow-down.svg"
                        alt=""
                      />
                      <ul
                        class="nav-lang-dropdown"
                        :class="{ show2: langOpen }"
                      >
                        <li><a href="#!">Eng</a></li>
                        <li><a href="#!">Rus</a></li>
                        <li><a href="#!">Uz</a></li>
                      </ul>
                    </li>
                    <li><a href="#!">ВОЙТИ</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkOpen: true,
      langOpen: false,
    };
  },
};
</script>

<style>
.navbar-light .navbar-nav .nav-link {
  color: black !important;
}
</style>