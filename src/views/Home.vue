<template>
  <div class="home">
    <div ref="banner" class="banner content-item-block">
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
        <div class="subTitle">JOIN BYTEDANCE</div>
      </h1>
    </div>

    <!--产品-->
    <div class="main">
      <div ref="product" class="product content-item-block">
        <h1 class="title">Inspire creativity, enrich life</h1>
        <div class="desc">
          截至目前，字节跳动产品已覆盖超过 150 个国家和地区，75 个语种
        </div>
        <ul class="product-list">
          <li class="product-item" v-for="(item, key) in products" :key="key">
            <img :src="item.logo" alt />
            <div>{{ item.title }}</div>
          </li>
        </ul>
      </div>

      <!--职位-->
      <div class="job-category content-item-block">
        <h2 class="job-category-title">探索你感兴趣的职位</h2>
        <ul class="job-category-list">
          <li
            v-for="item in jobCategories"
            :key="item.id"
            class="job-category-item"
          >
            <div class="image" :style="`background:url(${item.image})`">
              <span>{{ item.zh_name }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!--字节范-->
      <div class="byteStandard content-item-block">
        <h1 class="title">字节范</h1>
        <div class="desc">
          字节范是字节跳动企业文化的重要组成部分，是我们共同认可的行为准则
        </div>
        <div class="content">
          <div class="image">
            <span>111</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      products: [],
      jobCategories: [],
    };
  },
  created() {
    this.request.get("/products").then((response) => {
      this.products = response;
    });
    this.request.get("/job-categories").then((response) => {
      this.jobCategories = response;
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  .main {
    width: @main-weight;
    margin: auto;
  }
  .content-item-block {
    .title {
      font-size: @font-size-larger;
    }
  }
}
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
  &-title {
    color: #fff;
    text-align: center;
    font-size: 60px;
    .subTitle {
      &::after,
      &::before {
        content: "";
        position: absolute;
        background-image: linear-gradient(
          270deg,
          hsla(0, 0%, 100%, 0),
          #fff 47%,
          hsla(0, 0%, 100%, 0)
        );
        height: 2px;
        width: 89px;
        top: 50%;
        transform: translateY(-50%);
      }
      position: relative;
      margin-top: 10px;
      font-size: @font-size-base;
      letter-spacing: 20px;
    }
  }
}
//产品
.product {
  margin-top: 40px;
  text-align: center;
  padding: 40px;
  background: url(//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/global.png);
  background-repeat: no-repeat;
  background-position: 0 370px;
  .desc {
    margin: 40px 0;
  }
  &-list {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &-item {
    width: 90px;
    cursor: pointer;
    &:nth-child(1),
    &:nth-child(9) {
      margin-top: 116px;
    }
    &:nth-child(2),
    &:nth-child(8) {
      margin-top: 80px;
    }
    &:nth-child(3),
    &:nth-child(7) {
      margin-top: 55px;
    }
    &:nth-child(4),
    &:nth-child(6) {
      margin-top: 30px;
    }
    &:hover {
      color: @main-color;
      img {
        border-radius: 19px;

        transform: scale(1.2);
        transform-origin: bottom;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      }
    }
    img {
      width: 90px;
      height: 90px;
      border-radius: 19px;
      margin-bottom: 10px;
    }
  }
}

// 职位
.job-category {
  text-align: center;
  margin-top: 90px;
  &-list {
    margin-top: 70px;
  }
  &-item {
    float: left;
    margin-bottom: 16px;
    .image {
      width: 250px;
      height: 250px;
      line-height: 250px;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 50%;
      margin: 0 auto;

      background-position: center;
      overflow: hidden;
    }
  }
}

// 字节范
.byteStandard {
  padding: 40px 40px;
  overflow: hidden;
}
</style>
