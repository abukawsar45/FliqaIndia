import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext(null);

  const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const emailSignUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const emailSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword (auth, email, password)
  }
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth,googleProvider)
  }
  const logOut = () => {
    setLoading(true)
    signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
  setUser(currentUser);
      setLoading(false);
    })
    return () => {
      return unSubscribe();
    }
    
  },[])

  const authInfo = {
    user,
    setUser,
    loading,
    emailSignUp,
    updateUserProfile,
    emailSignIn,
    googleLogin,
    logOut
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProviders;
