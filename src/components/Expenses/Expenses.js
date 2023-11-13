import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  //let filterInfoText = "2019, 2020 & 2021";

  //if (filteredYear === "2019") {
  //filterInfoText = "2020, 2021, & 2022";
  //} else if (filteredYear === "2020") {
  //filterInfoText = "2019, 2021, & 2022";
  //} else if (filteredYear === "2021") {
  //filterInfoText = "2019, 2020, & 2022";
  //} else {
  //filterInfoText = "2019, 2020, & 2021";}

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    //console.log("Expenses.js");
    console.log(selectedYear);
    const filteredItems = props.items.filter(
      (item) => item.date.getFullYear() === Number(selectedYear)
    );
    console.log(filteredItems);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {props.items.map((expense) => (
        <ExpenseItem
          //Shld always add a key when using map
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
