import chai, { assert, expect } from 'chai';
import curry from '../src/get-param';

describe('#getParam()', () => {

  it('should getParam a thing', () => {
    assert.equal('tomf', 'tomf'); // 'good person');
  });

});

// TODO: https://github.com/crometrics/optimizely-snippets/blob/master/tests/GetParamSpec.js
// describe('experiment/get-param.js', function() {
//   it('can get params', function() {
//     expect(window.crometrics.getParam('p', '?p=v')).toBe('v');
//   });
// });
