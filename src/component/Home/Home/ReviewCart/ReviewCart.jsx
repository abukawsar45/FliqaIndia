const ReviewCart = ({ reviewData }) => {
  const { image, title, content } = reviewData || {};
  return (
    <div className='flex my-10 items-center '>
      <div className='bg-cyan-600 bg-opacity-90 rounded-tl-full rounded-br-full'>
        <img className='w-24 opacity-70 object-fill h-[50px] rounded-2xl' src={image} alt='' />
      </div>
      <div>
        <div>
          <h1 className="text-xl">{title}</h1>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
