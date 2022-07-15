import React from "react";
import './ExpenseDate.css'

function ExpenseDate(props){


    const day= props.date.toLocaleString('en-US',{day:'2-digit'})
     const month= props.date.toLocaleString('en-US',{month:'long'})
     const year= props.date.getFullYear()


    return(

<div className="expense-date">
        <div className="">
          <div className="el ">{month}</div>
          <div className="el">{day}</div>
          <div className="el">{year}</div>
         </div>
        </div>
    );


}
export default ExpenseDate;