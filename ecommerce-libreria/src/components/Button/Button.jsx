import { Link } from 'react-router-dom'

const Button = ( {text, color, to} ) => {
  return (
    <button className='nav-item' style = {{backgroundColor: color}} ><Link to={to}>{text}</Link></button>
  )
} 

export default Button
