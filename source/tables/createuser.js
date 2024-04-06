import { collection, addDoc } from "firebase/firestore"
import { db } from "../config/firebase"

export function CreateUser(username,phone,email,password) {
    const userDb = collection(db, "users")
    addDoc(userDb, {
      username: username,
      phone: phone,
      email: email,
      password: password,
    })
}