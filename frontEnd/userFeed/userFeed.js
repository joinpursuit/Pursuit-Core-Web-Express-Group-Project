let displayUserInfo = async () => {
  let res = await axios.get(
    `http://localhost:3000/users/${sessionStorage.userID}`
  );
  let { username, propicurl, bio } = res.data.body.single_user;
  // let img = document.createElement("img");
  // img.src = propicurl;
  // document.body.appendChild(img);
  // console.log(res.data.body.single_user);
};

displayUserInfo();
