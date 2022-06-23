const firebaseConfig = {
    apiKey: "AIzaSyD1cz8jz01RqI0xsdAhFz7qmTyyyrXI6r4",
    authDomain: "fraud-detect.firebaseapp.com",
    projectId: "fraud-detect",
    storageBucket: "fraud-detect.appspot.com",
    messagingSenderId: "1044899339077",
    appId: "1:1044899339077:web:e0d07fe2893d6d2347bc2c",
    measurementId: "G-6Q22KE8GNL"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();