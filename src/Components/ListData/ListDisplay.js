import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class ListDisplay extends Component {
    handleListData=(data,index)=>{
        if(data){
            return(
                <div key={index}> 
                        {data.map((list,i)=>{
                            return( 
                                <div>
                                    <div key={i} class="d-flex flex-row card" style={{width:'500px'}}>
                                    <img class="card-img-top" src={list.thumb} style={{width:'200px'}} alt="Card image"/>
                                        <div class="card-body">
                                        <h4 class="card-title">{list.name}</h4>
                                        <p class="card-text">{list.city_name}</p>
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
        console.log(this.handleListData)
        return (
            <div className='container-fluid'> 
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <Link className="navbar-brand" to='/' >Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                        </li>    
                        </ul>
                    </div>  
                </nav>
                <br/>

                <div>
                    <h3>Collapsible Navbar</h3>
                    <p>{this.handleListData(this.props.displayList)}</p>
                </div>
            </div>
        )
    }
}
