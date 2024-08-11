import { describe, expect, test } from 'vitest';
import { convertToCSV, downloadCSV, getAnimalType, trunc } from './HelperString';
import { animals } from './utils.data';
import { Animal } from 'src/components';
import { MutableRefObject } from 'react';

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

describe('convertToCSV', () => {
  test('should convert Animal array to CSV string', () => {
    const animalList: Animal[] = Object.values(animals).slice(0, 2);

    const csv = convertToCSV(animalList);
    console.log(csv);
    const expectedCSV =
      'avian,canine,earthAnimal,earthInsect,feline,name,uid,checked\ntrue,false,false,false,false,"avian","avian_uid",false\nfalse,true,false,false,false,"canine","canine_uid",false';

    expect(csv).toBe(expectedCSV);
  });
});

describe('downloadCSV', () => {
  const mockDownloadLinkRef = {
    current: {
      href: '',
      setAttribute: vi.fn(),
      click: vi.fn(),
    } as unknown as HTMLAnchorElement,
  } as MutableRefObject<HTMLAnchorElement | null>;

  beforeEach(() => {
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('http://example.com/test.csv');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should create CSV and trigger download', () => {
    const animalList: Animal[] = Object.values(animals).slice(0, 2);

    downloadCSV(animalList, mockDownloadLinkRef);

    if (mockDownloadLinkRef.current) {
      expect(mockDownloadLinkRef.current.href).toBe('http://example.com/test.csv');
      expect(mockDownloadLinkRef.current.setAttribute).toHaveBeenCalledWith(
        'download',
        '2_animals.csv',
      );
      expect(mockDownloadLinkRef.current.click).toHaveBeenCalled();
      expect(URL.createObjectURL).toHaveBeenCalled();
      expect(URL.revokeObjectURL).toHaveBeenCalledWith('http://example.com/test.csv');
    }
  });
});
