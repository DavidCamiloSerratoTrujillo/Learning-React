import React from 'react';
import PropTypes from 'prop-types'
export const GifGridItem = ({title,url}) => {
  return (
    <div className='card cola cao'>
        <img src ={url} alt ={title}/>{/*Se cargan las imagenes*/}
        <p>{title}</p> 
    </div>
  )
}

GifGridItem.propTypes ={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}