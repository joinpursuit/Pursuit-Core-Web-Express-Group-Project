DROP DATABASE IF EXISTS hotbox_db;
CREATE DATABASE hotbox_db;

\c hotbox_db;

DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS followings; 
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL UNIQUE,
    birth_date VARCHAR,
    city TEXT,
    state TEXT,
    email VARCHAR, 
    password VARCHAR,
    bet_history VARCHAR
);


CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE SET NULL,
    body TEXT
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES posts(id) ON DELETE SET NULL 
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    commenter_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES post(id) ON DELETE SET NULL,
    body TEXT
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    owners_id INT REFERENCES users(id),
    picture VARCHAR 
);

CREATE TABLE followings (
    id SERIAL PRIMARY KEY,
    follower_id INT REFERENCES users(id),
    followed_id INT REFERENCES users(id)
);

CREATE TABLE bets (
    id SERIAL PRIMARY KEY,
    game_id VARCHAR,
    team_id VARCHAR, 
    bet_id INT REFERENCES users(id),
    bet_amount INTEGER
);
