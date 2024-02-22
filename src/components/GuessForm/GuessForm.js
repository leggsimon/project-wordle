import React from 'react';

function GuessForm() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess('');
      }}
    >
      <label for='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        type='text'
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        pattern='\w{5}'
        minLength={5}
        maxLength={5}
        title='5 letters'
      />
      <p>The guess should be 5 letters</p>
    </form>
  );
}

export default GuessForm;
