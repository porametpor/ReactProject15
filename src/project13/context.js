import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});
    const openSidebar = () => {
        setIsSidebarOpen(true);
      };
      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
      const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
      };
      const closeSubmenu = () => {
        setIsSubmenuOpen(false);
      };

    return <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            openSidebar,
            closeSidebar,
            page,
            location,
        }}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext};