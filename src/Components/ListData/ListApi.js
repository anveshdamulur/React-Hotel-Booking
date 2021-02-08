import axios from 'axios';
import React, { Component } from 'react'
import Filter from '../Filters/Filter';
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


    render() {
        return (
        <div>
            <div className="row">
                    <div className="col-md-4">
                       <Filter roomTypeData ={(filData)=>{this.setDataPerFfilter(filData)}}/>
                    </div>
                    <div className="col-md-8">
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
