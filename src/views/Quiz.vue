<template>
  <div class="quiz">
    <div class="quiz__container" v-for="(question, index) in quiz.questions" :key="index">
      <!-- Hide all questions, show only the one with index === to current question index -->
      <div class="quiz__wrapper" v-show="index === questionIndex">
        <h3 class="block__question">{{ question.text }}</h3>
        <div class="block__option">
          <!-- for each response of the current question -->
          <div class="option__wrapper">
            <div class="option" v-for="(response, id) in question.responses" :key="id">
              <label>
                <input type="radio"
                       :value="response.value"
                       :name="index"
                       v-model="userResponses[index]"> {{response.text}}
              </label>
            </div>
          </div>
          <div class="question__number">
            <h2>{{questionIndex + 1}}</h2>
          </div>
        </div>
        <!-- The two navigation buttons -->
        <!-- Note: prev is hidden on first question -->
        <h3 v-show="this.error " class="error">Пожалуйста, выберите один из вариантов</h3>
        <div class="block__footer">
          <button class="next" v-if="questionIndex > 0" v-on:click="prev">&lArr; назад</button>
          <button class="next" v-on:click="next">дальше &rArr;</button>
        </div>

      </div>
    </div>


    <!-- Last page, quiz is finished, display result -->
    <div v-show="questionIndex === quiz.questions.length">
      <div class="mobile__result" v-if="mobile">
        <div v-show="this.result === 'ворон'" class="result__wrapper">
          <div class="result__container">
            <div class="result__img">
               <img src="@/assets/crow.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
              </div>
              <div class="result__body">
                Самый разумный вид поведения в инвестициях. Вы не против рискнуть, но все же стараетесь заранее собрать максимум информации и просчитать возможные последствия. «Охотитесь» за высокой прибылью, но не забываете о «запасах» на «зиму».
                <br><br>
                Инвестициями в тендеры от компании «Тендерная Биржа» подходят вам из за возможности заключать сделки разной длительности и разных сумм. Так вы сможете иметь финансовую подушку и получать быстрые дивиденды для повседневных нужд. Возврат инвестиций от 60 до 120 дней + до 10% прибыли.
              </div>
            </div>
          </div>
        </div>

        <div v-show="this.result === 'медведь'" class="result__wrapper">
          <div class="result__container">
            <div class="result__img">
               <img src="@/assets/bear.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
              </div>
              <div class="result__body">
                Вы избегаете риска. Предпочитаете точно знать, что именно может произойти. Заключаете договора на длительный период, делая «запасы» на «зиму». Всегда хотите быть уверены, что не совершаете ошибку. Ваша чрезмерная осторожность приводит к низкой прибыли.
                <br><br>
                Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». Тендерные сделки защищены государством Республики Казахстан. «Тендерная Биржа» обязана вернуть деньги даже в случае апокалипсиса — это прописано в договоре.Прибыль от вложений до 10% — реалистична, но выше, чем в традиционных способах инвестирования, вы сможете ощутить пользу от достаточно быстрого результата. Срок возврата в 60-120 дней — возможность протестировать сделку на небольшом бюджете, прежде чем заключать договор на несколько лет. Методом теста пользовалось большинство наших постоянных инвесторов.
              </div>
            </div>
          </div>
        </div>

        <div v-show="this.result === 'гепард'" class="result__wrapper">
          <div class="result__container">
            <div class="result__img">
               <img src="@/assets/cheetah.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
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

  </div>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="closeModal"></div>
  </transition>
  <transition name="slide" appear>
    <div class="modal" v-show="showModal">
      <span>
        <i class="material-icons" v-on:click.stop.prevent="closeModal">&#10008;</i>
      </span>
      <div class="block__result">

        <div v-show="this.result === 'ворон'" class="result__wrapper">
          <div class="result__container crow">
            <div class="result__img">
              <img src="@/assets/crow.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
              </div>
              <div class="result__body">
                Самый разумный вид поведения в инвестициях. Вы не против рискнуть, но все же стараетесь заранее собрать максимум информации и просчитать возможные последствия. «Охотитесь» за высокой прибылью, но не забываете о «запасах» на «зиму».
                <br><br>
                Инвестициями в тендеры от компании «Тендерная Биржа» подходят вам из за возможности заключать сделки разной длительности и разных сумм. Так вы сможете иметь финансовую подушку и получать быстрые дивиденды для повседневных нужд. Возврат инвестиций от 60 до 120 дней + до 10% прибыли.
              </div>
            </div>
          </div>
        </div>

        <div v-show="this.result === 'медведь'" class="result__wrapper">
          <div class="result__container bear">
            <div class="result__img">
              <img src="@/assets/bear.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
              </div>
              <div class="result__body">
                Вы избегаете риска. Предпочитаете точно знать, что именно может произойти. Заключаете договора на длительный период, делая «запасы» на «зиму». Всегда хотите быть уверены, что не совершаете ошибку. Ваша чрезмерная осторожность приводит к низкой прибыли.
                <br><br>
                Попробуйте поработать с инвестициями в тендеры от компании «Тендерная Биржа». Тендерные сделки защищены государством Республики Казахстан. «Тендерная Биржа» обязана вернуть деньги даже в случае апокалипсиса — это прописано в договоре.Прибыль от вложений до 10% — реалистична, но выше, чем в традиционных способах инвестирования, вы сможете ощутить пользу от достаточно быстрого результата. Срок возврата в 60-120 дней — возможность протестировать сделку на небольшом бюджете, прежде чем заключать договор на несколько лет.
              </div>
            </div>
          </div>
        </div>

        <div v-show="this.result === 'гепард'" class="result__wrapper">
          <div class="result__container cheetah">
            <div class="result__img">
              <img src="@/assets/cheetah.png" alt="">
            </div>
            <div class="result__text">
              <div class="result__header">
                <h3>Инвестор {{ score() }}.</h3>
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
</template>

<script>

import ResultCard from "../components/result/ResultCard";
export default {
  name: 'Questions',
  components: {ResultCard},
  data() {
    return {
      quiz: {
        questions: [{
          text: "Ваш друг скинул вам фото дивана, который идеально подходит под ваш интерьер. Его впервые завезли в ваш город. Вы:",
          responses: [{
            text: 'Купите в режиме онлайн, чтобы первым выставить фото на нем в одноклассниках',
            value: 'гепард'
          },
            {
              text: 'Попросите консультацию дизайнера, чтобы убедиться, что он точно  улучшит ваш интерьер',
              value: 'ворон'
            },
            {
              text: 'Предпочтёте оставить свой диван, так как он вам прослужил десять лет и ни разу не подвёл',
              value: 'медведь'
            }
          ]
        },
          {
            text: "Вы на передаче «Поле Чудес», Леонид Якубович поставил вас перед выбором: приз или деньги. Что вы выберете?",
            responses: [{
              text: 'Попросите звонок маме и посоветуетесь с ней',
              value: 'медведь'
            },
              {
                text: 'Конечно приз: такие эмоции не стоит упускать!',
                value: 'гепард'
              },
              {
                text: 'Выберете деньги и пополните депозит в банке',
                value: 'ворон'
              }
            ]
          },
          {
            text: "На горнолыжном курорте Чимбулак открыли новую лыжную трассу «Экстра». Вы поехали туда с друзьями, и:",
            responses: [{
              text: 'Посмотрите на то, как ваши друзья с ней справятся, и только потом повторите их опыт',
              value: 'ворон'
            },
              {
                text: 'Спуститесь первым, ведь ваше имя после этого вывесят на доске «Любители адреналина»',
                value: 'гепард'
              },
              {
                text: 'Договоритесь встретиться с друзьями в гостинице на обеде, а сами пойдёте спускаться с привычной трассы',
                value: 'медведь'
              }
            ]
          },
          {
            text: "Стилист сделал вам причёску, и  ещё месяц принимаете комплименты от прохожих. Вы решились пойти к нему снова. Он предложил экстравагантный вариант- каре на бок с оранжевыми прядями. Вы:",
            responses: [{
              text: 'Попросите фотографии людей с подобной прической, с похожим вас типажом, потом примете решение',
              value: 'ворон'
            },
              {
                text: 'Откажетесь и попросите сделать «как обычно»',
                value: 'медведь'
              },
              {
                text: 'Согласитесь, ведь вы так любите эксперименты',
                value: 'гепард'
              }
            ]
          },
          {
            text: "На горнолыжном курорте Чимбулак открыли новую лыжную трассу «Экстра». Вы поехали туда с друзьями, и:",
            responses: [{
              text: 'Посмотрите на то, как ваши друзья с ней справятся, и только потом повторите их опыт',
              value: 'медведь'
            },
              {
                text: 'Спуститесь первым, ведь ваше имя после этого вывесят на доске «Любители адреналина»',
                value: 'гепард'
              },
              {
                text: 'Договоритесь встретиться с друзьями в гостинице на обеде, а сами пойдёте спускаться с привычной трассы',
                value: 'ворон'
              }
            ]
          },
        ]
      },
      questionIndex: 0,
      userResponses: Array(),
      showModal: false,
      mobile: false,
      result: '',
      testResult: '',
      selectValue: '',
      error: false,
    }
  },
  methods: {
    // Go to next question
    next: function() {
      if (this.userResponses.length > 0) {
        this.questionIndex++
        this.error = false
      } else {
        this.error = true
      }

      if (this.questionIndex === 5 && screen.width > 545) {
        this.showModal = true
        this.questionIndex--
      }

      if (screen.width < 545) {
        this.showModal = false
        this.mobile = true
      }

    },
    // Go to previous question
    prev: function() {
      this.questionIndex--;
    },
    score: function() {
      //find the highest occurence in responses
      let modeMap = {};
      let maxEl = this.userResponses[0],
          maxCount = 1;
      for (let i = 0; i < this.userResponses.length; i++) {
        let el = this.userResponses[i];
        if (modeMap[el] == null)
          modeMap[el] = 1;
        else
          modeMap[el]++;
        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        }
      }
      this.result = maxEl
      console.log(this.result, 'result');
      return maxEl;
    },

    closeModal() {
      this.showModal = false
      this.$router.push('/about')
    }
  },
}
</script>

<style lang="scss" scoped>
  .quiz {
    width: 1145px;
    margin: 0 auto;
    position: relative;
    top: 200px;
    @media(max-width: 545px) {
      top: 50px;
      width: 100%;
      padding: 10px;
    }
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
        width: 100%;
      }
      .quiz__wrapper {
        display: flex;
        flex-direction: column;
        @media(max-width: 545px) {
          align-items: center;
          width: 100%;
          padding: 20px;
        }
        .block__question {
          width: 739px;
          text-align: left;
          @media(max-width: 545px) {
            width: 100%;
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
          display: flex;
          flex-direction: row;
          margin-top: 50px;
          line-height: 24px;
          .option__wrapper {
            .option {
              list-style: none;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              margin: 20px 0;
              label {
                font-family: 'Exo 2', sans-serif;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 21px;
                color: #000000;
                @media(max-width: 545px) {
                  font-family: 'Exo 2', sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 16px;
                  line-height: 21px;
                  color: #000000;
                }
                input {

                }
              }
            }
          }
          .question__number {
            margin-left: 150px;
            @media(max-width: 545px) {
              display: none;
            }
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
        .block__footer {
          display: flex;
          margin-top: 50px;
          width: 95%;
          height: 30px;
          .next {
            background: rgba(89, 85, 255, 0.99);
            border-color: rgba(89, 85, 255, 0.99);
            width: 200px;
            height: 30px;
            border-radius: 7px;
            color: #ffffff;
            cursor: pointer;
            animation: pulse; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 2s;
            animation-iteration-count: infinite;
            margin-right: 30px;
            @media(max-width: 545px) {
              width: 150px;
            }
          }
        }
        .error {
          color: #5955FF;
          margin-top: 20px;
          animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
          animation-duration: 2s;
        }
      }
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
    width: 730px;
    height: 690px;
    padding: 25px;
    background-color: #FFF;
    border-radius: 16px;
    @media(max-width: 545px) {
      display: none;
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
      height: 100%;
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
            bottom: 110px;
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
          background-position: 100% 950%;;
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
        bottom: 120px;
        width: 100%;
        background: #F2F2F2;
        box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.1);
        border: none;
        border-radius: 10px;
        margin-top: 20px;
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
</style>
