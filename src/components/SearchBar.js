import { useState, useContext } from "react";
import axios from "axios";
import LocalizationsContext from "../context/localizationsHistory";
import {
  StyledForm,
  StyledInput,
  StyledSubmit,
} from "../styles/SearchBar.styles";

const API_KEY = "88fb9d120ea7416f39ab623d956fb2c2";

const SearchBar = () => {
  const [phrase, setPhrase] = useState("");
  const { addLocalization } = useContext(LocalizationsContext);

  const handleChange = (e) => {
    setPhrase(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `http://api.ipstack.com/${phrase}?access_key=${API_KEY}`
    );

    console.log(response.data);

    addLocalization(response.data);
    setPhrase("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Type IP Address or URL"
        onChange={handleChange}
        value={phrase}
      />
      <StyledSubmit>Search</StyledSubmit>
    </StyledForm>
  );
};

export default SearchBar;
