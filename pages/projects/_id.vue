<template>
  <div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
      <!-- Project heading and meta info -->
      <div>
        <p
          class="
            text-left text-3xl
            sm:text-4xl
            font-bold
            text-primary-dark
            dark:text-primary-light
            mt-7
            sm:mt-20
            mb-7
          "
        >
          {{ project.title }}
        </p>
        <div class="flex">
          <div class="flex items-center mr-10">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
            >{{ new Date(project.publishDate).toLocaleDateString("en-US") }}</span
            >
          </div>
          <div class="flex items-center">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="
                ml-2
                leading-none
                text-primary-dark
                dark:text-primary-light
              "
            >{{ project.tag }}</span
            >
          </div>
        </div>
      </div>

      <!-- Project gallery -->
      <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
          class="mb-10 sm:mb-0"
          v-for="projectImage in project.images"
          :key="projectImage.path"
        >
          <img
            :src="projectImage.path"
            class="rounded-xl shadow-lg sm:shadow-none"
          />
        </div>
      </div>

      <!-- Project info -->
      <div class="block sm:flex gap-0 sm:gap-10 mt-14">
        <!-- Single project left section details -->
        <div class="w-full sm:w-1/3 text-left">
          <!-- Single project client details -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
            >
              Client
            </p>
            <ul class="leading-loose">
              <span class="text-ternary-dark dark:text-ternary-light">
                {{ project.clientName }}
              </span>
            </ul>
          </div>

          <!-- Single project objectives -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Objective
            </p>
            <p class="text-primary-dark dark:text-ternary-light whitespace-pre-line">
              <span>{{ project.objective }}</span>
            </p>
          </div>

          <!-- Single project technologies -->
          <div class="mb-7">
            <p
              class="
                text-2xl
                font-semibold
                text-ternary-dark
                dark:text-ternary-light
                mb-2
              "
            >
              Tools & Technologies
            </p>
            <p class="text-primary-dark dark:text-ternary-light">
              {{ project.technologies.join(", ") }}
            </p>
          </div>
        </div>

        <!-- Single project right section details -->
        <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          <p
            class="
              text-primary-dark
              dark:text-primary-light
              text-xl
              font-bold
              mb-7
            "
          >
            Detail
          </p>
          <div class="project-detail mb-5 text-lg text-ternary-dark dark:text-ternary-light" v-html="project.detail"/>
        </div>
      </div>
    </div>

    <!-- Load not found components if no project found -->
    <div v-else class="container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => ({project: {}}),
  asyncData: async ({$axios, params, error}) => {
    let data = await $axios.$get("/", {
      params: {
        query: `
          {
            queryProjects(filter: {id: {eq: "${params.id}"}}) {
              totalCount
              results {
                id
                title
                publishDate
                tag
                images {
                  path
                }
                clientName
                objective
                technologies
                detail
              }
            }
          }
      `
      }
    })
    if (data.data.queryProjects.totalCount) {
      return {project: data.data.queryProjects.results[0]}
    }
    error({statusCode: 404, message: "This page could not be found"})
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style lang="scss">
.project-detail {
  b {
    font-weight: bold;
  }
}
</style>
