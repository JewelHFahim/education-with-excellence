import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='text-center error'>
            <h1 className='text-8xl text-red-600 font-semibold'>404</h1>
            <p className='text-2xl my-4 font-semibold'>Page Not Found</p>
            <button className='bg-emerald-500 py-1 px-5 text-slate-900 font-bold hover:bg-emerald-600'>Back to <Link to='/' >Home</Link> Page</button>
        </div>
    );
};

export default ErrorPage;