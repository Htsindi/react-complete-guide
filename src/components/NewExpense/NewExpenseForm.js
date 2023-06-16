import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  ///Simpler Option and Favoured
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };
  /*
  ///Option for restructuring ensure no data is lost by destructuring and will get the latest state snapshop...
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { 
        ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: e.target.value,
      };
    });
  };
*/
  /*/Another Option
const eventHandler = (identifier, value)=>{
  if (identifier === 'title'){
    setEnteredTitle(value);
  }else if(identifier === 'amount'){
    setEnteredAmount(value);
  } else{
    setEnteredDate(value);
  };
}*/
  //submission of form when submit button is clicked
  const submitHandler = (e) => {
    //to prevent the browser reload
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    //from newExpense
    props.onSaveExpenseData(expenseData);
    //Two way binding working with value on input form to clear data on form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // for Optopn 3 /*<input type="text" value={enteredTitle} onChange={(e)=>eventHandler('title', e.target.value)} />*/

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-06-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
