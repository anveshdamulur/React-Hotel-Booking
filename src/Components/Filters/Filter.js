import axios from 'axios';
import React, { Component } from 'react'
import './filter.css'

const filterUrl ='https://developerfunnel.herokuapp.com/hotellist'

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
                         <input type="radio" name="room" value='' id=""/><span>All</span>
                    </label>
                    <label className="radio">
                         <input type="radio" name="room" value='1' id=""/><span>Deluxe Romm</span>
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='2' id=""/><span>Premium Romm</span> 
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='3' id=""/><span>Travel Romm</span> 
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='4' id=""/><span>Semi Delux Romm</span> 
                    </label> 
            
            </div>
        )
    }
}
