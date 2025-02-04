import { createContext, useState } from "react";
import { doctors } from "../assets/assets";

// Create the Context
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Example of future scalability (if dynamic data is needed)
  const [doctorList] = useState(doctors);
  const currencySymbol = "$";

  const value = {
    doctors: doctorList,
    currencySymbol,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
