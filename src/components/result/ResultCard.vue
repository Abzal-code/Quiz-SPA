<template>
  <div class="card-box">
    <div class="card">
      <div class="card__text">
        Приходите на вебинар, где Чингис Курмангалиев —
        основатель компании — ответит на все ваши вопросы.
      </div>
<!--      <div v-on:click.stop.prevent="showModal = true">-->
        <a class="card__btn" href="https://lab.tb7.kz/invest2">Записаться на вебинар</a>
<!--      </div>-->
    </div>
    <div class="card">
      <div class="card__text">
        Для лучшего ознакомления с устройством инвестиций в тендеры, документацией и договорами, запишитесь на личную встречу с Чингисом Курмангалиевым.
      </div>
<!--      <div  v-on:click.stop.prevent="showModal = true">-->
        <a class="card__btn" href="https://lab.tb7.kz/invest2">Записаться на встречу</a>
<!--      </div>-->
    </div>
  </div>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
  </transition>
  <transition name="slide" appear>
    <div class="modal" v-if="showModal">
      <span>
        <i class="material-icons" v-on:click.stop.prevent="showModal = false">&#10008;</i>
      </span>
      <form id="SendCallback" action="#" method="post" data-open-new-window="0">
        <input type="hidden" name="formParams[setted_offer_id]" ><br>
        <input id="name" type="text" maxlength="60"  placeholder="Имя Фамилия" name="formParams[full_name]" value="" required><br>
        <input id="phone" type="text" maxlength="60"  placeholder="Телефон" name="formParams[phone]" value="" required><br>
        <button type="submit" id="button1914629" class="simple-btn" onclick="if(window['btnprs60a5108755951']){return false;}window['btnprs60a5108755951']=true;setTimeout(function(){window['btnprs60a5108755951']=false},6000);return true;">
          Оставить заявку
        </button><br>
        <input type="hidden" id="40280460a5108748ecf" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value="">
        <input type="hidden" id="40280460a5108748ecfref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value="">
        <input type="hidden" name="requestTime" value="1621430407">
        <input type="hidden" name="requestSimpleSign" value="b694e8e66091b669c1402b14d1ca5236">
        <input type="hidden" name="isHtmlWidget" value="1"/>
      </form>
      <span id="gccounterImgContainer"></span>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    // SubmitForm: function()  {
    // v-on:submit.prevent="SubmitForm()"

    //   document.forms['SendCallback'].action='https://formspree.io/f/xayadkeb';
    //   document.forms['SendCallback'].target='frame_result';
    //   document.forms['SendCallback'].submit();
    //   setTimeout(() => {
    //     document.forms['SendCallback'].action='https://lab.tb7.kz/pl/lite/block-public/process-html?id=1056294971';
    //     document.forms['SendCallback'].target='frame_result';
    //     document.forms['SendCallback'].submit();
    //   }, 2000);
    //   return true;
    // }
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
    }
  }
}
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
  height: 130vh;
}
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 500px;
  //height: 100%;
  max-height: 550px;
  background-color: #FFF;
  border-radius: 16px;
  padding: 25px;
  @media(max-width: 1140px) {
    width: 325px;
    max-width: 100%;
    height: auto;
  }
  .material-icons {
    display: inline-block;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 7px;
  }
  h1 {
    font-family: 'Exo 2', sans-serif;
    margin: 0 auto;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 15px;
    @media(max-width: 1140px) {
      font-family: 'Exo 2', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: #333333;
    }
  }
  p {
    font-family: 'Exo 2', sans-serif;
    color: #333333;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin: 15px 0;
    @media(max-width: 1140px) {
      font-family: 'Exo 2', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }
  form {
    input {
      margin-top: 22px;
      width: 100%;
      max-width: 450px;
      height: 2.6rem;
      background: #FFFFFF;
      border: 2px solid #CECECE;
      box-sizing: border-box;
      border-radius: 10px;
      text-align: center;
    }
    .simple-btn {
      display: inline-block;
      padding: 1.625rem 2.625rem 1.625rem 2.625rem;
      border: 1px solid #1265F5;
      border-radius: 10px;
      background-color: #1265F5;
      color: #ffffff;
      margin-top: 50px;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 0;
      text-decoration: none;
      transition: all 0.2s;
      height: 100%;
      text-align: center;
      width: 100%;
      @media(max-width: 1140px) {
        margin: 16px 0;
        width: 100%;
      }
    }
    .simple-btn:hover {
      background-color: #1265F5;
      border-color: #FFED69;
      color: #ffffff;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
