import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greetings = useSelector((state) => state.greetings);

  if (greetings.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>
        <span>Random Greeting: </span>
        <span>{greetings.greeting}</span>
      </h1>
    </>
  );
};

export default Greeting;
