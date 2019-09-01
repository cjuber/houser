import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../redux/store'
import {STEPTWOIMG} from '../../redux/reducer'
import './wizardtwo.css'

export default class WizardTwo extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount(){
        
        store.subscribe(()=> {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
            })
            
        })
        
    }

    handleImgUpdate = (e) => {
        this.setState({
            img: e
        })
    }

    saveStepTwo = (e) => {
        store.dispatch({
            type: STEPTWOIMG,
            payload: this.state.img
        })
    
    }
    render() {
        
        return (
            <div className="one-container">
                <div className='list-container'>
                <div className='imgurl'>
                <label>Image URL</label>
                <input  value={this.state.img} onChange={ (e) => this.handleImgUpdate(e.target.value)}></input>
                </div>
                <div className='twobuttons'>
                <Link exact to='/wizard'><button className='twoprev' onClick={() => this.saveStepTwo()}>Previous Step</button></Link>
               <Link exact to='/wizard/step3'><button className='twonext' onClick={this.saveStepTwo}>Next Step</button></Link>
               </div>
               </div>
            </div>
        )
    }
}
