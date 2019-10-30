# Pursuit-Core-Web-Express-Group-Project

With your group, build an app that has the basic functionality of a social media website.

## Back-End

Create a full RESTful API using the social media database structure described below, including an Express app and a Postgres database. This app should have the following routes, with corresponding SQL statements:

- **Users**
  - GET `/users` - Get all users.
  - GET `/users/:id` - Get single user.
  - POST `/users` - Add single user.
  - DELETE `/users/:id` - Delete user with the corresponding `id`.
- **Posts**
  - GET `/posts` - Get all posts.
  - GET `/posts/:id` - Get single post.
  - POST `/posts` - Add single post.
  - PATCH `/posts/:id` - Edit single post.
  - DELETE `/posts/:id` - Delete single post.
- **Likes**
  - GET `/likes` - Get all likes.
  - GET `/likes/posts/:id` - Get all likes for a single post.
  - POST `/likes/posts/:id` - Add single like.
  - DELETE `/likes/:id` - Delete single like.
- **Comments**
  - GET `/comments` - Get all comments.
  - GET `/comments/posts/:id` - Get all comments for a single post.
  - POST `/comments/posts/:id` - Add single comment.
  - PATCH `/comments/:id` - Edit single comment.
  - DELETE `/comments/:id` - Delete single comment.
- **Albums**
  - GET `/albums` - Get all albums.
  - POST `/albums` - Add new album.
- **Pictures**
  - GET `/pictures` - Get all pictures.
  - GET `/pictures/albums/:id` - Get all pictures for a single album.
  - POST `/pictures/albums/:id` - Add single picture.
  - DELETE `/pictures/:id` - Delete single picture.

The responses from your Express app should have three keys: `status`, `message`, and `body`. For example, when I send a GET request for a single user, I should get back something that looks like this:

```js
{
  status: "success",
  message: "got single user",
  body: {
    id: 1,
    name: "Reed",
    age: 46
  }
}
```


## Front end

Your front end should have each of the following components.  Don't worry about authentication yet: anyone can make whatever REST calls they want to.

### Table of contents

Have a table of contents page that contains hyperlinks to all of the other pages

### Posts Feed

- Display all posts from all users in chronographical order
- Include the number of likes in each post as well as the user
- Display all commonets from each post
- Create a new post
- Create a new comment for a given post

### User Search

- Search for a user
- Create a new user
- Delete a user

### Albums

- See all existing albums
- Create a new album

### Photos

- See all photos 
- Create a single photo
- Delete a single photo
