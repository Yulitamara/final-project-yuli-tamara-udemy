//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Variables
// First page
const slidePage = document.querySelector('.register__content--form__page');
const firstNextBtn = document.querySelector('.next-1');

// Second page
const firstPrevBtn = document.querySelector('.prev-1');
const secondNextBtn = document.querySelector('.next-2');

// Third page
const secondPrevBtn = document.querySelector('.prev-2');
const thirdNextBtn = document.querySelector('.next-3');

// Forth page
const thirdPrevBtn = document.querySelector('.prev-3');
const submitBtn = document.querySelector('.submit');

// Progress Step
const progressStep = document.querySelectorAll('.register__progress--step');

// Progress Number (The Span Element)
const progressNumber = document.querySelectorAll('.register__progress--step span');

// Progress Tick Mark
const progressTick = document.querySelectorAll('.fa-check');

let max = 4;
let current = 1;

// The Next Butten Event Listener Function
function tick(){
  progressStep[current - 1].classList.add('active');
  progressNumber[current - 1].classList.add('active');
  progressTick[current - 1].classList.add('active');
  current += 1;
}

// The Previous Butten Event Listener Function
function untick() {
  progressStep[current - 2].classList.remove('active');
  progressNumber[current - 2].classList.remove('active');
  progressTick[current - 2].classList.remove('active');
  current -= 1;
}
//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Next Btns Events

// First Next Button Event Listener
firstNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-33%';
  tick();
});

// Second Next Button Event Listener
secondNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%';
  tick();
});

// Third Next Button Event Listener
thirdNextBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-200%';
  tick();
});

// Submit Button Event Listener
submitBtn.addEventListener('click', () => {
  progressStep[current - 1].classList.add('active');
  progressNumber[current - 1].classList.add('active');
  progressTick[current - 1].classList.add('active');
  current += 1;
  setTimeout(() => {
    alert('Your Form Has Been Successfuly Submitted. Thank You!');
    location.reload();
  }, 1000);
});

//*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-* Previous Btns Events

// First Privious Button Event Listener
firstPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '0';
  untick();
});

// Second Privious Button Event Listener
secondPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-33%';
  untick();
});

// Third Privious Button Event Listener
thirdPrevBtn.addEventListener('click', () => {
  slidePage.style.marginLeft = '-100%';
  untick();
});




