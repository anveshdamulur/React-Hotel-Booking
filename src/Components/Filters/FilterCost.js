import axios from 'axios';
import React, { Component } from 'react'
import './filter.css'

const filterUrl ='https://developerfunnel.herokuapp.com/hotellist   '

export default class Filter extends Component {
    handleFilter=(e)=>{
       let filterValue = e.target.value;
       console.log(filterValue)
       let tripValue = sessionStorage.getItem('tripId');
       let roomUrl;

       if(filterValue === ''){
            roomUrl = `${filterUrl}/${tripValue}`
       }
       else{
           roomUrl = `${filterUrl}/${tripValue}?roomtype=${filterValue}`
       }
       axios.get(roomUrl)
       .then((response)=>{this.props.roomTypeData(response.data)})
    }
    render() {
        return (
            <div onChange={this.handleFilter} className="container-filter">
               
                    <label className="radio">
                         <input type="radio" name="room" value='1000' id=""/>All 
                    </label>
                    <label className="radio">
                         <input type="radio" name="room" value='2000' id=""/>Deluxe Romm
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='3000' id=""/>Premium Romm
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='4000' id=""/>Travel Romm
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='5000' id=""/>Semi Delux Romm
                    </label> 
            
            </div>
        )
    }
}
