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
