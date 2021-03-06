// import { useState } from "react";
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece'])

    // const handleAdd = () => {

    //     setCategories(categs => [...categs, 'Naruto']);

    // }

    return (

        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr />
            <ol>
                {categories.map(category =>
                    // <li key={category} > {category} </li>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )}
            </ol>
        </>

    );

};

export default GifExpertApp;