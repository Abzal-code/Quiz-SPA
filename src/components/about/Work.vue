<template>
  <div class="work">
    <div class="work__container">
      <div class="work__header">
        <h1>
          как это <br>
          работает?
        </h1>
      </div>
      <div class="work__body">
        <div class="block">
          <div class="block__img">
            <img src="@/assets/first.png" alt="">
          </div>
          <div class="block__text">
            Вы вкладываете <br>
            деньги в компанию <br>
            «Тендерная Биржа»
          </div>
        </div>
        <div class="block">
          <div class="block__img">
            <img src="@/assets/second.png" alt="">
          </div>
          <div class="block__text">
            Мы закупаем товар <br>
            для реализации <br>
            в тендерах.
          </div>
        </div>
        <div class="block">
          <div class="block__img">
            <img src="@/assets/third.png" alt="">
          </div>
          <div class="block__text">
            Из заработанных денег <br>
            компания «Тендерная Биржа» <br>
            отдаёт вам <br>
            вклад+проценты.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css"
export default {
  name: 'Work'
}
</script>

<style lang="scss" scoped>
.work {
  margin-top: 44px;
  .work__container {
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    position: relative;
    top: 70px;
    height: 400px;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 545px) {
      height: 600px;
    }
    .work__header {
      display: flex;
      margin: 0 11px;
      h1 {
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 34px;
        line-height: 41px;
        text-transform: uppercase;
        color: rgba(89, 85, 255, 0.99);
        @media(max-width: 545px) {
          color: #ffffff;
        }
      }
    }
    .work__body {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media(max-width: 545px) {
        flex-direction: column;
      }
      .block {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 30px;
        .block__img {
          background: rgba(89, 85, 255, 0.99);
          border: 2px solid rgba(89, 85, 255, 0.99);
          box-sizing: border-box;
          border-radius: 10px;
          width: 107px;
          height: 106px;
          text-align: center;
          display: flex;
          padding: 20px;
          img {
            @media(max-width: 545px) {
              animation: beat .25s infinite alternate;
            }
          }
          img:hover {
            animation: beat .25s infinite alternate;
          }
          @keyframes beat{
            to { transform: scale(1.1); }
          }
        }

        .block__text {
          padding-left: 25px;
        }
      }
    }
  }
}
</style>
