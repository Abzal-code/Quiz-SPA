<template>
  <div class="home">
    <div class="home__container">
      <div class="main__home">
        <div class="main__container">
          <div class="vertical__block">
            <router-link class="about" to="/">На главную</router-link>
          </div>
          <div class="main__block">
            <div class="main__header">
              <h2>
                Инвестиции в тендеры — <br> защищённый законом вид <br> вложений.
              </h2>
            </div>
            <div class="main__img">
              <img src="@/assets/header.png" alt="">
            </div>
          </div>
        </div>
        <div class="img__block">
          <img src="@/assets/header.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Art',
  components: {
  }
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Exo2;
}
body {
  background-color: #E8E8E8;
}

.home__container {
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  .main__home {
    display: flex;
    flex-direction: row;
    align-items: center;
    @media(max-width: 545px) {
      flex-direction: column;
      position: relative;
    }
    .main__container {
      display: flex;
      flex-direction: row;
      margin-top: 50px;
      .vertical__block {
        display: none;
        .about {
          writing-mode: vertical-rl;
          text-align: center;
          background:  rgba(89, 85, 255, 0.99);
          border: 1px solid #ffffff;
          border-left-color: rgba(89, 85, 255, 0.99);
          -moz-border-radius-topright: 7px;
          -moz-border-radius-bottomright: 7px;
          border-top-right-radius: 9px 9px;
          border-bottom-right-radius: 9px 9px;
          text-decoration: none;
          width: 100%;
          color: #FFFFFF;
        }
        @media(min-width: 545px) {
          display: flex;
          height: 309px;
          margin-right: 46px;
        }
      }
      .main__block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media(max-width: 545px) {
          //margin: 0 10px;
        }
        .main__header {
          display: flex;
          h2 {
            font-family: Exo2;
            font-style: normal;
            font-weight: bold;
            font-size: 34px;
            line-height: 41px;
            text-transform: uppercase;
            color: rgba(89, 85, 255, 0.99);
            @media(max-width: 545px) {
              font-family: Exo2;
              font-style: normal;
              font-weight: bold;
              font-size: 34px;
              line-height: 41px;
              text-transform: uppercase;
              color: #FFFFFF;
            }
          }
        }
        .main__img {
          display: none;
          @media(max-width: 545px) {
            display: flex;
            margin-top: 23px;
          }
          img {
            display: none;
            @media(max-width: 545px) {
              display: flex;
              width: 100%;
            }
          }
        }

      }
    }
    .img__block {
      height: 700px;
      background: url("../../assets/animatebg.png") no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      @media(max-width: 545px) {
        background: none;
      }
      img {
        position: relative;
        top: 200px;
        left: 100px;
        width: 75%;
      }
    }
  }
}
</style>
