import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart6({dates3, impressions3, clicks3}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Tuesday)"
            data= {{
                labels: dates3,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions3,
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