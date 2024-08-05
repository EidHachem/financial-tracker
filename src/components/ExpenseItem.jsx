import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>August 5th 2024</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$300.32</div>
      </div>
    </div>
  );
};

export default ExpenseItem;