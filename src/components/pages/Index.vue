<template>
  <div>
    <div class="row">
      <comp-index-card
        v-for="item in organizations"
        :key="item.id"
        :linkPage="getLink(item)"
        :indexCardTitle="item.title"
        :indexCardImg="getImage(item.image)"
        :indexCardIcons="require('@/assets/images/svg/hotel.svg')"
        :indexCardText="item.description"
      >
      </comp-index-card>

      <div class="col-md-12">
        <h2 class="m-b-15 title"><a href="#!">Блог</a></h2>
      </div>
      <comp-index-blog-card
        v-for="blogCard in posts"
        :key="blogCard.id * 5 + 500"
        :blogCardImg="getImages(blogCard.images)"
        :blogCardImgLink="blogCard.cardImgLinkb"
        :blogCardTitle="blogCard.title"
        :blogCardtext="blogCard.description"
      ></comp-index-blog-card>
    </div>
  </div>
</template>

<script>
import compIndexCard from "@/components/IndexCard.vue";
import compIndexBlogCard from "@/components/IndexBlogCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      info: null,
      organizations: [],
      indexCards: [
        {
          id: 5,
          link: "Hotels",
          cardImg: "http://picsum.photos/550",
          cardTitle: "ГОСТИНИЦЫ - 141",
          cardText: "test text texts 1",
          cardIcon: require("@/assets/images/svg/hotel.svg"),
        },
        {
          id: 6,
          link: "Sanatory",
          cardImg: "http://picsum.photos/551",
          cardTitle: "САНАТОРИИ - 3",
          cardText: "test text texts 2",
          cardIcon: require("@/assets/images/svg/sanatorium.svg"),
        },
        {
          id: 7,
          link: "Holiday",
          cardImg: "http://picsum.photos/552",
          cardTitle: "ЗОНЫ ОТДЫХА - 5",
          cardText: "test text texts 3",
          cardIcon: require("@/assets/images/svg/holiday.svg"),
        },
        {
          id: 8,
          link: "Ranch",
          cardImg: "http://picsum.photos/553",
          cardTitle: "ДАЧИ/ДОМА - 162",
          cardText: "test text texts 4",
          cardIcon: require("@/assets/images/svg/ranch.svg"),
        },
        {
          id: 9,
          link: "Gid",
          cardImg: "http://picsum.photos/554",
          cardTitle: "ГИДЫ - 8",
          cardText: "test text texts 5",
          cardIcon: require("@/assets/images/svg/guide.svg"),
        },
        {
          id: 10,
          link: "Tour",
          cardImg: "http://picsum.photos/555",
          cardTitle: "ТУРЫ - 18",
          cardText: "test text texts 6:",
          cardIcon: require("@/assets/images/svg/tour.svg"),
        },
      ],
      blogCards: [
        {
          id: 1,
          cardImgb: "http://picsum.photos/500",
          cardImgLinkb: "Достопримечательности 1",
          cardTitleb: "Гостиницы в Узбекистане 1",
          cardTextb: "text test text 1",
        },
        {
          id: 2,
          cardImgb: "http://picsum.photos/501",
          cardImgLinkb: "Достопримечательности 2",
          cardTitleb: "Гостиницы в Узбекистане 2",
          cardTextb: "text test text 2",
        },
        {
          id: 3,
          cardImgb: "http://picsum.photos/502",
          cardImgLinkb: "Достопримечательности 3",
          cardTitleb: "Гостиницы в Узбекистане 3",
          cardTextb: "text test text 3",
        },
        {
          id: 4,
          cardImgb: "http://picsum.photos/503",
          cardImgLinkb: "Достопримечательности 4",
          cardTitleb: "Гостиницы в Узбекистане 4",
          cardTextb: "text test text 4",
        },
      ],
    };
  },
  components: {
    compIndexCard,
    compIndexBlogCard,
  },
  mounted() {
    axios.get("organization?include=image&per-page=70").then((response) => {
      console.log(response.data.data);
      this.organizations = response.data.data;
    });
    axios.get("post?include=image").then((response) => {
      console.log(response.data.data);
      this.posts = response.data.data;
    });
  },
  methods: {
    getImage(image) {
      if (image) {
        return image.thumbnails.medium;
      }
      return "http://picsum.photos/500";
    },
     getImages(images) {
      if (images) {
        return images[0].thumbnails.medium;
      }
      return "http://picsum.photos/500";
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
a:hover {
  color: inherit;
}
</style>