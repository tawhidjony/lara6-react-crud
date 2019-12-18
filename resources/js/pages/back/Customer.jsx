import React from 'react';
import {Link} from 'react-router-dom';
const Customer = () => {
    return (
        <>
        <h1>This is customer Page</h1>
        <Link to="/admin" >Go to admin Page</Link>
        </>
    )
}

export default Customer;
