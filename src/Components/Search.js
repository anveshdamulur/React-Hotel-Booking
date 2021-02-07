import React, { Component } from 'react'
import './searchStyle.css';

const lUrl ='https://developerfunnel.herokuapp.com/location';
const hUrl = 'https://developerfunnel.herokuapp.com/hotels?city=';

export default class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            location :'',
            hotels :''
        }
    }
    renderCity =(data)=>{
        if(data){
           return data.map((item,index)=>{
                return(
                    <option key={index} value={item.city}>{item.city_name}</option>
                )
            })
        }
    }

    handleChangeCity=(e)=>{
        const cityId = e.target.value;
        console.log(cityId)
        fetch(`${hUrl}${cityId}`)
        .then((res)=> res.json())
        .then((data)=>{
                console.log(data)
              this.setState({
                hotels : data
              })
        })
    }

    renderHotels=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item._id}>{item.name}</option>
                )
            })
        }
    }
    render() {
        return (
            <div  className='imageContainer'>
                <div id="logo">
                    <b>E!</b>
                </div>
                <div className='heading'>
                    Plan Trip with us!
                </div>
                <div className='locationSelector'>
                    <select id='locationDropDown' onChange={this.handleChangeCity}>
                        <option>---Select City---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select name="" id="restaurentInput">
                        <option value="">---Select Hotel---</option>
                        {this.renderHotels(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }
    componentDidMount=()=>{
        fetch(lUrl,{method : 'GET'})
        .then((res)=>res.json())
        .then((data)=>this.setState({
            location : data
        }))
        .catch(err => err);
    }

}
