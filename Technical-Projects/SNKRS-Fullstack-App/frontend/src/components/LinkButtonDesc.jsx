import React from 'react';

import { Link } from "react-router-dom";

function LinkButtonDesc({shoesData}) {
    // console.log("ShoeID: " , shoesData.id)
  return (
    <div>
    <Link to={`/sneakers/${shoesData.id}`} className='link-btn-desc' >
      See Description
    </Link>
    </div>
  );
}

export default LinkButtonDesc;