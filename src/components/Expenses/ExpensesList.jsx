import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"

import './ExpensesList.css'
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"

const ExpensesList = ({ expenses, onYearChange }) => {

  const [filteredYear, setFilteredYear] = useState('2024')

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    onYearChange(selectedYear)
  }
  return (
    <>
    <Card className="expenses">
    <ExpensesFilter onYearSelect={selectYearHandler} selectedYear={filteredYear} />
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        )
      })}
    </Card>
    </>
  )
}

export default ExpensesList
