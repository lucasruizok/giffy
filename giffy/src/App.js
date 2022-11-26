import './App.css';
import React, {useEffect, useState} from 'react';
import getGifs from './services/getGifs';
import { Gif } from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([]);

  useEffect(()=> {
    getGifs({keyword: 'programming'}).then((gifsAPI => setGifs(gifsAPI)))
  },[])
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({title, url, id}) => 
          <Gif 
          key={id}
          title={title}
          id={id}
          url={url}
          />
          )
        }    
      </section>
    </div>
  );
}

export default App;
