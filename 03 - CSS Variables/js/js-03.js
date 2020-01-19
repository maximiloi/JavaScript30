const inputs = document.querySelectorAll('.controls input'); // получаем набор инпутов

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // получаем значение параметра из дата атрибута
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); // передаем стиль в документ (имя стиля, значение, суффикс)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));  // значение читаются 
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));  // обрабатываются промежуточные события