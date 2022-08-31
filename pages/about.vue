<template>
  <div>
    <div class="container mx-auto block sm:flex sm:gap-4 md:gap-8 mt-10 md:mt-20">
      <div class="w-full text-center">
        <p class="mb-4 text-ternary-dark dark:text-ternary-light text-lg whitespace-pre-line">
          <span>{{ aboutPage.introduction }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => ({aboutPage: {}}),
  asyncData: async ({$axios}) => {
    let data = await $axios.$get("/", {
      params: {
        query: `
          {
            aboutPage {
              introduction
            }
          }
      `
      }
    })
    return {aboutPage: data.data.aboutPage}
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped></style>
