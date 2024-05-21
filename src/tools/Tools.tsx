import React from 'react'

interface Props {
  name: string
}

const Tools = ({ initialBlobs }) => {
  console.log('initialBlobs[3].tools', initialBlobs[3].tools[0].length)
  return (
    <div className="tools tool-and-ingredient intro-ingredients-tools">
      <div className="section-title">
        <h2>Tools</h2>
      </div>
      {initialBlobs.map((blob) => {
        if (blob?.tools?.[0]?.length > 0) {
          return (
            <div key={blob.id}>
              <p>
                (pic) {blob.tools[0]} - {blob?.amount?.value}{' '}
                {blob?.amount?.unit} - tool
              </p>
            </div>
          )
        }
      })}
    </div>
  )
}
//<p>(pic) Bowl - 1 ea - tool</p>
//<p>(pic) spoon - 1 ea - tool</p>

export default Tools
