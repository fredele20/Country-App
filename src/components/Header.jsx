import React, { Component } from 'react'
import Country from './Country'
import { Route, Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="header">
                    
                    <div>
                        <h4>Country App</h4>
                    </div>
                    
                </nav>
            </div>
        )
    }
}

export default Header
