import React from 'react'
import './infographic.css'

interface Props {
  name: string
}

// let theArray = [[],[],'mis']
const theArray = [['cereal', 'milk'], ['bowl', 'spoon'], 'mis'] //starting
// food state array, tool array, done food,.... done food, done tool,
// food state array, tool array, .....

// show mis en place pics

// now in PREPARE STATE
// action -- combine cereal and milk, use bowl tool, PREPARE STATE

// theArray state now =  [[['cereal', 'milk']],['bowl', 'spoon'], 'prepare']

// now in SERVE STATE
// action -- serve cereal and milk, use spoon tool, SERVE STATE

// theArray state now =  [[['cereal', 'milk']],['bowl', 'spoon'], 'serve']

// pictures associated with acitons, not state.
// keep food and tools together??

// map through food and tools.. for mis start

const blah = theArray[0]
// const initialFoodArray = blah.map((food) => <div>pic - {food}</div>)

// theArray[0].map((food) => {
//     <div>pic - {food}</div>
// })

const Infographic = () => {
  return (
    <div className="infographic ">
      <div className="section-title">
        <h2>Infographic</h2>
      </div>
      <div className="ig__section">
        <div className="ig__section__title">MIS EN PLACE</div>

        {Array.isArray(theArray[0]) ? (
          theArray[0].map((item, index) => <div key={index}>Item: {item}</div>)
        ) : (
          <div key={0}>Item: {theArray[0]}</div>
        )}
        {theArray[1].map((item, index) => (
          <div key={index}>Item: {item}</div>
        ))}

        <div className="ig__section__title">PREPARE</div>
        <div className="ig__section__title">SERVE</div>
        <div className="ig__section__title">CLEAN LOL</div>
      </div>
    </div>
  )
}

export default Infographic
