<template>
  <div class="quiz">
    <div class="quiz__container" v-for="(element, index) of questions.slice(a,b)" :key="index" v-show="quiz">
      <div class="quiz__wrapper" >
        <div class="block__question">
          <p>{{element.question}}</p>
        </div>
        <div class="block__option">
          <div class="option" v-for="(item, index) in element.suggestions" :key="index">
            <label>
              <input type="radio" name="{{item.type}}" value="{{item.type}}" @click="selectResponse(item.type)" :checked="getchecked">
              {{item.suggestion}}
            </label>
          </div>
        </div>
        <div class="block__footer">
          <button class="next" @click="nextQuestion()" :disabled="getcheckbtn">Дальше &#8594;</button>
        </div>
      </div>
      <div class="question__number">
        <h2>{{b}}</h2>
      </div>
    </div>
    <div class="block__result" v-if="result">

      <div v-if="testResult === 3" class="result__wrapper">
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
          <div class="result__share">
            Поделиться результатом &#8594;
          </div>
        </div>
      </div>

      <div v-if="testResult === 2" class="result__wrapper">
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
          <div class="result__share">
            Поделиться результатом &#8594;
          </div>
        </div>
      </div>

      <div v-if="testResult === 1" class="result__wrapper">
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
          <div class="result__share">
            Поделиться результатом &#8594;
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
      cheetah: [],
      crow: [],
      bear: [],
      checked: true,
      disabled: true,
      testResult: 0,
      selectValue: ''
    }
  },
  computed: {
    getchecked() {
      if (this.checked) {
        return  false
      } else {
        return  true
      }
    },
    getcheckbtn() {
      if (this.disabled && this.getchecked) {
        return  true
      } else {
        return  false
      }
    }
  },
  methods: {
    selectResponse(value) {
      return this.selectValue = value;
    },

    nextQuestion() {
      if (this.selectValue === 'cheetah') {
        this.cheetah.push(this.selectValue)
      } else if (this.selectValue === 'bear') {
        this.bear.push(this.selectValue)
      } else {
        this.crow.push(this.selectValue)
      }

      if (this.cheetah.length !== 0 && this.cheetah.length > this.bear.length || this.cheetah.length !== 0 && this.cheetah.length > this.crow.length){
        this.testResult = 1;
      } else if (this.bear.length !== 0 && this.bear.length > this.cheetah.length || this.bear.length !== 0 && this.bear.length > this.crow.length){
        this.testResult = 2;
      } else if (this.crow.length !== 0 && this.crow.length > this.bear.length || this.crow.length !== 0 && this.crow.length > this.cheetah.length){
        this.testResult = 3;
      }
      console.log(this.bear, this.cheetah, this.crow, this.testResult)

      let selectResponse = this.selectResponse()
      console.log(selectResponse);
      if (this.questions.length - 1 == this.a) {
        this.result = true
        this.quiz = false
      } else {
          this.a++
          this.b++
      }
    },

  },
  // computed: {
  //   getCheck() {
  //     if (this.checked == true) {
  //      return  this.checked = false
  //     } else {
  //       return  this.checked = true
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  .quiz {
    display: flex;
    margin-top: 50px;
    .quiz__container {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      @media(max-width: 545px) {
        width: auto;
      }
      .quiz__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        .block__question {
          width: 739px;
          text-align: center;
          p {
            font-family: Exo2;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }
        }
        .block__option {

        }
        .block__footer {

        }
      }
      .question__number {
        h2 {
          width: 193px;
          height: 126px;
          font-family: Exo2;
          font-style: normal;
          font-weight: bold;
          font-size: 200px;
          line-height: 90px;
          text-align: center;
          color: #ffffff;
        }
      }
    }
    .block__result {
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
            background: url("../assets/resultbg.png") ;
            background-size: cover;
            background-position: 50% 50%;
            img {
              width: 80%;
            }
          }
          .result__text {
            display: flex;
            flex-direction: column;
            z-index: 10;
            .result__header {
              font-family: Exo2;
              font-style: normal;
              font-weight: bold;
              font-size: 14px;
              line-height: 21px;
              text-transform: uppercase;
              color: #000000;
            }
            .result__body {
              font-family: Exo2;
              font-style: normal;
              font-size: 14px;
              line-height: 21px;
              color: #000000;
              margin-top: 20px;
            }
          }
          .result__share {

          }
        }

      }
    }
  }
</style>
