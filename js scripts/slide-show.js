const offersLeftArrow = document.getElementById('offersLeftArrow');
const offersRightArrow = document.getElementById('offersRightArrow');

let slidePosition = 0;
const slides = document.getElementsByClassName('offersCarousel__item');
const totalSlides = slides.length;

offersRightArrow
  .addEventListener("click", function() {
    moveToNextSlide();
  });
offersLeftArrow
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('offersCarousel__item--visible');
    slide.classList.add('offersCarousel__item--hidden');
  }

  slides[slidePosition].classList.add('offersCarousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}



const newsLeftArrow = document.getElementById('newsLeftArrow');
const newsRightArrow = document.getElementById('newsRightArrow');

let news_slidePosition = 0;
const news_slides = document.getElementsByClassName('newsCarousel__item');
const newsTotalSlides = slides.length;

newsRightArrow
  .addEventListener("click", function() {
    moveToNextSlide1();
  });
newsLeftArrow
  .addEventListener("click", function() {
    moveToPrevSlide1();
  });

function updateSlidePosition1() {
  for (let slide of news_slides) {
    slide.classList.remove('newsCarousel__item--visible');
    slide.classList.add('newsCarousel__item--hidden');
  }

  news_slides[news_slidePosition].classList.add('newsCarousel__item--visible');
}

function moveToNextSlide1() {
  if (news_slidePosition === newsTotalSlides - 1) {
    news_slidePosition = 0;
  } else {
    news_slidePosition++;
  }

  updateSlidePosition1();
}

function moveToPrevSlide1() {
  if (news_slidePosition === 0) {
    news_slidePosition = newsTotalSlides - 1;
  } else {
    news_slidePosition--;
  }

  updateSlidePosition1();
}




const tutorialsLeftArrow = document.getElementById('tutorialsLeftArrow');
const tutorialsRightArrow = document.getElementById('tutorialsRightArrow');

let tutorials_slidePosition = 0;
const tutorials_slides = document.getElementsByClassName('tutorialsCarousel__item');
const tutorialsTotalSlides = slides.length;

tutorialsRightArrow
  .addEventListener("click", function() {
    moveToNextSlide2();
  });
tutorialsLeftArrow
  .addEventListener("click", function() {
    moveToPrevSlide2();
  });

function updateSlidePosition2() {
  for (let slide of tutorials_slides) {
    slide.classList.remove('tutorialsCarousel__item--visible');
    slide.classList.add('tutorialsCarousel__item--hidden');
  }

  tutorials_slides[tutorials_slidePosition].classList.add('tutorialsCarousel__item--visible');
}

function moveToNextSlide2() {
  if (tutorials_slidePosition === tutorialsTotalSlides - 1) {
    tutorials_slidePosition = 0;
  } else {
    tutorials_slidePosition++;
  }

  updateSlidePosition2();
}

function moveToPrevSlide2() {
  if (tutorials_slidePosition === 0) {
    tutorials_slidePosition = tutorialsTotalSlides - 1;
  } else {
    tutorials_slidePosition--;
  }

  updateSlidePosition2();
}
