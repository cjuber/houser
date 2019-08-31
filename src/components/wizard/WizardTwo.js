import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../redux/store'
import {STEPTWOIMG} from '../../redux/reducer'

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
            <div>
                <Link exact to = '/'> <button>Cancel</button></Link>
                <label>Image URL</label>
                <input  value={this.state.img} onChange={ (e) => this.handleImgUpdate(e.target.value)}></input>
                <Link exact to='/wizard'><button onClick={() => this.saveStepTwo()}>Previous Step</button></Link>
               <Link exact to='/wizard/step3'><button onClick={this.saveStepTwo}>Next Step</button></Link>
            </div>
        )
    }
}
