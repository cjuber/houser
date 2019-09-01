import React, { Component } from 'react'
import House from '../house/House'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './dashboard.css'
export default class Dashboard extends Component {
    constructor(){
super()

this.state={
    houses: [],
  
}

    }

componentDidMount(){
    this.getHouses()
}

getHouses = () => {
    axios.get('http://localhost:8080/api/houses')
    .then(res => {
        this.setState({
            houses: res.data
        })
    })

}

deleteHouse = (id) => {
    axios.delete(`http://localhost:8080/api/houses/${id}`)
    .then(res => {
    
        this.setState({
          houses: res.data
        })
        this.getHouses()
    })
    
}

    render() {
        
        const mappedHouses = this.state.houses.map((list, index)=>{
            
            return (
                <House key={index} houses={list} deleteHouse={this.deleteHouse} />
            )
        })
        return (
            <div className='container'>
            <div className='dashboard'>
                <div className='dash'>
                 <h1>Dashboard</h1>
                <Link to='/wizard'> <button className='dashBtn'>Add New Property</button></Link>
                </div>
                <h1 className='homelist'>Home Listings</h1>
                {mappedHouses}
               
            </div>
            </div>
        )
    }
}
