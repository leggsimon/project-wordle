import React from 'react';

function GuessForm({ handleGuess, disableForm }) {
  const [guessInput, setGuessInput] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();

        if (guessInput.length < 5) {
          return;
        }

        console.log({ guess: guessInput });
        handleGuess(guessInput);
        setGuessInput('');
      }}
    >
      <label for='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guessInput}
        disabled={disableForm}
        onChange={(event) => setGuessInput(event.target.value.toUpperCase())}
        pattern='\D{5}'
        maxLength={5}
        title='5 letters'
      />
      <p>The guess should be 5 letters</p>
    </form>
  );
}

export default GuessForm;
