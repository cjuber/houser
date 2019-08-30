import React, { Component } from 'react'


export default class House extends Component {
    render() {
        const {id,name, address, city, state, zip} = this.props.houses
        
        return (
            <div>
                <p>{name}</p>
                <p>{address}</p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{zip}</p>
                <button onClick={ () => this.props.deleteHouse(id)}>Delete</button>
            </div>
        )
    }
}
