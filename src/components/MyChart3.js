import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart3({dates, impressions, clicks3}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Sunday)"
            data= {{
                labels: dates,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks3,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }