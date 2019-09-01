import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../redux/store'
import {STEPTHREEMORTG, STEPTHREERENT} from '../../redux/reducer'
import './wizardthree.css'

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
            <div className = 'one-container'>
                <div className='list-container'>
                 <div className = 'two-container'> 
                    <h1>Recommended Rent: $0</h1>
                <div className='monthlym'>             
                <label>Monthly Mortgage Amount</label>
                <input  value={this.state.mortgage} onChange={ (e) => this.handleMortgageUpdate(e.target.value)}></input>
                </div>  
                <div className='monthlyr'>
                <label>Desired Monthly Rent</label>
                <input value={this.state.rent} onChange={ (e) => this.handleRentUpdate(e.target.value)}></input>
                </div> 
                <div className='three-buttons'>
                <Link to='/wizard/step2'><button className='threeprev' onClick={() => this.saveStepThree()}>Previous Step</button></Link>
               <Link exact to='/'><button className='complete' onClick = {this.addHouse}>Complete</button></Link>
               </div>
               </div>  
               </div>
            </div>
        )
    }
}
