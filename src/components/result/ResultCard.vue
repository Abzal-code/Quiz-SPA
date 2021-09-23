<template>
  <div class="card-box">
    <div class="card">
      <div class="card__text">
        Приходите на вебинар, где Чингис Курмангалиев —
        основатель компании — ответит на все ваши вопросы.
      </div>
        <a class="card__btn" href="https://lab.tb7.kz/invest_quiz">Записаться на вебинар</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1140px;
  width: 100%;
  margin-top: 20px;
  animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
  @media(max-width: 545px) {
    flex-direction: column;
    width: auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    border: 1px solid;
    background: #F2F2F2;
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    @media (max-width: 545px) {
      width: auto;
    }
    .card__text {
      display: flex;
      font-family: 'Exo 2', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #000000;
    }
    .card__btn {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5955FF;
      border-radius: 10px;
      height: 50px;
      cursor: pointer;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      color: #FFFFFF;
      text-decoration: none;
      animation: pulse; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
}
</style>
