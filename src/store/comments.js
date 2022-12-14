import {ref} from 'vue'

const posts = ref([])

const comentarios = ref([{
    id: 1,
    postId: 1,
    name: 'Alejandro',
    body: 'SOY UN COMENTARIO RE FACHERO PERRI',
    date: Date.now()
},
{
    id: 1,
    postId: 2,
    name: 'Alejandro',
    body: 'SOY UN COMENTARIO RE FACHERO PERRI',
    date: Date.now()
},
{
    id: 1,
    postId: 3,
    name: 'Alejandro',
    body: 'SOY UN COMENTARIO RE FACHERO PERRI',
    date: Date.now()
},
{
    id: 1,
    postId: 4,
    name: 'Alejandro',
    body: 'SOY UN COMENTARIO RE FACHERO PERRI',
    date: Date.now()
}]
)

export { posts, comentarios }
