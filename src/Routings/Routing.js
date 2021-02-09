import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListApi from '../Components/ListData/ListApi';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Booking from '../Components/Booking/Booking';
const Routing =()=>{
    return(
        <Router>
        <Header/>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/list/:id' component={ ListApi }/>
            <Route path='/details/:id' component={ Booking }/>
        <Footer/>
        </Router>
    )
}
export default Routing;