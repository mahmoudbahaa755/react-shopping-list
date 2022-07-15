import React from "react";
import './ChartBar.css'

function ChartBar(data){
    console.log(data)

    const fillValue= (data.value / data.maxValue *100)+'%'
    return(
        <div className="chart-bar__container">

        <div className="chart-bar">
        <div className="chart-bar__inner"
         style={{height:fillValue,'background':'#452994'}}
         >
        
        </div>
        </div>
            <div className="month">{data.month}</div>
        </div>
    )
}

export default ChartBar;