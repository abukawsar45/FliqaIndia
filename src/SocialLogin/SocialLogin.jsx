import  { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../providers/AuthProviders';

const SocialLogin = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';
   const { googleLogin } = useContext(AuthContext);

   const handleGoogleLogin = () => {
     googleLogin()
       .then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
             navigate(from, { repalce: true });
          
       })
       .catch((error) => {
         console.log(error);
       });
   };

   return (
     <div>
       <div>
         <button
           onClick={handleGoogleLogin}
           className='flex  btn btn-outline group btn-info  '
         >
           {/* <FcGoogle className='text-2xl mr-2' />{' '} */}
           <span className='text-black group-hover:text-white'>
             Sign in With Google
           </span>
         </button>
       </div>
     </div>
   );

};

export default SocialLogin;