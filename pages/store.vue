<template>
  <video
    id="video"
    controls
    preload="auto"
    autoplay
    playsinline
    webkit-playsinline
    x5-video-player-type="h5"
    x5-playsinline
  >
    <source type="video/mp4">
  </video>
</template>

<script>
export default {
  layout: "store",
  data: () => ({
    videoUrls: [],
    currentIndex: 0
  }),
  asyncData: async ({$axios}) => {
    let dataIndex = await $axios.$get("http://cb-json.contentboot.com/index.json")
    let data = await $axios.$get(dataIndex.data)
    return {videoUrls: data.video.videos.map(v => v.path)}
  },
  methods: {
    playVideo() {
      const videoEle = document.getElementById("video")
      videoEle.setAttribute("src", this.videoUrls[this.currentIndex])
      videoEle.load()
      videoEle.play()
    }
  },
  mounted() {
    if (this.videoUrls.length) {
      this.playVideo()
    }

    document.getElementById("video").addEventListener("ended", () => {
      if (this.currentIndex === this.videoUrls.length - 1) {
        this.currentIndex = 0
      }  else {
        this.currentIndex ++
      }
      this.playVideo()
    }, false)
  },
};
</script>

<style scoped>
video {
  height: 100%;
  margin: 0 auto;
}
</style>
