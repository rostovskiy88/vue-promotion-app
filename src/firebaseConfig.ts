import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfNRpqXvO05jOHKEKdGOmDPd9mL6SRW6A",
  authDomain: "vue-promotion-app.firebaseapp.com",
  projectId: "vue-promotion-app",
  storageBucket: "vue-promotion-app.appspot.com",
  messagingSenderId: "948784011974",
  appId: "1:948784011974:web:2e25469fe671c99ffa55c7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
