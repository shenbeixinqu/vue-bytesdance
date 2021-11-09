<template>
  <div class="home">
    <div class="banner">
      <div class="video-wrapper">
        <video
          ref="video"
          class="video"
          preload="auto"
          muted
          loop
          autoplay
          poster="//sf3-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/video-poster_1576231362701.png"
          src="//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/gongquhunjian_1080.min.mp4"
        ></video>
      </div>
      <h1 class="banner-title">
        和优秀的人 做有挑战的事
        <div>JOIN BYTEDANCE</div>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.banner {
  height: 100vh;
  min-height: 400px;
  min-width: @main-weight;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(51, 112, 255, 0.2);
  position: relative;
  .video-wrapper {
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    .video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
