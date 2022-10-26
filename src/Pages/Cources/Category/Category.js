import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const SingleCource = useLoaderData();

    console.log(SingleCource);
    
    return (
        <div>
            <p>Single Cource: {SingleCource.length}</p>
        </div>
    );
};

export default Category;