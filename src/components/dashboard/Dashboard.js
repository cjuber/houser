import React, { Component } from 'react'
import House from '../house/House'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
super()

this.state={
    houses: [],
    // name: '',
    // address: '',
    // city: '',
    // state: '',
    // zip: '',
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
        console.log(this.state.houses)
    })
    
}

    render() {
        console.log(this.state.houses)
        const mappedHouses = this.state.houses.map((list, index)=>{
            
            return (
                <House key={index} houses={list} deleteHouse={this.deleteHouse} />
            )
        })
        return (
            <div>
                 
                <Link to='/wizard'> <button>Add New Property</button></Link>
                {mappedHouses}
               
            </div>
        )
    }
}
