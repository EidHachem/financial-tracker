import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

import { v4 as uuidv4 } from 'uuid'

const NewExpense = ({onAddExpense}) => {

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {...enteredData, id: uuidv4()}
        onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense