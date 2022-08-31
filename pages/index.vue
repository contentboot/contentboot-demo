<template>
  <div class="container mx-auto">
    <!-- App banner -->
    <section class="text-left mt-48 w-8/1">
      <!-- Banner left contents -->
      <h1
        class="
        mx-auto
        text-3xl
        md:text-4xl
        xl:text-5xl
        text-center text-ternary-dark
        dark:text-primary-light
      "
      >
        <span class="font-mono leading-relaxed"> Demo for </span>
        <p class="font-extrabold mt-5 text-4xl md:text-5xl xl:text-7xl">
          ContentBoot
        </p>
      </h1>
      <p
        class="
        mt-4
        text-2xl text-center
        font-semibold
        leading-none
        text-purple-700
        font-mono
      "
      >
        Out of The Box, headless CMS
      </p>
      <div class="flex justify-center items-center sm:block">
        <a
          :href="homePage.getStartedUrl"
          target="_blank"
          class="
          mx-auto
          flex
          justify-center
          items-center
          w-36
          sm:w-48
          mt-12
          mb-6
          sm:mb-0
          text-lg
          border border-indigo-200
          dark:border-ternary-dark
          py-2.5
          sm:py-3
          shadow-lg
          rounded-lg
          bg-purple-200
          focus:ring-1 focus:ring-indigo-900
          hover:bg-indigo-500
          text-gray-500
          hover:text-white
        "
          aria-label="Get Started"
        >
          <i
            data-feather="external-link"
            class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6"
          ></i>
          <span class="text-sm sm:text-lg">Get Started</span></a
        >
      </div>

      <!-- Banner right illustration -->
      <!-- <div class="w-full md:w-2/3 text-right float-right mt-4 sm:mt-0">
        <img
          src="https://i.ibb.co/pnQhHMV/IMG-2298-removebg-preview.png"
          alt="IMG-2298-removebg-preview"
          border="0"
        />
      </div> -->
    </section>

    <!-- Projects grid -->
    <FeaturedProjects :projects="homePage.featuredProjects"/>

    <!-- View more projects button -->
    <div class="mt-5 sm:mt-14 flex justify-center">
      <NuxtLink
        to="/projects"
        class="
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-md
          sm:text-
          font-normal
          sm:font-medium
        "
        aria-label="More Projects"
      >More Projects
      </NuxtLink
      >
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => ({homePage: {}}),
  asyncData: async ({$axios}) => {
    let data = await $axios.$get("/", {
      params: {
        query: `
          {
            homePage {
              getStartedUrl
              featuredProjects {
                id
                title
                images {
                  path
                }
                tag
              }
            }
          }
      `
      }
    })
    return {homePage: data.data.homePage}
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
