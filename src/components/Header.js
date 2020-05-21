import React, { Component } from 'react';
import { connect } from 'react-redux';

import { switchLanguage } from '../actions';
import '../style/header.scss';

class Header extends Component {
    isEnglish = () => !this.props.language || this.props.language === 'ENGLISH';

    onClick = (language) => {
        this.props.switchLanguage(language);
    };

    render() {
        return (
            <nav>
                { this.isEnglish() ? (
                    <>
                        <h1>Nitsan Soffair</h1>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#news">Portfolio</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><button onClick={() => this.onClick('HEBREW')}>Heb</button></li>
                        </ul>
                    </>
                ) : (
                    <>
                        <h1>ניצן סופר</h1>
                        <ul>
                            <li><a href="#home">בית</a></li>
                            <li><a href="#news">תיק עבודות</a></li>
                            <li><a href="#contact">צור קשר</a></li>
                            <li><button onClick={() => this.onClick('ENGLISH')}>אנגלית</button></li>
                        </ul>
                    </>
                ) }
            </nav>
        );
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps, { switchLanguage }
)(Header);
