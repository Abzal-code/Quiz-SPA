<template>
  <div class="app-container">
    <div class="header__home">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="">
      </div>
    </div>
    <router-view/>
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Exo 2', sans-serif;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.app-container {
  .header__home {
    height: 5rem;
    position: relative;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    .logo {
      position: absolute;
      bottom: 0;
      @media(max-width: 545px) {
        left: 34px;
      }
    }
  }
  @media(max-width: 545px) {
    background: url("./assets/background.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
