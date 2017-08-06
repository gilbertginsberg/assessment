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

  function genBaseNumPhrase(index) {
    const phrase = baseNums[number.value[index]];
    return phrase;
  }

  function genMultipleOfTenPhrase(index) {
    const phrase = baseNums[`${number.value[index]}0`];
    return phrase;
  }

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    // Covers all hardcoded numbers 
    if (baseNums[number.value]) {
      engPhrase.textContent = baseNums[number.value];

    // Covers all non-harcoded numbers < 100 
    } else if (number.value.length === 2) {
        const partOne = genMultipleOfTenPhrase(0);
        const partTwo = genBaseNumPhrase(1); 

        engPhrase.textContent = `${partOne}-${partTwo}`;

    // Covers numbers 100 to 999 
    } else if (number.value.length === 3) {
        const lastTwoDigits = number.value.slice(1);
        const secondDigitPhrase = genMultipleOfTenPhrase(1);
        const thirdDigitPhrase = genBaseNumPhrase(2); 
        const partOne = `${genBaseNumPhrase(0)} hundred`;
        const partTwo = baseNums[lastTwoDigits] ? baseNums[lastTwoDigits] : `${secondDigitPhrase}-${thirdDigitPhrase}`;

        engPhrase.textContent = lastTwoDigits === '00' ? partOne : `${partOne} ${partTwo}`;

    // Covers numbers 1000 to 9999
    } else if (number.value.length === 4) {
     
    }
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
