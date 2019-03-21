
const Tweeter = function () {
    let pId = 2 //post Id
    let cId = 6 //comment Id 

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = function () {
        return _posts
    }


    const addPost = function (text) {
        pId++
        _posts.push({
            id: "p" + pId,
            text: text,
            comments: []
        })
    }

    const removePost = function (postId) {
        for (let i in _posts) {
            if (_posts[i].id === postId) {
                _posts.splice(i, 1)
            }
        }
    }

    const addComment = function (text, postId) {
        cId++
        for (let i in _posts) {
            if (_posts[i].id === postId) {
                _posts[i].comments.push({
                    id: "c" + cId,
                    text: text
                })
            }
        }

    }

    const removeComment = function (postId, commentId) {
        for (let i in _posts) {
            if (_posts[i].id === postId) {
                for (let j in _posts[i].comments) {
                    if (_posts[i].comments[j].id === commentId) {
                        _posts[i].comments.splice(j, 1)
                    }
                }
            }
        }
    }


    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

