const mdLinks = require('../mdLinks');
const validate = require('../src/validate');
const stats = require('../src/stats');
const validateStats = require('../src/validate-stats');
const testFunctions = require('../src/test-functions');
const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();
const chalk = require('chalk');
const jsdom = require("jsdom");
const console = require('console');
const {
  JSDOM
} = jsdom;

const linksArr = [ [ 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Glob',
    'http://basica.primariatic.sep.gob.mx-sort/',
    'https://www.w3schools.com/js/js_object_constructors.asp',
    'https://github.com/Pau-za/CDMX007-fe-md-links',
    'http://basica.primariatic.sep.gob.mx',
    'https://www.w3schools.com/js/js_object_constructors.asp' ],
  [ 'link roto',
    'geeks',
    'w3 school repetido',
    'mi repo',
    'link roto',
    'w3 school repetido' ] ];

    const process = {
      "argv" : [1,2]
    };

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  })
  it('should return a two dimensions array for any path user enters, and no options', () => {
    expect(typeof mdLinks('./src/')).toBe('string');
    })
  it('should return an error', () => {
    expect(typeof mdLinks('')).toBe('string');
  })
  it('should return a two dimensions array for any path user enters, and no options', () => {
    expect(typeof mdLinks('./src/README2.md')).toBe('string');
    })
})

describe('stats', () => {
  it('should be a function', () => {
    expect(typeof stats).toBe('function');
  })
  it('should return a number', () => {
    expect(typeof stats(linksArr)).toBe('number');
  })
})

describe('validate', () => {
  it('should be a function', () => {
    expect(typeof validate).toBe('function');
  })
  it('should return a string', () => {
    expect(typeof validate(linksArr)).toBe('string');
  })
})

describe('validateStats', () => {
  it('should be a function', () => {
    expect(typeof validateStats).toBe('function');
  })
  it('should return a number', () => {
    expect(typeof validateStats(linksArr)).toBe('number');
  })
})
