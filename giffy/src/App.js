import './App.css';
import React from 'react';
import { ListOfGifs } from './components/ListOfGifs';
import { Route, Link } from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffy</h1>
        <Link to='/gif/panda'>Gifs de pandas</Link>
        <Link to='/gif/colombia'>Gifs de Colombia</Link>
        <Link to='/gif/argentina'>Gifs de Argentina</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'  
        />
      </section>
    </div>
  );
}

export default App;
