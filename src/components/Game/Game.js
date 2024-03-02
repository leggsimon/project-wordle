import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessForm from '../GuessForm';
import GuessList from '../GuessList';
import GameOverBanner from '../GameOverBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('in_progress');
  // const gameIsOver = guesses.length >= NUM_OF_GUESSES_ALLOWED;

  console.log(gameStatus);
  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessForm
        disableForm={guesses.length >= NUM_OF_GUESSES_ALLOWED}
        handleGuess={(newGuess) => {
          const nextGuesses = [...guesses, { id: crypto.randomUUID(), text: newGuess }];

          setGuesses(nextGuesses);

          if (newGuess === answer) {
            setGameStatus('win');
          } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameStatus('lose');
          }
        }}
      />
      {gameStatus !== 'in_progress' && (
        <GameOverBanner
          variant={gameStatus === 'win' ? 'happy' : 'sad'}
          guessesCount={guesses.length}
          answer={answer}
        >
          {gameStatus === 'win' ? (
            <p>
              <strong>Congratulations!</strong> Got it in{' '}
              <strong>
                {guesses.length} {guesses.length === 1 ? 'guess' : 'guesses'}
              </strong>
              .
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </GameOverBanner>
      )}
    </>
  );
}

export default Game;
