import { database } from '../database/config'
import { set, ref, get, child, remove, push } from 'firebase/database'

export function startAddingPost(post) {
    return (dispatch) => {
        set(ref(database, `posts/${post.id}`), {
            ...post
        }).then(() => {
            dispatch(addPost(post))
        }).catch(error => {
            console.log(error)
        })
    }
}

export function startLoadingPosts() {
    return (dispatch => {
        get(child(ref(database), 'posts')).then(snapshot => {
            const posts = []
            snapshot.forEach(post => {
                posts.push(post.val())
            })
            dispatch(loadPosts(posts))
        })
    })
}

export function startRemovingPost(index, id) {
    return (dispatch => {
        remove(ref(database, `posts/${id}`)).then(() => {
            dispatch(removePost(index))
        }).catch(err => {
            console.log(err)
        })
    })
}

export function startAddingComments(comment, postId) {
    return (dispatch => {
        push(ref(database, `comments/${postId}`), comment).then(() => {
            dispatch(addComment(comment, postId))
        }).catch(error => {
            console.log(error)
        })
    })
}

export function startLoadingComments() {
    return (dispatch => {
        get(child(ref(database), 'comments')).then(snapshot => {
            const comments = {}
            snapshot.forEach(childSnapshot => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))
        })
    })
}

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS',
        posts
    }
}

export function loadComments(comments) {
    return {
    type: 'LOAD_COMMENTS',
    comments
    }
   }