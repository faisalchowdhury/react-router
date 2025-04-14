import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const data = useLoaderData();
    console.log(data);
    return (
        <>
        <div className='flex gap-5 flex-wrap'>
        {
            data.map(single => 
            <div key={single.id} className='border p-3'>
                <h2>{single.name}</h2>
                <p>Email : { single.email }</p>
            </div>)
        }
        </div>
        </>
    );
};

export default Users;