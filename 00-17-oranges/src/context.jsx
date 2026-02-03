/** @format */

import { useState, useContext, createContext } from "react";

const AppContext = createContext();
const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem('themeMode') === 'true'
  return storedDarkMode || false
}



export const AppProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(getInitialDarkMode());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const [pageId, setPageId] = useState(null);
  const [leftZero, setLeftZero] = useState(0)
  const [leftOne, setLeftOne] = useState(0)
  const [showSmiley, setShowSmiley] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const localThemeMode = localStorage.setItem('themeMode', toggleTheme);
  const [showCookies, setShowCookies] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  

  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        setToggleTheme,
        isSidebarOpen,
        toggleSidebar,
        isShowSubmenu,
        setIsShowSubmenu,
        pageId,
        setPageId,
        
        leftZero,
        setLeftZero,
        leftOne,
        setLeftOne,
        showSmiley,
        setShowSmiley,
        isHovering,
        setIsHovering,
        showCookies,
        setShowCookies
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
