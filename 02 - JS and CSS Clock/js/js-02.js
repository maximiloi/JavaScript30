const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  let now = new Date(); // присваем значение получения времени сейчас

  let second = now.getSeconds(); // присваем значение секунды
  let secondDegrees = ((second / 60) * 360) + 90; // положение секундной стрелки в зависимости от значение секунды
  secondHand.style.transform = `rotate(${secondDegrees}deg)`; // изменяем стиль для движения секундной стрелки

  let min = now.getMinutes();
  let minDegrees = ((min / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;

  let hour = now.getHours();
  let hourDegrees = ((hour / 12) * 360) + 90; // делим на 12 потому что часы
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);