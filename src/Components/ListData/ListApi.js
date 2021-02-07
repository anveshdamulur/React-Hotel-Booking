import axios from 'axios';
import React, { Component } from 'react'
import ListDisplay from './ListDisplay';

const listUrl = 'https://developerfunnel.herokuapp.com/hotellist'

export default class ListApi extends Component {
   
    constructor(props){
        super(props);
        this.state={
            listData :''
        }
    }

    render() {
        return (
            <div>
                <ListDisplay
                    displayList = {this.state.listData}
                />
            </div>
        )
    }
    componentDidMount(){
        const tripId = this.props.match.params.id;
        axios.get(`${listUrl}/${tripId}`)
        .then((response)=>{
            this.setState({
                listData : response.data
            })
        })
    }

}
