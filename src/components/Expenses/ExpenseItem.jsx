import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  const { date, title, price } = props

  const [updatedTitle, setUpdatedTitle] = useState(title)

  const changeTitleHandler = () => {
    setUpdatedTitle('updated')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{updatedTitle}</h2>
        <div className="expense-item__price">$ {price}</div>
      </div>
      <button onClick={changeTitleHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
