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
    let h4 = document.createElement("h4");
    h4.innerHTML = `<b>${post.username}</b> posted at ${post.time_stamp}`;
    let img = document.createElement("img");
    img.src = post.imgurl;
    let p = document.createElement("p");
    p.innerHTML = `${post.description}`;
    let likesDiv = document.createElement("div");
    let commentsDiv = document.createElement("div");
    likesDiv.className = "likesDiv";
    commentsDiv.className = "commentsDiv";
    postDiv.appendChild(h4);
    postDiv.appendChild(img);
    postDiv.appendChild(p);
    postDiv.appendChild(likesDiv);
    postDiv.appendChild(commentsDiv);
    content.appendChild(postDiv);
    content.appendChild(lineBreak);
    postDiv.addEventListener("dblclick", () => {
      loadLikes(post, likesDiv);
      loadComments(post, commentsDiv);
      likesDiv.style.display = "block";
      commentsDiv.style.display = "block";
    });
  });
};

const loadLikes = async (post, div) => {
  div.innerHTML = "";
  let res = await axios.get(`http://localhost:3000/likes/post/${post.id}`);
  let numLikes = res.data.body.result.length;
  let h3 = document.createElement("h3");
  h3.innerText = `Likes: ${numLikes}`;
  div.appendChild(h3);
  div.addEventListener("click", () => {
    div.style.display = "none";
  });
};

const loadComments = async (post, div) => {
  div.innerHTML = "";
  let res = await axios.get(`http://localhost:3000/comments/posts/${post.id}`);
  res.data.body.comments.forEach(comment => {
    let p = document.createElement("p");
    p.innerHTML = `${comment.time_stamp} <b>${comment.username} commented on your post:</b> ${comment.content}`;
    div.appendChild(p);
    div.addEventListener("click", () => {
      div.style.display = "none";
    });
  });
};

const createPost = async () => {
  let poster_id = sessionStorage.userID;
  let res = await axios.post("http://localhost:3000/posts/", {
    poster_id: poster_id,
    imgURL: imgurlInput.value,
    description: descriptionInput.value
  });
};

createPostForm.addEventListener("submit", async e => {
  e.preventDefault();
  createPost();
  window.reload();
});

displayUserInfo();
displayUserPostFeed();
