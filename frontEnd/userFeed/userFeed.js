let imgurlInput = document.querySelector("#imgurlInput");
let descriptionInput = document.querySelector("#descriptionInput");
let createPostForm = document.querySelector("#createPostForm");
let postDiv = document.querySelector(".postDiv");

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
    h4.innerHTML = `<b>${post.username}</b> posted at ${post.time_stamp}`;
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
      displayLikesComments(likesDiv, commentsDiv);
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
      form.addEventListener("submit", e => {
        e.preventDefault();
        insertComment(postDiv, commentInput.value);
        commentInput.value = "";
      });
    });
  });
};

const insertComment = async (div, input) => {
  console.log(input);
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
    p.author_id = comment.author_id;
    p.innerHTML = `${comment.time_stamp} <b>${comment.username} commented on your post:</b> ${comment.content}`;
    div.appendChild(p);
  });
};

const displayLikesComments = (div1, div2) => {
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

createPostForm.addEventListener("submit", async e => {
  e.preventDefault();
  createPost();
  window.reload();
});

displayUserInfo();
displayUserPostFeed();
