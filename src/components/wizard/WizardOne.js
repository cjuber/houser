import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../redux/store'
import {STEPONENAME, STEPONEADDRESS, STEPONECITY, STEPONESTATE, STEPONEZIP} from '../../redux/reducer'
import './wizardOne.css'

export default class WizardOne extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state={
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img:reduxState.img
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            const reduxState = store.getState()
            this.setState({
            name: reduxState.name,     
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
            })
        })
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

    saveStepOne = ()=>{
           
        store.dispatch({
            type: STEPONENAME,
            payload: this.state.name
        })
        store.dispatch({
            type: STEPONEADDRESS,
            payload: this.state.address
        })
        store.dispatch({
            type: STEPONECITY,
            payload: this.state.city
        })
        store.dispatch({
            type: STEPONESTATE,
            payload: this.state.state
        })
        store.dispatch({
            type: STEPONEZIP,
            payload: this.state.zip
        })
        
        
    }
    
    render() {
        console.log(this.state.img)
        return (
            <div className="one-container">
                <div className='list-container'>
                <div className='mid'>
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
                </div>
                <Link to='/wizard/step2'><button onClick={() => this.saveStepOne()}>Next Step</button></Link>
                </div>
            </div>
        )
    }
}
