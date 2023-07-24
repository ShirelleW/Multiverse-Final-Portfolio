import React, { useState, useEffect } from 'react';

import UpdateCard from './UpdateCard';

function EditForm({ shoeId }) {

    const [brandName, setBrandName] = useState("")
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [silhouette, setSilhouette] = useState("")

    const [shoeDataset, setShoeDataset] = useState([])


    const getShoe = async (shoeId) => {

        const res = await fetch(`http://localhost:8000/api/sneakers/${shoeId}`)

        const data = await res.json();
        const shoeData = data.shoe;

        console.log("Data: ", shoeData)

        setShoeDataset(shoeData)

    }
    useEffect(() => {
        getShoe(shoeId)
    }, [shoeId])

    const updateShoe = async (shoeId, updatedShoe) => {
        try {
            const response = await fetch(`http://localhost:8000/api/sneakers/edit/${shoeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'SameSite': 'None'
                },
                body: JSON.stringify(updatedShoe)
            });

            const data = await response.json();
            console.log("US Data: ", data)
            console.log("ShoeID: ", shoeId)

        } catch (error) {
            console.log(error.message);
        }

    }

    const handleSubmit = (event) => {
        // event.preventDefault();

        const updatedShoe = {
            brand_name: brandName,
            grid_picture_url: image,
            name: name,
            release_date: releaseDate,
            retail_price: price,
            silhouette: silhouette,
            story_html: description
        }
        updateShoe(shoeId, updatedShoe);
    }

    return (
        <div>
            <div className='update-card-edit-form'>
                <UpdateCard shoeData={shoeDataset} />
                <div className='update-form-container'>
                    <form className="update-form" onSubmit={handleSubmit}>
                        <input className="input-boxes" type="text" placeholder="Enter Brand Name: " value={brandName} onChange={(e) => setBrandName(e.target.value)} /><br></br>
                        <input className="input-boxes" type="text" placeholder="Enter Image URL: " value={image} onChange={(e) => setImage(e.target.value)} /><br></br>
                        <input className="input-boxes" type="text" placeholder="Enter Shoe Name: " value={name} onChange={(e) => setName(e.target.value)} /><br></br>
                        <input className="input-boxes" type="text" placeholder="Enter Release Date: " value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} /><br></br>
                        <input className="input-boxes" type="number" placeholder="Enter Price: " value={price} onChange={(e) => setPrice(e.target.value)} /><br></br>
                        <input className="input-boxes" type="text" placeholder="Enter Silhouette: " value={silhouette} onChange={(e) => setSilhouette(e.target.value)} /><br></br>

                        <textarea name="paragraph_text" cols="50" rows="10" placeholder='Enter Description: ' value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br></br>

                        <button className='update-shoe-btn'>Update Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditForm;