import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";
function Chart(data){
    var maxAmount = data.dataPoints.map( e => {
        return e['value']
    })
    console.log(data.dataPoints)
    var maxAmount = Math.max(...maxAmount)
    return(
        <div className="chart">
           
           {
            data.dataPoints.map(e=> {
                return(

                <ChartBar maxValue={maxAmount}
                    key={e.month}
                    month={e.month}
                    value={e.value}
                />
                )
            })
           }


            
        </div>
    )
}

export default Chart;