import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class WizardOne extends Component {
    constructor(){
        super()
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }
    handleNameUpdate = (e) => {
        this.setState({
            name: e
        })
    }
    handleAddUpdate = (e) => {
        this.setState({
            address: e
        })
    }
    handleCityUpdate = (e) => {
        this.setState({
            city: e
        })
    }
    handleStateUpdate = (e) => {
        this.setState({
            state: e
        })
    }
    handleZipUpdate = (e) => {
        this.setState({
            zip: e
        })
    }
    
    render() {
        return (
            <div>
                <Link exact to = '/'> <button>Cancel</button></Link>
                <label>Property Name</label>
                <input value={this.state.name} onChange={ (e) => this.handleNameUpdate(e.target.value)}></input>
                <label>Address</label>
                <input value={this.state.address} onChange={ (e) => this.handleAddUpdate(e.target.value)}></input>
                <label>City</label>
                <input value={this.state.city} onChange={ (e) => this.handleCityUpdate(e.target.value)}></input>
                <label>State</label>
                <input value={this.state.state} onChange={ (e) => this.handleStateUpdate(e.target.value)}></input>
                <label>Zip</label>
                <input type="number" value={this.state.zip} onChange={ (e) => this.handleZipUpdate(e.target.value)}></input>
                <Link to='/wizard/step2'><button>Next Step</button></Link>
            </div>
        )
    }
}
