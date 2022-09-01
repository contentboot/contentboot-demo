<template>
  <video controls
         preload="auto"
         autoplay
         loop
         playsinline
         webkit-playsinline
         x5-video-player-type="h5"
         x5-playsinline
  >
    <source :src="videoUrl" type="video/mp4">
  </video>
</template>

<script>
import feather from "feather-icons";

export default {
  layout: "store",
  data: () => ({videoUrl: {}}),
  asyncData: async ({$axios}) => {
    let dataIndex = await $axios.$get("http://cb-json.contentboot.com/index.json")
    let data = await $axios.$get(dataIndex.data)
    console.log(data)
    return {videoUrl: data.video.video.path}
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<style scoped>
video {
  height: 100%;
  margin: 0 auto;
}
</style>
