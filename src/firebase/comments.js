import {app } from '../firebase/index.js'
import {getFirestore, addDoc, collection, onSnapshot} from 'firebase/firestore'
import { async } from '@firebase/util'
import comments from '../store/comments.js'

const db = getFirestore(app)

const commentsRef = collection(db, 'comments')

const addComment = async (comment) => {
    addDoc(commentsRef, comment);
}

onSnapshot(commentsRef, (snapshot) => {
    comments.value = []
    snapshot.forEach(doc => {
        const comment = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            message: doc.data().message
        }
        comments.value.push(comment)
    })
})

export {addComment}
