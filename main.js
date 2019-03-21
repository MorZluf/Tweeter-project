
const tweeter = Tweeter()
const renderer = Renderer()
renderer.rednerPosts(tweeter.getPosts())


const post = function () {
    tweeter.addPost($("#input").val())
    renderer.rednerPosts(tweeter.getPosts())
}

$("body").on("click", ".delete", function () {
    tweeter.removePost($(this).closest(".post").attr("id"))
    renderer.rednerPosts(tweeter.getPosts())
})

$("body").on("click", "#add-comment-button", function () {
    let commentText = $(this).closest("#input-comment").siblings("input").val()
    let commentID = $(this).closest(".post").attr("id")
    tweeter.addComment(commentText, commentID)
    renderer.rednerPosts(tweeter.getPosts())
})



$("body").on("click", ".delete-comment", function(){
    let postID = $(this).closest(".post").attr("id")
    let commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID, commentID)
    renderer.rednerPosts(tweeter.getPosts())
})


