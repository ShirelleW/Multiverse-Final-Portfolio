import React from 'react';
import { useParams } from "react-router-dom";

import '../CSS/index.css';
import EditForm from '../components/EditForm';

function UpdateShoe() {
  const { id } = useParams();

  return (
    <div>
        <h1 className='update-shoe-title'>Update Shoe</h1>
        <EditForm shoeId={id}/>
    </div>
  );
}

export default UpdateShoe;