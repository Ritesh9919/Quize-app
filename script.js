let startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let suffledQuestion, currentQuestion
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})

function startGame(){
console.log('started');
startButton.classList.add('hide');
suffledQuestion = question.sort(() => Math.random() - .5 );
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
nextQuestion()
}

function nextQuestion(){
  resetState()
showQuestion(suffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.currect) {
      button.dataset.currect = answer.currect;

    };
    button.addEventListener('click', selectAnswer);
    answerButtonElement.appendChild(button);

  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while(answerButtonElement.firstChild) {
    answerButtonElement.removeChild
    (answerButtonElement.firstChild);
  }
}

function selectAnswer(e){
const selectedButton = e.target
const currect = selectedButton.dataset.currect
setStatusClass(document.body, currect)
Array.from(answerButtonElement.children).forEach(button => {
  setStatusClass(button, button.dataset.currect)
})
if(suffledQuestion.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide');
} else{
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
}
}

function setStatusClass(element, currect) {
  clearStatusClass(element)
  if(currect) {
    element.classList.add('currect')
  } else{
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('currect')
  element.classList.remove('wrong')
}

const question = [
  {
    question:'what is 2 + 2',
    answers:[
      {text:'4', currect:true},
      {text:'22', currect:false}
    ]
  },
  {
    question:'what is 3 * 2',
    answers:[
      {text:'6', currect:true},
      {text:'12', currect:false}
    ]
  },

  {
    question:'what is 20 * 20',
    answers:[
      {text:'400', currect:true},
      {text:'22', currect:false}
    ]
  },

  {
    question:'what is 2-4',
    answers:[
      {text:'-2', currect:true},
      {text:'2', currect:false}
    ]
  },

  {
    question:'what is 10 * 10 ',
    answers:[
      {text:'100', currect:true},
      {text:'1000', currect:false}
    ]
  }
];