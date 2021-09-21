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
          </div>
        </div>
        <div class="img__block">
          <div class="img">
            <img class="question wobble animated infinite" src="@/assets/question.png" alt="">
            <img class="q-header" src="@/assets/q-header.png" alt="">
          </div>
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
  font-family: 'Exo 2', sans-serif;
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
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 34px;
            line-height: 41px;
            text-transform: uppercase;
            color: rgba(89, 85, 255, 0.99);
            @media(max-width: 545px) {
              font-family: 'Exo 2', sans-serif;
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
      display: flex;
      flex-direction: row;
      width: 895.31px;
      height: 927.55px;
      //height: 700px;
      background: url("../../assets/animatebg.png") no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      @media(max-width: 545px) {
        width: 100%;
        height: auto;
        background: none;
        padding: 0 30px;
      }
      .img {
        display: flex;
        flex-direction: row;
        position: relative;
        top: 150px;
        left: 100px;
        width: 386px;
        height: 358.61px;
        @media(max-width: 545px) {
          display: flex;
          flex-direction: row;
          position: relative;
          left: 0;
          top: -100px;
          margin: 0 auto;
          background: none;
        }
        img {
          @media(max-width: 545px) {
            width: 100%;
          }
        }
        .question {
          width: 140.32px;
          height: 210.1px;
          @media(max-width: 545px) {
            width: 100%;
          }
        }
        .animated {
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
          @-webkit-keyframes wobble {
            0% {
              -webkit-transform: none;
              transform: none
            }
            15% {
              -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
              transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
            }
            30% {
              -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
              transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
            }
            45% {
              -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
              transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
            }
            60% {
              -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
              transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
            }
            75% {
              -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
              transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
            }
            100% {
              -webkit-transform: none;
              transform: none
            }
          }

          @keyframes wobble {
            0% {
              -webkit-transform: none;
              -ms-transform: none;
              transform: none
            }
            15% {
              -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
              -ms-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
              transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)
            }
            30% {
              -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
              -ms-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
              transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)
            }
            45% {
              -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
              -ms-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
              transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)
            }
            60% {
              -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
              -ms-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
              transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)
            }
            75% {
              -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
              -ms-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
              transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)
            }
            100% {
              -webkit-transform: none;
              -ms-transform: none;
              transform: none
            }
          }
        }
        .animated.infinite {
          -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
        }
        .animated.hinge {
          -webkit-animation-duration: 2s;
          animation-duration: 2s;
        }
        .wobble {
          -webkit-animation-name: wobble;
          animation-name: wobble
        }

        .q-header {
          position: relative;
          top: 240px;
          right: 100px;
          width: 300.28px;
          height: 230.6px;
          @media(max-width: 545px) {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
