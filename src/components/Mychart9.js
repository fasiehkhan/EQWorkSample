import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart9({dates6, impressions6, clicks6}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Friday)"
            data= {{
                labels: dates6,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions6,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks6,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }