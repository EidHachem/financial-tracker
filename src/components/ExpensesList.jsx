import React from "react";
import ExpenseItem from "./ExpenseItem";

import './ExpensesList.css'
import Card from "./Card";

const ExpensesList = ({ expenses }) => {
  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default ExpensesList;
