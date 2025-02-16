import { leaders } from './data.js';

// Leader about button nodes
const aboutButton = document.getElementById('about-button');
const cabinetButton = document.getElementById('cabinet-button');
const allegationsButton = document.getElementById('allegations-button');

//Search bar & button nodes
const searchBar = document.getElementById('search-bar'); 
const searchButton = document.getElementById('search-button'); 

// Leader about content box node
const aboutContent = document.getElementById('info-box');

// To get Leader about ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const leaderIdCollected = urlParams.get('id');

console.log("Retrieved ID from URL:", leaderIdCollected);

const leadershipHistoryPage = document.querySelector('.leadership-history');

//Leader about button functions
const aboutButtonHandler = () => {
  switch (leaderIdCollected) {
    case '1': 
      aboutContent.innerHTML = leaders[0].info.about;
      break;
    case '2': 
      aboutContent.innerHTML = leaders[1].info.about;
      break;
    case '3': 
      aboutContent.innerHTML = leaders[2].info.about;
      break;
    case '4': 
      aboutContent.innerHTML = leaders[3].info.about;
      break;
    case '5': 
      aboutContent.innerHTML = leaders[4].info.about;
      break;
    case '6': 
      aboutContent.innerHTML = leaders[5].info.about;
      break;
    case '7': 
      aboutContent.innerHTML = leaders[6].info.about;
      break;
    case '8': 
      aboutContent.innerHTML = leaders[7].info.about;
      break;
    case '9': 
      aboutContent.innerHTML = leaders[8].info.about;
      break;
    case '10': 
      aboutContent.innerHTML = leaders[9].info.about;
      break;
    case '11': 
      aboutContent.innerHTML = leaders[10].info.about;
      break;
    case '12': 
      aboutContent.innerHTML = leaders[11].info.about;
      break;
    case '13': 
      aboutContent.innerHTML = leaders[12].info.about;
      break;
    case '14': 
      aboutContent.innerHTML = leaders[13].info.about;
      break;
    case '15': 
      aboutContent.innerHTML = leaders[14].info.about;
      break;
    case '16': 
      aboutContent.innerHTML = leaders[15].info.about;
      break;
    case '17': 
      aboutContent.innerHTML = leaders[16].info.about;
      break;
    default:
      aboutContent.innerText = 'Leader not found';
  };

  console.log(aboutContent);

  // Logic for assigning --current item id to the clicked button
  if (
    !aboutButton.classList.contains('leader-info__nav-item--current')
    && !cabinetButton.classList.contains('leader-info__nav-item--current')
    && !allegationsButton.classList.contains('leader-info__nav-item--current')
  ) {
    aboutButton.classList.add('leader-info__nav-item--current');
  } else if (
    !aboutButton.classList.contains('leader-info__nav-item--current')
    && cabinetButton.classList.contains('leader-info__nav-item--current')
    || allegationsButton.classList.contains('leader-info__nav-item--current')
  ) {
    cabinetButton.classList.remove('leader-info__nav-item--current');
    allegationsButton.classList.remove('leader-info__nav-item--current');
    aboutButton.classList.add('leader-info__nav-item--current');
  }
}

const cabinetButtonHandler = () => {
  switch (leaderIdCollected) {
    case '1': 
      aboutContent.innerHTML = leaders[0].info.cabinet;
      break;
    case '2': 
      aboutContent.innerHTML = leaders[1].info.cabinet;
      break;
    case '3': 
      aboutContent.innerHTML = leaders[2].info.cabinet;
      break;
    case '4': 
      aboutContent.innerHTML = leaders[3].info.cabinet;
      break;
    case '5': 
      aboutContent.innerHTML = leaders[4].info.cabinet;
      break;
    case '6': 
      aboutContent.innerHTML = leaders[5].info.cabinet;
      break;
    case '7': 
      aboutContent.innerHTML = leaders[6].info.cabinet;
      break;
    case '8': 
      aboutContent.innerHTML = leaders[7].info.cabinet;
      break;
    case '9': 
      aboutContent.innerHTML = leaders[8].info.cabinet;
      break;
    case '10': 
      aboutContent.innerHTML = leaders[9].info.cabinet;
      break;
    case '11': 
      aboutContent.innerHTML = leaders[10].info.cabinet;
      break;
    case '12': 
      aboutContent.innerHTML = leaders[11].info.cabinet;
      break;
    case '13': 
      aboutContent.innerHTML = leaders[12].info.cabinet;
      break;
    case '14': 
      aboutContent.innerHTML = leaders[13].info.cabinet;
      break;
    case '15': 
      aboutContent.innerHTML = leaders[14].info.cabinet;
      break;
    case '16': 
      aboutContent.innerHTML = leaders[15].info.cabinet;
      break;
    case '17': 
      aboutContent.innerHTML = leaders[16].info.cabinet;
      break;
    default:
      aboutContent.innerText = 'Leader not found';
  };

  // Logic for assigning --current item id to the clicked button
  if (
    !cabinetButton.classList.contains('leader-info__nav-item--current')
    && !aboutButton.classList.contains('leader-info__nav-item--current')
    && !allegationsButton.classList.contains('leader-info__nav-item--current')
  ) {
    cabinetButton.classList.add('leader-info__nav-item--current');
  } else if (
    !cabinetButton.classList.contains('leader-info__nav-item--current')
    && aboutButton.classList.contains('leader-info__nav-item--current')
    || allegationsButton.classList.contains('leader-info__nav-item--current')
  ) {
    allegationsButton.classList.remove('leader-info__nav-item--current');
    aboutButton.classList.remove('leader-info__nav-item--current');
    cabinetButton.classList.add('leader-info__nav-item--current');
  }
}

const allegationsButtonHandler = () => {
  switch (leaderIdCollected) {
    case '1': 
      aboutContent.innerHTML = leaders[0].info.allegations;
      break;
    case '2': 
      aboutContent.innerHTML = leaders[1].info.allegations;
      break;
    case '3': 
      aboutContent.innerHTML = leaders[2].info.allegations;
      break;
    case '4': 
      aboutContent.innerHTML = leaders[3].info.allegations;
      break;
    case '5': 
      aboutContent.innerHTML = leaders[4].info.allegations;
      break;
    case '6': 
      aboutContent.innerHTML = leaders[5].info.allegations;
      break;
    case '7': 
      aboutContent.innerHTML = leaders[6].info.allegations;
      break;
    case '8': 
      aboutContent.innerHTML = leaders[7].info.allegations;
      break;
    case '9': 
      aboutContent.innerHTML = leaders[8].info.allegations;
      break;
    case '10': 
      aboutContent.innerHTML = leaders[9].info.allegations;
      break;
    case '11': 
      aboutContent.innerHTML = leaders[10].info.allegations;
      break;
    case '12': 
      aboutContent.innerHTML = leaders[11].info.allegations;
      break;
    case '13': 
      aboutContent.innerHTML = leaders[12].info.allegations;
      break;
    case '14': 
      aboutContent.innerHTML = leaders[13].info.allegations;
      break;
    case '15': 
      aboutContent.innerHTML = leaders[14].info.allegations;
      break;
    case '16': 
      aboutContent.innerHTML = leaders[15].info.allegations;
      break;
    case '17': 
      aboutContent.innerHTML = leaders[16].info.allegations;
      break;
    default:
      aboutContent.innerText = 'Leader not found';
  };

  // Logic for assigning --current item id to the clicked button
  if (
    !allegationsButton.classList.contains('leader-info__nav-item--current')
    && !aboutButton.classList.contains('leader-info__nav-item--current')
    && !cabinetButton.classList.contains('leader-info__nav-item--current')
  ) {
    allegationsButton.classList.add('leader-info__nav-item--current');
  } else if (
    !allegationsButton.classList.contains('leader-info__nav-item--current')
    && aboutButton.classList.contains('leader-info__nav-item--current')
    || cabinetButton.classList.contains('leader-info__nav-item--current')
  ) {
    cabinetButton.classList.remove('leader-info__nav-item--current');
    aboutButton.classList.remove('leader-info__nav-item--current');
    allegationsButton.classList.add('leader-info__nav-item--current');
  }
}

//FAQ toggle
export function toggle(faqItem) {
  // Select the paragraph within the clicked faq-item
  const content = faqItem.querySelector('.showHide');
  // Select the 'plus' and 'minus' icons within the clicked faq-item
  const iconPlus = faqItem.querySelector('.fa-plus');
  const iconMinus = faqItem.querySelector('.fa-minus');
  
  // Toggle visibility for paragraph and icons
  content.classList.toggle('show'); // Show/hide the paragraph
  iconPlus.classList.toggle('hide'); // Show/hide the 'plus' icon
  iconMinus.classList.toggle('show'); // Show/hide the 'minus' icon
}

//NAV toggle
export function toggleNav(vertNavId) {
  //To target the vertical nav bar
  const vertNav = document.getElementById(vertNavId);
  const button = document.getElementById('changeText');
  const vanish = document.getElementById('disappear');
  
  // Toggle visibility for vertical nav bar
  vertNav.classList.toggle('show');
  // vanish.classList.toggle('hide');
  
/*     // Toggle the button text
    if (button.textContent === "Read more") {
      button.textContent = "Read less";
    } else {
      button.textContent = "Read more";
    } */
}

// Inserting content for the active Leader box
const leaderBoxActive = document.getElementById('l-e-box--active');

//Event listeners
if(leadershipHistoryPage){
searchButton.addEventListener('click', () => {
  const value = searchBar.value.toLowerCase();
  const leaderBox = document.querySelectorAll('.l-e-box');

  console.log("Search Value:", value);

  leaderBox.forEach((leader) => {
    console.log("Checking Leader:", leader.name);

    leader.classList.remove("hide");
    document.getElementById('search-error').classList.add("hide");

    if(!leader.innerHTML.toLowerCase().includes(value)) {
      leader.classList.toggle("hide");
    };
  });

  if([...leaderBox].every(leader => leader.classList.contains("hide"))) {
      document.getElementById('search-error').classList.remove("hide");
  }

  console.log("Leader Boxes:", leaderBox);
});
}

if (aboutButton) {
  aboutButton.addEventListener('click', aboutButtonHandler);
}

if (cabinetButton) {
  cabinetButton.addEventListener('click', cabinetButtonHandler);
}

if (allegationsButton) {
  allegationsButton.addEventListener('click', allegationsButtonHandler);
}

document.querySelectorAll('.l-e-box').forEach(item => {
  item.addEventListener('click', function () {
    const leaderId = this.getAttribute('data-id');
    console.log("Clicked Item ID:", leaderId);
    
    window.location.href = `./leadership-database.html?id=${leaderId}`;
  });
});

// Inserting Leader info into the page
document.querySelectorAll('.l-e-box').forEach(item => {
  const preLeaderId = item.getAttribute('data-id');
  // const leaderBoxText = item.querySelector('.l-e-box__text');
  item.innerHTML = `<div class="l-e-box__image"><img src="${leaders[preLeaderId - 1].img}"></div> <div class="l-e-box__text"><strong>${leaders[preLeaderId - 1].name}</strong> <em>${leaders[preLeaderId - 1].position}</em></div>`;
  // leaderBoxText.innerHTML = `<h4>${leaders[preLeaderId - 1].name}</h4> <p>${leaders[preLeaderId - 1].position}</p>`;
  console.log(item.innerHTML);
});

if(leaderBoxActive){
  leaderBoxActive.innerHTML = `<div class="l-e-box__image"><img src="${leaders[leaderIdCollected - 1].img}"></div> <div class="l-e-box__text"><strong>${leaders[leaderIdCollected - 1].name}</strong> <em>${leaders[leaderIdCollected - 1].position}</em></div>`;
}


/* //Checkbox validation
export function toggleSubmitButton() {
  const checkbox = document.getElementById('myCheckbox');
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = !checkbox.checked;
}*/
