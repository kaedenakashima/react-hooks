import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  createContext
} from 'react';
import Toggle from './Toggle';
import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log('ran');
    const res = await fetch(
      'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
    );
    const data = await res.json();
    setDishes(data);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user: true
      }}
    >
      <div className='main-wrapper' ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>
          Level Up Dishes
        </h1>
        <Toggle />
        {/* <Counter /> */}
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
        {dishes.map(dish => (
          <article className='dish-card dish-card--withImage'>
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className='ingredients'>
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </UserContext.Provider>
  );
};

const formSubmit = (value, setValue) => {
  console.log('email sent to' + value + '!');
  setValue('');
};

export default App;
