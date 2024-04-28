import React from 'react'
import './ingredients.css'

interface Props {
  name: string
}

const Ingredients = () => {
  return (
    <div className="ingredients tool-and-ingredient">
      <h2>Ingredients</h2>
      <p>(pic) cereal - 1 cup - ingredient</p>
      <p>(pic) milk - 1/2 cup - ingredient</p>
    </div>
  )
}

export default Ingredients
