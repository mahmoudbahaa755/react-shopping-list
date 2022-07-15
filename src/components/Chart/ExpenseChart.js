import React from "react";
import Chart from "./Chart";
function ExpenseChart(data){
    console.log(data)
    const dataPoints=[
        {month:'Jun' ,value:0},
        {month:'Feb' ,value:0},
        {month:'Mar' ,value:0},
        {month:'Apr' ,value:0},
        {month:'May' ,value:0},
        {month:'Jun' ,value:0},
        {month:'Jul' ,value:0},
        {month:'Aug' ,value:0},
        {month:'Sep' ,value:0},
        {month:'Oct' ,value:0},
        {month:'Nov' ,value:0},
        {month:'Dec' ,value:0}
    ]
    data.data.expense.map(e =>{
const expenseMonth = e.date.getMonth();
        dataPoints[expenseMonth].value+= e.amount;
    })
  
    return(
        <div>
            <Chart dataPoints={dataPoints}/>
        </div>
    )
}

export default ExpenseChart;