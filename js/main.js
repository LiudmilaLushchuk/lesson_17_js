console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;

function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for (i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }
  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);
    
    indicatorsContainer.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsContainer);
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');

    const defItemClass = 'controls__item';
    const defIconClass = 'fas';

    switch(i) {
      case 0:
        controlsItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlsIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlsItem.setAttribute('class', `${defItemClass} controls__next`);
        controlsIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;  
      case 2:
        controlsItem.setAttribute('class', `${defItemClass} controls__pause`);
          controlsIcon.setAttribute('class', `${defIconClass} fa-play`);
          break;
    }

    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }

  container.appendChild(controlsContainer);
}

function createStyle() {
  styleContainer = document.createElement('style');
  let styleCode = `
  .slides {
    position: relative 
  }
  .controls {
    position: relative
  }
  .indicators {
    display: flex;
   }
   .indicators__item {
    display: block;
    width: 40px;
    height: 40px;
    background-color: green;
    margin: 10px;
    border-radius: 20px;
   }
   `
  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}

function indicatorsHandler(e) {
  const target = e.target;

  if (target.classList.contains('indicators__item')){
    target.style.backgroundColor = 'red';
  }

  if (prevIndicator !== null) {
    prevIndicator.removeAttribute('style');
  }
  prevIndicator = target;
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel();