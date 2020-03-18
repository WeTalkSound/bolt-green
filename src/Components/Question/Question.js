import React, { Component } from 'react'
import './Question.css'

export default class Question extends Component {
  render() {
    return (
      <div className="Question mt-3 align-items-center card-deck"
        style={{
          display: this.props.show ? 'flex' : 'none'
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
