import { createContext, useState } from "react";

const SnackBarContext = createContext();
const SnackBarDispatchContext = createContext();

const SnackBarContextProvider = ({ children }) => {
  const [message, addItem] = useState("");

  return (
    <SnackBarContext.Provider value={message}>
      <SnackBarDispatchContext.Provider value={addItem}>
        {children}
      </SnackBarDispatchContext.Provider>
    </SnackBarContext.Provider>
  );
};

export default SnackBarContextProvider;
export { SnackBarContext, SnackBarDispatchContext };
