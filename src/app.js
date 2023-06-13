import words from "../data/\bwords.js";

// TODO-1: "게임 시작" 버튼을 누르면 단어 게임이 시작됩니다.

// TODO-2: "data" 폴더의 "words.js" 파일을 import하여 단어들을 무작위로 표시합니다.

// TODO-3: 사용자로부터 입력을 받기 위해 입력 필드를 사용합니다.

// TODO-4: 사용자가 입력한 단어와 무작위로 표시된 단어가 일치하는지 확인합니다.

// TODO-5: 일치하는 경우 5점을 점수에 추가하고, 일치하지 않는 경우 3점을 감점합니다.

// TODO-6: 사용자가 "끝내기" 버튼을 클릭하면 점수를 초기화하고 "게임이 정상적으로 종료되었습니다"라는 메시지를 표시합니다.

const gameStart = document.querySelector('.gameStart');
const gameOver = document.querySelector('.gameOver');
const h2 = document.querySelector('.h2');
const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const score = document.querySelector('.score');
let char = '';
let scoreNumber = 0;

const onGameStart = () => {
  const randomValue = words[Math.floor(Math.random() * words.length)];
  form.style.display = 'flex';
  gameOver.style.display = 'flex';
  gameStart.style.display = 'none';
  h2.innerText = '제시된 단어 : ' + randomValue;
  char = randomValue;
  score.innerText = '점수 : ' + 0;
}
const onGameOver = () => {
  h2.innerText = '';
  gameOver.style.display = 'none';
  gameStart.style.display = 'flex';
  form.style.display = 'none';
  scoreNumber = 0;
  score.innerText = '';
  alert('게임이 정상적으로 종료되었습니다.');
}
const onSubmitClick = (event) => {
  event.preventDefault();
  if (input.value === char) {
    console.log('정답');
    input.value = '';
    scoreNumber += 5;
    score.innerText = '점수 : ' + scoreNumber;
  }
  else {
    console.log('오답');
    scoreNumber -= 3;
    score.innerText = '점수 : ' + scoreNumber;
    input.value = '';
  }
  const randomValue = words[Math.floor(Math.random() * words.length)];
  h2.innerText = '제시된 단어 : ' + randomValue;
  char = randomValue;
}

gameStart.addEventListener('click',onGameStart);
gameOver.addEventListener('click',onGameOver);
submit.addEventListener('click',onSubmitClick);