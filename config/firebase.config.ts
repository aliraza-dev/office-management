// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

import { ENV } from "./env.config";

const firebaseConfig = {
  appId: ENV["production"].NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: ENV["production"].NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: ENV["production"].NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  authDomain: ENV["production"].NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  measurementId: ENV["production"].NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  storageBucket: ENV["production"].NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV["production"].NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { firebase_app };