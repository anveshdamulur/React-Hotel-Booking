import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListApi from '../Components/ListData/ListApi';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
const Routing =()=>{
    return(
        <Router>
        <Header/>
            <Route exact path='/' component={ Home }/>
            <Route path='/list/:id' component={ ListApi }/>
        <Footer/>
        </Router>
    )
}
export default Routing;