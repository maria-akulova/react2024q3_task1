import { useSelector } from 'react-redux';
import { InputCommonPropsU } from 'src/components';
import { selectCountries } from 'src/store/formSlice';
import { fieldName } from 'utils/stringUtils';

export const Country: React.FC<InputCommonPropsU> = ({ id, nameRef, errors }) => {
  const countries = useSelector(selectCountries);
  return (
    <div>
      <label htmlFor={id}> {fieldName(id)}:</label>
      <input type="text" ref={nameRef} id={id} list="country-list" autoComplete="country-name" />

      <datalist id="country-list">
        {countries.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>

      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );
};
