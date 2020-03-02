import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";



export default function Mychart5({dates2, impressions, clicks2}) {
    
        return (
            <ReactFrappeChart
            title="Clicks vs Impressions (Monday)"
            data= {{
                labels: dates2,
                datasets: [
                  {
                    name: "Impressions",
                    values: impressions,
                    chartType: 'line'
                  },
                  {
                    name: "Clicks",
                    values: clicks2,
                    chartType: 'line'
                  }
                ]
            }
        }
        type='axis-mixed'
            
          />
        );
      }



      