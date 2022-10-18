import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyAiP_D5Izc2WSWk9P9GZhGzXRWg1xFGIMc",
    authDomain: "todo-56558.firebaseapp.com",
    projectId: "todo-56558",
    storageBucket: "todo-56558.appspot.com",
    messagingSenderId: "644612957918",
    appId: "1:644612957918:web:acee57d3e004df7249444f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()
export const saveTask = (title, description) => addDoc(collection(db, "tasks"), {title, description});

export const getTasks = () =>  getDocs(collection(db, "tasks"));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));

export const getTask = id =>  getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) => updateDoc(doc(db,"tasks", id), newFields);