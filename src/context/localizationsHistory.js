import { createContext, useState } from "react";

const LocalizantionsContext = createContext();

const Provider = ({ children }) => {
  const [localizations, setLocalizations] = useState([]);

  const addLocalization = (title) => {
    setLocalizations([...localizations, { title: title }]);
  };

  const valueToShare = {
    localizations,
    addLocalization,
  };

  return (
    <LocalizantionsContext.Provider value={valueToShare}>
      {children}
    </LocalizantionsContext.Provider>
  );
};

export { Provider };
export default LocalizantionsContext;
