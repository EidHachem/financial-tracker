import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

import { v4 as uuidv4 } from 'uuid'
import AddNewExpense from './AddNewExpense'

const NewExpense = ({onAddExpense}) => {

  const [isFormVisible, setIsFormVisibla] = useState(false)

    const saveExpenseDataHandler = (enteredData) => {
        const expenseData = {...enteredData, id: uuidv4()}
        onAddExpense(expenseData)
    }

    const showFormHandler = (value) => {
      setIsFormVisibla(value)
    }
  return (
    <div className='new-expense'>
    {isFormVisible ?
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onShowForm={showFormHandler}/>
      : <AddNewExpense onShowForm={showFormHandler} />
    }
        
    </div>
  )
}

export default NewExpense