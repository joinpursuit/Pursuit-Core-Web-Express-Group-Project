DROP DATABASE IF EXISTS cipher_db;
CREATE DATABASE cipher_db;

\c cipher_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS photos;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name text,
    email text,
    date_of_birth text,
    gender text,
    profile_pic text,
    join_date date
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    users_id INT REFERENCES users(id),
    body text,
    time_stamp date
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    comment_id INT REFERENCES comments(id),
    user_id INT REFERENCES users(id)
);


CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    posts_id INT REFERENCES posts(id),
    body text
);
CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name text, 
    thumbnail text, 
    time_stamp date

);
CREATE TABLE photos(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    albums_id INT REFERENCES albums(id),
    photo_url text,
    time_stamp date


);