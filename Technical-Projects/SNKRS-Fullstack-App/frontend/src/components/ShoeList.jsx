import React from 'react';

import DescriptionCard from './DescriptionCard';

function ShoeList({ shoes }) {
  return (
    <div className='shoe-list'>
      {shoes.length > 0 ? shoes.map((shoe) =>
        <DescriptionCard key={shoe.id} shoe={shoe} />) : 'No products to display :('}
    </div>
  );
}

export default ShoeList;