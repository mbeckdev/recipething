import React from 'react'
import './infographic.css'
import { v4 as uuidv4 } from 'uuid'
import {
  IconSpoon,
  IconBowl,
  MySvgComponent100,
  MySvgComponent24,
  SpoonSvgComponent,
  IconMilk,
  SpoonySpoon,
} from '../util/SomeSVGs'

interface Props {
  name: string
}

// const makeBlob = (food, tools, state, pic, id) => {
const makeBlob = (food, tools, state, pic) => {
  // create a uuid here.
  const theid = uuidv4()
  return {
    food: food,
    tools: tools,
    state: state,
    pic: 'pic',
    id: theid, // 1d38af0d-e8d1-4b76-90ca-949b5366396b
  }
}
// const addBlobsToStateMisArray = (blobs) => {
//   let foods = []
//   let tools = []
//   for (let i = 0; i < blobs.length; i++) {
//     if (blobs[i].food.length > 0) {
//       foods.push(blobs[i].food[0])
//     }
//     if (blobs[i].tools.length > 0) {
//       tools.push(blobs[i].tools[0])
//     }
//   }
//   return {
//     food: foods,
//     tools: tools,
//     state: 'mis',
//     pic: '',
//     id: uuidv4(),
//   }
// }

// let theArray = [[],[],'mis']
const theArray = [['cereal', 'milk'], ['bowl', 'spoon'], 'mis'] //starting
//...... const theArray = [blobCereal, blobMilk, blobBowl, blobSpoon]
const blobCereal = makeBlob(['cereal'], [], 'mis', 'svgpic1')
const blobMilk = makeBlob(['milk'], [], 'mis', 'svgpic2')
const blobBowl = makeBlob([], ['bowl'], 'mis', 'svgpic3')
const blobSpoon = makeBlob([], ['spoon'], 'mis', 'svgpic4')
// const firstStateArray = addBlobsToStateMisArray([
//   blobCereal,
//   blobMilk,
//   blobBowl,
//   blobSpoon,
// ])
const firstStateArray2 = [blobCereal, blobMilk, blobBowl, blobSpoon]
// const firstStateArray2 = initialBlobs

// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
// // console.log(firstStateArray)
// // {
// //   "food": [
// //       "cereal",
// //       "milk"
// //   ],
// //   "tools": [
// //       "bowl",
// //       "spoon"
// //   ],
// //   "state": "mis",
// //   "pic": "",
// //   "id": "96732b79-2a28-49bc-9b1b-f45f0dc4ab4d"
// // }
// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
// console.log('firstStateArrray2 = ', firstStateArray2)
// console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbbbb')

const array2 = [blobCereal, blobMilk, blobBowl, blobSpoon]

// food state array, tool array, done food,.... done food, done tool,
// food state array, tool array, .....

// show mis en place pics

// now in PREPARE STATE
// action -- combine cereal and milk, use bowl tool, PREPARE STATE

// theArray state now =  [[['cereal', 'milk']],['bowl', 'spoon'], 'prepare']

// now in SERVE STATE
// action -- serve cereal and milk, use spoon tool, SERVE STATE
//    action(verb, [food1, food2, ...], [tool1, tool2, ...])

// theArray state now =  [[['cereal', 'milk']],['bowl', 'spoon'], 'serve']

// pictures associated with acitons, not state.
// keep food and tools together??

// map through food and tools.. for mis start

const blah = theArray[0]
// const initialFoodArray = blah.map((food) => <div>pic - {food}</div>)

// theArray[0].map((food) => {
//     <div>pic - {food}</div>
// })

const state1 = {
  food: ['cereal', 'milk'],
  tools: ['bowl', 'spoon'],
  state: 'mis',
}
const state1a = makeBlob(
  ['cereal', 'milk'],
  ['bowl', 'spoon'],
  'mis',
  'svgpic',
  'uuid01'
)
console.log(state1a.id)
const state2 = {
  food: ['cereal', 'milk'],
  tools: ['bowl'],
  state: 'prepare',
}
//action between state2 and state3
// like   combine cereal and milk, use bowl tool, PREPARE STATE
// combineFoodTools(state2, state3, 'cereal', 'milk', 'bowl')
// combineBlobs = (blob1, blob2);
// in words, combine cereal and milk, use bowl tool, PREPARE STATE
// combine cerealblob, milkblob, bowlblob...

const state3 = {
  blobs: [['cereal', 'milk'], ['bowl'], 'svgpic', 'uuid03'],
  food: [],
  tools: [],
  state: 'prepare',
}
const state4 = {
  blobs: [[['cereal', 'milk'], ['bowl']]],
  food: [],
  tools: ['spoon'],
  state: 'serve',
}

//states
const steps = [state1, state2, state3]
const size1 = () => {
  return (
    // <style color="blue">
    <div>lol</div>
    // </style>
  )
}

const Infographic = ({ initialBlobs }) => {
  const renderInitialFoods = () => {
    return initialBlobs.map((blob) => {
      if (blob?.food?.[0]?.length > 0) {
        return (
          <div key={blob.id}>
            <p>
              Ingredient: (pic) {blob.food[0]} - {blob?.amount?.value}{' '}
              {blob?.amount?.unit}{' '}
            </p>
          </div>
        )
      }
    })
  }
  const renderInitialTools = () => {
    return initialBlobs.map((blob) => {
      if (blob?.tools?.[0]?.length > 0) {
        return (
          <div key={blob.id}>
            <p>
              Tool: (pic) {blob.tools[0]} - {blob?.amount?.value}{' '}
              {blob?.amount?.unit}
            </p>
          </div>
        )
      }
    })
  }

  Array.isArray(theArray[0]) ? (
    theArray[0].map((item, index) => <div key={index}>Item: {item}</div>)
  ) : (
    <div key={0}>Item: {theArray[0]}</div>
  )

  // const allInitialItems = Array.isArray(theArray[0]) ? (
  //   theArray[0].map((item, index) => <div key={index}>Item: {item}</div>)
  // ) : (
  //   <div key={0}>Item: {theArray[0]}</div>
  // )
  // const allInitialTools = Array.isArray(theArray[0]) ? (
  //   theArray[0].map((item, index) => <div key={index}>Tool: {item}</div>)
  // ) : (
  //   <div key={0}>Tool: {theArray[0]}</div>
  // )

  console.log('eeeeeeeeeeeee', initialBlobs)

  return (
    <div className="infographic ">
      <div className="section-title">
        <h2>Infographic</h2>
      </div>
      <div className="ig__section">
        <div className="ig__section__title ig__mis">MIS EN PLACE</div>
        {renderInitialFoods()}
        {renderInitialTools()}

        <div className="ig__section__title">PREPARE</div>
        <div className="">
          <SpoonySpoon />
        </div>
        <MySvgComponent24 />
        <IconSpoon width="30" />
        <IconSpoon width="30" />
        <IconBowl width="30" />
        <IconMilk width="100" />
        <MySvgComponent100 />
        <SpoonSvgComponent />
        <SpoonSvgComponent />

        <div>{state1.food}</div>
        <div className="ig__section__title">SERVE</div>
        <div className="ig__section__title">CLEAN LOL</div>
        <div>{size1()}</div>
      </div>
    </div>
  )
}

export default Infographic

{
  /* <svg
className="spoon"
xmlns="http://www.w3.org/2000/svg"
width="24"
height="24"
viewBox="0 0 24 24"
>
<path d="M12 0C5.37 0 0 5.37 0 12v12c0 6.63 5.37 12 12 12s12-5.37 12-12V12C24 5.37 18.63 0 12 0zm0 36c-6.63 0-12-5.37-12-12V12c0-6.63 5.37-12 12-12s12 5.37 12 12v12c0 6.63-5.37 12-12 12z" />
</svg> */
}
