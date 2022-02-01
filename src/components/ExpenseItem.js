import ExpenseDate from './Expensedate';
import './ExpenseItem.css';

//membuat fungsi prop agar kita bisa menggunakan komponen dengan data yang berbeda
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      {/* import komponen props di dalam komponent  */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
