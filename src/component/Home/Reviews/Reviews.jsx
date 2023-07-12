import { useEffect, useState } from 'react';
import './Reviews.css'
import ReviewCart from './../Home/ReviewCart/ReviewCart';

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    fetch('reviewsData.json').then(res=>res.json()).then(data=>{
      // console.log(data)
      setReviewsData(data)
    })
  },[])

  return (
    <div>
      <div className='my-5'>
        <h2 className='text-center text-xl md:text-6xl header-title'>
          India&#8217;s Leading Creative Platform
        </h2>
        <p
          className='text-slate-400 mt-2 text-2xl custom-josefin text-center
        '
        >
          Experience hassle free bookings.Trusted by 2500+ customers
        </p>
      </div>
      <div className=''>
        <div className='my-8'>
          <div className='text-center '>
            <input
              type='text'
              placeholder='Search service,blog and many more...'
              className='  rounded-s-full px-4 md:px-16 py-2 text-black  border-2 border-slate-100 custom-josefin text-center  w-6/12'
            />
            <button className='bg-black  text-white rounded-full -ml-8 px-4 md:px-16 py-2 border-2 border-slate-100 custom-josefin text-center'>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>{ reviewsData?.map(reviewData => (<ReviewCart key={ reviewData?.title } reviewData={reviewData} />
        
      ))}</div>
    </div>
  );
};

export default Reviews;