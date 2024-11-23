import React, { useState } from 'react'

const Button = ( {text, color, fn, valor} ) => {
  const click = () => {
    fn(valor + 1)
  }

  return (
    <button style = {{backgroundColor: color}} onClick={() => click()} >{text}</button>
  )
} 

export default Button
