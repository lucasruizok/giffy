import React, {useEffect, useState} from 'react'
import { Gif } from './Gif'
import getGifs from '../services/getGifs';

export const ListOfGifs = ({params}) => {
  const {keyword} = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(()=> {
    setLoading(true)
    getGifs({keyword})
      .then((gifsAPI => {
        setGifs(gifsAPI)
        setLoading(false)
      }))
    },[keyword])
  if(loading){
    return <i>Cargando gifs...</i>
  }
  
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
