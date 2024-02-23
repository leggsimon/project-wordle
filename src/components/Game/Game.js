import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from '../GuessForm';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  return (
    <>
      <GuessList guesses={guesses} />
      <GuessForm
        disableForm={guesses.length >= NUM_OF_GUESSES_ALLOWED}
        handleGuess={(newGuess) => {
          const nextGuesses = [...guesses, { id: crypto.randomUUID(), text: newGuess }];
          setGuesses(nextGuesses);
        }}
      />
    </>
  );
}

export default Game;
