import axios from 'axios';
import React, { Component } from 'react'
import Filter from '../Filters/Filter';
import FilterCost from '../Filters/FilterCost';
import ListDisplay from './ListDisplay';
const listUrl = 'https://developerfunnel.herokuapp.com/hotellist'

export default class ListApi extends Component {
   
    constructor(props){
        super(props);
        this.state={
            listData :''
        }
    }

    setDataPerFfilter=(data)=>{
        if(data){
            this.setState({
                listData : data
            })
        }
    }
    setCostFilter=(costData)=>{
        if(costData){
            this.setState({
                listData : costData
            })
        }
    }


    render() {
        return (
        <div>
            <div className="row">
                    <div className="col-md-3">
                       <Filter roomTypeData ={(filData)=>{this.setDataPerFfilter(filData)}}/>
                       <hr/>
                       <FilterCost filterWithCost ={(costData)=>{this.setCostFilter(costData)}}/>
                    </div>
                    <div className="col-md-9">
                        <ListDisplay
                        displayList = {this.state.listData}
                        />
                    </div>
                </div>       
            </div>
        )
    }
    componentDidMount(){
        const tripId = this.props.match.params.id;
        sessionStorage.setItem('tripId',tripId);
        axios.get(`${listUrl}/${tripId}`)
        .then((response)=>{
            this.setState({
                listData : response.data
            })
        })
    }

}
