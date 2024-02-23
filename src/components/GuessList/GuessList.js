import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map(({ id, text }) => {
        return <Guess key={id} text={text} />;
      })}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((i) => (
        <Guess key={i} />
      ))}
    </div>
  );
}

export default GuessList;
