import React from 'react'
import './gif.css'

export const Gif = ({title, url, id}) => {
  return (
    <div className='gif'>
        <h4>{title}</h4>
        <small>{id}</small>
        <img alt={title} src={url}></img>
    </div >
  )
}
