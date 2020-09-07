<template>
  <div class="header">
    <van-nav-bar
        :title="title"
        fixed
        :style="{background: bgColor}"
        @click-left="onClickLeft"
        @click-right="onClickRight">
      <van-icon v-show="hideLeft"
                class="header-icon"
                :name="leftIcon"
                :color="leftColor"
                slot="left"></van-icon>
      <van-icon v-show="hideRight"
                class="header-icon"
                :name="rightIcon"
                :color="rightColor"
                slot="right"></van-icon>
    </van-nav-bar>
  </div>
</template>

<script>
  import {setter} from '@/config';

  export default {
    name : "Header",
    data() {
      return {
        title : '首页',
        hideLeft : true,
        hideRight : true,
        leftIcon : '',
        rightIcon : '',
        leftColor : '#333',
        rightColor : '#333',
        bgColor : '#fff'
      }
    },
    created() {
      let {header : {left, right, background}} = setter;
      this.title = this.$route.meta.title;
      this.changeHeaderBtn(this.$route);
      this.$router.afterEach(to => {
        this.title = to.meta.title;
        this.changeHeaderBtn(to)
      });
      this.leftIcon = left.icon || 'arrow-left';
      this.rightIcon = right.icon || 'question-o';
      this.leftColor = left.color || '#333';
      this.rightColor = right.color || '#333';
      this.bgColor = background || '#fff'
    },
    methods : {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {

      },
      changeHeaderBtn(to) {
        let {header : {left, right}} = setter;
        let hideLeft = left.hide;
        let hideRight = right.hide;
        this.hideLeft =
          left.isShow ?
            hideLeft.length ? !hideLeft.find(t => t === to.path) : true
            : false;
        this.hideRight =
          right.isShow ?
            hideRight.length ? !hideRight.find(t => t === to.path) : true
            : false;
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    .header-icon{
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
    }
  }
</style>
<style lang="less">
  .header{
    .van-nav-bar__left{
      left: 0;
    }
    .van-nav-bar__right{
      right: 0;
    }
  }
</style>
