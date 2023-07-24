import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateShoe({ postShoe }) {

	const navigate = useNavigate();

	const [brandName, setBrandName] = useState('');
	const [gridPicture, setGridPicture] = useState('');
	const [name, setName] = useState('');
	const [releaseDate, setReleaseDate] = useState('');
	const [retailPrice, setRetailPrice] = useState('');
	const [silhouette, setSilhouette] = useState('');
	const [storyHtml, setStoryHtml] = useState('');


	const newShoe = async (newShoeData) => {
        try {
            const response = await fetch('http://localhost:8000/api/sneakers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(newShoeData)
            });

            const data = await response.json();

            console.log('Shoe Created!', data);

            navigate(`/sneakers/${data.createdShoe.id}`)
           


        } catch (error) {
            console.log(error.message);
         
        }
    
    }

	// HANDLE BUTTON SUBMISSION
	const handleSubmit = async (event) => {
		// PREVENT PAGE REFRESH AFTER FOR SUBMISSION
		event.preventDefault()

		const newShoeData = {
			brand_name: brandName,
			grid_picture_url: gridPicture,
			name: name,
			release_date: releaseDate,
			retail_price: retailPrice,
			silhouette: silhouette,
			story_html: storyHtml
		}
		newShoe(newShoeData);

		// // DATABSE CALL
		// await postShoe(newShoe);

		// EMPTY TEXT BOXES
		// setBrandName('');
		// setGridPicture('');
		// setName('');
		// setReleaseDate('');
		// setRetailPrice('');
		// setSilhouette('');
		// setStoryHtml('');
	}

	return (
		<div className='create-shoe-form-container'>
			<form onSubmit={handleSubmit}>
				<input className="input-boxes" type='text' placeholder='Enter brand name' value={brandName}
					onChange={(event) => setBrandName(event.target.value)}></input><br />
				<input className="input-boxes" type='text' placeholder='Enter picture URL' value={gridPicture}
					onChange={(event) => setGridPicture(event.target.value)}></input><br />
				<input className="input-boxes" type='text' placeholder='Enter shoe name' value={name}
					onChange={(event) => setName(event.target.value)}></input><br />
				<input className="input-boxes" type='text' placeholder='Enter release data' value={releaseDate}
					onChange={(event) => setReleaseDate(event.target.value)}></input><br />
				<input className="input-boxes" type='text' placeholder='Enter retail price' value={retailPrice}
					onChange={(event) => setRetailPrice(event.target.value)}></input><br />
				<input className="input-boxes" type='text' placeholder='Enter silhouette' value={silhouette}
					onChange={(event) => setSilhouette(event.target.value)}></input><br />

				<textarea name="paragraph_text" cols="50" rows="10" placeholder='Enter Description: ' value={storyHtml} onChange={(event) => setStoryHtml(event.target.value)}></textarea><br></br>

				<button onClick={() => postShoe()}>Add Shoe</button>
			</form>
		</div>
	)
}

export default CreateShoe;