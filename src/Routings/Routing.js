import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListApi from '../Components/ListData/ListApi';
import Home from '../Home';
const Routing =()=>{
    return(
        <Router>
            <Route exact path='/' component={ Home }/>
            <Route path='/list/:id' component={ ListApi }/>
        </Router>
    )
}
export default Routing;