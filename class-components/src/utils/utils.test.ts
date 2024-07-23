import { describe, expect, test } from 'vitest';
import { getAnimalType, trunc } from './HelperString';
import { animals } from './utils.data';

describe('Utils', () => {
  test('Trim string with spaces around', () => {
    expect(trunc('  test trunc  ')).toBe('test trunc');
  });

  test.each`
    animal                    | expected
    ${animals.avianAnimal}    | ${'Avian'}
    ${animals.canineAnimal}   | ${'Canine'}
    ${animals.earthAnimal}    | ${'Earth Animal'}
    ${animals.earthInsect}    | ${'Earth Insect'}
    ${animals.felineAnimal}   | ${'Feline'}
    ${animals.underfinedType} | ${'not defined by default'}
  `('Check types: $animal.name', ({ animal, expected }) => {
    expect(getAnimalType(animal)).toBe(expected);
  });
});
