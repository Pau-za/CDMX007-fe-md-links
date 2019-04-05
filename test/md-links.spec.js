const mdLinks = require('../mdLinks');
const validate = require('../src/validate');
const stats = require('../src/stats');
const validateStats = require('../src/validate-stats');

const mockedPath = [
  ['something'],
  ['another-thing'],
  ['this/is/a/path' ['README.md' ['[a-link](https//:this.is.a/link/)']]]
];


describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof window.mdLinks).toBe('function');
  })
  it('should return a two dimensions array for any path user enters, and no options'), () => {
    expect(window.mdLinks(mockedPath)).toEqual('Link:  https//:this.is.a/link/,  to: a-link');
    }
})
