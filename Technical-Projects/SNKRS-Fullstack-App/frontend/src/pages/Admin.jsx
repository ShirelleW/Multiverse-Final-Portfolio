import React, { useState } from 'react';

import '../CSS/index.css';
import CreateShoe from '../components/CreateShoe';


function Admin() {
    const [shoes, setShoes] = useState([]);

    // POST SHOOE FUNCTION
    const postShoe = async (newShoe) => {
        // FETCH CALL
        const res = await fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newShoe)
        });

        // CONFIRM DATA WAS RECEIVED
        const data = await res.json();

        // SET DATA NOW
        setShoes([...shoes, data]);
    }

    return (
        <div>
            <h2 className='create-shoe-title'>Create a shoe</h2>
            <CreateShoe postShoe={postShoe} />
        </div>
    );
}

export default Admin;