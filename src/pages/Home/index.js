import React from 'react';
import { useStoreState, useStoreActions, action } from 'easy-peasy';

function Home() {
    const todos = useStoreState(state => state.todos.items);
    const add = useStoreActions(actions => actions.todos.add);
    
    return (
    <div>
      {todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
      <button onClick={() => add('hai')}>Hello</button>
    </div>
    )
}

export default Home;