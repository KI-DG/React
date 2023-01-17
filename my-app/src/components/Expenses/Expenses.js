import React, {useState} from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card'

const Expenses = (props) => {
    const [filteredYear, setFilterYear] = useState('2020')

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear)
    }
    return(
    <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter= {filterChangeHandler}/>
            {props.items.map((expense) => 
            (<ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />
            ))}
            
            {/* 위에 처럼 하면 밑에 처럼 하드코딩 할 필요가 없다 */}
            {/* <ExpenseItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem 
            title={props.items[3].title}
            amount={props.items[3].amount}
            date={props.items[3].date}
            ></ExpenseItem> */}
        
        </Card>
    </div>  
    )
}

export default Expenses