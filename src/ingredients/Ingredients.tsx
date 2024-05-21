import React from 'react'
import './ingredients.css'

interface Props {
  name: string
}

const Ingredients = ({ initialBlobs }) => {
  const renderIngredientBlobs = () => {
    return initialBlobs.map((blob) => {
      if (blob?.food?.[0]?.length > 0) {
        return (
          <div key={blob.id}>
            <p>
              (pic) {blob.food[0]} - {blob?.amount?.value} {blob?.amount?.unit}{' '}
              - ingredient
            </p>
          </div>
        )
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
