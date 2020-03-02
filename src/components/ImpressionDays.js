import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class ImpressionDays extends Component {
    render() {
        return (
            <div className="container2">
            <Link to="/data4" className="button2">
                Clicks vs Impressions (Sunday)
            </Link>

            <Link to="/data5" className="button2">
                Clicks vs Impressions (Monday)
            </Link>

            <Link to="/data6" className="button2">
                Clicks vs Impressions (Tuesday)
            </Link>

            <Link to="/data7" className="button2">
                Clicks vs Impressions (Wednesday)
            </Link>
            <Link to="/data8" className="button2">
                Clicks vs Impressions (Thursday)
            </Link>
            <Link to="/data9" className="button2">
                Clicks vs Impressions (Friday)
            </Link>
            <Link to="/data10" className="button2">
                Clicks vs Impressions (Saturday)
            </Link>
        </div>
        )
    }
}

export default ImpressionDays
