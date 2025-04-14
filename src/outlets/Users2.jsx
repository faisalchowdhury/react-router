import React, { use } from 'react';

const Users2 = ({fetchData}) => {

    const data = use(fetchData);

    console.log

    return (
        <div>
            
          <div className='flex gap-5 flex-wrap'>
            {
                data.map(single => 
                    <div className='border p-5' key={single.id}>
                        <h2>Name : {single.name}</h2>
                        <p>Phone : {single.phone}</p>
                        <p>Website : {single.website}</p>
                        <p>Website : {single?.company?.name}</p>
                    </div>
                )
            }
          </div>


        </div>
    );
};

export default Users2;