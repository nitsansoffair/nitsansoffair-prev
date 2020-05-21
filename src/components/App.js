import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import '../style/index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <section id="header"><Header/></section>
                <section id="home"><Home/></section>
                <section id="services"><Services/></section>
                <section id="contact"><Contact/></section>
                <section id="footer"><Footer/></section>
            </div>
        );
    }
}

export default App;
