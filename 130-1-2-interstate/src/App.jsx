import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes />
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;