import React from 'react';

import Nav from '../../components/LogoutNav/Nav';
import Header from '../../components/Home/Header/Header';
import Footer from '../../components/FullWidthFooter/Footer';

class Home extends React.Component {

    render() {
        document.title = 'Fiszki - Strona główna'
        return (
            <>
                <Nav />
                <Header />
                <Footer />
            </>
        );
    }
}

export default Home;
