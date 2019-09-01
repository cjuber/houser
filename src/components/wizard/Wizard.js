import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import WizardOne from './WizardOne'
import WizardTwo from './WizardTwo'
import WizardThree from './WizardThree'
import {Link} from 'react-router-dom'
import store from '../../redux/store'
import { CANCEL } from '../../redux/reducer';
import './wizard.css'



export default class Wizard extends Component {


    cancel = (e) => {
        store.dispatch({
            type: CANCEL,
            payload: ''
              
        })
    }

    render() {
        
        return (
            <div>
            <div className="wizdash">
            <div className='top'>
                <h1>Add New Listing</h1>
                <Link exact to = '/'> <button className='cancel' onClick={() => this.cancel()}>Cancel</button></Link>
                </div>
                </div>
           <Switch>
               <Route exact path ='/wizard' component={WizardOne}/>
               <Route path ='/wizard/step2'component={WizardTwo}/>
               <Route path ='/wizard/step3'component={WizardThree}/>

           </Switch>
           </div>
        )
    }
}
