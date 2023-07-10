import { TodoProvider } from './TodoContext';
import { Home } from './home';
import React from 'react';

function App() { 
 return(
  <TodoProvider>
    <Home/>
  </TodoProvider>
 );
}

export default App;
