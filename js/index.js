const button = document.getElementById('buttonText');
const texto = document.getElementById('inputText');

button.addEventListener('click', () => {
  localStorage.setItem('data', texto.value.trim())
});