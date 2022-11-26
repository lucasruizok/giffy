import React from 'react'

export const Gif = ({title, url, id}) => {
  return (
    <>
        <h4>{title}</h4>
        <small>{id}</small>
        <img alt={title} src={url}></img>
    </>
  )
}
