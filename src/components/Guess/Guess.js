import React from 'react';
import { range } from '../../utils';

function Guess({ text = '' }) {
  return (
    <p className='guess'>
      {range(5).map((index) => {
        return (
          <span key={index} className='cell'>
            {text[index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
