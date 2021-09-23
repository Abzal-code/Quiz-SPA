<template>
  <div class="quiz">
    <div class="quiz__container" v-for="(element, index) of questions.slice(a,b)" :key="index" v-show="quiz">
      <div class="quiz__wrapper" v-bind:class="{updateq}">
        <div class="block__question">
          <p>{{element.question}}</p>
        </div>
        <div class="block__option">
          <div class="option" v-for="(item, index) in element.suggestions" :key="index">
            <label>
              <input type="radio" name="{{item.type}}" value="{{item.type}}" @click="selectResponse(item.type)" v-bind:checked="this.checked">
              {{item.suggestion}}
            </label>
          </div>
        </div>
        <h3 v-if="error" class="error">Пожалуйста, выберите один из вариантов</h3>
        <div class="block__footer">
          <button class="next" @click="nextQuestion()">{{ this.b == 5 ? finish.toUpperCase() : next.toUpperCase()}} &#8594;</button>
        </div>
      </div>
      <div class="question__number">
        <h2>{{b}}</h2>
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
          <div class="block__result">
            <div v-if="testResult === 'crow'" class="result__wrapper">
              <div class="result__container crow">
                <div class="result__img">
                  <img src="@/assets/crow.png" alt="">
                </div>
                <div class="result__text">
                  <div class="result__header">
                    <h3>Инвестор Ворон.</h3>
                  </div>
                  <div class="result__body">
                    Самый разумный вид поведения в инвестициях. Вы не против рискнуть, но все же стараетесь заранее собрать максимум информации и просчитать возможные последствия. «Охотитесь» за высокой прибылью, но не забываете о «запасах» на «зиму».
                    <br><br>
                    Инвестициями в тендеры от компании «Тендерная Биржа» подходят вам из за возможности заключать сделки разной длительности и разных сумм. Так вы сможете иметь финансовую подушку и получать быстрые дивиденды для повседневных нужд. Возврат инвестиций от 60 до 120 дней + до 10% прибыли.
                  </div>
                </div>
              </div>
            </div>

            <div v-if="testResult === 'bear'" class="result__wrapper">
              <div class="result__container bear">
                <div class="result__img">
                  <img src="@/assets/bear.png" alt="">
                </div>
                <div class="result__text">
                  <div class="result__header">
                    <h3>Инвестор медведь.</h3>
                  </div>
                  <div class="result__body">
                    Вы избегаете риска. Предпочитаете точно знать, что именно может произойти. Заключаете договора на длительный период, делая «запасы» на «зиму». Всегда хотите быть уверены, что не совершаете ошибку. Ваша чрезмерная осторожность приводит к низкой прибыли.
                    <br><br>
                    Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». Тендерные сделки защищены государством Республики Казахстан. «Тендерная Биржа» обязана вернуть деньги даже в случае апокалипсиса — это прописано в договоре.Прибыль от вложений до 10% — реалистична, но выше, чем в традиционных способах инвестирования, вы сможете ощутить пользу от достаточно быстрого результата. Срок возврата в 60-120 дней — возможность протестировать сделку на небольшом бюджете, прежде чем заключать договор на несколько лет. Методом теста пользовалось большинство наших постоянных инвесторов.
                  </div>
                </div>
              </div>
            </div>

            <div v-if="testResult === 'cheetah'" class="result__wrapper">
              <div class="result__container cheetah">
                <div class="result__img">
                  <img src="@/assets/cheetah.png" alt="">
                </div>
                <div class="result__text">
                  <div class="result__header">
                    <h3>Инвестор гепард.</h3>
                  </div>
                  <div class="result__body">
                    Вы любите риск. Рисковать классно. И неважно, окажется ли конкретное решение верным. Вы не упускаете возможности заработать. Ваша гонка за большой прибылью может привести вас к мошенникам.
                    <br><br>
                    Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». 60 дней — небольшой срок ожидания. Прибыль до 10% — возможность оценить реалистичный доход от вложений и узнать преимущества стабильного результата.
                  </div>
                </div>
              </div>
            </div>

<!--            <div class="card-box">-->
              <div class="card">
                <div class="card__text">
                  Приходите на вебинар, где Чингис Курмангалиев —
                  основатель компании — ответит на все ваши вопросы.
                </div>
                <a class="card__btn" href="https://lab.tb7.kz/invest_quiz">Записаться на вебинар</a>
              </div>
<!--            </div>-->
          </div>
        </div>
      </transition>

    <div class="mobile__result" v-if="mobile">
      <div v-if="testResult === 'crow'" class="result__wrapper">
        <div class="result__container">
          <div class="result__img">
            <img src="@/assets/crow.png" alt="">
          </div>
          <div class="result__text">
            <div class="result__header">
              <h3>Инвестор Ворон.</h3>
            </div>
            <div class="result__body">
              Самый разумный вид поведения в инвестициях. Вы не против рискнуть, но все же стараетесь заранее собрать максимум информации и просчитать возможные последствия. «Охотитесь» за высокой прибылью, но не забываете о «запасах» на «зиму».
              <br><br>
              Инвестициями в тендеры от компании «Тендерная Биржа» подходят вам из за возможности заключать сделки разной длительности и разных сумм. Так вы сможете иметь финансовую подушку и получать быстрые дивиденды для повседневных нужд. Возврат инвестиций от 60 до 120 дней + до 10% прибыли.
            </div>
          </div>
        </div>
      </div>

      <div v-if="testResult === 'bear'" class="result__wrapper">
        <div class="result__container">
          <div class="result__img">
            <img src="@/assets/bear.png" alt="">
          </div>
          <div class="result__text">
            <div class="result__header">
              <h3>Инвестор медведь.</h3>
            </div>
            <div class="result__body">
              Вы избегаете риска. Предпочитаете точно знать, что именно может произойти. Заключаете договора на длительный период, делая «запасы» на «зиму». Всегда хотите быть уверены, что не совершаете ошибку. Ваша чрезмерная осторожность приводит к низкой прибыли.
              <br><br>
              Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». Тендерные сделки защищены государством Республики Казахстан. «Тендерная Биржа» обязана вернуть деньги даже в случае апокалипсиса — это прописано в договоре.Прибыль от вложений до 10% — реалистична, но выше, чем в традиционных способах инвестирования, вы сможете ощутить пользу от достаточно быстрого результата. Срок возврата в 60-120 дней — возможность протестировать сделку на небольшом бюджете, прежде чем заключать договор на несколько лет. Методом теста пользовалось большинство наших постоянных инвесторов.
            </div>
          </div>
        </div>
      </div>

      <div v-if="testResult === 'cheetah'" class="result__wrapper">
        <div class="result__container">
          <div class="result__img">
            <img src="@/assets/cheetah.png" alt="">
          </div>
          <div class="result__text">
            <div class="result__header">
              <h3>Инвестор гепард.</h3>
            </div>
            <div class="result__body">
              Вы любите риск. Рисковать классно. И неважно, окажется ли конкретное решение верным. Вы не упускаете возможности заработать. Ваша гонка за большой прибылью может привести вас к мошенникам.
              <br><br>
              Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». 60 дней — небольшой срок ожидания. Прибыль до 10% — возможность оценить реалистичный доход от вложений и узнать преимущества стабильного результата.
            </div>
          </div>
        </div>
      </div>
      <result-card/>
    </div>

  </div>
</template>

<script>

import ResultCard from "../components/result/ResultCard";
export default {
  name: 'Questions',
  components: {ResultCard},
  data() {
    return {
      questions: [
        {
          question: 'Ваш друг скинул вам фото дивана, который идеально подходит под ваш интерьер. Его впервые завезли в ваш город. Вы:',
          suggestions: [
            {suggestion: 'Купите в режиме онлайн, чтобы первым выставить фото на нем в одноклассниках', type: 'cheetah'},
            {suggestion: 'Попросите консультацию дизайнера, чтобы убедиться, что он точно  улучшит ваш интерьер', type: 'crow'},
            {suggestion: 'Предпочтёте оставить свой диван, так как он вам прослужил десять лет и ни разу не подвёл', type: 'bear'}
          ]
        },
        {
          question: 'Вы на передаче «Поле Чудес», Леонид Якубович поставил вас перед выбором: приз или деньги. Что вы выберете?',
          suggestions: [
            {suggestion: 'Попросите звонок маме и посоветуетесь с ней', type: 'bear'},
            {suggestion: 'Конечно приз: такие эмоции не стоит упускать!', type: 'cheetah'},
            {suggestion: 'Выберете деньги и пополните депозит в банке', type: 'crow'}
          ]
        },
        {
          question: 'На горнолыжном курорте Чимбулак открыли новую лыжную трассу «Экстра». Вы поехали туда с друзьями, и:',
          suggestions: [
            {suggestion: 'Посмотрите на то, как ваши друзья с ней справятся, и только потом повторите их опыт', type: 'crow'},
            {suggestion: 'Спуститесь первым, ведь ваше имя после этого вывесят на доске «Любители адреналина»', type: 'cheetah'},
            {suggestion: 'Договоритесь встретиться с друзьями в гостинице на обеде, а сами пойдёте спускаться с привычной трассы', type: 'bear'}
          ]
        },
        {
          question: 'Стилист сделал вам причёску, и  ещё месяц принимаете комплименты от прохожих. Вы решились пойти к нему снова. Он предложил экстравагантный вариант- каре на бок с оранжевыми прядями. Вы:',
          suggestions: [
            {suggestion: 'Попросите фотографии людей с подобной прической, с похожим вас типажом, потом примете решение', type: 'crow'},
            {suggestion: 'Откажетесь и попросите сделать «как обычно»', type: 'bear'},
            {suggestion: 'Согласитесь, ведь вы так любите эксперименты', type: 'cheetah'}
          ]
        },
        {
          question: 'На горнолыжном курорте Чимбулак открыли новую лыжную трассу «Экстра». Вы поехали туда с друзьями, и:',
          suggestions: [
            {suggestion: 'Посмотрите на то, как ваши друзья с ней справятся, и только потом повторите их опыт', type: 'bear'},
            {suggestion: 'Спуститесь первым, ведь ваше имя после этого вывесят на доске «Любители адреналина»', type: 'cheetah'},
            {suggestion: 'Договоритесь встретиться с друзьями в гостинице на обеде, а сами пойдёте спускаться с привычной трассы', type: 'crow'}
          ]
        }
      ],
      a: 0,
      b: 1,
      type: '',
      quiz: true,
      result: false,
      cheetah: 0,
      crow: 0,
      bear: 0,
      checked: false,
      testResult: '',
      selectValue: '',
      error: false,
      next: 'дальше',
      finish: 'результат',
      showModal: false,
      mobile: false,
      updateq: false
    }
  },
  computed: {
    // checkedInputs() {
    //   return this.checked = true
    // }
  },
  methods: {
    selectResponse(value) {
      console.log(value)
      return this.selectValue = value;
    },
    nextQuestion() {
      if (this.questions.length - 1 == this.a) {
        this.showModal = true
        if (screen.width < 545 && this.b > 4) {
          this.quiz = false
          this.mobile = true
        }
      } else {
        this.a++
        this.b++
        this.error = false
      }



      if (this.selectValue === 'cheetah') {
        this.cheetah++
      } else if (this.selectValue === 'bear') {
        this.bear++
      } else if(this.selectValue === 'crow') {
        this.crow++
      }

      if (this.cheetah > this.bear && this.cheetah > this.crow){
        this.testResult = 'cheetah';
      } else if (this.bear > this.cheetah && this.bear > this.crow){
        this.testResult = 'bear';
      } else if (this.crow > this.bear && this.crow > this.cheetah){
        this.testResult = 'crow';
      } else {
        this.a--
        this.b--
        this.error = true
      }
      // console.log(this.bear, this.cheetah, this.crow)



    },

  },
}
</script>

<style lang="scss" scoped>
  .quiz {
    display: flex;
    width: 1145px;
    height: 100vh;
    margin: 0 auto;
    @media(max-width: 545px) {
      width: auto;
      padding: 10px;
    }
    //.updateq {
    //  animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
    //  animation-duration: 2s;
    //}
    .quiz__container {
      display: flex;
      justify-content: space-between;
      //justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 2s;
      @media(max-width: 545px) {
        width: auto;
      }
      .quiz__wrapper {
        display: flex;
        flex-direction: column;
        @media(max-width: 545px) {
          align-items: center;
          width: auto;
          padding: 20px;
        }
        .block__question {
          width: 739px;
          text-align: left;
          @media(max-width: 545px) {
            width: auto;
          }
          p {
            font-family: 'Exo 2', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
            @media (max-width: 545px) {
              font-family: 'Exo 2', sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 20px;
              line-height: 24px;
              color: #ffffff;
            }
          }
        }
        .block__option {
          margin-top: 50px;
          line-height: 24px;
          .option {
            label {
              font-family: 'Exo 2', sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              color: #000000;
              @media(max-width: 545px) {
                font-family: 'Exo 2', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 21px;
                color: #000000;
              }
            }
          }
        }
        .block__footer {
          display: flex;
          margin-top: 50px;
          width: 40%;
          height: 30px;
          .next {
            background: rgba(89, 85, 255, 0.99);
            border-color: rgba(89, 85, 255, 0.99);
            width: 100%;
            height: 30px;
            border-radius: 7px;
            color: #ffffff;
            cursor: pointer;
            animation: pulse; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s;
            animation-iteration-count: infinite;
            //animate__infinite: infinite
          }
        }
        .error {
          color: #5955FF;
          margin-top: 20px;
          animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
          animation-duration: 2s;
        }
      }
      .question__number {
        h2 {
          width: 193px;
          height: 126px;
          font-family: 'Exo 2', sans-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 200px;
          line-height: 90px;
          text-align: center;
          color: #ffffff;
          @media(max-width: 545px) {
            display: none;
          }
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
      @media(max-width: 545px) {
        height: 100%;
        display: none;
      }
    }
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
      width: 100%;
      height: 91%;
      background-color: #FFF;
      border-radius: 16px;
      @media(max-width: 545px) {
        display: none;
      }
      @media(min-width: 545px) {
        padding: 25px;
        max-width: 742px;
        max-height: 879px;
      }
      .material-icons {
        display: inline-block;
        color: black;
        cursor: pointer;
        position: absolute;
        top: 5px;
        right: 7px;
      }
      .block__result {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        .result__wrapper {
          .result__container {
            .result__img {
              img {
                position: relative;
                left: 90px;
                width: 75%;
                @media(max-width: 545px) {
                  left: 0;
                  width: 100%;
                }
              }
            }
            .result__text {
              display: flex;
              flex-direction: column;
              position: relative;
              bottom: 90px;
              z-index: 10;
              @media(max-width: 545px) {
                padding: 20px;
              }
              .result__header {
                font-family: 'Exo 2', sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 21px;
                text-transform: uppercase;
                color: #000000;
                @media(max-width: 545px) {
                  color: #000000;
                }
              }
              .result__body {
                font-family: 'Exo 2', sans-serif;
                font-style: normal;
                font-size: 14px;
                line-height: 21px;
                color: #000000;
                margin-top: 20px;
              }
            }
          }
          .bear {
            display: flex;
            flex-direction: column;
            background: url("../assets/resultbg.png") no-repeat;
            background-size: auto auto;
            background-position: 100% -500%;;
            background-clip: content-box;
          }
          .crow {
            display: flex;
            flex-direction: column;
            background: url("../assets/resultbg.png") no-repeat;
            background-size: auto auto;
            background-position: 100% 100%;;
            background-clip: content-box;
          }
          .cheetah {
            display: flex;
            flex-direction: column;
            background: url("../assets/resultbg.png") no-repeat;
            background-size: auto auto;
            background-position: 100% 100%;;
            background-clip: content-box;
          }
        }


          .card {
            animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s;
            display: flex;
            flex-direction: column;
            position: relative;
            bottom: 100px;
            width: 100%;
            background: #F2F2F2;
            box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            margin-top: 30px;
            padding: 10px;
            z-index: 99;
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


    .mobile__result {
      display: flex;
      flex-direction: column;
      max-width: 1140px;
      width: 100%;
      margin: 0 auto;
      .result__wrapper {
        .result__container {
          display: flex;
          flex-direction: column;
          .result__img {
            animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s;
            @media(min-width: 545px) {
              background: url("../assets/resultbg.png") no-repeat;
              background-size: auto auto;
              background-position: 50% 50%;
              background-clip: content-box;
            }
            img {
              position: relative;
              left: 260px;
              width: 55%;
              @media(max-width: 545px) {
                left: 0;
                width: 100%;
              }
            }
          }
          .result__text {
            display: flex;
            flex-direction: column;
            z-index: 10;
            .result__header {
              font-family: 'Exo 2', sans-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              line-height: 21px;
              text-transform: uppercase;
              color: #000000;
              animation: zoomInUp; /* referring directly to the animation's @keyframe declaration */
              animation-duration: 2s;
              @media(max-width: 545px) {
                color: #ffffff;
              }
            }
            .result__body {
              font-family: 'Exo 2', sans-serif;
              font-style: normal;
              font-size: 14px;
              line-height: 21px;
              color: #000000;
              margin-top: 20px;
              animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
              animation-duration: 2s;
            }
          }
        }
      }
    }
  }
</style>
