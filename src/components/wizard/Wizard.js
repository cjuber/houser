import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import WizardOne from './WizardOne'
import WizardTwo from './WizardTwo'
import WizardThree from './WizardThree'



export default class Wizard extends Component {




    render() {
        
        return (
           <Switch>
               <Route exact path ='/wizard' component={WizardOne}/>
               <Route path ='/wizard/step2'component={WizardTwo}/>
               <Route path ='/wizard/step3'component={WizardThree}/>

           </Switch>
        )
    }
}
