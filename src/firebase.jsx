import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKf7y3g4xEQSVLhzDmnan4xhzpViIpGPo",
  authDomain: "sewanou-f49ea.firebaseapp.com",
  projectId: "sewanou-f49ea",
  storageBucket: "sewanou-f49ea.appspot.com",
  messagingSenderId: "774845154980",
  appId: "1:774845154980:web:02e138d4ed4002a1274831",
  measurementId: "G-P4PHG3YBZD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };