const mains = document.getElementById('mains');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const drinks = document.getElementById('drinks');

let links = document.querySelector('.menu_options');
links.addEventListener('click', (event) => {
  const {target} = event;
  const {id} = target;

  switch (id) {
    case 'mains_link':
      displayMainMenu();
      break;
    case 'lunch_link':
      displayLunchMenu();
      break;
    case 'dinner_link':
      displayDinnerMenu();
      break;
    case 'drinks_link':
      displayDrinksMenu();
      break;
    default:
      displayMainMenu();
  }
});

let mainLink = document.getElementById('mains_link');
mainLink.classList.add('brown');
let dinnerLink = document.getElementById('dinner_link');
let lunchLink = document.getElementById('lunch_link');
let drinksLink = document.getElementById('drinks_link');

function displayMainMenu() {
  lunch.classList.add('hide');
  drinks.classList.add('hide');
  dinner.classList.add('hide');

  lunchLink.classList.remove('brown');
  dinnerLink.classList.remove('brown');
  drinksLink.classList.remove('brown');

  mains.classList.remove('hide');
  mainLink.classList.add('brown');

}

function displayLunchMenu() {
  mains.classList.add('hide');
  dinner.classList.add('hide');
  drinks.classList.add('hide');

  mainLink.classList.remove('brown');
  drinksLink.classList.remove('brown');
  dinnerLink.classList.remove('brown');

  lunch.classList.remove('hide');
  lunchLink.classList.add('brown');
}

function displayDinnerMenu() {
  mains.classList.add('hide');
  lunch.classList.add('hide');
  drinks.classList.add('hide');

  mainLink.classList.remove('brown');
  lunchLink.classList.remove('brown');
  drinksLink.classList.remove('brown');

  dinner.classList.remove('hide');
  dinnerLink.classList.add('brown');
}

function displayDrinksMenu() {
  dinner.classList.add('hide');
  mains.classList.add('hide');
  lunch.classList.add('hide');

  mainLink.classList.remove('brown');
  lunchLink.classList.remove('brown');
  dinnerLink.classList.remove('brown');

  drinks.classList.remove('hide');
  drinksLink.classList.add('brown');
}
//form validation
let reservation = {
  fullName: '',
  telephone: '',
  email: '',
  date: '',
  persons: '',
  time: '',
}

const nameInput = document.getElementById('name');
const telInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const persons = document.getElementById('dropdown');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');


const submitButton = document.querySelector('.submit_form');
submitButton.addEventListener('click', submitForm);

const error = document.querySelector('.error');

function submitForm(event) {
  event.preventDefault();
  formCheck();
}

function formCheck() {
  if (nameInput.value === '' &&
      telInput.value === '' &&
      emailInput.value === '' &&
      persons.value === '' &&
      dateInput.value === '' &&
      timeInput.value === '') {
    error.textContent = 'Please fill the form before submitting';
    error.style.color = 'red';

  } else if (
    nameInput.value === '') {
    error.textContent = 'Please enter your full name';
  }  else if (telInput.value === '') {
    error.textContent = 'Please enter your number'
  } else if (emailInput.value === '') {
    error.textContent = 'Please enter your email'
  } else if (persons.value === '') {
    error.textContent = 'The persons field cannot be empty'
  } else if (dateInput.value === '') {
    error.textContent = 'The date field cannot be empty'
  } else if (timeInput.value === '') {
    error.textContent = 'The time field cannot be empty'
  } else {
    error.textContent = 'Reservation Comfirmed!';
    error.style.color = 'rgb(101, 185, 101)';    
    getData()  
  }

}
let dataArr = [];

function getData() {
  const formData = document.querySelectorAll('.input_field');
  formData.forEach((input) => {
    dataArr.push(input.value);
    input.value ='';
  })
  reservation.fullName = dataArr[0];
  reservation.telephone = dataArr[1];
  reservation.email = dataArr[2];
  reservation.persons = dataArr[3];
  reservation.date = dataArr[4];
  reservation.time = dataArr[5];
  console.log(reservation); 
}
//email validation
const subForm = document.querySelector('.subscribe_form');
subForm.addEventListener('submit', subscribe);

function subscribe(event) {
  event.preventDefault();
  verifyEmail();
}

function verifyEmail() {
  const subInput = document.querySelector('.email_input');
  const subError = document.querySelector('.subscribe_error');

  if (subInput.value === '') {
    subError.textContent = 'Field is empty'
    subError.style.color = 'red';    
  }
  else if (!subInput.value.includes('@')){
    subError.textContent = 'Your email address is missing the @ symbol'
  }
  else if (!subInput.value.includes('protonmail') && 
           !subInput.value.includes('gmail') &&
           !subInput.value.includes('yahoo') && 
           !subInput.value.includes('zoho')) {
    subError.textContent = 'Incorrect syntax'
  }
  else if (!subInput.value.includes('.com')){
    subError.textContent = '.com is absent'
  }
  else {
    subError.textContent = 'Subscribtion Confirmed!'
    subError.style.color = 'rgb(101, 185, 101)'; 
    console.log(subInput.value)
    subInput.value = '';  

  }
}

  /*  const prev = document.getElementById('prev');
    prev.addEventListener('click', previousReview);

    const next = document.getElementById('next');
    next.addEventListener('click', nextReview);

    let rev = 0;
    carousel(rev);

    function previousReview() {
        rev = rev - 1;
        carousel(rev);
    }

    function nextReview() {
        rev = rev + 1;
        carousel(rev)
    }

    function carousel(review) {
        let reviews = document.getElementsByClassName('client-review');

        if (review >= reviews.length) {
            review = 0;
            rev = 0;
        }
        if (review < 0) {
            review = reviews.length -1;
            rev = reviews.length -1;
        }
        for (let i = 0; i < reviews.length; i++) {
            reviews[i].classList.add('hide')
        }
        reviews[review].classList.remove('hide')
    }
 */
