import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Buttons extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/data" className="button">
                    Impressions
                </Link>

                <Link to="/data3" className="button3">
                    Clicks vs Impressions
                </Link>
            </div>
        )
    }
}

export default Buttons
