import React from 'react';

import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessList({ guesses, answer }) {
  return (
    <div className='guess-results'>
      {guesses.map(({ id, text }) => {
        const result = checkGuess(text, answer);
        return <Guess key={id} result={result} />;
      })}
      {range(NUM_OF_GUESSES_ALLOWED - guesses.length).map((i) => (
        <Guess key={i} />
      ))}
    </div>
  );
}

export default GuessList;
