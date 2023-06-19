import useProviders from "../../hooks/useProviders";
import ActiveLink from './../../utilities/ActiveLink';


const Navbar = () => {
  const { user, logOut } = useProviders();
 const navOptions = (
   <>
     <li className=''>
   
         <ActiveLink to='/'>Home</ActiveLink>{' '}
     
     </li>
     <li className=' gap-1 '>
       <ActiveLink to='service'>Service</ActiveLink>{' '}
     </li>
     <li className=' gap-1 '>
       <ActiveLink to='portfolio'>Portfolio</ActiveLink>{' '}
     </li>
     <li className=' gap-1 '>
       <ActiveLink to='community'>Community</ActiveLink>{' '}
     </li>
     <li className=' gap-1 '>
       <ActiveLink to='blog'>Blog</ActiveLink>{' '}
     </li>
    
    
   </>
 );

 return (
   <div className='navbar fixed  bg-opacity-50 text-white max-w-screen-xl   bg-lime-500'>
     <div className='navbar-start'>
       <div className='dropdown'>
         <label tabIndex={0} className='btn btn-ghost lg:hidden'>
           <svg
             xmlns='http://www.w3.org/2000/svg'
             className='h-5 w-5'
             fill='none'
             viewBox='0 0 24 24'
             stroke='currentColor'
           >
             <path
               strokeLinecap='round'
               strokeLinejoin='round'
               strokeWidth='2'
               d='M4 6h16M4 12h8m-8 6h16'
             />
           </svg>
         </label>
         <ul
           tabIndex={0}
           className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
         >
           {navOptions}
         </ul>
       </div>
       <a className='btn btn-ghost font-serif normal-case text-xl'>
         BISTRO BOSS
       </a>
     </div>
     <div className='navbar-center hidden lg:flex'>
       <ul className='menu menu-horizontal px-1'>{navOptions}</ul>
     </div>
     <div className='navbar-end pr-5'>
       <ul className='menu-horizontal '>
         {user ? (
           <>
             <li className='gap-1'>
               <button onClick={() => logOut()} className='btn btn-danger '>
                 LogOut
               </button>{' '}
             </li>
           </>
         ) : (
           <>
             <li className=' gap-1 mr-5'>
               <ActiveLink to='signUp'>Sign Up</ActiveLink>{' '}
             </li>
             <li className=' gap-1 '>
               <ActiveLink to='signIn'>Sign In</ActiveLink>{' '}
             </li>
           </>
         )}
         {user?.photoURL && (
           <div
             className='tooltip tooltip-bottom '
             data-tip={user?.displayName}
           >
             <img
               src={user?.photoURL}
               className='w-12 h-12 ml-2 online rounded-full bg-slate-400 object-cover '
               alt=''
             />
           </div>
         )}
       </ul>
     </div>
   </div>
 );
};

export default Navbar;