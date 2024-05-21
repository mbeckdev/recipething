import React from 'react'
import './ingredients.css'

interface Props {
  name: string
}

const Ingredients = ({ initialBlobs }) => {
  return (
    <div className="ingredients tool-and-ingredient intro-ingredients-tools">
      <div className="section-title">
        <h2>Ingredients</h2>
      </div>
      <p>(pic) cereal - 1 cup - ingredient</p>
      <p>(pic) milk - 1/2 cup - ingredient</p>
    </div>
  )
}

export default Ingredients
