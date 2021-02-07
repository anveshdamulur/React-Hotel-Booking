import React, { Component } from 'react'
import QuickDisplay from './QuickDisplay';
const qUrl = 'https://developerfunnel.herokuapp.com/booking'; 
export default class QuickSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            quickSearch :''
        }
    }
    
    render() {
        return (
            <div>
                <QuickDisplay
                    data = {this.state.quickSearch}
                />
            </div>
        )
    }
    componentDidMount(){
        fetch(qUrl,{method:'GET'})
        .then((res)=>res.json())
        .then(data =>{
            this.setState({
                quickSearch : data
            })
        })
    }
}

