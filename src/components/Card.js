import React from 'react';
import './Card.css';

function Card(props) {
  //cara membuat komponen pembungkus
  //return <div className="card">{props.children}</div>

  //cara membuat komponen pembungkus tetapi bisa ditambahkan style cssnya
  //di dalam clas harus ada spasi nya contoh'card(spasi)' baru mau jalan
  const classed = 'card ' + props.className;
  return <div className={classed}>{props.children}</div>;
}

export default Card;
