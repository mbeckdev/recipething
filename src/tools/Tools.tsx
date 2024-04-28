import React from 'react'

interface Props {
  name: string
}

const Tools = () => {
  return (
    <div className="tools tool-and-ingredient">
      <h2>Tools</h2>
      <p>(pic) Bowl - 1 ea - tool</p>
      <p>(pic) spoon - 1 ea - tool</p>
    </div>
  )
}
// const Intro: React.FC<Props> = ({ name }) => {

export default Tools
