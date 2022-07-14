import React from 'react'

const Button = ({details, handleClick}) => {
  return (
    <button
     className={details.class}
      id={details.id}
       style={details.style == "backGround" ? backGround : backGroundDud }
       onClick={(e)=>{handleClick(e.target.innerHTML, e.target.id)}}>
        {details.value}</button>
    
  )
  
}
const backGround = {
    backgroundColor: "rgb(238, 233, 190)"
  }
  const backGroundDud = {
    backgroundColor: "rgb(55, 49, 26)"
  }
export default Button