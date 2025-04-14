import React from 'react';

const Blogs = () => {
    return (
      <>
        <div className='grid grid-cols-2 gap-5'>
            <div className="card   bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Xsmall Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card  bg-base-100 card-sm shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Small Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card  bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Medium Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card  bg-base-100 card-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Large Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

<div className="card  bg-base-100 card-xl shadow-sm">
  <div className="card-body">
    <h2 className="card-title">Xlarge Card</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
      </>
    );
};

export default Blogs;