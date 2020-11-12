import { createContext, useState } from "react";

const NavBarContext = createContext();
const NavBarDispatchContext = createContext();

const NavBarContextProvider = ({ children }) => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <NavBarContext.Provider value={navBarOpen}>
      <NavBarDispatchContext.Provider value={setNavBarOpen}>
        {children}
      </NavBarDispatchContext.Provider>
    </NavBarContext.Provider>
  );
};

export default NavBarContextProvider;
export { NavBarContext, NavBarDispatchContext };
