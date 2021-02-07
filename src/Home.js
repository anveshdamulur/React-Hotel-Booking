import React from 'react';
import QuickSearch from './Components/QuickSearch';
import Search from './Components/Search';
import Footer from './Footer';
import Header from './Header';

const Home = ()=>{
    return(
        <React.Fragment>
            <Header/>
                <Search/>
                <QuickSearch/>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;