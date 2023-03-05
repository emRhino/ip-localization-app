import { createContext, useState, useEffect } from "react";

const IPsContext = createContext();

const Provider = ({ children }) => {
  const [localizations, setLocalizations] = useState([]);
  const [lastLocalization, setLastLocalization] = useState();
  const [previousLocalization, setPreviousLocalization] = useState();

  useEffect(() => {
    const lastLocal = localizations.slice(-1)[0] || "Brak elementów";
    const prevLocal = localizations.slice(-2, -1)[0] || "Brak elementów";

    setLastLocalization(lastLocal);
    setPreviousLocalization(prevLocal);
  }, [localizations]);

  const addLocalization = (data) => {
    setLocalizations([...localizations, data]);
  };

  const valueToShare = {
    localizations,
    lastLocalization,
    previousLocalization,
    addLocalization,
  };

  return (
    <IPsContext.Provider value={valueToShare}>{children}</IPsContext.Provider>
  );
};

export { Provider };
export default IPsContext;
