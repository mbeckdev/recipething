import React from 'react'
import './infographic.css'
import { v4 as uuidv4 } from 'uuid'
import {
  NameAmount,
  makeBlob,
  makeNameAmount,
  getAllFoodsOrTools,
  ABlob,
  showBlob,
} from '../util/blobHelper'
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
// const makeBlob = (food, tools, state, pic) => {
//   // create a uuid here.
//   const theid = uuidv4()
//   return {
//     food: food,
//     tools: tools,
//     state: state,
//     pic: 'pic',
//     id: theid, // 1d38af0d-e8d1-4b76-90ca-949b5366396b
//   }
// }

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
// const theArray = [['cereal', 'milk'], ['bowl', 'spoon'], 'mis'] //starting
//...... const theArray = [blobCereal, blobMilk, blobBowl, blobSpoon]
// const blobCereal = makeBlob(['cereal'], [], 'mis', 'svgpic1')
// const blobMilk = makeBlob(['milk'], [], 'mis', 'svgpic2')
// const blobBowl = makeBlob([], ['bowl'], 'mis', 'svgpic3')
// const blobSpoon = makeBlob([], ['spoon'], 'mis', 'svgpic4')
// const firstStateArray = addBlobsToStateMisArray([
//   blobCereal,
//   blobMilk,
//   blobBowl,
//   blobSpoon,
// ])
// const firstStateArray2 = [blobCereal, blobMilk, blobBowl, blobSpoon]
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

// const array2 = [blobCereal, blobMilk, blobBowl, blobSpoon]

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

// const blah = theArray[0]
// const initialFoodArray = blah.map((food) => <div>pic - {food}</div>)

// theArray[0].map((food) => {
//     <div>pic - {food}</div>
// })

// initialBlobs =
//[
//   {
//     "food": [
//         "cereal"
//     ],
//     "tools": [],
//     "state": "mis",
//     "pic": "svgpic1",
//     "id": "58c808c4-2663-4861-a03c-6cb93dfae77c",
//     "amount": {
//         "value": "1",
//         "unit": "cup"
//     }
// },
// {
//     "food": [
//         "milk"
//     ],
//     "tools": [],
//     "state": "mis",
//     "pic": "svgpic2",
//     "id": "8af0384c-1ebe-42f1-8d08-cb04218cde6f",
//     "amount": {
//         "value": "1/2",
//         "unit": "cup"
//     }
// },
// {
//     "food": [],
//     "tools": [
//         "bowl"
//     ],
//     "state": "mis",
//     "pic": "svgpic3",
//     "id": "54c2d039-82ec-4c04-a95c-d4ed2375a4f7",
//     "amount": {
//         "value": "1",
//         "unit": "ea"
//     }
// },
// {
//     "food": [],
//     "tools": [
//         "spoon"
//     ],
//     "state": "mis",
//     "pic": "svgpic4",
//     "id": "f7b2fa06-9e44-44a4-8517-09af1463ab75",
//     "amount": {
//         "value": "1",
//         "unit": "ea"
//     }
// }
// ]

// const state0 = initialBlobs;
// const action1 = action([],'combine', makeBlob())

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
// console.log(state1a.id)
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
  //.
  const renderInitialFoods = () => {
    const allFoodsBlobs = getAllFoodsOrTools(initialBlobs, 'foods')

    return allFoodsBlobs.map((blob) => {
      // if (blob?.food?.[0]?.length > 0) {   //this already checked in getAllFoodsOrTools
      for (let i = 0; i < blob.foods.length; i++) {
        return (
          <div key={blob.id}>
            <p>
              Ingredient: (pic) {blob.foods[i].name} -{' '}
              {blob?.foods[i].amount?.value} {blob?.foods[i].amount?.unit}
            </p>
          </div>
        )
      }
    })
  }
  const renderInitialTools = () => {
    const allToolsBlobs = getAllFoodsOrTools(initialBlobs, 'tools')

    return allToolsBlobs.map((blob) => {
      // if (blob?.food?.[0]?.length > 0) {   //this already checked in getAllFoodsOrTools
      for (let i = 0; i < blob.tools.length; i++) {
        return (
          <div key={blob.id}>
            <p>
              Tool: (pic) {blob.tools[i].name} - {blob?.tools[i].amount?.value}{' '}
              {blob?.tools[i].amount?.unit}
            </p>
          </div>
        )
      }
    })
  }

  // state0 = initialBlobs
  // action01 - combine cereal and milk, use bowl tool, PREPARE STATE
  // state1 = newblob = combineBlobs(initialBlobs, 'cereal', 'milk', 'bowl')
  // action12 - serve newblob, use spoon tool, SERVE STATE
  //matter?// state2 = doneblob = combineBlobs(newblob, 'spoon')
  //later// action23 - clean doneblob, use sponge tool, CLEAN STATE (anything left?... noidea)

  console.log('infographic -- initialBlobs = ', initialBlobs)
  // const action = (startBlobs, verb, emdBlobs) => {
  //   // return { verb: verb, endfoods: foods, endtools: tools }

  //   return { startblobs, verb, endblobs }
  // }

  const findAllFoodsNAsFromBlobs = (blobs) => {
    let foods: NameAmount[] = []
    for (let i = 0; i < blobs.length; i++) {
      if (blobs?.[i]?.foods?.length > 0) {
        for (let j = 0; j < blobs[i].foods.length; j++) {
          // console.log('aaaaaaaaaaaaaaaaaaaaaasfasdf  = ', blobs[i].foods[j])
          foods.push(blobs[i].foods[j])
        }
      }
    }
    return foods
  }

  const findAllToolsNAsFromBlobs = (blobs) => {
    let tools: NameAmount[] = []
    for (let i = 0; i < blobs.length; i++) {
      if (blobs?.[i]?.tools?.length > 0) {
        for (let j = 0; j < blobs[i].tools.length; j++) {
          // console.log('aaaaaaaaaaaaaaaaaaaaaasfasdf  = ', blobs[i].tools[j])
          tools.push(blobs[i].tools[j])
        }
      }
    }
    return tools
  }
  // console.log(
  //   'findAllToolsNAsFromBlobs(initialBlobs) = ',
  //   findAllToolsNAsFromBlobs(initialBlobs)
  // )
  // console.log(
  //   'findAllFoodsNAsFromBlobs(initialBlobs) = ',
  //   findAllFoodsNAsFromBlobs(initialBlobs)
  // )

  const makeActionBlob = (startBlobs, verb): ABlob => {
    // return { verb: verb, endfoods: foods, endtools: tools }
    const endBlobs = []
    if (verb === 'combine') {
      console.log('is combine ')
      // const endBlobs: ABlob[] = []

      // console.log('startBlobs.length', startBlobs.length)
      // for (let i = 0; i < startBlobs.length; i++) {

      //   if (startBlobs[i].foods.length > 0) {
      //     for (let j = 0; j < startBlobs[i].foods.length; j++) {
      //       // console.log('startBlobs[i].foods[j] = ', startBlobs[i].foods[j])
      //       endBlobs.push(startBlobs[i].foods[j])
      //     }
      //   }
      // }

      const allFoodsNAs = findAllFoodsNAsFromBlobs(startBlobs)
      const allToolsNAs = findAllToolsNAsFromBlobs(startBlobs)
      // console.log('333 allFoods - allTools = ', allFoodsNAs, '-', allToolsNAs)

      // console.log('allFoodsNAs = ', allFoodsNAs)
      // console.log('allToolsNAs = ', allToolsNAs)
      const newblob: ABlob = makeBlob(
        allFoodsNAs,
        allToolsNAs,
        'prepare',
        'svgpic'
      )
      // console.log('newblob == ', newblob)
      // console.log('blobMilkksdf', blobMilk)

      // endBlobs.push(newblob)
      // console.log('endBlobs', endBlobs)
      return newblob
      // return { endBlobs }
    }
  }

  const blobCereal = initialBlobs.find((blob) =>
    blob.foods.some((food) => food.name === 'cereal')
  )

  // const blobCereal = initialBlobs[0]
  const blobMilk = initialBlobs[1]
  const blobBowl = initialBlobs[2]
  const blobSpoon = initialBlobs[3]

  // const rightSideBlob = makeActionBlob(initialBlobs.find((blob) => blob.food === 'milk'), 'combine')
  const leftSideBlobs = [blobCereal, blobMilk, blobBowl]
  const rightSideBlob = makeActionBlob(
    [blobCereal, blobMilk, blobBowl],
    'combine'
  )
  const verb = 'combine'
  console.log('rightside = ', rightSideBlob)

  const showAction = () => {
    // return <div>showActionnnnnn</div>
    console.log('rightSideBlob', rightSideBlob)
    console.log('rightSideBlob.id', rightSideBlob.id)

    const showLefts = (): JSX.Element[] => {
      return leftSideBlobs.map((blob) => <div>{showBlob(blob)}</div>)
    }
    const showRights = (): JSX.Element[] => {
      return [rightSideBlob].map((blob) => <div>{showBlob(blob)}</div>)
    }
    return (
      <div>
        <div>
          <div>left---</div>
          <div>{showLefts()}</div>
          <div>---left</div>
        </div>
        <div>{verb}</div>
        <div>
          <div>right---</div>
          <div>{showRights()}</div>
          <div>---right</div>
        </div>
                {rightSideBlob.id}
      </div>
    )
  }

  // Array.isArray(theArray[0]) ? (
  //   theArray[0].map((item, index) => <div key={index}>Item: {item}</div>)
  // ) : (
  //   <div key={0}>Item: {theArray[0]}</div>
  // )

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

  return (
    <div className="infographic ">
      <div className="section-title">
        <h2>Infographic</h2>
      </div>
      <div className="ig__section">
        <div className="ig__section__title ig__mis">MIS EN PLACE</div>
        {renderInitialFoods()}
        <div>?????????????do i need tools here in mis?????????</div>
        {renderInitialTools()}

        <div className="ig__section__title">PREPARE</div>

        {/* <div className="">
          <SpoonySpoon />
        </div>
        <MySvgComponent24 />
        <IconSpoon width="30" />
        <IconSpoon width="30" />
        <IconBowl width="30" />
        <IconMilk width="100" />
        <MySvgComponent100 />
        <SpoonSvgComponent />
        <SpoonSvgComponent /> */}

        <div>{state1.food}</div>
        <div>0000000000000000000000000000</div>
        {showAction()}
        <div>0000000000000000000000000000</div>
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
