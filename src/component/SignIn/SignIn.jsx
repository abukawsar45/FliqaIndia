
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useProviders from '../../hooks/useProviders';
import Swal from 'sweetalert2';
import SocialLogin from './../../SocialLogin/SocialLogin';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const SignIn = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('');
      const [show, setShow] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const { emailSignIn } = useProviders()
  console.log(emailSignIn)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailSignIn(email, password)
      .then(result => {
        setError('');
        const user = result.user;
        if (user)
        {
          setSuccess('Sign in successful')
          Swal.fire({
            // position: 'top-end',
            icon: 'success',
            title: 'Sign In successful',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, {replace: true})
        }
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message)
    })
  };


  return (
    <>
      <div className=' min-h-screen bg-base-200 pt-16'>
        <div className='hero-content grid grid-cols-1 md:grid-cols-2'>
          <div className=' text-center  lg:text-left'>
            <img
              src='https://i.ibb.co/4t3Xnnc/login-page.gif'
              alt='login image'
            />
          </div>
          <div className='   shadow-2xl text-center w-full md:w-3/4 bg-base-100'>
            <form onSubmit={handleLogin} className='card-body'>
              <div className='form-control '>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  name='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control '>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type={show ? 'password' : 'text'}
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />{' '}
                <div
                  className='mr-auto ml-2 mt-2 block'
                  type='button'
                  onClick={() => setShow(!show)}
                >
                  {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                </div>
              </div>
              {error && <p className='text-red-500'>{error}</p>}
              {success && <p className='text-green-400'>{success}</p>}

              <div className='form-control mt-6'>
                <input
                  type='submit'
                  className='btn btn-primary '
                  value='Sign In'
                />
              </div>
              <div>
                <p>
                  <small>
                    No Accout?
                    <span>
                      <Link className='text-blue-500' to='/signup'>
                        Create a new
                      </Link>{' '}
                    </span>{' '}
                  </small>
                </p>
              </div>
              <div>
                <div className='flex flex-col w-full border-opacity-50'>
                  <div className='divider'></div>
                  <div className='flex justify-center'>
                    <SocialLogin />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;