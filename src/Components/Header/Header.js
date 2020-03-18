import React, { Component } from 'react'
import './Header.css'
import logo from './logo.png'

export default class Header extends Component {
    render() {
        return (
            <nav className="">
                <img className="brand-logo" src={logo} alt="Bolt" />
            </nav>
        )
    }
}
