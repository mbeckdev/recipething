import React from 'react'
import './ingredients.css'

interface Props {
  name: string
}

const Ingredients = ({ initialBlobs }) => {
  const renderIngredientBlobs = () => {
    return initialBlobs.map((blob) => {
      if (blob?.foods?.length > 0) {
        for (let i = 0; i < blob.foods.length; i++) {
          console.log('asdf', blob.foods[i])
          return (
            <p key={blob.foods[i].naid}>
              (pic) {blob.foods[i]?.name} - {blob.foods[i]?.amount?.value}
              {blob?.foods[i]?.amount?.unit} - ingredient
            </p>
          )
        }
      }
    })
  }

  console.log('initialBlobs = ', initialBlobs)
  return (
    <div className="ingredients tool-and-ingredient intro-ingredients-tools">
      <div className="section-title">
        <h2>Ingredients</h2>
      </div>
      {renderIngredientBlobs()}
      {/* <p>(pic) cereal - 1 cup - ingredient</p> */}
      {/* <p>(pic) milk - 1/2 cup - ingredient</p> */}
    </div>
  )
}

export default Ingredients
