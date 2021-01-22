(function () {
    const BASE_URL = "http://jsonplaceholder.typicode.com";
    const USERS_URL = "/users/";
    const POSTS_URL = "/posts?userId=";
    const COMMENTS_URL = "/comments?postId=";
    let userId;
    let usersDiv, postsDiv, commentsDiv;
    let btnSearch;
    window.onload = function () {
        userId = document.getElementById("userId");
        usersDiv = document.getElementById("users");
        postsDiv = document.getElementById("posts");
        btnSearch = document.getElementById("search");
        btnSearch.onclick = onClickHandle;
    }
    
    function onClickHandle(evt) {
        let urlUser = BASE_URL + USERS_URL + userId.value
        let urlPosts = BASE_URL + POSTS_URL + userId.value
        fetch(urlUser).then(
            (res) => res.json()).then(
                (data) => usersDiv.innerHTML = `<h3>User Information</h3>
                name: ${data.name}<br />
                username: ${data.username} <br />
                email: ${data.email}<br />
                website: ${data.website}`
        );
        fetch(urlPosts).then(
            (res) => res.json()).then(
                (data) => {
                    let postsHTML = "<h3>User Posts: </h3>";
                    for (let post of data) {
                        postsHTML += `<div class="post"><h4>Post Id: ${post.id}</h4>
                        <h5>${post.title}</h5>
                        <p>${post.body}</p>
                        <button class="view-comments" data-id="${post.id}">View comments</button>
                        <div id="post-comments-${post.id}"></div>
                        </div>`;
                        
                    }
                    
                    postsDiv.innerHTML = postsHTML;
                    document.querySelectorAll(".view-comments").forEach(element => {
                        element.addEventListener("click", showComments)
                    });
                }
            );
        
    }
    function showComments(evt) {
        let id = evt.target.dataset.id
        let div = document.getElementById("post-comments-" + id);
        let url = BASE_URL + COMMENTS_URL + id;
        fetch(url).then((res) => res.json())
            .then(data => {
                let commentsHTML = "<div id=\"comments\"><h4>Comments: </h4>";
                for (let comment of data) {
                    commentsHTML += `<div class="comment">
                    <h5>Name: ${comment.name}</h5>
                    <h5>Email: ${comment.email}</h5>
                    <p> Comment${comment.body}</p>
                    <hr />
                    </div>`;
                    
                }
                
                div.innerHTML = commentsHTML;
        })
    }
}
    

)()