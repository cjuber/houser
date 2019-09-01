import React, { Component } from 'react'
import './house.css'


export default class House extends Component {
    render() {
        const {id,name, address, city, state, zip,img,mortgage,rent} = this.props.houses
        
        return (
            <div className="box">
               <div className="box-left">
                   <img src={img}></img>
              </div> 
              <div className="box-mid">
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div> 
            <div className='box-right'>
                <p>Monthly Mortgage{mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>  
                <button onClick={ () => this.props.deleteHouse(id)}>x</button>
            </div>
        )
    }
}
