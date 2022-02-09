import React from 'react';
import { Link } from 'react-router-dom';


export default function PageNotFound(){
    return (
        <div >
            <h1 >Page Not Found</h1>
            <p>Return <Link to="/">home</Link>.</p>
        </div>
    )
}
