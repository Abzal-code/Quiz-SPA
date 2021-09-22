<template>
  <div class="cause">
    <div class="cause__container">
      <div class="block__text">
        <div class="block__header">
          <h3>Почему мы?</h3>
        </div>
        <div class="block__body">
          <p>
            В компании «Тендерная Биржа» более четырёх лет занимаются тендерами. <br>
            Мы создали экосистему, в которой наши партнёры, тендерные специалисты и инвесторы могут безопасно приумножать капитал вместе.
            <br><br>
            Анализируя поведение партнёров, мы составили тест на стиль поведения.
          </p>
        </div>
        <router-link class="cause__btn" to="/quiz">Пройти тест</router-link>
      </div>
      <div class="block__img">
        <img src="@/assets/footer.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cause',
}

</script>

<style scoped lang="scss">
  .cause {
    margin-top: 44px;
    .cause__container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 1140px;
      width: 100%;
      margin: 0 auto;
      @media(max-width: 545px) {
        flex-direction: column-reverse;
        justify-content: space-around;
        padding: 0 15px;
        color: #000000;
        height: 600px;
      }
      .block__text {
        display: flex;
        flex-direction: column;
        width: 487px;
        @media(max-width: 545px) {
          width: auto;
        }
        .block__header {
          font-family: 'Exo 2', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 34px;
          line-height: 41px;
          text-transform: uppercase;
          color: rgba(89, 85, 255, 0.99);
        }
        .block__body {
          font-family: 'Exo 2', sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 21px;
          color: #000000;
          margin-top: 20px;
          @media(max-width: 545px) {
            font-size: 16px;
            line-height: 21px;
            margin-bottom: 75px;
          }
        }
        .cause__btn {
          display: inline-block;
          margin-top: 20px;
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
          height: 56px;
          text-align: center;
          @media(max-width: 1140px) {
            display: none;
            width: 100%;
          }
        }
        .simple-btn:hover {
          border-color: #FFED69;
          color: #ffffff;
        }
      }
      .block__img {
        width: 816.31px;
        height: 746.55px;
        background: url("../../assets/animatebg.png") no-repeat;
        background-size: 100% 100%;
        background-position: 50% 50%;
        @media(max-width: 545px) {
          width: 100%;
          padding: 0 30px;

        }
        img {
          position: relative;
          top: 200px;
          left: 200px;
          animation: mirrorflip 10s 0s linear infinite;
          @media(max-width: 545px) {
            top: 0;
            left: 0;
            width: 90%;
          }
          @keyframes mirrorflip {
            0% {
              transform: scale(1, 1);
              -webkit-transform: scale(1, 1);
              -moz-transform: scale(1, 1);
              -o-transform: scale(1, 1);
              -ms-transform: scale(1, 1);

            }
            50% {
              transform: scale(-1, 1);
              -webkit-transform: scale(-1, 1);
              -moz-transform: scale(-1, 1);
              -o-transform: scale(-1, 1);
              -ms-transform: scale(-1, 1);
            }
            100% {
              transform: scale(1, 1);
              -webkit-transform: scale(1, 1);
              -moz-transform: scale(1, 1);
              -o-transform: scale(1, 1);
              -ms-transform: scale(1, 1);
            }
          }
        }
      }

    }
  }
</style>
