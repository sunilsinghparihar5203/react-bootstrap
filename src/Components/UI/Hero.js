import React from 'react'
import classes from './Hero.module.css'
function Hero(props) {
  return (
    <div className={classes.Container}>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Hero