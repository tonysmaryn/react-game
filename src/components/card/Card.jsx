import React, { useState } from 'react';
import './Card.scss';

export const Card = (props) => {
  // const [image, setImage] = useState('url("assets/cards/back.jpg")');
  // const rotate = () => {
  //   if (props.card.canFlip && props.card.isFlipped) {
  //     setImage('url("assets/cards/back.jpg")');
  //   }
  //   if (props.card.canFlip && !props.card.isFlipped) {
  //     setImage(`url("assets/cards/card${props.card.index}.png")`);
  //   }
  //   props.card.isFlipped = !props.card.isFlipped;
  // };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url("${props.card.cardImage}")`,
      }}
      onClick={props.onClick}
    ></div>
  );
};

// onClick={() => {
//   props.reverseCard();
// }}
