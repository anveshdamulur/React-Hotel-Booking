import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class QuickDisplay extends Component {
    handleDisplayData=(data,index)=>{
        if(data){
            return(
                <div>
                    {data.map((item,i)=>{
                    return(
                            <div key={i} className='container-display'>
                                    <Link to={`/list/${item.trip}`}>
                                        <div className="card lg-2" style={{width: '600px'}}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                            <img src={item.image} style={{width: '200px'}} alt="..."/>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">Start your {item.name} journey...</p>
                                            </div>
                                            </div>
                                        </div>
                                        </div>        
                                    </Link>
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
            <div>
                {this.handleDisplayData(this.props.data)}
            </div>
        )
    }
}
