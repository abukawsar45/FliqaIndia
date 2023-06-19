import { Link, useNavigate } from "react-router-dom";
import useProviders from "../../hooks/useProviders";
import SocialLogin from "../../SocialLogin/SocialLogin";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const SignUp = () => {
  const [success,setSuccess] = useState('')
  const [error, setError] = useState('')
    const [show, setShow] = useState(true);
    const [confirmShow, setConfirmShow] = useState(true);
  
  const navigate = useNavigate(); 
  const { logOut,emailSignUp, updateUserProfile } = useProviders();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photoURL = form.photoURL.value;

    if (!/(?=.*[A-Z])/.test(password))
    {
      return setError(' password must have one uppercase.');
    }
    if (!/(?=.*[!@#$%^&*])/.test(password))
    {
      return setError(' password must have one special.');
    }
      if (password !== confirmPassword) {
        return setError('The confirmed password does not match.');
      }

    console.log(name, email, password, confirmPassword, photoURL);
    emailSignUp(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError('');
        setSuccess('Registration successful');
        console.log(loggedUser);
        if (loggedUser)
        {
          updateUserProfile(name, photoURL).then(() => {
            logOut();
            navigate('/signin');

          })
        .catch(error=>{
          console.log(error)
        })
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess('');
      });
  };

     return (
       <>
         <div className=' min-h-screen bg-base-200 pt-16'>
           <div className='hero-content grid grid-cols-1 md:grid-cols-2'>
             <div className=' text-center  lg:text-left'>
               <h1 className='text-5xl text-center font-bold'>Login now!</h1>
             </div>
             <div className='   shadow-2xl text-center w-full md:w-3/4 bg-base-100'>
               <form onSubmit={handleRegister} className='card-body'>
                 <div className='form-control '>
                   <label className='label'>
                     <span className='label-text'>Name</span>
                   </label>
                   <input
                     type='text'
                     placeholder='name'
                     name='name'
                     className='input input-bordered'
                     required
                   />
                 </div>
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
                   />
                   <div
                     className='mr-auto ml-2 mt-2 block'
                     type='button'
                     onClick={() => setShow(!show)}
                   >
                     {show ? <AiFillEyeInvisible /> : <AiFillEye />}
                   </div>
                 </div>
                 <div className='form-control '>
                   <label className='label'>
                     <span className='label-text'>Confirm Password</span>
                   </label>
                   <input
                     type={confirmShow ? 'password' : 'text'}
                     name='confirmPassword'
                     placeholder='confirm password'
                     className='input input-bordered'
                     required
                   />
                   <div
                     className='mr-auto ml-2 mt-2 block '
                     type='button'
                     onClick={() => setConfirmShow(!confirmShow)}
                   >
                     {confirmShow ? <AiFillEyeInvisible /> : <AiFillEye />}
                   </div>
                 </div>
                 <div className='form-control '>
                   <label className='label'>
                     <span className='label-text'>Photo URL</span>
                   </label>
                   <input
                     type='url'
                     name='photoURL'
                     placeholder='photo url'
                     className='input input-bordered'
                     required
                   />
                 </div>
                 {error && <p className='text-red-500'>{error}</p>}
                 {success && <p className='text-green-400'>{success}</p>}

                 <div className='form-control mt-6'>
                   <input
                     type='submit'
                     className='btn btn-primary '
                     value='Sign Up'
                   />
                 </div>
                 <div>
                   <p>
                     <small>
                       Already signup?
                       <span>
                         <Link className='text-blue-500' to='/signin'>
                           Please sign in
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

export default SignUp;