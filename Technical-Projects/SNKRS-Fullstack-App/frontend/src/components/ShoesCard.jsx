import React from 'react'

import LinkButtonDesc from './LinkButtonDesc'

function ShoesCard({shoesData}) {
  return (
    <div className='shoes-card'>
        <h1 className='shoe-name'> {shoesData.name} </h1>
        <img src={shoesData.grid_picture_url} alt={shoesData.name} />
        <div className='price-link-style'>
        <h2> ${shoesData.retail_price} </h2>
        <LinkButtonDesc shoesData={shoesData}/>
        </div>
    </div>
  )
}

export default ShoesCard