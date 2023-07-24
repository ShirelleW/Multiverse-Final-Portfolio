import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

function DescriptionCard({ item }) {

  const navigate = useNavigate();

  const deleteItem = async (shoeId) => {
    if (window.confirm('Are you sure you want to delete this item?')) {

      try {
        console.log('DELETE!');
        const response = await fetch(`http://localhost:8000/api/sneakers/${shoeId}`, {
          method: 'DELETE',
          headers: {
            'SameSite': 'None'
          }
        });
        const data = await response.json();

        console.log('Shoe deleted!', data);
        navigate('/');


      } catch (error) {
        console.log(error.message);

      }

    }
  }

  return (
    <div className='desc-holder'>
      <div className='shoe-desc-card'>
        <h2 className='shoe-desc-name'>{item.name}</h2>
        <img src={item.grid_picture_url} alt={item.name} />
        <h4>${item.retail_price}</h4>
        <h4 className='shoe-desc-desc'>{item.story_html}</h4>

        <div className='dlt-update-container'>
        <button className="shoe-desc-del-btn" onClick={() => deleteItem(item.id)}>Delete</button>
        <Link className="shoe-desc-update" to={`/sneakers-edit/${item.id}`}>Update Sneaker</Link>
        </div>
       
      </div>
    </div>
  );
}

export default DescriptionCard;