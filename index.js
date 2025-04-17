const ul = document.querySelectorAll('ul li.item')
console.log("Kategori sayısı:", ul.length)

ul.forEach(element => {
    console.log(element.firstElementChild.textContent);
    const li = element.querySelectorAll('ul li'); 
    console.log("Elements:", li.length)
});

const gallery = document.querySelector('.gallery');


const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];
  
images.forEach(element => {
    const li = document.createElement('li')
    const img = document.createElement('img');
    
    img.src = element.url;
    img.alt = element.alt;
    img.style.width = '300px';
    
    li.append(img);
    gallery.append(li);
});

const input = document.querySelector('#name-input');

input.addEventListener('input', function(e){
    const name = document.querySelector('#name-output');
    input.value.trim();
    if(input.value == ''){
        name.textContent = "Anonymous"
    }
    else{
        name.textContent = e.target.value;
    }
    
})

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const { email, password } = loginForm.elements;
    if (email.value.trim() === '' || password.value.trim() === '') {
        alert('All form fields must be filled in');
        return; // işlem burada biter
      }
      const data = {
        email: email.value.trim(),
        password: password.value.trim(),
      };
    console.log(data)
    loginForm.reset();
})

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
button.addEventListener('click', function () {
    function getRandomHexColor() {
        hexColor = `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
        color.textContent = hexColor;  
        body.style.backgroundColor = hexColor;   
      }
      getRandomHexColor();
  })

  const divBoxes = document.querySelector('#boxes');
  const create = document.querySelector('[data-create]')
  const destroyBtn = document.querySelector('[data-destroy]');
  const inputNumber = document.querySelector('#controls input');

  function getRandomHexColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  function createBoxes(amount){
    divBoxes.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        const size = 30 + i * 10;
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        divBoxes.append(div)
      }
  }

  function destroyBoxes() {
    divBoxes.innerHTML = '';
    inputNumber.value = '';
  }

  create.addEventListener('click', () => {
    const amount = Number(inputNumber.value);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
      } else {
        alert('Please enter a number between 1 and 100');
      }
  });
  
  destroyBtn.addEventListener('click', destroyBoxes);