import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
   updateProfile,
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

   // google
   const signInUsingGoogle = (history, redirect_uri) => {
      setIsLoading(true);
      return signInWithPopup(auth, googleProvider)
         .then((result) => {
            console.log(result.user);
            history.push(redirect_uri);
            setAuthError("");
         })
         .catch((error) => {
            console.log(error.message);
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // create email
   const registerUserEmail = (name, email, password, history, redirect_uri) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            const newUser = { displayName: name, email };
            setUser(newUser);

            // save user to db
            saveUser(name, email);

            // send name to firebase after creation
            updateProfile(auth.currentUser, {
               displayName: name,
            })
               .then(() => {
                  setAuthError("");
               })
               .catch((error) => {
                  setAuthError(error.message);
               });
            history.push(redirect_uri);
         })
         .catch((error) => {
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

   const saveUser = (displayName, email) => {
      const user = { displayName, email };
      const url = `http://localhost:8080/users`;
      fetch(url, {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      }).then();
   };

   return {
      user,
      authError,
      setAuthError,
      signInUsingGoogle,
      registerUserEmail,
      isLoading,
      setIsLoading,
      logout,
   };
};

export default useFirebase;
