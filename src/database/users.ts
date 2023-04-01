import {db} from '../ts/firebase-admin-setup'
import { User } from '../ts/types'

const COLLECTION = "USERS"
const usersRef = db.collection(COLLECTION);

export const createUser = async (id:string,data:User)=>{
    return await usersRef.doc(id).set(data);
}

export const getAllUsers = async()=>{
    let allUsers:User[] = []

    const snapshot = await usersRef.get();
    if (snapshot.empty) return allUsers;

    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        allUsers.push(doc.data() as User)
    })

    return allUsers
}

export const getOneUser = async (id:string)=>{
    const doc = await usersRef.doc(id).get();
    if (!doc.exists) {
    console.log('No such document!');
        return null
    } else {
        console.log('Document data:', doc.data());
        return doc.data() as User
    }
}

export const updateUser = async (id:string, data:any)=>{
    return await usersRef.doc(id).update(data)
}

export const deleteUser = async (id:string)=>{
    return await usersRef.doc(id).delete()
}