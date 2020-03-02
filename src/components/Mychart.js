import React, { Component } from 'react'
import ReactFrappeChart from "react-frappe-charts";




export default function Mychart({dates, events}) {
    
        return (
            <ReactFrappeChart
            type="bar"
            colors={["#21ba45"]}
            title='Impressions per Day'
            axisOptions={{ xAxisMode: "span", yAxisMode: "span", xIsSeries: 1 }}
            height={250}
            data={{
              labels: dates,
              datasets: [{ values: events }]
            }}
          />
        );
      }


