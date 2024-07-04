function find(id) {
  return document.getElementById(id);
}

function el(tag) {
  return document.createElement(tag);
}

function Page (info) {
 // Setup <main>
 const $body = document.getElementsByTagName('body')[0];
 const $main = el('main');
 $body.prepend($main);

 // Setup Nav
  const $nav = el('nav');
  
  $nav.innerHTML = `
  <a href='/'>Taniti</a>
  <div class="nav-links">
    <a href="/restaurants.html">Restaurants</a>
    <a href="/activities.html">Activities</a>
    <a href="/getting-here.html">Getting Here</a>
    <a href="/lodging.html">Lodging</a>
    <a href="/sights.html">Sights</a>
    <a href="/transportation.html">Transportation</a>
  </div>
  `
 $main.appendChild($nav);

 // Setup Hero section
 const $heroSection = el('div');
 $heroSection.classList.add('hero')
 const $heroContent = el('div');
 $heroContent.classList.add('hero-content');
 $heroContent.innerHTML = `
 <h1 id="page-title">${info.title}</h1>
`
$heroSection.style.backgroundImage = `url(imgs/${info.heroImage})`
$heroSection.appendChild($heroContent);
$main.appendChild($heroSection);
const $blurb = el('div');
$blurb.classList.add('main-blurb');
$blurb.classList.add('center');
$blurb.innerHTML = info.mainBlurb;
$main.append($blurb);


// Setup Suggestions section
// const $suggestions = el('div');
// $suggestions.classList.add('suggestions');
// $main.appendChild($suggestions);
// const count = 10;
// for (let i = 0; i <= count; i++) {
//   const newSuggestion = el('div');
//   newSuggestion.classList.add('suggestion-item');
//   newSuggestion.classList.add('shadow'); 
//   newSuggestion.innerHTML = `
//     <div>
//       <img src="https://placehold.jp/150x150.png" alt="placeholder" />
//     </div>
//     <div class='suggestion-item-info'>
//       <h3>Placeholder title</h3>
//       <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//       </p>
//     </div>
//   `
//   $suggestions.appendChild(newSuggestion);
// }


// Setup Footer
const $footer = el('footer');
$footer.id = 'footer';
$footer.innerHTML = `
<p class="center">Copyright 2024</p>
`
$body.appendChild($footer)
}

const pageInfo = {
  restaurants:  {
    title: "Restaurants",
    heroImage: 'food.jpg',
    mainBlurb: "Tahiti has many restaurants on the island as well as 2 grocery stores and 1 24-hour convenience store.",
  },
  gettingHere: {
    title: "Getting Here",
    heroImage: 'plane.jpg',
    mainBlurb: "Here's how to get to Taniti.",
    skipSuggestion: true,
  },
  lodging: {
    title: "Lodging",
    heroImage: 'hotel.jpg',
    mainBlurb: 'The island has many differnt lodging options includeing hotels, homestays, and more.',
  },
  sights: {
    title: "Sights",
    heroImage: 'mountain.jpg',
    mainBlurb: 'Make sure to see all the amazing sites while on the island!',
  },
  transportation: {
    title: "Transportation",
    heroImage: 'car.jpg',
    mainBlurb: 'Make sure you know how to get around while here.',
  },
  activities: {
    title: "Activities",
    heroImage: 'beach.jpg',
    mainBlurb: "There's never a dull moment here.",
  },
}

function init() {
  const pageName = document.getElementsByTagName('body')[0].id;
  Page(pageInfo[pageName]);
}

init();


// Slider
