// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAbLqfy6WzXy2bPUSPPR-KkoCb2UUNJrM",
  authDomain: "my-calendar-aeb6f.firebaseapp.com",
  projectId: "my-calendar-aeb6f",
  storageBucket: "my-calendar-aeb6f.appspot.com",
  messagingSenderId: "796922998375",
  appId: "1:796922998375:web:c7c99aa17a23229d9aaec2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app