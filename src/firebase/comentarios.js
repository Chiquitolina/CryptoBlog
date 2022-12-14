import { app } from './index.js';
import { collection, addDoc, doc, deleteDoc, onSnapshot, getFirestore } from 'firebase/firestore';
import { comentarios } from '../store/comments.js'

const db = getFirestore(app)
const comentarioRef = collection(db, 'comentarios')

const addComentario = (comentario) => {
    addDoc(comentarioRef, comentario)
}

const getComentarios = () => {
    onSnapshot(comentarioRef, (snapshot) => {
        comentarios.value = []
        snapshot.forEach(comentarioData => {
            let newComentario = {
                id: comentarioData.id,
                postId: comentarioData.data().postId,
                date: comentarioData.data().date,
                name: comentarioData.data().name,
                email: comentarioData.data().email,
                text: comentarioData.data().text,
                photo: comentarioData.data().photo,
            }
            comentarios.value.push(newComentario)
        })
        comentarios.value.sort((a,b) => a.date - b.date)
    })
}

export { addComentario, getComentarios }