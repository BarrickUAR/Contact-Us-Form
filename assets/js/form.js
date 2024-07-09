let isim = document.querySelector('.name input');
let soyad = document.querySelector('.soyad input');
let mail = document.querySelector('.mail input');
let message = document.querySelector('.message textarea');
let activeForm = document.querySelector('.activeForm');
let btn = document.querySelector('.submit button');

function handleClickButton(e) {
  e.preventDefault();
  activeForm.innerHTML += "<li>Name: " + isim.value + "</li>" +
  "<li>Soyad: " + soyad.value + "</li>" +
  "<li>Email: " + mail.value + "</li>" +
  "<li>Message: " + message.value + "</li>";
}

btn.addEventListener('click', handleClickButton);

