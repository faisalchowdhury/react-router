import React from 'react';
import {useLoaderData} from 'react-router'

const UserDetails = () => {

    const data = useLoaderData();

    console.log(data)
    return (
        <div className='p-5 border-2 h-full bg-slate-300'>
            <h1 className='text-pink-600 text-4xl'>This is User Details</h1>
            <h2 className='text-2xl'>Name : {data.name}</h2>
            <h3>Email :  {data.email}</h3>
            <p>Website : {data.website}</p>
            <p>Company : {data?.company?.name}</p>
        </div>
    );
};

export default UserDetails;