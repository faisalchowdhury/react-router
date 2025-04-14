import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const Users = () => {

    const data = useLoaderData();
    
    return (
        <>
        <div className='flex gap-5 flex-wrap'>
        {
            data.map(single => 
            <div key={single.id} className='border p-3'>
                <h2>{single.name}</h2>
                <p>Email : { single.email }</p>
                <br />
                <NavLink className='btn' to={`/users/${single.id}`}>Click to see Details</NavLink>
            </div>)
        }
        </div>
        </>
    );
};

export default Users;