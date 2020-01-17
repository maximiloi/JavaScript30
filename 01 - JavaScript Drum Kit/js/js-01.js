function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`); // ищем аудио файлы по коду нажатой клавиши
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`); // для анимации ищем какую нажимают клавишу

  if (!audio) return; // проверка, если есть аудио, то вернуть ответ, иначе остановить функцию и ничего не делать

  audio.currentTime = 0; // задает время проигрывания, при нажатии, оно обнуляется и звук может воиспроизводится сразу же
  audio.play(); // запускает аудиосемпл

  key.classList.add('playing'); // при нажатии клавиши добавляем ей класс
}

function removeTrasition(e) {
  if (e.propertyName !== 'transform') return; //пропускать свойства если это не transform
  this.classList.remove('playing'); // удаляет класс у нажатой клавиши после использования transition
}

const keys = document.querySelectorAll('.key'); // ищем класы где происходит анимация
keys.forEach(key => key.addEventListener('transitionend', removeTrasition)); // запускаем функцию removeTrasition
window.addEventListener('keydown', playSound);