import React from 'react';

import './home.sass';

import Nav from '../../components/Home/Nav';
import Header from '../../components/Home/Header';
import Main from '../../components/Home/Main';
import Footer from '../../components/FullWidthFooter/Footer';

class Home extends React.Component {

    render() {
        return (
            <>
                <Nav />
                <Header />
                <Main />
                <Footer />
            </>
        );
    }
}

export default Home;
