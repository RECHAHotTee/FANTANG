<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe619;</span>
    山东中医药大学桃园
    <span class="iconfont position_notice">&#xe60b;</span>
  </div>
  <div class="search">
    <span class="iconfont">&#xe62d;</span>
    <span class="search__text">减脂轻食</span>
  </div>
  <div class="banner">
    <img class="banner__img" src="../../assets/img/banner.jpg" />
  </div>
  <div class="icons">
    <div class="icons__item" v-for="item in iconsList" :key="item.desc">
      <img class="icons__item__img" src="../../assets/img/米饭.png" />
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconsList = [
      { imgName: "简餐便当", desc: "简餐便当" },
      { imgName: "粥食面点", desc: "粥食面点" },
      { imgName: "米粉烫捞", desc: "米粉烫捞" },
      { imgName: "汉堡炸鸡", desc: "汉堡炸鸡" },
      { imgName: "奶茶果汁", desc: "奶茶果汁" },
      { imgName: "鲁菜", desc: "鲁菜" },
      { imgName: "龙虾烧烤", desc: "龙虾烧烤" },
      { imgName: "日韩料理", desc: "日韩料理" },
      { imgName: "香锅冒菜", desc: "香锅冒菜" },
      { imgName: "咖啡甜品", desc: "咖啡甜品" },
    ];
    return { iconsList };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position_notice {
    position: absolute;
    right: 0;
    top: 0.17rem;
    font-size: 0.2rem;
  }
  color: $content-fontcolor;
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background: $search-bgColor;
  color: $search-fontColor;
  border-radius: 0.16rem;
  .iconfont {
    display: inline-block;
    padding: 0 0.08rem 0 0.16rem;
    font-size: 0.16rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: 0.1rem;
  background: $content-bgColor;
}
</style>
