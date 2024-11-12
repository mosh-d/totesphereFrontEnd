document.addEventListener('DOMContentLoaded', () => {
  // Get all elements with the class 'amount' inside .item-2-2
  const amounts = document.querySelectorAll('.donations .donations-container .grid-container-2 .item-2-2 .amount');

  // Get the input field with the class 'input-1'
  const inputField = document.querySelector('.donations .donations-container .grid-container-2 .item-2-2 .input-1');

  // Add an event listener to each amount element
  amounts.forEach((amount) => {
    amount.addEventListener('click', () => {
      // Clear the input field
      inputField.value = '';

      // Set the value of the input field to the text content of the clicked amount element
      inputField.value = amount.textContent.trim(); // Use textContent of the .amount div
    });
  });

  document.querySelector('.button.active').addEventListener('click', () => {
    /*const inputValue = document.querySelector('.input-1'  ||  '.donation-amount').value;*/

    // First, check for the element existence separately
    const inputField = document.querySelector('.input-1');
    const donationField = document.querySelector('.donation-amount');

    // Use the || to select whichever field is available
    const inputValue = (inputField && inputField.value) || (donationField && donationField.value);
    
    localStorage.setItem('donationAmount', inputValue); // Store the value in localStorage
  });

  const donationAmount = localStorage.getItem('donationAmount'); // Get the stored value
  const confirmationText = `${donationAmount}?`; // Build the confirmation message

  // Insert the text into the <p> element inside .confirmation-box
  document.querySelector('.confirmation-box h2').textContent = confirmationText;

   // Payment method toggling
  const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
  const paymentDetails = document.querySelectorAll('.payment-details');

  paymentMethods.forEach((method) => {
    method.addEventListener('change', () => {
      paymentDetails.forEach((detail) => detail.classList.remove('active'));
      const selectedMethod = method.value;
      document.getElementById(`${selectedMethod}-details`).classList.add('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    //Donation toggle
    const toggle = document.querySelector('.donation-toggle');

    toggle.addEventListener('click', function() {
      toggle.classList.toggle('left');
    });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


document.addEventListener('DOMContentLoaded', () => {
  const bMenu = document.querySelector('.b-menu');
  const vertNavBar = document.querySelector('#vert-nav-bar');

  bMenu.addEventListener('click', function() {
    vertNavBar.classList.toggle('visible');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Get all elements with the class 'amount' inside .item-2-2
  const amounts = document.querySelectorAll('.donations .donations-container .grid-container-2 .item-2-2 .amount');

  // Get the input field with the class 'input-1'
  const inputField = document.querySelector('.donations .donations-container .grid-container-2 .item-2-2 .input-1');

  // Add an event listener to each amount element
  amounts.forEach((amount) => {
    amount.addEventListener('click', () => {
      // Clear the input field
      inputField.value = '';

      // Set the value of the input field to the text content of the clicked amount element
      inputField.value = amount.textContent.trim(); // Use textContent of the .amount div
    });
  });
});

const input = document.getElementById('NIN');
input.addEventListener('input', () => {
  // Remove non-digit characters and limit to 5 digits
  input.value = input.value.replace(/\D/g, '').slice(0, 11);
});

//FAQ toggle
function toggle(faqItem) {
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
function toggleNav(vertNavId) {
  //To target the vertical nav bar
  const vertNav = document.getElementById(vertNavId);
  const button = document.getElementById('changeText');
  const vanish = document.getElementById('disappear');
  
  // Toggle visibility for vertical nav bar
  vertNav.classList.toggle('show');
  vanish.classList.toggle('hide');
  
    // Toggle the button text
    if (button.textContent === "Read more") {
      button.textContent = "Read less";
    } else {
      button.textContent = "Read more";
    }
}

//Checkbox validation
function toggleSubmitButton() {
  const checkbox = document.getElementById('myCheckbox');
  const submitButton = document.getElementById('submitButton');
  submitButton.disabled = !checkbox.checked;
}












/*document.addEventListener('DOMContentLoaded', () => {
  // Handle amount selection and input population
  const amounts = document.querySelectorAll('.amount');
  const inputField = document.querySelector('.input-1');

  amounts.forEach((amount) => {
    amount.addEventListener('click', () => {
      inputField.value = amount.textContent.trim();
    });
  });

  // Store the donation amount when clicking the active button
  const activeButton = document.querySelector('.button.active');
  if (activeButton) {
    activeButton.addEventListener('click', () => {
      const inputValue = inputField.value;
      localStorage.setItem('donationAmount', inputValue);
    });
  }

  // Display the donation amount on the confirmation page
  const donationAmount = localStorage.getItem('donationAmount');
  const confirmationBox = document.querySelector('.confirmation-box p');
  if (confirmationBox && donationAmount) {
    confirmationBox.textContent = `Are you sure you want to donate ${donationAmount}?`;
  }

  // Payment method toggling
  const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
  const paymentDetails = document.querySelectorAll('.payment-details');

  paymentMethods.forEach((method) => {
    method.addEventListener('change', () => {
      paymentDetails.forEach((detail) => detail.classList.remove('active'));
      const selectedMethod = method.value;
      document.getElementById(`${selectedMethod}-details`).classList.add('active');
    });
  });

  // Burger menu toggle
  const bMenu = document.querySelector('.b-menu');
  const vertNavBar = document.querySelector('#vert-nav-bar');

  if (bMenu && vertNavBar) {
    bMenu.addEventListener('click', function() {
      vertNavBar.classList.toggle('visible');
    });
  }
  
  // Donation toggle switch
  const toggle = document.querySelector('.donation-toggle');
  if (toggle) {
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('left');
    });
  }
});*/
