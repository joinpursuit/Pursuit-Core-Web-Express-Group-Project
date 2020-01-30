DROP DATABASE IF EXISTS git_me;
CREATE DATABASE git_me;

\c git_me;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS prefrences;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    userName TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    dob date NOT NULL,
    gender TEXT NOT NULL,
    orientation TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  body VARCHAR (250)
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
  liker_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL,
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
  commentor_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL,
  body VARCHAR(250)
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
  albums_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,
  picture_url TEXT
);





