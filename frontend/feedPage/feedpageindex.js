document.addEventListener("DOMContentLoaded", () => {
  let currentUser = sessionStorage.currentUser;
  let feed = document.querySelector(".feed");

  const getLikes = async id => {
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
    p.innerText = `${await getLikes(id)} Likes`;
    let button = document.querySelector(`#likeButton${id}`);
    button.innerHTML = "dislike";
    button.onclick = dislikefun;
  };

  const dislikefun = async e => {
    let id = e.target.value;
    let res = await axios.delete(
      `http://localhost:3000/likes/${id}/${currentUser}`
    );
    debugger;
    let p = document.querySelector(`#p${id}`);
    p.innerText = `${await getLikes(id)} Likes`;
    let button = document.querySelector(`#likeButton${id}`);
    button.innerHTML = "Like";
    button.onclick = likePost;
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
          let caption = document.createElement("p");
          caption.innerText = post.body;
          let likes = document.createElement("p");
          likes.id = `p${id}`;
          likes.innerText = `${await getLikes(id)} Likes`;
          let likeButton = document.createElement("button");

          likeButton.innerHTML = "Like";
          likeButton.value = id;
          likeButton.id = `likeButton${id}`;
          likeButton.class = "likeButton";
          likeButton.onclick = likePost;

          postDiv.appendChild(img);

          postDiv.appendChild(caption);
          postDiv.appendChild(likes);
          postDiv.appendChild(likeButton);
          feed.appendChild(postDiv);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  populateFeed();
});
