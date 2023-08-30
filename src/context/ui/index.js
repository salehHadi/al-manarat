import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const UseUIContext = () => useContext(UIContext);

export const UIProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [productuDetail, setProductDetail] = useState();

  const value = {
    drawerOpen,
    setDrawerOpen,
    productuDetail,
    setProductDetail,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
