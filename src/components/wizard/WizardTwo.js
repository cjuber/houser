import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class WizardTwo extends Component {
    render() {
        return (
            <div>
                <Link exact to = '/'> <button>Cancel</button></Link>
                <label>Image URL</label>
                <input  onChange={ (e) => this.handleNameUpdate(e.target.value)}></input>
                <Link exact to='/wizard'><button >Previous Step</button></Link>
               <Link exact to='/wizard/step3'><button >Next Step</button></Link>
            </div>
        )
    }
}
