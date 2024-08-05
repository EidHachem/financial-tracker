import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'

const ExpensesList = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            price={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
};

export default ExpensesList;
