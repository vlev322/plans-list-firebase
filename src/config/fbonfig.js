import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf0kdXEF_gmSKNkR94FPnvTcTnNFul30M",
  authDomain: "pet-projects-plans.firebaseapp.com",
  databaseURL: "https://pet-projects-plans.firebaseio.com",
  projectId: "pet-projects-plans",
  storageBucket: "pet-projects-plans.appspot.com",
  messagingSenderId: "884559787191",
  appId: "1:884559787191:web:fe96f412454e45fed54932"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
