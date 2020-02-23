import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  createContext
} from 'react';
import Counter from './Counter';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const reverseWord = word => {
    console.log('function called');
    return word
      .split('')
      .reverse()
      .join('');
  };

  const TitleReversed = reverseWord('Level Up Dishes');

  return (
    <UserContext.Provider
      value={{
        user: false
      }}
    >
      <div className='main-wrapper' ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
          {TitleReversed}
        </h1>
        <Toggle />
        <Counter />
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
    </UserContext.Provider>
  );
};

const formSubmit = (value, setValue) => {
  console.log('email sent to' + value + '!');
  setValue('');
};

export default App;
