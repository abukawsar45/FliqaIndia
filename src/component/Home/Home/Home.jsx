
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  

  const btnHandle = () => {
    var a = 1;
    var b = 0;
    while (a <= 3) {
      a++;
      b += a * 2;
      print(b);
    }
}

  return (
    <div className='pt-16'>
      <Banner />
     <button
  onClick={btnHandle}
  className='my-4 mx-auto btn btn-primary'
>
  click
</button>




      <Reviews />
    </div>
  );
};

export default Home;