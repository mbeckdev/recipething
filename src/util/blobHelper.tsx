import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './blobHelper.css'

// export const makeBlob = (foods, tools, state, pic, amountValue, amountUnit) => {
//   // create a uuid here.
//   const theid = uuidv4()
//   return {
//     food: foods,
//     tools: tools,
//     state: state,
//     pic: pic ? pic : 'pic',
//     id: theid, // 1d38af0d-e8d1-4b76-90ca-949b5366396b
//     amount: { value: amountValue, unit: amountUnit },
//   }
// }

export interface ABlob {
  foods: NameAmount[]
  tools: NameAmount[]
  state: string
  pic: string
  id: string
}
//blobName?

export const makeBlob = (
  foods: NameAmount[],
  tools: NameAmount[],
  state: string,
  pic: string
) => {
  // create a uuid here.
  const theid = uuidv4()
  return {
    foods: foods,
    tools: tools,
    state: state,
    pic: pic ? pic : 'pic',
    id: theid, // 1d38af0d-e8d1-4b76-90ca-949b5366396b
  }
}

export const showBlob = (blob: ABlob) => {
  //someday, show a picture, show a nameofsomekind?

  let elements: JSX.Element[] = []

  if (blob?.foods?.length > 0) {
    const foodElements = blob.foods.map((food) => (
      <p key={food.naid}>
        (pic) {food.name} - {food.amount.value}
        {food.amount.unit} - ingredient
      </p>
    ))
    elements = [...elements, ...foodElements]
  }

  if (blob?.tools?.length > 0) {
    const toolElements = blob.tools.map((tool) => (
      <p key={tool.naid}>
        (pic) {tool.name} - {tool.amount.value}
        {tool.amount.unit} - tool
      </p>
    ))
    elements = [...elements, ...toolElements]
  }
  return <div className="ablob">{elements}</div>
  // return elements
  //  but maybe show blob pic.
  // piccereal, under that is "1 cup"    arrow pointing to bowl
  // picmilk, under that is "1/2 cup"    arrow pointing to bowl
}

export interface NameAmount {
  name: string
  amount: { value: string; unit: string }
  naid: string
}
export const makeNameAmount = (
  name: string,
  amountValue: string,
  amountUnit: string
): NameAmount => {
  return {
    name: name,
    amount: { value: amountValue, unit: amountUnit },
    naid: uuidv4(),
  }
}

export const getAllFoodsOrTools = (blobs: ABlob[], type: string): ABlob[] => {
  const allTypes: ABlob[] = [] // Initialize the allTypes array with the correct type annotation
  blobs.map((blob) => {
    if (blob?.[type]?.length > 0) {
      allTypes.push(blob)
    }
  })
  return allTypes
}
