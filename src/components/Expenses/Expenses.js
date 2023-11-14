import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log("Expenses.js");
    console.log(selectedYear);
  };
  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        //Shld always add a key when using map
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  );
}

export default Expenses;
