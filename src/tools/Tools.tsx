import React from 'react'

interface Props {
  name: string
}

const Tools = ({ initialBlobs }) => {
  console.log('initialBlobs[3].tools', initialBlobs[3].tools[0].length)

  const renderToolBlobs = () => {
    return initialBlobs.map((blob) => {
      if (blob?.tools?.length > 0) {
        for (let i = 0; i < blob.tools.length; i++) {
          return (
            <p key={blob.tools[i].naid}>
              (pic) {blob.tools[i]?.name} - {blob.tools[i]?.amount?.value}
              {blob?.tools[i]?.amount?.unit} - tool
            </p>
          )
        }
      }
    })
  }

  return (
    <div className="tools tool-and-ingredient intro-ingredients-tools">
      <div className="section-title">
        <h2>Tools</h2>
      </div>
      {renderToolBlobs()}
    </div>
  )
}
//<p>(pic) Bowl - 1 ea - tool</p>
//<p>(pic) spoon - 1 ea - tool</p>

export default Tools
