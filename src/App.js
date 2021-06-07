import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './Routes';

const App = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes/>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;