import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    // const expenseDate= new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67
    const [title, setTitle] = useState(props.title)
    
    // let title = props.title

    const clikcHandler = () => {
        // console.log('clicked!!!')
        setTitle('Updated!')
        console.log(title)
    }

    return(
    <Card className="expense-item">
        {/* <div>March 28th 2021</div> */}
        {/* <div>{expenseDate.toDateString()}</div> */}
        {/* <div>{props.date.toDateString()}</div> */}
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            {/* <h2>{expenseTitle}</h2> */}
            <h2>{title}</h2>
            {/* <h2>'Car Insurance'</h2> */}
            <div className="expense-item__price">{props.amount}</div>
            {/* <div className="expense-item__price">294.67</div> */}
        </div>
        <button onClick={clikcHandler}>Change Title</button>
    </Card>
    )
}

export default ExpenseItem 