import React, { useState } from "react"
import ExpenseItem from "./ExpenseItem"

import "./ExpensesList.css"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart"

const ExpensesList = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2024")

  const selectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onYearSelect={selectYearHandler}
          selectedYear={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                price={expense.amount}
                date={expense.date}
              />
            )
          })
        ) : (
          <span className="empty-list">No expense added in {filteredYear}</span>
        )}
      </Card>
    </>
  )
}

export default ExpensesList
