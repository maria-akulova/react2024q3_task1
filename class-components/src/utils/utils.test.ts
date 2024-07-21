import { expect, test } from 'vitest';
import { getAnimalType, trunc } from './HelperString';

test('Trim string with spaces around', () => {
  expect(trunc('  test trunc  ')).toBe('test trunc');
});

const avianAnimal = {
  avian: true,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'test',
  uid: 'avian_uid',
};

test('Check types: avian', () => {
  expect(getAnimalType(avianAnimal)).toBe('Avian');
});

const canineAnimal = {
  avian: false,
  canine: true,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'test',
  uid: 'canine_uid',
};

test('Check types: canine', () => {
  expect(getAnimalType(canineAnimal)).toBe('Canine');
});

const earthAnimal = {
  avian: false,
  canine: false,
  earthAnimal: true,
  earthInsect: false,
  feline: false,
  name: 'test',
  uid: 'earth_uid',
};

test('Check types: earth animal', () => {
  expect(getAnimalType(earthAnimal)).toBe('Earth Animal');
});

const earthInsect = {
  avian: false,
  canine: false,
  earthAnimal: false,
  earthInsect: true,
  feline: false,
  name: 'test',
  uid: 'earthInsect_uid',
};

test('Check types: earth Insect', () => {
  expect(getAnimalType(earthInsect)).toBe('Earth Insect');
});

const felineAnimal = {
  avian: false,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: true,
  name: 'test',
  uid: 'felin_uid',
};

test('Check types: feline ', () => {
  expect(getAnimalType(felineAnimal)).toBe('Feline');
});

const underfinedType = {
  avian: false,
  canine: false,
  earthAnimal: false,
  earthInsect: false,
  feline: false,
  name: 'test',
  uid: 'felin_uid',
};

test('Check types: feline ', () => {
  expect(getAnimalType(underfinedType)).toBe('not defined by default');
});
