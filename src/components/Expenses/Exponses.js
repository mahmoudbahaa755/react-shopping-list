import React ,{useState}from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "../Chart/ExpenseChart";
import Container from "../UI/Container";
import './Expenses.css'
import YearFilterExpense from "../FilterExpense/YearFilterExpense";
function  Expenses (props){

    const yearDate= []
     props.expense.map(element =>{
        let i =element['date'].getFullYear()
        if (!yearDate.includes(i)){
            yearDate.push(i)
        }
    })
            yearDate.sort()
    const [filterYear,setFilterYear]= useState(true);
        const yearFiltered = (e) =>{
            let i=e.target.value
            
            setFilterYear(i)
        }
        return(
            <div className='Expenses'>

            <Container>
            <YearFilterExpense filterByYear={yearFiltered} getYear={yearDate}/>
            <ExpenseChart  data ={props}/>
            {}
            {filterYear === true || filterYear === 'true' ? (  
                     
                props.expense.map( (e) =>  {  
            return(  
                <div>    
                                
                <ExpenseItem 
                key={e.id}
               prop={{...e}}
               />
                </div>             
               
               )
               }
               
               )) :
                (
                props.expense.map( (e) =>  {  
                    let year = e['date'].getFullYear()
                    if (filterYear == year){
            return(             
                <ExpenseItem 
                key={e.id}
               prop={{...e}}
               />)
               }
                    }
               )
               )
               }

            </Container>
            </div>

        );
}
export default Expenses;