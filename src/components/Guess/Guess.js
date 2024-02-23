import React from 'react';
import { range } from '../../utils';

function Guess({ result = [] }) {
  return (
    <p className='guess'>
      {range(5).map((index) => {
        const { letter, status } = result[index] || {};
        return (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
