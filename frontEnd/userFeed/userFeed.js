let imgurlInput = document.querySelector("#imgurlInput");
let descriptionInput = document.querySelector("#descriptionInput");
let createPostForm = document.querySelector("#createPostForm");
let postDiv = document.querySelector(".postDiv");
let userSearchForm = document.querySelector("#userSearchForm");
let userSearchInput = document.querySelector("#userSearchInput");
userSearchForm.addEventListener("submit", async e => {
  e.preventDefault();
  let errorDiv = document.querySelector("#errorDiv");
  try {
    let res = await axios.get(
      `http://localhost:3000/users/search/${userSearchInput.value}`
    );
    sessionStorage.searchUserID = res.data.body.user.id;
    window.location.href = "album.html";
    window.location.href.reload();
  } catch (error) {
    errorDiv.innerHTML = "";
    let errorMessage = document.createElement("p");
    errorMessage.innerHTML = `<b>No user found!</b>`;
    errorDiv.appendChild(errorMessage);
  }
});

let displayUserInfo = async () => {
  let res = await axios.get(
    `http://localhost:3000/users/${sessionStorage.userID}`
  );
  let { username, propicurl, bio } = res.data.body.single_user;

  let profName = document.querySelector("#ownerName");
  let profPic = document.querySelector("#ownerPic");
  let profBio = document.querySelector("#ownerBio");
  let logOffBtn = document.querySelector("#logOffBtn");

  let img = document.createElement("img");
  img.src = propicurl;
  profName.innerText = username;
  profPic.appendChild(img);
  profBio.innerText = bio;

  logOffBtn.addEventListener("click", e => {
    sessionStorage.removeItem("userID");
    sessionStorage.removeItem("searchUserID");
    window.location.href = "logIn.html";
    window.location.href.reload();
  });
};

let displayUserPostFeed = async () => {
  let res = await axios.get(`http://localhost:3000/posts/`);
  let { posts } = res.data.body;
  let content = document.querySelector(".content");
  posts.forEach(post => {
    let lineBreak = document.createElement("hr");
    let postDiv = document.createElement("div");
    postDiv.className = "postDiv";
    postDiv.post_id = post.id;

    let h4 = document.createElement("h4");
    let img = document.createElement("img");
    let p = document.createElement("p");
    post.time_stamp = new Date();
    h4.innerHTML = `<b>${
      post.username
    }</b> posted at ${post.time_stamp.toDateString()}`;
    img.src = post.imgurl;
    p.innerHTML = `${post.description}`;

    let showCommentsLikesBtn = document.createElement("button");
    showCommentsLikesBtn.className = "showCommentsLikesBtn";
    showCommentsLikesBtn.innerText = "Show Comments & Likes";
    let likesDiv = document.createElement("div");
    let commentsDiv = document.createElement("div");
    likesDiv.className = "likesDiv";
    commentsDiv.className = "commentsDiv";

    let insertCommentBtn = document.createElement("button");
    insertCommentBtn.className = "insertCommentBtn";
    insertCommentBtn.innerText = "Add a Comment";

    postDiv.appendChild(h4);
    isDeletePost(post, postDiv);
    postDiv.appendChild(img);
    postDiv.appendChild(p);
    postDiv.appendChild(showCommentsLikesBtn);
    postDiv.appendChild(insertCommentBtn);
    postDiv.appendChild(likesDiv);
    postDiv.appendChild(commentsDiv);
    likesDiv.hidden = true;
    commentsDiv.hidden = true;
    content.appendChild(postDiv);
    content.appendChild(lineBreak);

    showCommentsLikesBtn.addEventListener("click", () => {
      loadLikes(post, likesDiv);
      loadComments(post, commentsDiv);
      displayLikesCommentsDivs(likesDiv, commentsDiv);
    });

    insertCommentBtn.addEventListener("click", () => {
      let form = document.createElement("form");
      form.id = "insertCommentForm";
      let commentInput = document.createElement("input");
      let commentBtn = document.createElement("button");
      commentInput.type = "text";
      commentInput.required = true;
      commentInput.placeholder = "Enter a comment here";
      commentBtn.type = "submit";
      commentBtn.innerText = "Submit Comment";
      form.appendChild(commentInput);
      form.appendChild(commentBtn);
      postDiv.appendChild(form);
      insertCommentBtn.disabled = true;
      form.addEventListener("submit", async e => {
        e.preventDefault();
        await insertComment(postDiv, commentInput.value);
        commentInput.value = "";
        await loadComments(post, commentsDiv);
      });
    });

    img.addEventListener("dblclick", async e => {
      await likePost(post, postDiv.post_id, likesDiv);
    });
  });
};

const isDeletePost = (post, div) => {
  if (post.poster_id == sessionStorage.userID) {
    let deletePostBtn = document.createElement("button");
    deletePostBtn.className = "deletePostBtn";
    deletePostBtn.innerText = "x";
    div.appendChild(deletePostBtn);
    deletePostBtn.addEventListener("click", async e => {
      e.preventDefault();
      await deletePost(post);
      displayUserPostFeed();
    });
  }
};

const deletePost = async post => {
  let res = await axios.delete(`http://localhost:3000/posts/${post.id}`);
  window.location.reload();
};

const insertComment = async (div, input) => {
  let res = await axios.post(
    `http://localhost:3000/comments/posts/${div.post_id}/${sessionStorage.userID}`,
    { content: input }
  );
};

const loadLikes = async (post, div) => {
  div.innerHTML = "";
  let res = await axios.get(`http://localhost:3000/likes/post/${post.id}`);
  let numLikes = res.data.body.result.length;
  let h3 = document.createElement("h3");
  h3.innerText = `Likes: ${numLikes}`;
  div.appendChild(h3);
};

const loadComments = async (post, div) => {
  div.innerHTML = "";
  let res = await axios.get(`http://localhost:3000/comments/posts/${post.id}`);
  res.data.body.comments.forEach(comment => {
    let p = document.createElement("p");
    comment.time_stamp = new Date();
    p.innerHTML = `${comment.time_stamp.toDateString()} <b>${
      comment.username
    } commented on your post:</b> ${comment.content}`;
    div.appendChild(p);
    p.author_id = comment.author_id;
    p.comment_id = comment.id;
    if (p.author_id == sessionStorage.userID) {
      let deleteCommentBtn = document.createElement("button");
      deleteCommentBtn.className = "deleteCommentBtn";
      deleteCommentBtn.innerText = "x";
      div.appendChild(deleteCommentBtn);
      deleteCommentBtn.addEventListener("click", async e => {
        await deleteComment(p.comment_id, post.id);
        await loadComments(post, div);
      });
    }
  });
};

const deleteComment = async (comment_id, post_id) => {
  await axios.delete(`http://localhost:3000/comments/${comment_id}/${post_id}`);
};

const displayLikesCommentsDivs = (div1, div2) => {
  if (div1.hidden === false && div2.hidden === false) {
    div1.hidden = true;
    div2.hidden = true;
  } else {
    div1.hidden = false;
    div2.hidden = false;
  }
};

const createPost = async () => {
  let poster_id = sessionStorage.userID;
  let res = await axios.post("http://localhost:3000/posts/", {
    poster_id: poster_id,
    imgURL: imgurlInput.value,
    description: descriptionInput.value
  });
  imgurlInput.value = "";
  descriptionInput.value = "";
};

const likePost = async (post, post_id, div) => {
  let likeStatus = document.createElement("div");
  let liker_id = sessionStorage.userID;
  let res = await axios.post(
    `http://localhost:3000/likes/post/${post_id}/${liker_id}`
  );
  let h3 = document.createElement("h3");
  h3.innerHTML = "";
  if (res.data.error) {
    await deleteLikePost(post_id, liker_id);
    h3.innerText = "Unliked!";
    likeStatus.appendChild(h3);
    await loadLikes(post, div);
  } else {
    h3.innerText = "Liked!";
    likeStatus.appendChild(h3);
    await loadLikes(post, div);
  }
  div.appendChild(likeStatus);
};

const deleteLikePost = async (post_id, liker_id) => {
  let res = await axios.delete(
    `http://localhost:3000/likes/${post_id}/${liker_id}`
  );
};

createPostForm.addEventListener("submit", async e => {
  e.preventDefault();
  await createPost();
  window.reload();
});

displayUserInfo();
displayUserPostFeed();
