import React, { Component } from 'react'
import './house.css'


export default class House extends Component {
    render() {
        const {id,name, address, city, state, zip,img,mortgage,rent} = this.props.houses
        
        return (
            <div className="box">
               <div className="box-left">
                   <img src={img}></img>
                <p>{name}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{zip}</p>
                <p>{mortgage}</p>
                <p>{rent}</p>
                </div> 
                <button onClick={ () => this.props.deleteHouse(id)}>Delete</button>
            </div>
        )
    }
}
