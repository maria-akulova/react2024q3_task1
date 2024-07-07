import { Component } from 'react';
import style from './ResultSearch.module.scss';
import { Animal } from 'components';

interface ResultSearchProps {
  animals: Animal[];
}

export class ResultSearch extends Component<ResultSearchProps> {
  getAnimalType(animal: Animal): string {
    if (animal.avian) return 'Avian';
    if (animal.canine) return 'Canine';
    if (animal.earthAnimal) return 'Earth Animal';
    if (animal.earthInsect) return 'Earth Insect';
    if (animal.feline) return 'Feline';
    return 'Unknown';
  }

  render() {
    const { animals } = this.props;

    return (
      <>
        <section className={style.section}>
          {animals.map((animal) => (
            <div key={animal.uid} className={style.animal}>
              <p>{animal.name}</p>
              <div className={style.description}>
                <p>Unique number: {animal.uid}</p>
                <p>The Type is {this.getAnimalType(animal)}</p>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
}
