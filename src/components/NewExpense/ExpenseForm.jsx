import React, { useState } from "react"

import "./ExpenseForm.css"

const ExpenseForm = ({ onSaveExpenseData, onShowForm }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  })

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      }
    })
  }

  const amoutChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value,
      }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      }
    })
  }

  const addExpenseHandler = (e) => {
    e.preventDefault()
    const expenseData = { ...userInput, date: new Date(userInput.date) }
    onSaveExpenseData(expenseData)
    setUserInput({
      title: "",
      amount: "",
      date: "",
    })
    onShowForm(false)
  }

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={amoutChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2024-01-01"
            max="2028-12-31"
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
