import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart4({dates, impressions, clicks}) {
    
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
                    values: clicks,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }