import React from 'react'

const AddNewExpense = ({onShowForm}) => {
  return (
    <div>
        <button onClick={() => onShowForm(true)}>Add New Expense</button>
    </div>
  )
}

export default AddNewExpense