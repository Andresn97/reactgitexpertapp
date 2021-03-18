import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value.trim().length > 2) {
            setCategories(categs => [value, ...categs]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} >

            <input
                type='text'
                value={value}
                onChange={handleInputChange}
            ></input>

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}