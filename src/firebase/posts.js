import {app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import { async } from '@firebase/util'
import { posts } from '../store/comments.js'

const db = getFirestore(app)

const postsRef = collection(db, 'comments')

const addComment = async (post) => {
    addDoc(postsRef, post);
}

const deleteComment = (id) => {
    deleteDoc(doc(postsRef, id))
}

onSnapshot(postsRef, (snapshot) => {
    posts.value = []
    snapshot.forEach(doc => {
        const post = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            message: doc.data().message,
            fecha: doc.data().fecha,
            titulo: doc.data().titulo
        }
        posts.value.push(post)
        posts.value.sort((a,b)=> b.fecha - a.fecha)
    })
})

export {addComment, deleteComment}
