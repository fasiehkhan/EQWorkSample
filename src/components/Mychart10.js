import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart10({dates7, impressions7, clicks7}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Saturday)"
            data= {{
                labels: dates7,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions7,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks7,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }