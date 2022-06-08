import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openSubmenu = () => {
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
        }}
    >
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext};