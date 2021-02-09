import axios from 'axios';
import React, { Component } from 'react'
const detailsUrl = "https://developerfunnel.herokuapp.com/hotelsdetails"
export default class Booking extends Component {
    
    constructor(){
        super();
        this.state={
            details : '',
            tripeId : sessionStorage.getItem('tripId')
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.details.name}</h1>
            </div>
        )
    }

   async componentDidMount(){
        let hotelId = this.props.match.params.id;
        console.log(hotelId)
        let hotelDeatils = await axios.get(`${detailsUrl}/${hotelId}`);
        console.log(hotelDeatils.data[0])
        this.setState({ 
           details : hotelDeatils.data[0]
        })
    }
}
