<template>
  <div class="jobs">
    <div class="banner">和优秀的人,做有挑战的事</div>
    <!--搜索-->

    <!--内容-->
    <div class="main clearfix">
      <!--侧边栏过滤选择-->
      <!--主体内容-->
      <div class="content">
        <h2 class="content-title">开启新的职位({{ results.count }})</h2>
        <ul class="content-list">
          <li
            class="content-item"
            v-for="item in results.job_post_list"
            :key="item.id"
          >
            <h3 class="title">{{ item.title }}</h3>

            <div class="subTitle">
              <span class="city">{{ item.city_info.name }}</span>&nbsp;|
              <span class="job_category">{{ item.job_category.name }}</span>&nbsp;|
              <span class="recruitment_channel">社招</span>
            </div>
            <p class="desc">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jobs",
  data() {
    const { keyword, job_category_id } = this.$route.params;
    console.log("this.$route", this.$route);
    console.log("keyword", keyword, "job_category_id", job_category_id);
    return {
      searchKeyword: keyword || "",
      currentPage: 1,
      job_category_id_list: job_category_id ? [job_category_id] : [],
      location_code_list: [],
      results: {},
      loading: false,
    };
  },
  computed: {
    queryFilter() {
      return {
        job_category_id_list: this.job_category_id_list,
        location_code_list: this.location_code_list,
        keyword: this.searchKeyword,
        offset: Math.max(0, this.currentPage - 1) * 10,
      };
    },
  },
  created() {
    this.fetchList();
  },
  watch: {
    queryFilter: (newVal, oldVal) => {
      console.log("newVal", newVal, "oldVal", oldVal);
      this.fetchList();
    },
  },
  methods: {
    fetchList() {
      this.loading = true;
      this.request
        .post("/jobs", this.queryFilter)
        .then((response) => {
          console.log("response", response);
          this.results = response;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped>
.banner {
  height: 400px;
  line-height: 400px;
  width: 100%;
  color: #fff;
  min-width: @main-width;
  background-image: url("//sf1-ttcdn-tos.pstatp.com/obj/ttfe/ATSX/mainland/joblistbanner2x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-size: @font-size-larger;
}
.main {
  width: @main-width;
  margin: 0 auto;
  margin-top: 100px;
  padding: 0 100px 0 200px;
  .content {
    min-height: 500px;
    padding-left: 20px;
    border-left: 1px solid @border-lighter-color;
    margin-left: 300px;
    &-title {
      margin-bottom: 30px;
      margin-left: 20px;
    }
    &-item {
      margin-bottom: 10px;
      padding: 10px 20px;
      cursor: pointer;
      .title {
        margin: 12px 0;
      }
      .subTitle {
        color: @regular-text-color;
      }
      .desc {
        white-space: pre-line;
        font-size: 14px;
        color: @secondary-text-color;
      }
      &:hover {
        border-radius: 3px;
        background: #fff;
        box-shadow: 0 10px 30px 0 rgba(136, 150, 171, 0.15);
        text-overflow: clip;
      }
    }
  }
}
</style>
