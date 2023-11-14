import { initializeApp } from "firebase/app";


export const environment = {
  production: false

};



const firebaseConfig = {
  apiKey: "AIzaSyAMStuaVaRKzflxuVar6V4m0WOqW_Mkrjc",
  authDomain: "appfinal-bd37f.firebaseapp.com",
  projectId: "appfinal-bd37f",
  storageBucket: "appfinal-bd37f.appspot.com",
  messagingSenderId: "1089321663807",
  appId: "1:1089321663807:web:570490bd96400aaa83a78a"
};

const app = initializeApp(firebaseConfig);
