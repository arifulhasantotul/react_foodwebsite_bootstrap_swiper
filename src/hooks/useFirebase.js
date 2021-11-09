import {
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { initializeAuthentication } from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState("");
   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = (history, redirect_uri) => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
         .then((result) => {
            history.push(redirect_uri);
         })
         .catch((error) => {
            console.log(error.message);
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // logout
   const logout = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            // sign out successful
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // user observer
   const unsubscribed = useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return () => unsubscribed;
   }, [auth]);

   return {
      user,
      authError,
      setAuthError,
      signInUsingGoogle,
      isLoading,
      setIsLoading,
      logout,
   };
};

export default useFirebase;
