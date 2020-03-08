import React from 'react';
import styled from 'styled-components';
// import { useStoreState, useStoreActions } from 'easy-peasy';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;

function Home() {
  // const todos = useStoreState((state) => state.todos.items);
  // const add = useStoreActions((actions) => actions.todos.add);

  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Title>Home Pages</Title>
    </div>
  );
}

export default Home;
