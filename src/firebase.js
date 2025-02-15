// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FireBase_APIkey,
  authDomain: import.meta.env.VITE_FireBase_Auth_Domain,
  projectId: import.meta.env.VITE_FireBase_Project_ID,
  storageBucket: import.meta.env.VITE_FireBase_Storage_Bucket,
  messagingSenderId: import.meta.env.VITE_FireBase_Messaging_Sender_ID,
  appId: import.meta.env.VITE_FireBase_App_ID,
  measurementId: import.meta.env.VITE_FireBase_Measurment_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
