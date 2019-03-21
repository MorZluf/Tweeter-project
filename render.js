

const Renderer = function () {
    const renderPosts = function (_posts) {
        $("#posts").empty()
        for (let post in _posts) {
            $("#posts").append(`
            <div
             class=post id=${_posts[post].id} data-id=${_posts[post].id}
            >
            <div class=post-text> ${_posts[post].text}</div
            >
            </div>`)



            for (let comment in _posts[post].comments) {
            
                $(`#${_posts[post].id}`).append(`
                
                <div 
                    class=comments 
                    data-id=${_posts[post].comments[comment].id}
                > <span class=delete-comment>X</span>
                    ${_posts[post].comments[comment].text}
                 </div>`)
            }
            $(`#${_posts[post].id}`).append(`<div id=adding-commet>
            <input type='text'placeholder="Got something to say?"></input><span id=input-comment>
            <button id=add-comment-button>Comment</button></span></div>`)
            $(`#${_posts[post].id}`).append(`<button class=delete> Delete Post</button>`)
        }

    }
    return {
        rednerPosts: renderPosts
    }
}
