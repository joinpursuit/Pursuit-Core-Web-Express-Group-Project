document.addEventListener("DOMContentLoaded", () => {
  let currentUser = sessionStorage.currentUser;
  let currentUserName = sessionStorage.currentUserName;
  let profileButton = document.querySelector(".profileButton");
  let feed = document.querySelector(".feed");
  let user = document.querySelector("#user");
  let previewImage = document.querySelector("#imgPreview");
  let incomingFile = document.querySelector("#incomingFile");
  let createPostForm = document.querySelector(".createPost");
  let postInput = document.querySelector("#postInput");
  let imgsrc = "";

  user.innerText = currentUserName;

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
    commentUl.innerHTML = "";

    let res = await axios.get(`http://localhost:3000/comments/posts/${id}`);
    let comments = res.data.comments;

    comments.reverse().forEach(comment => {
      let li = document.createElement("li");
      li.id = `li${comment.id}`;
      li.innerText = `${comment.user_name} ${comment.body}:::::>`;
      if (comment.user_name === currentUserName) {
        let editButton = document.createElement("button");
        editButton.innerHTML = "edit";
        editButton.value = comment.id;
        editButton.id = id;
        editButton.class = "editButton";
        editButton.onclick = editComment;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.value = comment.id;
        deleteButton.id = `${id}`;
        deleteButton.class = "deleteButton";
        deleteButton.onclick = deleteComment;
        li.appendChild(editButton);
        li.appendChild(deleteButton);
      }
      commentUl.appendChild(li);
    });
  };

  const editComment = async e => {
    let id = e.target.value;

    let li = document.querySelector(`#li${id}`);
    let form = document.createElement("form");
    form.onsubmit = commentEditSubmit;
    let input = document.createElement("input");
    li.innerHTML;
    let start = li.innerText.indexOf(" ") + 1;
    let end = li.innerText.indexOf(":");

    text = li.innerText.slice(start, end);

    input.value = text;
    li.innerHTML = "";
    let submitEdit = document.createElement("button");
    submitEdit.innerText = " edit now";
    submitEdit.value = id;
    submitEdit.id = e.target.id;

    form.appendChild(input);
    form.appendChild(submitEdit);
    li.appendChild(form);
  };
  const commentEditSubmit = async e => {
    e.preventDefault();
    let id = e.currentTarget.elements[1].value;
    let post_id = e.currentTarget.elements[1].id;
    let body = e.currentTarget.elements[0].value;

    await axios.patch(`http://localhost:3000/comments/${id}`, { body: body }); // new comment gets pushed to the End.
    displayComments(post_id);
  };

  const deleteComment = async e => {
    let id = e.target.value;
    let postId = e.target.id;
    await axios.delete(`http://localhost:3000/comments/${id}`);

    displayComments(postId);
  };

  const commentOnPost = async e => {
    e.preventDefault();
    let id = e.target.value;
    let comment = document.querySelector(`#comment${id}`);
    let res = await axios.post(
      `http://localhost:3000/comments/posts/${id}/${currentUser}`,
      { body: comment.value }
    );
    displayComments(id);
  };

  const deletePost = async e => {
    let id = e.target.value;
    let postId = e.target.id;
    await axios.delete(`http://localhost:3000/posts/${id}`);
    populateFeed();
  };

  const populateFeed = async () => {
    try {
      feed.innerHTML = "";
      let res = await axios.get("http://localhost:3000/posts");
      let posts = res.data.posts;

      posts.forEach(async post => {
        let postDiv = document.createElement("div");
        postDiv.className = "postDiv";
        if (post.type === "img") {
          let img = document.createElement("img");
          img.className = "postImg";
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
          if (post.user_name === currentUserName) {
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete Post";
            deleteButton.value = post.id;
            deleteButton.id = `${id}`;
            deleteButton.class = "deleteButton";
            deleteButton.onclick = deletePost;
            postDiv.appendChild(deleteButton);
          }
          postDiv.appendChild(likes);
          postDiv.appendChild(likeButton);
          postDiv.appendChild(commentUl);

          feed.appendChild(postDiv);
          displayComments(id);
          postDiv.appendChild(commentForm);
        } else {
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
          postDiv.appendChild(caption);

          if (post.user_name === currentUserName) {
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Delete Post";
            deleteButton.value = post.id;
            deleteButton.id = `${id}`;
            deleteButton.class = "deleteButton";
            deleteButton.onclick = deletePost;
            postDiv.appendChild(deleteButton);
          }

          postDiv.appendChild(likes);
          postDiv.appendChild(likeButton);
          postDiv.appendChild(commentUl);

          feed.appendChild(postDiv);
          displayComments(id);
          postDiv.appendChild(commentForm);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  populateFeed();

  incomingFile.addEventListener("change", function() {
    const file = this.files[0];
    console.log(this.files);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load", function() {
        previewImage.setAttribute("src", this.result);
        imgsrc = this.result;
        console.log(imgsrc);
      });
    }
  });

  const postFunction = async () => {
    let file = incomingFile.value;
    let albumId = null;
    let postType;
    if (file !== "") {
      postType = "img";
      albumId = 1;
    } else {
      postType = "text";
    }
    try {
      let res = await axios.post("http://localhost:3000/posts", {
        type: postType,
        body: postInput.value,
        album_id: albumId,
        user_id: currentUser,
        url_img: imgsrc
      });
    } catch (err) {
      console.log(err);
    }
  };

  createPostForm.addEventListener("submit", async e => {
    postFunction(); // POST NOT IN PROPPER PLACEMENT UNTIL REFRESHED A FEW TIMES
    imgsrc = "";
    previewImage.innerHTML = "";
    populateFeed();
  });

  profileButton.addEventListener("click", () => {
    window.location.href = "../profilePage/profilepageindex.html";
  });
});
