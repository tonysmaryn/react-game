import deepcopy from 'deepcopy';
import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import './Game.scss';
import uuid from 'react-uuid';
import { BackButton } from '../backButton/BackButton';

const generateCards = (num) => {
  const array = Array(52)
    .fill(null)
    .map((_, index) => ({
      isFlipped: false,
      canFlip: true,
      cardImage: `assets/cards/back.jpg`,
      index,
    }))
    .sort(() => 0.5 - Math.random())
    .slice(0, num)
    .flatMap((arr) => [arr, { ...deepcopy(arr) }])
    .sort(() => 0.5 - Math.random())
    .map((card) => ({
      ...card,
      uuid: uuid(),
    }));
  return array;
};

export const Game = (props) => {
  const getDiff = () => {
    switch (props.settings.diff) {
      case 'easy': {
        console.log('1');
        return 5;
      }
      case 'medium': {
        console.log('2');
        return 10;
      }
      case 'hard': {
        console.log('3');
        return 15;
      }
      default: {
        console.log('4');
        return 5;
      }
    }
  };

  const [cards, setCards] = useState(generateCards(getDiff()));
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [canFlip, setCanFlip] = useState(true);

  const cardClick = (card) => {
    if (!card.isFlipped && canFlip) {
      reverseCard(card);
      setCardClick(card);
      console.log(canFlip);
    }
  };

  const reverseCard = (card) => {
    const newCards = cards.map((c) => {
      if (c.uuid === card.uuid) {
        c.isFlipped = !c.isFlipped;
        c.cardImage = c.isFlipped
          ? `assets/cards/card${c.index}.png`
          : `assets/cards/back.jpg`;
        console.log(c.cardImage + '  ' + c.index);
      }
      return c;
    });
    setCards(newCards);
  };

  const setCardClick = (card) => {
    if (firstCard === null) {
      setFirstCard(card);
    } else {
      setCanFlip(false);
      setSecondCard(card);
    }
  };

  useEffect(() => {
    if (!firstCard || !secondCard) return;
    setFirstCard(null);
    setSecondCard(null);
    checkCards();
    console.log('useEffect');
  }, [firstCard, secondCard]);

  const checkCards = () => {
    if (firstCard.index !== secondCard.index) {
      setTimeout(() => {
        reverseCard(firstCard);
        reverseCard(secondCard);
        setCanFlip(true);
      }, 1200);
    } else {
      setCanFlip(true);
      checkWins();
    }
  };

  const checkWins = () => {
    let win = cards.reduce((a, c) => a + c.isFlipped, 0);
    if (win === cards.length) console.log('Победа');
  };

  return (
    <div className="game">
      <div className="cards-container">
        {cards.map((card, i) => (
          <Card
            card={card}
            key={i}
            onClick={() => {
              cardClick(card);
            }}
          />
        ))}
      </div>
      <BackButton />
    </div>
  );
};
