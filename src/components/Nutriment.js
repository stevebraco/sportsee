import React from 'react'

const Nutriment = ({number, unity, img, name}) => {

  return (
    <div className='nutriment'>
      <img className='nutriment__img' src={img} alt="Calories" />
      <div className='nutriment__content'>
      <span className='nutriment__number'>{number}{unity}</span>
      <span className='nutriment__name'>{name}</span>
      </div>
    </div>
  )
}

export default Nutriment
