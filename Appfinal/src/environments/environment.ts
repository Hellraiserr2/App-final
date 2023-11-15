import { initializeApp } from "firebase/app";


export const environment = {
  production: false,
  mapPk:'pk.eyJ1IjoiaGVsbHJhaXNlcnIyIiwiYSI6ImNsbnR5MjVtODA3eWIya283djB6bTZya2gifQ.pobj6tcVNShRHszZZCoeVg'

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
