function el(tag) {
  return document.createElement(tag)
}

const slideInfo = [
  {
    img: '/imgs/food.jpg',
    link: 'restaurants.html',
    content: 'Restaurants'
  },
  {
    img: '/imgs/beach.jpg',
    link: 'activities.html',
    content: 'Activities'
  },
  {
    img: '/imgs/plane.jpg',
    link: 'getting-here.html',
    content: 'Getting here'
  },
  {
    img: '/imgs/hotel.jpg',
    link: 'lodging.html',
    content: 'Lodging'
  },
  {
    img: '/imgs/mountain.jpg',
    link: 'sights.html',
    content: 'Sights'
  },  
  {
    img: '/imgs/car.jpg',
    link: 'transportation.html',
    content: 'Transportation'
  },
]




// Configure carousel div
const $carousel = document.getElementsByClassName('carousel')[0];
$carousel.innerHTML = `
  <div class="carousel-slides">
  </div>
  <button class="carousel-button prev">&lt;</button>
  <button class="carousel-button next">&gt;</button>
  <div class="carousel-indicators">
  </div>
`
// Add slides to carousel
const $carouselSlides = document.getElementsByClassName('carousel-slides')[0];
const $carouselIndicators = document.getElementsByClassName('carousel-indicators')[0];
for (let i = 0; i <= slideInfo.length -1; i++) {
  const $newSlide = el('div');
  $newSlide.classList.add('carousel-slide');
  const $contentDiv = el('div');
  $contentDiv.classList.add('carousel-info');
  $contentDiv.innerHTML = `
  <p>
    <a href='${slideInfo[i].link}'>
      ${slideInfo[i].content}
    </a>  
  </p>
  `
  $newSlide.appendChild($contentDiv);
  $newSlide.style.backgroundImage = `
  url(${slideInfo[i].img})`;
  $carouselSlides.appendChild($newSlide);
  const $indicatorNode = el('span');
  $indicatorNode.classList.add('carousel-indicator')
  $indicatorNode.setAttribute('data-slide', i);
  $carouselIndicators.appendChild($indicatorNode)
}
  




document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const nextButton = document.querySelector('.carousel-button.next');
  const prevButton = document.querySelector('.carousel-button.prev');
  let currentIndex = 0;
  let autoAdvanceInterval = null;

  const updateSlidePosition = () => {
      const offset = -currentIndex * 100;
      document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
      });
  };

  const advanceSlide = (increment) => {
      currentIndex = (currentIndex + increment + slides.length) % slides.length;
      updateSlidePosition();
  };

  nextButton.addEventListener('click', () => advanceSlide(1));
  prevButton.addEventListener('click', () => advanceSlide(-1));

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          currentIndex = index;
          updateSlidePosition();
      });
  });

  const startAutoAdvance = () => {
      autoAdvanceInterval = setInterval(() => advanceSlide(1), 3000);
  };

  const stopAutoAdvance = () => {
      clearInterval(autoAdvanceInterval);
  };

  document.querySelector('.carousel').addEventListener('mouseenter', stopAutoAdvance);
  document.querySelector('.carousel').addEventListener('mouseleave', startAutoAdvance);

  updateSlidePosition();
  startAutoAdvance();
});



