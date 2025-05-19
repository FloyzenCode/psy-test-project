const questions = [
  {
    question: "1. Как вы обычно принимаете решения в команде?",
    answers: [
      {
        text: "A. Всегда беру на себя ответственность за окончательное решение",
        score: 3,
      },
      {
        text: "B. Слушаю мнения других и принимаю решение на основе обсуждения",
        score: 2,
      },
      { text: "C. Предпочитаю, чтобы кто-то другой принял решение", score: 1 },
    ],
  },
  {
    question: "2. Как вы справляетесь с конфликтами в группе?",
    answers: [
      { text: "A. Стараюсь их предотвратить заранее", score: 3 },
      {
        text: "B. Садюсь и обсуждаю проблему с вовлечёнными сторонами",
        score: 2,
      },
      { text: "C. Избегаю конфликта и меня это не касается", score: 1 },
    ],
  },
  {
    question: "3. Как вы относитесь к критике?",
    answers: [
      { text: "A. Принимаю её как возможность для роста", score: 3 },
      { text: "B. Воспринимаю её нейтрально", score: 2 },
      { text: "C. Реагирую defensively", score: 1 },
    ],
  },
  {
    question: "4. Как вы мотивируете людей вокруг себя?",
    answers: [
      { text: "A. Устанавливаю вдохновляющие цели", score: 3 },
      { text: "B. Поддерживаю и помогаю достигать успеха", score: 2 },
      { text: "C. Просто жду, пока они сделают свою работу", score: 1 },
    ],
  },
  {
    question: "5. Как вы обычно планируете свою работу?",
    answers: [
      { text: "A. Оцениваю риски и создаю долгосрочные планы", score: 3 },
      { text: "B. Составляю план на краткосрочную перспективу", score: 2 },
      { text: "C. Делая всё по мере поступления", score: 1 },
    ],
  },
  {
    question: "6. Как вы реагируете на неудачи?",
    answers: [
      { text: "A. Анализирую их, чтобы сделать выводы", score: 3 },
      { text: "B. Оцепенел, но впоследствии начинают анализировать", score: 2 },
      { text: "C. Испытываю разочарование и пытаюсь забыть", score: 1 },
    ],
  },
  {
    question: "7. В какой мере вы готовы брать на себя риски?",
    answers: [
      { text: "A. Всегда, если вижу возможность успеха", score: 3 },
      { text: "B. Иногда, если риск оправдан", score: 2 },
      { text: "C. Избегаю рисков насколько это возможно", score: 1 },
    ],
  },
  {
    question: "8. Как вы относитесь к новым идеям?",
    answers: [
      { text: "A. Всегда рад новым идеям и возможностям", score: 3 },
      { text: "B. Оцениваю их, прежде чем принимать решение", score: 2 },
      { text: "C. Предпочитаю проверенные методы", score: 1 },
    ],
  },
  {
    question: "9. Как вы относитесь к работе в команде?",
    answers: [
      {
        text: "A. Обожаю работать в команде и поддерживать своих коллег",
        score: 3,
      },
      { text: "B. Нормально, если мне комфортно", score: 2 },
      { text: "C. Предпочитаю работать в одиночестве", score: 1 },
    ],
  },
  {
    question: "10. Как вы справляетесь со стрессом?",
    answers: [
      { text: "A. Использую техники релаксации и анализа", score: 3 },
      { text: "B. Стараюсь не поддаваться панике", score: 2 },
      { text: "C. Полностью теряюсь и не знаю, что делать", score: 1 },
    ],
  },
  {
    question: "11. Как вы выражаете признание своих коллег?",
    answers: [
      { text: "A. Регулярно хвалю и отмечаю их вклад", score: 3 },
      { text: "B. Признаю это, когда считаю нужным", score: 2 },
      { text: "C. Не проявляю особого интереса", score: 1 },
    ],
  },
  {
    question: "12. Как вы планируете долгосрочные цели?",
    answers: [
      { text: "A. Заранее и с учетом всех факторов", score: 3 },
      { text: "B. Исходя из текущих потребностей", score: 2 },
      { text: "C. Не задаюсь этим вопросом", score: 1 },
    ],
  },
  {
    question: "13. Как вы ведете переговоры?",
    answers: [
      { text: "A. Стремлюсь к компромиссу, учитывая обе стороны", score: 3 },
      { text: "B. Нахожу золотую середину", score: 2 },
      { text: "C. Настойчиво отстаиваю свою позицию", score: 1 },
    ],
  },
  {
    question: "14. Как вы справляетесь с маломотивированными членами команды?",
    answers: [
      { text: "A. Ищу способы вдохновить их", score: 3 },
      { text: "B. Пытаюсь понять причину их недостатка мотивации", score: 2 },
      { text: "C. Ожидаю, что их настроение изменится само собой", score: 1 },
    ],
  },
  {
    question: "15. Как вы организуете рабочий процесс?",
    answers: [
      { text: "A. Создаю четкий план и управляю им", score: 3 },
      { text: "B. Оставляю некоторое пространство для гибкости", score: 2 },
      { text: "C. Позволяю ему идти своим чередом", score: 1 },
    ],
  },
  {
    question: "16. Как вы поддерживаете связь с коллегами?",
    answers: [
      { text: "A. Регулярно веду встречи и общение", score: 3 },
      { text: "B. Обсуждаю вопросы по мере необходимости", score: 2 },
      { text: "C. Стараюсь избегать общения", score: 1 },
    ],
  },
  {
    question: "17. Что вы предпочитаете в сложных ситуациях?",
    answers: [
      { text: "A. Вести себя уверенно и проактивно", score: 3 },
      { text: "B. Набирать информацию перед действиями", score: 2 },
      { text: "C. Откладывать решения на неопределенное время", score: 1 },
    ],
  },
  {
    question: "18. Как вы относитесь к обучению и развитию?",
    answers: [
      {
        text: "A. Постоянно стремлюсь к обучению и применению новых знаний",
        score: 3,
      },
      { text: "B. Оцениваю необходимость обучения", score: 2 },
      { text: "C. Считаю, что у меня уже достаточно знаний", score: 1 },
    ],
  },
  {
    question: "19. Как вы справляетесь с давлением?",
    answers: [
      { text: "A. Остаюсь спокойным и сосредоточенным", score: 3 },
      { text: "B. Иногда испытываю трудности, но справляюсь", score: 2 },
      { text: "C. Легко теряю контроль", score: 1 },
    ],
  },
  {
    question:
      "20. Как вы относитесь к созданию презентаций или публичным выступлениям?",
    answers: [
      {
        text: "A. Обожаю выступать на сцене и представлять свои идеи",
        score: 3,
      },
      { text: "B. Чувствую себя некомфортно, но стараюсь", score: 2 },
      { text: "C. Избегаю, если это возможно", score: 1 },
    ],
  },
];

let currentQuestion = 0;
let totalScore = 0;

function showQuestion() {
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (currentQuestion >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestion];
  quizDiv.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="answers">
          ${q.answers
            .map(
              (a) => `<button onclick="answer(${a.score})">${a.text}</button>`
            )
            .join("")}
        </div>
      `;
}

function answer(score) {
  totalScore += score;
  currentQuestion++;
  showQuestion();
}

function showResult() {
  const quizDiv = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");
  quizDiv.innerHTML = "";

  let message = "";

  if (totalScore >= 50) {
    message = "🟢 Вы ярко выраженный лидер! У вас сильные лидерские качества.";
  } else if (totalScore >= 35) {
    message = "🟡 У вас есть лидерские задатки, которые можно развивать.";
  } else {
    message =
      "🔴 На данный момент лидерские качества выражены слабо, но их можно развить при желании.";
  }

  resultDiv.innerHTML = `<p>${message}</p><p>Ваш результат: ${totalScore} из 60 баллов</p>`;
}


document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const startScreen = document.getElementById("start-screen");
  const testArea = document.getElementById("test-area");

  startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    testArea.style.display = "block";
    showQuestion();
  });
});
