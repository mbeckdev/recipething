import React from 'react'

interface Props {
  name: string
}

const Intro = () => {
  // const Intro = () => {
  return (
    <div className="intro intro-ingredients-tools">
      <div className="section-title">
        <h2>Intro</h2>
      </div>
      <p>CEREAL, 1 pc</p>
      <div className="intro__section-1">
        <div>(end pic)</div>
        <div>mmm so good</div>
        <div className="intro__time">
          <div>TIME</div>
          <div>MIS 1 min</div>
          <div>cook 5 min</div>
        </div>
      </div>
    </div>
  )
}
// const Intro: React.FC<Props> = ({ name }) => {

export default Intro
