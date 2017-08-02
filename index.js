window.onload = () => {
  const form = document.querySelector('form');
  const number = document.querySelector('#num');
  const engPhrase = document.querySelector('#eng-phrase');

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    if (number.value === '1') {
      console.log(true);
      engPhrase.textContent = 'one';
    }
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
