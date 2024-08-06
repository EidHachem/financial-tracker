import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  const { date, title, price } = props

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
