<template>
  <div class="app-wrapper">
    <Header></Header>
    <div class="main-container">
      <div class="app-main">
        <router-view/>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import {Header, Footer} from './components'

  console.log(Header);
  export default {
    name : 'Layout',
    components : {
      Header,
      Footer
    },
    computed : {

    },
    methods : {
      handleClickOutside() {
        //this.$store.dispatch('closeSideBar', { withoutAnimation: false })
      },
      key() {
        return this.$route.fullPath
      }
    }
  }
</script>

<style lang="less" scoped>
  .main-container{
    padding-top: 46px;
  }
  .tags-view-container{
    height: 6px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
  }
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .app-main {
    height: calc(100vh - 52px);
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #f0f2f5;
  }
</style>
