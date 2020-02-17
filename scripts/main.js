// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/photo-1560719168-32825e16d2c6.png') {
    myImage.setAttribute ('src','photo-1560719168-32825e16d2c7.png');
  } else {
    myImage.setAttribute ('src','images/photo-1560719168-32825e16d2c6.png');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Дорогу осилит идущий, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Дорогу осилит идущий, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}