<template>
  <div class="bg-secondary-light dark:bg-primary-dark h-full flex flex-col">
    <!-- App header -->
    <AppHeader class="flex-none"/>

    <!-- Render contents with transition -->
    <div class="flex-auto">
      <transition name="fade" mode="out-in">
        <Nuxt/>
      </transition>
    </div>

    <!-- App footer -->
    <AppFooter class="flex-none"/>

    <!-- Go back to top when scrolled down -->
    <div
      class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      "
    >
      <BackToTop/>
    </div>
  </div>
</template>

<script>
</script>

<style>
.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
