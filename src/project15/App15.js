import { AppProvider } from './context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app15.css'
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';
import SingleCocktail from './componenets/SingleCocktail';
import Error from './componenets/Error';

const App15 = () => {
    return (
        <AppProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/cocktail/:id' element={<SingleCocktail/>}></Route>
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </AppProvider>
    );
};

export default App15;