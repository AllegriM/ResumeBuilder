// import { createContext } from "react"
// import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { auth } from '../firebase/firebase'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {

//     const loginWithGoogle = () => {
//         signInWithPopup(auth)
//             .then((result) => {
//                 // This gives you a Google Access Token. You can use it to access the Google API.
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 const token = credential.accessToken;
//                 console.log(token)
//                 // The signed-in user info.
//                 const user = result.user;
//                 console.log(user)
//                 // ...
//             }).catch((error) => {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 console.log(errorCode)
//                 const errorMessage = error.message;
//                 console.log(errorMessage)
//                 // The email of the user's account used.
//                 const email = error.customData.email;
//                 console.log(email)
//                 // The AuthCredential type that was used.
//                 const credential = GoogleAuthProvider.credentialFromError(error);
//                 console.log(credential)
//                 // ...
//         });
//     }

//     <AuthContext.Provider value={{
//         loginWithGoogle
//     }}>
//         {children}
//     </AuthContext.Provider>
// }

// export default AuthProvider