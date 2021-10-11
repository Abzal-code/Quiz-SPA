<template>
  <div class="home" @click="nextSlide()">
    <div class="home__container">
      <div  class="main__home">
        <div class="main__container">
          <div class="vertical__block">
            <router-link class="about" to="/about">
              <v-typical
                  class="blink"
                  :steps="['Что такое', 1000, 'Что такое инвестиции', 500, 'Что такое инвестиции в тендеры', 1000]"
                  :loop="Infinity"
                  :wrapper="'p'"
              ></v-typical>
            </router-link>
          </div>
          <div class="main__block">
            <div class="main__header">
              <h2>
                Пройдите тест и узнайте свой <br> профиль в тендерных <br> инвестициях.
              </h2>
            </div>
            <div class="main__body">
              <h2>
                Это вам поможет:
              </h2>
              <p>
                <span class="arrow">&#8594;</span> Узнать свои сильные и слабые стороны как инвестора. <br> <br>

                <span class="arrow">&#8594;</span> Определиться с подходящей стратегией инвестирования в тендеры. <br> <br>

                <span class="arrow">&#8594;</span> Понять как увеличить свой доход.
              </p>
            </div>
            <div class="d-btn">
              <router-link class="simple-btn" to="/quiz">Пройти тест</router-link>
            </div>
          </div>
        </div>
        <div class="img__block">
          <swiper class="swiper"
                  :options="swiperOption"
                  :loop="true"
                  :autoplay='{
                    "delay": 2500,
                    "disableOnInteraction": false
            }'>
            <swiper-slide class="slide-1">
              <img src="@/assets/crow.png">
            </swiper-slide>
            <swiper-slide class="slide-2">
              <img src="@/assets/bear.png">
            </swiper-slide>
            <swiper-slide class="slide-3">
              <img src="@/assets/cheetah.png">
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <Button class="btnn"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "../components/UI/Button";
import { Swiper, SwiperSlide, } from "swiper/vue";
import "swiper/swiper-bundle.css";
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import VTypical from 'vue-typical';
import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.scss'

export default {
  name: 'Home',
  components: {
    VTypical,
    Button,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      idx: 0,
      animated: false,
      polling: null,

      swiperOption: {
        spaceBetween: 30,
        // effect: 'fade',
        loop: true,
        centeredSlides: true,
      },
    }
  },
  methods: {
    nextSlide() {
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slideNext(1000, false)
    },

  },
  beforeUnmount() {
    this.animated = true
    console.log(this.animated)
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@100;300;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Exo 2', sans-serif;
}
body {
  background-color: #E8E8E8;
  font-family: 'Exo 2', sans-serif;
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
        display: flex;
        .about {
          writing-mode: vertical-rl;
          text-align: center;
          background:  rgba(89, 85, 255, 0.99) !important;
          border: 1px solid #ffffff !important;
          border-left-color: rgba(89, 85, 255, 0.99) !important;
          -moz-border-radius-topright: 7px;
          -moz-border-radius-bottomright: 7px;
          border-top-right-radius: 9px 9px;
          border-bottom-right-radius: 9px 9px;
          text-decoration: none;
          width: 100%;
          color: #FFFFFF;

        }
        @media(min-width: 545px) {
          //height: 309px;
          margin-right: 35px;
        }
      }
      .main__block {
        display: flex;
        flex-direction: column;
        @media(max-width: 545px) {
          margin: 0 10px;
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
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              line-height: 24px;
              color: #ffffff;
            }
            @media(max-width: 360px) {
              font-size: 18px;
            }
          }
        }
        .main__body {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          @media(max-width: 545px) {
            margin-top: 30px;
          }
          h2 {
            @media(max-width: 545px) {
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              line-height: 24px;
              color: #ffffff;
            }
          }
          p {
            margin-top: 45px;
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 21px;
            color: #000000;
            @media(max-width: 545px) {
              margin-top: 45px;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 21px;
              color: #000000;
            }
            .arrow {
              @media(max-width: 545px) {
                color: #000000;
              }
            }
          }
        }
        .d-btn {
          display: flex;
          bottom: -1px;
          margin-top: 15px;
          width: 100%;
          .simple-btn {
            display: inline-block;
            padding: 1.625rem 2.625rem 1.625rem 2.625rem;
            border: 1px solid #5955FF;
            border-radius: 10px;
            background-color: #5955FF;
            color: #ffffff;
            font-weight: 600;
            font-size: 0.875rem;
            line-height: 0;
            text-decoration: none;
            transition: all 0.2s;
            text-align: center;
            width: 90%;
            @media(max-width: 545px) {
              display: none;
            }
          }
          .simple-btn:hover {
            border-color: #FFED69;
            color: #ffffff;
          }
        }
      }
    }
    .img__block {
      width: 39%;
      height: 700px;
      background: url("../assets/animatebg.png") no-repeat;
      background-size: 100% 100%;
      background-position: 50% 50%;
      @media(max-width: 545px) {
        display: none;
      }
      img {
        position: relative;
        top: 150px;
        width: 100%;
      }
    }
  }
  .btnn {
    @media(min-width: 545px) {
      display: none;
    }
  }

  .swiper {
    height: 400px;
    position: relative;
    top: 70px;
    .swiper-slide {
      background-position: center;
      background-size: cover;
      &.slide-1 {
        background-image:url('/src/assets/bear.png')
      }
      &.slide-2 {
        background-image:url('/src/assets/crow.png')
      }
    }
  }
}
</style>
