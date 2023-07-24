import React, { useEffect, useState } from 'react';

import '../CSS/index.css';
import ShoesCard from '../components/ShoesCard';

function Shoes() {
  const [shoes, setShoes] = useState([]);

  const getShoesData = async () => {
    const response = await fetch(`http://localhost:8000/api/sneakers`);
    const data = await response.json();

    console.log('data:', data.shoes);
    setShoes(data.shoes);
    console.log(data.shoes);
  }

  useEffect(() => {
    getShoesData();
  }, []);

  return (
    <div className='shoes-body'>
      <div className='shoes-container'>
        {shoes.length > 0 ? shoes.map((shoe) => <ShoesCard key={shoe.id} shoesData={shoe} />) : 'loading...'}
      </div>
    </div>
  );
}

export default Shoes;