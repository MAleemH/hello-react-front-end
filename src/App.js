import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/greetings/greetingsSlice';
import Greeting from './components/Greeting';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;
