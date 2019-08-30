import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class WizardThree extends Component {

    addHouse = () => {
        const body = {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
           }
           axios.post('http://localhost:8080/api/houses', body).then(response =>{
    
            this.setState({
            houses: response.data
            })
            
            
            
        })
    }
    render() {
        return (
            <div>
                <Link exact to = '/'> <button>Cancel</button></Link>
                <label>Monthly Mortgage Amount</label>
                <input  onChange={ (e) => this.handleNameUpdate(e.target.value)}></input>
                <label>Desired Monthly Rent</label>
                <input  onChange={ (e) => this.handleAddUpdate(e.target.value)}></input>
                <Link exact to='/wizard/step2'><button >Previous Step</button></Link>
               <Link exact to='/'> <button onClick = {this.addHouse}>Complete</button></Link>
            </div>
        )
    }
}
