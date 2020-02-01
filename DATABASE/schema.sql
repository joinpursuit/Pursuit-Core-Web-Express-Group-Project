DROP DATABASE IF EXISTS Trippin_db;

CREATE DATABASE Trippin_db;

\c Trippin_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    firstname TEXT,
    lastname TEXT,
    BIRTHDAY DATE,
    PROFILE_PIC TEXT
);

CREATE TABLE post
(
    post_id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE SET NULL,
    image text,
    caption TEXT
);

CREATE TABLE comments
(
    comment_id SERIAL PRIMARY KEY,
    commenter_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES post(id) ON DELETE SET NULL,
    body TEXT
);

CREATE TABLE likes
(
    like_id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE SET NULL,
    post_id INT REFERENCES post (id) ON DELETE SET NULL
);

CREATE TABLE albums
(
    album_id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES users(id) ON DELETE SET NULL,
    album_title TEXT
);

CREATE TABLE pictures
(
    picture_id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id) ON DELETE SET NULL,
    photo_url TEXT
);

INSERT INTO users
    (username,password,firstname,lastname,birthday,profile_pic)
VALUES
('Agent_Smith','EatSteak1','John', 'Smith',01/01/1990,'../../avatars/3.eps)',
('HAL','Daisy1','Stanley','Kubrik',06/26/1928,'../../avatars/4.eps)',
('Flower_Girl','Fauna12','Blossom', 'Utopium', 11/18/1998,'../../avatars/5.eps)',
('Sports_fiend','Stadium12','Vince', 'Campbell',08/30/1940,'../../avatars/6.eps)',
('Griph','Karma12','Geoff','Ramsey',04/01/03,'../../avatars/7.eps)';

-- -- INSERT INTO post
-- (poster_id,image,caption)
-- VALUES
-- (1,),
-- (2,),
-- (3,),
-- (4,),
-- (5,);

INSERT INTO comments
(commentor_id,post_id,text)
VALUES
(1,1,'Nice'),
(2,2,'I like that.'),
(3,3,'This is great'),
(4,4,'I remember this'),
(5,5,'Wish I was there');

INSERT INTO likes
(liker-id,post_id)
VALUES
(1,1),
(1,3),
(3,1),
(4,2),
(5,1);

INSERT INTO albums
(creator_id, album_title)
VALUES
(1,'Movies'),
(2, 'Memories'),
(3, 'Family'),
(4, 'Friends'),
(5, 'Vacation');

-- INSERT INTO pictures
-- (album_id, photo_url)
-- VALUES
-- (1,../../pictures/),
-- (2,),
-- (3,),
-- (4,),
-- (5,);


