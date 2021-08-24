import compIndex from "@/components/pages/Index.vue";
import compHotels from "@/components/pages/Hotels.vue";
import compRanch from "@/components/pages/Ranch.vue";
import compHoliday from "@/components/pages/Holiday.vue";
import compSanatory from "@/components/pages/Sanatory.vue";
import compTour from "@/components/pages/Tour.vue";
import compGid from "@/components/pages/Gid.vue";
import compHotelSingel from "@/components/pages/HotelSingel.vue";
import compRanchSingel from "@/components/pages/RanchSingel.vue";
import compHolidaySingel from "@/components/pages/HolidaySingel.vue";
import compSanatorySingel from "@/components/pages/SanatorySingel.vue";
import compTourSingel from "../components/pages/TourSingel.vue";
import compGidSingel from "../components/pages/GidSingel.vue";
export const routes = [
  {
    path: "/",
    component: compIndex,
  },
  {
    path: "/Hotels",
    component: compHotels,
  },
  {
    path: "/Ranch",
    component: compRanch,
  },
  {
    path: "/Holiday",
    component: compHoliday,
  },
  {
    path: "/Sanatory",
    component: compSanatory,
  },
  {
    path: "/Tour",
    component: compTour,
  },
  {
    path: "/Gid",
    component: compGid,
  },
  {
    path: "/Hotels/:id",
    component: compHotelSingel,
  },
  {
    path: "/Ranch/:id",
    component: compRanchSingel,
  },
  {
    path: "/HolidaySingel",
    component: compHolidaySingel,
  },
  {
    path: "/SanatorySingel",
    component: compSanatorySingel,
  },
  {
    path: "/TourSingel",
    component: compTourSingel,
  },
  {
    path: "/GidSingel",
    component: compGidSingel,
  },
];
