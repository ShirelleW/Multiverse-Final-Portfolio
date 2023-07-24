import React from 'react';

function UpdateCard({shoeData}) {
  return (
    <div className='update-card-holder'>
      <div className='update-card'>
        <h1 className='shoe-desc-name'>{shoeData.name}</h1>
        <img src={shoeData.grid_picture_url} alt={shoeData.name} />
        <h2>${shoeData.retail_price}</h2>
        <h4 className='shoe-desc-desc'>{shoeData.story_html}</h4>
    </div>
    </div>
    
  )
}

export default UpdateCard;