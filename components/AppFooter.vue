<template>
  <div class="container mx-auto">
    <div
      class="
        pt-12
        sm:pt-30
        pb-12
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      "
    >
      <!-- Footer copyright -->
      <div class="flex justify-center items-center text-center">
        <div class="text-lg text-ternary-dark dark:text-ternary-light">
          &copy;{{ new Date().getFullYear() }}
          <a
            href="https://github.com/realstoman/nuxtjs-tailwindcss-portfolio"
            target="__blank"
            class="
              text-secondary-dark
              dark:text-secondary-light
              font-medium
              hover:underline
            "
            >contentboot.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import feather from "feather-icons";
export default {
  data: () => {
    return {
      // Todo
    };
  },
  computed: {
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
