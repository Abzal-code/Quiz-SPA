<template>
  <div class="btn">
    <router-link class="simple-btn" to="/quiz">Пройти тест</router-link>
  </div>
</template>

<script>
export default {
  name: 'Button.vue',

}
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  bottom: -1px;
  margin-top: 15px;
  width: 100%;
  @media(max-width: 545px) {
    position: fixed;
  }
  .simple-btn {
    display: inline-block;
    padding: 1.625rem 2.625rem 1.625rem 2.625rem;
    border: 1px solid #5955FF;
    //border-radius: 10px;
    background-color: #5955FF;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0;
    text-decoration: none;
    transition: all 0.2s;
    height: 56px;
    text-align: center;
    @media(max-width: 1140px) {
      width: 100%;
    }
  }
  .simple-btn:hover {
    border-color: #FFED69;
    color: #ffffff;
  }
}

</style>
