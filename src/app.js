// TODO-1: "게임 시작" 버튼을 누르면 단어 게임이 시작됩니다.

// TODO-2: "data" 폴더의 "words.js" 파일을 import하여 단어들을 무작위로 표시합니다.

// TODO-3: 사용자로부터 입력을 받기 위해 입력 필드를 사용합니다.

// TODO-4: 사용자가 입력한 단어와 무작위로 표시된 단어가 일치하는지 확인합니다.

// TODO-5: 일치하는 경우 5점을 점수에 추가하고, 일치하지 않는 경우 3점을 감점합니다.

// TODO-6: 사용자가 "끝내기" 버튼을 클릭하면 점수를 초기화하고 "게임이 정상적으로 종료되었습니다"라는 메시지를 표시합니다.

import words from "../data/\bwords.js";

const gameStart = document.querySelector('.gameStart');
const gameOver = document.querySelector('.gameOver');
const randomWord = document.querySelector('.random-word');
const input = document.querySelector('.input');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const score = document.querySelector('.score');
let char = ''; // 함수 안에서 지역변수로 랜덤값을 뽑아냈기 때문에 그 값을 전역변수에 저장해준다.
let scoreNumber = 0; // 점수를 추가,제거 할 전역변수 추가

const changeRandomValue = () => {
  const randomValue = words[Math.floor(Math.random() * words.length)];
  // Math.random 메서드를 이용해 0~1 사이 랜덤 수 추출 후 배열 길이를 곱해준다.
  // 그 값에 Math.floor 함수를 이용하여 내림을 해준다. 그러면 성공적으로 랜덤으로 배열 값을 뽑아낼 수 있다.
  randomWord.innerText = '제시된 단어 : ' + randomValue;
  char = randomValue;
}

const changeScore = () => {
  score.innerText = '점수 : ' + scoreNumber;
  input.value = '';
}

const onGameStart = () => {
  form.style.display = 'flex';
  gameOver.style.display = 'flex';
  gameStart.style.display = 'none';
  input.focus();
  changeRandomValue();
  score.innerText = '점수 : ' + 0;
}
const onGameOver = () => {
  randomWord.innerText = '';
  gameOver.style.display = 'none';
  gameStart.style.display = 'flex';
  form.style.display = 'none';
  scoreNumber = 0;
  score.innerText = '';
  alert('게임이 정상적으로 종료되었습니다.');
}
const onSubmitClick = (event) => {
  event.preventDefault(); // 기본 동작 방지
  if (input.value == '') {
    alert('값을 입력해야 합니다!');
  }
  else if (input.value === char) {
    console.log('정답');
    scoreNumber += 5;
    changeScore();
  }
  else if (input.value !== char ) {
    console.log('오답');
    scoreNumber -= 3;
    changeScore();
  }
  changeRandomValue();
  randomWord.innerText = '제시된 단어 : ' + randomValue;
}

gameStart.addEventListener('click',onGameStart);
gameOver.addEventListener('click',onGameOver);
submit.addEventListener('click',onSubmitClick);