<template>
  <div id="app" v-if="loaded">
    <section class="layout">
      <main class="layout-content">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </main>
    </section>
  </div>
</template>

<style lang="scss">
  body {
    color: #333;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    line-height: 1.5;
    background-color: #f0f2f5;
  }
  * {
    box-sizing: border-box;
  }
  #app {
    flex: auto;
    display: flex;
    flex-direction: row;
  }
  .layout {
    flex: auto;
    display: flex;
    min-height: 100vh;
    overflow-x: hidden;
    transition: all .2s;
    flex-direction: column;
  }
  .layout-content {
    margin: 24px;
  }
</style>
<script>

export default {
  name: 'App',
  data() {
    return {
      loaded: true,
    };
  }
};
</script>
