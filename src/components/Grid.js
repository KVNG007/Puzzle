import React from 'react'
import Button from "./Button"
import Data from "../data"

const Grid = ({handleClick}) => {

  var data = Data.letters

  return (


    <section className="grid">
        {data.map((object) => <Button key={object.id} details={object} handleClick={handleClick}/>)}
     </section>
  )
}
const backGround = {
  backgroundColor: "rgb(238, 233, 190)"
}
const backGroundDud = {
  backgroundColor: "rgb(55, 49, 26)"
}

export default Grid;