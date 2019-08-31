import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../redux/store'
import {STEPTHREEMORTG, STEPTHREERENT} from '../../redux/reducer'

export default class WizardThree extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount(){
        store.subscribe(()=> {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    handleMortgageUpdate = (e) => {
        this.setState({
            mortgage: e
        })
    }

    handleRentUpdate = (e) => {
        this.setState({
            rent: e
        })
    }
    saveStepThree = (e) => {
        store.dispatch({
            type: STEPTHREEMORTG,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: STEPTHREERENT,
            payload: this.state.rent
        })
    }


    addHouse = () => {
        const reduxState = store.getState()
        const body = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: this.state.mortgage,
            rent: this.state.mortgage
           }
           axios.post('http://localhost:8080/api/houses', body).then(response =>{
    
            this.setState({
            houses: response.data
            })
            
            
            
        })
    }

    saveStepThree = (e) => {
        store.dispatch({
            type: STEPTHREEMORTG,
            payload: this.state.mortgage
        })
        store.dispatch({
            type: STEPTHREERENT,
            payload: this.state.rent
        })
    }
    render() {
        return (
            <div>
                <Link exact to = '/'> <button>Cancel</button></Link>
                <label>Monthly Mortgage Amount</label>
                <input  value={this.state.mortgage} onChange={ (e) => this.handleMortgageUpdate(e.target.value)}></input>
                <label>Desired Monthly Rent</label>
                <input value={this.state.rent} onChange={ (e) => this.handleRentUpdate(e.target.value)}></input>
                <Link exact to='/wizard/step2'><button  onClick={() => this.saveStepThree()}>Previous Step</button></Link>
               <Link exact to='/'> <button onClick = {this.addHouse}>Complete</button></Link>
            </div>
        )
    }
}
