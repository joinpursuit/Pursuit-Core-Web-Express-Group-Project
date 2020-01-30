DROP DATABASE IF EXISTS lunch_buddies_db;
CREATE DATABASE lunch_buddies_db;

\c lunch_buddies_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;


CREATE TABLE users(
       id SERIAL PRIMARY KEY,
       user_name TEXT UNIQUE,
       email TEXT UNIQUE,
       password TEXT,
       phone_number INT UNIQUE
);


CREATE TABLE albums(
       id SERIAL PRIMARY KEY,
       title TEXT,
       user_id INT REFERENCES users(id) ON DELETE SET NULL
);


CREATE TABLE posts(
       id SERIAL PRIMARY KEY,
       type VARCHAR,
       body TEXT,
       post_time timestamp,
       album_id INT REFERENCES albums(id) ON DELETE SET NULL,
       user_id INT REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE likes(
       id SERIAL PRIMARY KEY,
       user_id INT REFERENCES users(id) ON DELETE CASCADE,
       post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments(
       id SERIAL PRIMARY KEY,
       body VARCHAR,
       user_id INT REFERENCES users(id) ON DELETE CASCADE,
       post_id INT REFERENCES posts(id) ON DELETE CASCADE
);