import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart7({dates4, impressions4, clicks4}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Wednesday)"
            data= {{
                labels: dates4,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions4,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks4,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }