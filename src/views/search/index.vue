<template>
  <div class="search">
    <van-search v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="info-box van-hairline--top"></div>
  </div>
</template>

<script>

  export default {
    name: 'Search',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      onSearch(val) {

      }
    }
  }

</script>

<style lang="less" scoped>
  /* 用于本页面的样式编写 */
  .search {
    .info-box {
      display: flex;
      _top: 100px;
      width: 100%;
      height: 100px;
      background: #fff;
    }
  }
</style>

<style lang="less">
  /* 用于修改本页面中的element默认样式，为避免影响其他页面，应写在user内，且user唯一 */
  .search {

  }
</style>
