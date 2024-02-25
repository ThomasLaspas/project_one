// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection, getDocs,doc,getDoc,query,where} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdNNwkI-S5oYKzjElTlCVKTuc8LUEiiGU",
  authDomain: "project-one-b14a5.firebaseapp.com",
  projectId: "project-one-b14a5",
  storageBucket: "project-one-b14a5.appspot.com",
  messagingSenderId: "185575880092",
  appId: "1:185575880092:web:2cf7327cad12790ba6c459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const carsCollectionRef=collection(db,'cars')

// refactoring the bellow functions
export async function getCars(){
    const querySnapshot= await getDocs(carsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id:doc.id
    }))
    const res=await fetch('/api/cars')
    return dataArr
   
}

export async function getCarsd(id){
    const docRef = doc(db, "cars", id)
    const carSnapshot = await getDoc(docRef)
    return {
        ...carSnapshot.data(),
        id: carSnapshot.id
    }
}
export async function getHostCars(id) {
    const q = query(carsCollectionRef, where("hostId", "==", "456"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}



export async function loginUser(creds){
    const res = await fetch('/api/login',{method:'post',body:JSON.stringify(creds)})
    const data =await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }
    return data
}