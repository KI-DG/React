import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate= new Date(2021, 2, 28)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67

    return(
    <div className="expense-item">
        {/* <div>March 28th 2021</div> */}
        {/* <div>{expenseDate.toDateString()}</div> */}
        <div>{props.date.toDateString()}</div>
        <div className="expense-item__description">
            {/* <h2>{expenseTitle}</h2> */}
            <h2>{props.title}</h2>
            {/* <h2>'Car Insurance'</h2> */}
            <div className="expense-item__price">{props.amount}</div>
            {/* <div className="expense-item__price">294.67</div> */}
        </div>
    </div>)
}

export default ExpenseItem 