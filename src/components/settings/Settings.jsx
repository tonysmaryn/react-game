import React from 'react';
import { BackButton } from '../backButton/BackButton';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export const Settings = (props) => {
  const onChangeDiff = (value) => {
    props.changeDiff(value);
  };

  return (
    <div className="container">
      <RadioGroup onChange={onChangeDiff} horizontal>
        <RadioButton value="easy">Easy</RadioButton>
        <RadioButton value="medium">Medium</RadioButton>
        <RadioButton value="hard">Hard</RadioButton>
      </RadioGroup>
      <BackButton />
    </div>
  );
};

/* <div
        className="difficult"
        onChange={() => {
          console.log('1');
          onChangeDiff();
        }}
      >
        <span>Сложность игры</span>
        <input type="radio" name="diff" value="easy" id="diff1" checked />
        <label for="diff1">Easy</label>
        <input type="radio" name="diff" value="medium" id="diff2" />
        <label for="diff2">Medium</label>
        <input type="radio" name="diff" value="hard" id="diff3" />
        <label for="diff3">Hard</label>
      </div> */
