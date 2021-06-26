import React, { Component } from 'react'

export default class NewClassone extends Component {

constructor()
{
    super();
    this.state={
        label:"heading"
    }
    this.handleOnClick=this.handleOnClick.bind(this);
}

handleOnClick=()=>
{
    this.setState(
        {
            label:"updated value of label"+new Date()
        }
    )
}

    render() {
        return (
            <div>
               <button onClick={this.handleOnClick}>{this.state.label}</button>
            </div>
        )
    }
}
