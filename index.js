window.onload = () => {
  const form = document.querySelector('form');
  const number = document.querySelector('#num');
  const engPhrase = document.querySelector('#eng-phrase');

  const baseNums = { 
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  const bigNums = ['hundred', 'thousand', 'million', 'billion', 'trillion'];

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    /* Covers all hardcoded numbers */
    if (baseNums[number.value]) {
      engPhrase.textContent = baseNums[number.value];
    /* Covers all non-harcoded numbers < 100 */ 
    } else if (number.value.length === 2) {
      const partOne = baseNums[`${number.value[0]}0`];
      const partTwo = baseNums[number.value[1]];
      engPhrase.textContent = `${partOne}-${partTwo}`;
    } else if (number.value.length === 3) {
      const tenMultiple = number.value.slice(1);
      const second = baseNums[`${number.value[1]}0`];
      const third = baseNums[`${number.value[2]}`];
      console.log(`second is ${second}`);
      console.log(`third is ${third}`);
     
      console.log(tenMultiple);
      const partOne = `${baseNums[number.value[0]]}-hundred`;
      const partTwo = baseNums[tenMultiple] ? baseNums[tenMultiple] : `${second}-${third}`;

      engPhrase.textContent = `${partOne} ${partTwo}`;
    }
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
