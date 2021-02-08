import axios from 'axios';
import React, { Component } from 'react'
import './filter.css'

const costUrl ='https://developerfunnel.herokuapp.com/hotellist'

export default class FilterCost extends Component {
     
     handleCoastFilter=(e)=>{
          let costData = e.target.value;
          let tripId = sessionStorage.getItem('tripId')
         let splitCost = costData.split(",")
          let costFilterUrl;
          if(costData == ""){
               costFilterUrl = `${costUrl}/${tripId}`
          }
          else{
               costFilterUrl = `${costUrl}/${tripId}?hcost=${splitCost[1]}&lcost=${splitCost[0]}`
          }
          axios.get(costFilterUrl)
          .then((response)=>{
               this.props.filterWithCost(response.data)
          })
          
     }


    render() {
        return (
            <div onChange={this.handleCoastFilter} className="container-filter">
               
                    <label className="radio">
                         <input type="radio" name="room" value="" id=""/><span>All</span> 
                    </label>
                    <label className="radio">
                         <input type="radio" name="room" value='1000,3000' id=""/><span>1000-3000</span>
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='3001,6000' id=""/><span>3000-6000</span>
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='6001,9000' id=""/><span>6000-9000</span>
                    </label> 
                    <label className="radio">
                         <input type="radio" name="room" value='9001,12000' id=""/><span>9000+</span>
                    </label> 
            
            </div>
        )
    }
}
