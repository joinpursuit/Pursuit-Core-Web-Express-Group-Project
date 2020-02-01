DROP DATABASE IF EXISTS Trippin_db;
CREATE DATABASE Trippin_db;
\c Trippin_db;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT,
    firstname TEXT,
    lastname TEXT,
    BIRTHDAY DATE,
    PROFILE_PIC URL
);

CREATE TABLE post(
    post_id SERIAL PRIMARY KEY,
    poster_id INT,
    image url,
    caption TEXT
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    commenter_id INT,
    post_id INT,
    body TEXT
);

CREATE TABLE likes(
    like_id SERIAL PRIMARY KEY,
    liker_id INT,
    post_id INT
);

CREATE TABLE albums(
    album_id SERIAL PRIMARY KEY,
    creator_id INT,
    album_title TEXT
);

CREATE TABLE pictures(
    picture_id SERIAL PRIMARY KEY,
    album_id INT,
    photo_url text
);

INSERT INTO users(username,password,firstname,lastname,birthday,profile_pic)
VALUES
(),
(),
(),
(),
();

INSERT INTO post(poster_id,image,cation)
VALUES
(),
(),
(),
(),
();

INSERT INTO comments(commentor_id,post_id,text)
VALUES
(),
(),
(),
(),
();

INSERT INTO likes(liker_id,post_id)
VALUES
(1,1),
(1,3),
(3,1),
(4,2),
(5,1);

INSERT INTO albums(creator_id, album_title)
VALUES
(1,'Movies'),
(2, 'Memories'),
(3, 'Family'),
(4, 'Friends'),
();

INSERT INTO pictures(album_id, photo_url)
VALUES
(1,),
(2,),
(3,),
(4,),
(5,);


