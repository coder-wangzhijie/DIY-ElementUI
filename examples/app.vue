<template>
  <div id="app">
    <main-header></main-header>
    <div class="main-content">
      <h1>element test page</h1>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    init(){
      console.log('element test')
    }
  },
  mounted(){
    this.init();
  }
}
</script>
<style>

@import url('./assets/css/reset.css');
@import url('./assets/css/common.css');
</style>