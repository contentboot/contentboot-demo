<template>
  <div class="container mx-auto">
    <!-- Projects grid -->
    <Projects :projects="projects"/>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data: () => ({projects: []}),
  asyncData: async ({$axios}) => {
    let data = await $axios.$get("/", {
      params: {
        query: `
          {
            queryProjects {
              results {
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
    return {projects: data.data.queryProjects.results}
  },
  computed: {
    // Todo
  },
};
</script>

<style lang="scss" scoped></style>
