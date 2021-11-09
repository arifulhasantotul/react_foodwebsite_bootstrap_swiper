import {
   createUserWithEmailAndPassword,
   getAuth,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { initializeAuthentication } from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
   const history = useHistory();
   const [user, setUser] = useState({});
   const [authError, setAuthError] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const [admin, setAdmin] = useState(false);

   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();

   // google
   const signInWithGoogle = () => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            // save user to db after update
            saveUserToDB(user.displayName, user.email, "PUT");
            setAuthError("");
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // register email
   const registerUserEmail = (email, password, name) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            // creating new user object
            const newUser = { displayName: name, email };
            setUser(newUser);
            // post user to db
            saveUserToDB(name, email, "POST");
            setAuthError("");
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
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // sign in email
   const signInWithEmail = (email, password, redirect_uri) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then((result) => {
            // const user = result.user;
            history.push(redirect_uri);
            setAuthError("");
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   // user observer
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return () => unsubscribed;
   }, [auth]);

   // creating admin
   useEffect(() => {
      const url = `http://localhost:8080/users/${user.email}`;
      fetch(url)
         .then((res) => res.json())
         .then((data) => {
            setAdmin(data.admin);
         });
   }, [user.email]);

   // logout
   const logout = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            alert("Logout Successfully");
         })
         .catch((error) => {
            setAuthError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   const saveUserToDB = (displayName, email, method) => {
      const user = { displayName, email };
      const url = `http://localhost:8080/users`;
      fetch(url, {
         method: method,
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      }).then();
   };

   return {
      user,
      isLoading,
      authError,
      admin,
      setAuthError,
      setIsLoading,
      signInWithGoogle,
      registerUserEmail,
      signInWithEmail,
      logout,
   };
};

export default useFirebase;
