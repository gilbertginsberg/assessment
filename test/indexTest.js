describe('Number to English Phrase Converter', () => {
  describe('helpers', () => {
    it('slicedNumber should slice off first digit of inputted number', () => {
      unPaddedNumber = '12345';
      const answer = slicedNumber(4);
      assert.equal(answer, '2345', 'slicedNumber slices off first fist digit');
    });

    it('genMultipleOfTenPhrase should provide the phrase for a multiple of ten', () => {
      const answer = genMultipleOfTenPhrase(9);
      assert.equal(answer, 'ninety');
    });
  });

  describe('conversion functions', () => {
    it('genLessThanTenPhrase', () => {
      const unPaddedNumber = '5'
      const answer = genLessThanTenPhrase(unPaddedNumber);
      assert.equal(answer, 'five');
    });

    it('genLessThan100Phrase', () => {
      const unPaddedNumber = '45'
    });

    it('gen100to999Phrase', () => {
     
    });

    it('genTenThousandPhrase', () => {
     
    });

    it('gen100ThousandPhrase', () => {
     
    });

    it('genMillionPhrase', () => {
     
    });
  });

  describe('The Converter', () => {
    it('convertNumToEngPhrase should convert an arabic number to its english equivalent', () => {
      const unPaddedNumber = '55'
      const answer = convertNumToEngPhrase(unPaddedNumber);
      assert.equal(answer, 'fifty-five');
    });
  });
});
