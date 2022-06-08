import React from 'react';
import './app13.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import Submenu from './components/Submenu'
import { AppProvider } from './context';

const App13 = () => {
    return (
        <AppProvider>
            <Navbar />
            <Sidebar />
            <Hero />
            <Submenu />
        </AppProvider>
    );
};

export default App13;