import React, {useEffect, useState} from 'react'
import { Gif } from './Gif'
import getGifs from '../services/getGifs';

export const ListOfGifs = ({keyword}) => {
    const [gifs, setGifs] = useState([]);

    useEffect(()=> {
      getGifs({keyword})
        .then((gifsAPI => setGifs(gifsAPI)))
    },[keyword])
  
  return (
    <>
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
    </>
  )
}
