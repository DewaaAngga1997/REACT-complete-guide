import React from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//membuat fungsi prop agar kita bisa menggunakan komponen dengan data yang berbeda
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      {/* import komponen props di dalam komponent  */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
