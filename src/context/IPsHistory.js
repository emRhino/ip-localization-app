import { createContext, useState } from "react";

const IPsContext = createContext();

const Provider = ({ children }) => {
  const [localizations, setLocalizations] = useState([]);

  const addLocalization = (data) => {
    setLocalizations([...localizations, data]);
  };

  const valueToShare = {
    localizations,
    addLocalization,
  };

  return (
    <IPsContext.Provider value={valueToShare}>{children}</IPsContext.Provider>
  );
};

export { Provider };
export default IPsContext;
