import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput, //pulls out all the key value pairs, and adds them to this new object ↓
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value }; // This is the safer way to ensure that you always operate on the latest state snapshot, you should use this function syntax here whenever you state update depends on the previous state.
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };

  const inputChangeHandler = (identifier, value) => {
    if(identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'date'){
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
