import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  silentTranslationWarn: true,
  locale: "ru",
  fallbackLocale: "dev",
  messages: {
    dev: { hello_world: "Hello World" },
  },
});
