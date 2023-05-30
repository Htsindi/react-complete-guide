import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //all function with use can only be called inside the parent function.
  const [title, setTitle] = useState(props.title);
  //let title = props.title;

  const clickHandler = () => {
    setTitle("Updated🎆🎆🎆🎇");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
