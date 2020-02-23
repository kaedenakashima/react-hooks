import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  return (
    <div className='main-wrapper' ref={ref}>
      // change css by clicking 'Dishes'
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
        Level Up Dishes
      </h1>
      <Toggle />
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log('email sent to' + value + '!');
  setValue('');
};

export default App;
