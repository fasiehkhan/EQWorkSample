import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart8({dates5, impressions5, clicks5}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Thursday)"
            data= {{
                labels: dates5,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions5,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks5,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }