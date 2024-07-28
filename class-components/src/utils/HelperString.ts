import { Animal } from 'components/index';

export const trunc = (text: string): string => {
  return text.trim();
};

export const getAnimalType = (animal: Animal): string => {
  if (animal.avian) return 'Avian';
  if (animal.canine) return 'Canine';
  if (animal.earthAnimal) return 'Earth Animal';
  if (animal.earthInsect) return 'Earth Insect';
  if (animal.feline) return 'Feline';
  return 'not defined by default';
};

export const restrictNumberAnimals = (pages: number): number => {
  return pages > 10 ? 10 : pages;
};

export const convertToCSV = (data: Animal[]): string => {
  const header = Object.keys(data[0]);
  const rows = data.map((item) =>
    header.map((fieldName) => JSON.stringify(item[fieldName as keyof Animal])).join(','),
  );
  return [header.join(','), ...rows].join('\n');
};
