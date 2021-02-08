import React from 'react';
import QuickSearch from './Components/QuickSearch';
import Search from './Components/Search';

const Home = ()=>{
    return(
        <React.Fragment>
                 <Search/>
                <QuickSearch/>         
        </React.Fragment>
    )
}

export default Home;