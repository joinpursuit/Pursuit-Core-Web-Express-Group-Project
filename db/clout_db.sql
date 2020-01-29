DROP DATABASE IF EXISTS clout_db;

CREATE DATABASE clout_db;

\c clout_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS likes;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    bio TEXT,
    proPicURL TEXT,
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    imgURL TEXT,
    description TEXT,	
    date DATETIME,
);

CREATE TABLE comments(
    id	SERIAL PRIMARY KEY,
    post_id	INT REFERENCES posts(id) ON DELETE CASCADE,
    author_id	INT REFERENCES users(id) ON DELETE CASCADE,
    content	TEXT,
    date DATETIME,
);

CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    album_title TEXT,
    album_date DATE,
    album_coverURL TEXT,
);

CREATE TABLE pictures(
    id SERIAL PRIMARY KEY,
    post_id	INT REFERENCES posts(id) ON DELETE CASCADE,
    pictureURL	TEXT,
    album_id INT REFERENCES posts(id) ON DELETE CASCADE,
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
);






