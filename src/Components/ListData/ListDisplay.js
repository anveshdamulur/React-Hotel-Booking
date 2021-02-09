import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './listDisplay.css'
export default class ListDisplay extends Component {



    
    handleListData=(data,index)=>{
        if(data){
            if(data.length == 0){
                return(
                    <div className='container-nodata'>
                        <h1>No Data found !!!</h1>
                    </div>
                )
            }
            return(
                <div key={index}> 
                        {data.map((list,i)=>{
                            return( 
                                <div key={i} className="conatiner-listdisplay">
                                    <div key={i} class="d-flex flex-row card" style={{width:'600px'}}>
                                    <img class="card-img-top" src={list.thumb} style={{width:'150px', height:'100px'}} alt="Card image"/>
                                        <div class="card-body">
                                            <Link to={`/details/${list._id}`}><h4 class="card-title">{list.name}</h4></Link>
                                            <p class="card-text">{list.city_name}</p>
                                            <p className="card-text">{list.locality}</p>
                                            <p className="card-text">{list.address}</p>
                                            <p className="card-text">{list.cost}</p>
                                        </div>
                                    </div>                                    
                                </div>
                                )
                            })
                        }
                </div>      
            )
        }
    }   
    render() {
        return (
        <>
            <div>
                <p>{this.handleListData(this.props.displayList)}</p>
            </div>
        </>
        )
    }
}
