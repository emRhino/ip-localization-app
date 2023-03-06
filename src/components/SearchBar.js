import { useState, useContext } from "react";
import axios from "axios";
import IPsContext from "../context/IPsHistory";
import {
  StyledForm,
  StyledInput,
  StyledSubmit,
} from "../styles/SearchBar.styles";

const API_KEY = process.env.REACT_APP_IPSTACK_API;

const SearchBar = () => {
  const [phrase, setPhrase] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { addLocalization } = useContext(IPsContext);

  const handleChange = (e) => {
    setPhrase(e.target.value);
    setIsValid(validateIpAddress(e.target.value));
  };

  const validateIpAddress = (ipAddress) => {
    const pattern =
      /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return pattern.test(ipAddress);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      return false;
    }

    const response = await axios.get(
      `https://api.ipstack.com/${phrase}?access_key=${API_KEY}`
    );

    addLocalization(response.data);
    setPhrase("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        placeholder="Type IP Address"
        onChange={handleChange}
        value={phrase}
      />
      <StyledSubmit>Search</StyledSubmit>
      {phrase.length > 2 && !isValid ? <p>Invalid IP Address</p> : null}
    </StyledForm>
  );
};

export default SearchBar;
