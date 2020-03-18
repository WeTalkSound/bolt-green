import React, { Component } from 'react'

export default class TextField extends Component {
    state = { value: '' }

  // Handle Change.
  handlechange = ({target: {value}}) => this.setState(state => value.length <= 8 && {value} || state)

  render() {
    return (
        <input placeholder="Your Name" value={this.state.value} onChange={this.handlechange}/>
    )
  }
}
