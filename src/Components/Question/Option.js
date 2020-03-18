import React, { Component } from 'react'
import './Option.css'

export default class Option extends Component {
  render() {
    const label = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
    let currentClass = this.props.selected(parseInt(this.props.question), this.props.option) ? "selected" : ""
    return (
      <div
        onClick={() => { this.props.onClick(this.props.question, this.props.answer) } }
        className={"btn-primary btn quiz-option mb-3 " + currentClass}
      >
        <div className="label">
          { label[this.props.label] + ". " }
        </div>
        <p>{ this.props.value }</p>
      </div>
    )
  }
}
