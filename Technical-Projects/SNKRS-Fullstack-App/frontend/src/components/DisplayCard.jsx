import React from 'react';

function DisplayCard({shoesData}) {
  return (
    <div>
      <h1>{shoesData.name}</h1>
      <img src={shoesData.grid_picture_url} alt={shoesData.name} />
      <h2>${shoesData.retail_price}</h2>
    </div>
  );
}

export default DisplayCard;