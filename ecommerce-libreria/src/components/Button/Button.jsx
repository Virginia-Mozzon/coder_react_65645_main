import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Button = ( {text, color, id, to} ) => {
  return (
    <button style = {{backgroundColor: color}} ><Link to={to} key={id} >{text}</Link></button>
  )
} 

export default Button
