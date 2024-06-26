import React from 'react'
// import './primarySections.css'
import Intro from '../intro/Intro'
import Ingredients from '../ingredients/Ingredients'
import Infographic from '../infographic/Infographic'
import Tools from '../tools/Tools'
import { v4 as uuidv4 } from 'uuid'
import { makeBlob, makeNameAmount } from '../util/blobHelper'

interface Props {
  name: string
}

const PrimarySections = () => {
  //array here, pass through to ingredients, tools, infographic.

  // ingredients - show the ingredients
  // tools - show the tools
  // infographic -
  //   show mis en place
  //   show prepare actions... connecting states
  //   show final action in serve

  // const makeBlob = (food, tools, state, pic, amountValue, amountUnit) => {
  //   // create a uuid here.
  //   const theid = uuidv4()
  //   return {
  //     food: food,
  //     tools: tools,
  //     state: state,
  //     pic: pic ? pic : 'pic',
  //     id: theid, // 1d38af0d-e8d1-4b76-90ca-949b5366396b
  //     amount: { value: amountValue, unit: amountUnit },
  //   }
  // }
  const naCereal = makeNameAmount('cereal', '1', 'cup')
  const naMilk = makeNameAmount('milk', '1/2', 'cup')
  const naBowl = makeNameAmount('bowl', '1', 'ea')
  const naSpoon = makeNameAmount('spoon', '1', 'ea')
  const blobCereal = makeBlob([naCereal], [], 'mis', 'svgpic1')
  const blobMilk = makeBlob([naMilk], [], 'mis', 'svgpic2')
  const blobBowl = makeBlob([], [naBowl], 'mis', 'svgpic3')
  const blobSpoon = makeBlob([], [naSpoon], 'mis', 'svgpic4')
  const initialBlobs = [blobCereal, blobMilk, blobBowl, blobSpoon]
  // const blobCereal = makeBlob(['cereal'], [], 'mis', 'svgpic1', '1', 'cup')
  // const blobMilk = makeBlob(['milk'], [], 'mis', 'svgpic2', '1/2', 'cup')
  // const blobBowl = makeBlob([], ['bowl'], 'mis', 'svgpic3', '1', 'ea')
  // const blobSpoon = makeBlob([], ['spoon'], 'mis', 'svgpic4', '1', 'ea')

  return (
    <div className="primarysections">
      <Intro />
      <Ingredients initialBlobs={initialBlobs} />
      <Tools initialBlobs={initialBlobs} />
      <Infographic initialBlobs={initialBlobs} />
    </div>
  )
}

export default PrimarySections
