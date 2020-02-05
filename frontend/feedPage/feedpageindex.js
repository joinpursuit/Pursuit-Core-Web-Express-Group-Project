document.addEventListener("DOMContentLoaded", () => {
  let currentUser = sessionStorage.currentUser;
  let feed = document.querySelector(".feed");

  const displayLikes = async id => {
    let res = await axios.get(`http://localhost:3000/likes/posts/${id}`);
    let likes = res.data.numberOfLikes.count;

    return likes;
  };

  const likePost = async e => {
    let id = e.target.value;
    let res = await axios.post(`http://localhost:3000/likes/posts/${id}`, {
      user_id: currentUser
    });

    let p = document.querySelector(`#p${id}`);
    p.innerText = `${await displayLikes(id)} Likes`;
    let button = document.querySelector(`#likeButton${id}`);
    button.innerHTML = "dislike";
    button.onclick = dislikefun;
  };

  const dislikefun = async e => {
    let id = e.target.value;
    let res = await axios.delete(
      `http://localhost:3000/likes/${id}/${currentUser}`
    );

    let p = document.querySelector(`#p${id}`);
    p.innerText = `${await displayLikes(id)} Likes`;
    let button = document.querySelector(`#likeButton${id}`);
    button.innerHTML = "Like";
    button.onclick = likePost;
  };

  const displayComments = async id => {
    let commentUl = document.querySelector(`#commentsUl${id}`);
    let res = await axios.get(`http://localhost:3000/comments/posts/${id}`);
    let comments = res.data.comments;

    comments.forEach(comment => {
      let li = document.createElement("li");
      li.id = comment.id;
      li.innerText = `${comment.user_name} ${comment.body}`;
      commentUl.appendChild(li); //not working reading property of null
    });
  };
  const commentOnPost = async e => {
    let id = e.target.value;
    let comment = document.querySelector(`#comment${id}`);
    let res = await axios.post(
      `http://localhost:3000/comments/posts/${id}/${currentUser}`,
      { body: comment.value }
    );
  };

  const populateFeed = async () => {
    try {
      let res = await axios.get("http://localhost:3000/posts");
      let posts = res.data.posts;

      posts.forEach(async post => {
        let postDiv = document.createElement("div");
        if (post.type === "img") {
          let img = document.createElement("img");
          img.src = post.url_img;
          let id = post.id;
          let userName = document.createElement("h1");
          userName.innerText = post.user_name;
          let caption = document.createElement("p");
          caption.innerText = post.body;
          let likes = document.createElement("p");
          likes.id = `p${id}`;
          likes.innerText = `${await displayLikes(id)} Likes`;
          let likeButton = document.createElement("button");
          likeButton.innerHTML = "Like";
          likeButton.value = id;
          likeButton.id = `likeButton${id}`;
          likeButton.class = "likeButton";
          likeButton.onclick = likePost;
          let commentForm = document.createElement("form");

          let commentButton = document.createElement("button");
          commentButton.innerHTML = "comment";
          commentButton.value = id;
          commentButton.id = `commentButton${id}`;
          commentButton.class = "commentButton";
          commentButton.onclick = commentOnPost;
          let commentBody = document.createElement("input");
          commentBody.class = "comments";
          commentBody.type = "text";
          commentBody.placeholder = "Write a comment...";
          commentBody.id = `comment${id}`;
          commentForm.appendChild(commentBody);
          commentForm.appendChild(commentButton);
          let commentUl = document.createElement("ul");
          commentUl.id = `commentsUl${id}`;
          postDiv.appendChild(userName);
          postDiv.appendChild(img);
          postDiv.appendChild(caption);
          postDiv.appendChild(likes);
          postDiv.appendChild(likeButton);
          postDiv.appendChild(commentForm);
          postDiv.appendChild(commentUl);
          displayComments(id);

          feed.appendChild(postDiv);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  populateFeed();
});
