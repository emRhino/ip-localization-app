import { useState, useContext } from 'react';
import LocalizationsContext from '../context/localizationsHistory';

import {
  StyledForm,
  StyledInput,
  StyledSubmit,
} from '../styles/SearchBar.styles';

const SearchBar = () => {
  const [phrase, setPhrase] = useState('');
  const { addLocalization } = useContext(LocalizationsContext);

  const handleClick = (e) => {
    setPhrase(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLocalization();
    setPhrase('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        placeholder='Type IP Address or URL'
        onChange={handleClick}
        value={phrase}
      />
      <StyledSubmit>Search</StyledSubmit>
    </StyledForm>
  );
};

export default SearchBar;
