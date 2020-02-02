DROP DATABASE IF EXISTS trippin_db;

CREATE DATABASE trippin_db;

\c trippin_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    firstname TEXT,
    lastname TEXT
    AGE INT,
    PROFILE_PIC TEXT
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    image text,
    caption TEXT
);

CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
    posts_id INT REFERENCES posts(id) ON DELETE CASCADE,
    body TEXT
);

CREATE TABLE likes
(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    posts_id INT REFERENCES posts (id) ON DELETE CASCADE
);

CREATE TABLE albums
(
    id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES users(id) ON DELETE CASCADE,
    album_title TEXT
);

CREATE TABLE pictures
(
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE,
    photo_url TEXT
);

INSERT INTO users
    (username,firstname,lastname)
VALUES
    ('Neo','Chosen','One'),
('Agent_Smith','EatSteak1','John', 'Smith',01/01/1990,'../../avatars/3.eps'),
('HAL','Daisy1','Stanley','Kubrik',06/26/1928,'../../avatars/4.eps'),
('Flower_Girl','Fauna12','Blossom', 'Utopium', 11/18/1998,'../../avatars/5.eps'),
('Sports_fiend','Stadium12','Vince', 'Campbell',08/30/1940,'../../avatars/6.eps'),
('Griph','Karma12','Geoff','Ramsey',04/01/03,'../../avatars/7.eps');

INSERT INTO posts
(poster_id,image,caption)
VALUES
(1,),
(2,),
(3,),
(4,),
(5,);

INSERT INTO comments
(commenter_id,posts_id,body)
VALUES
-- (1,1,'Nice'),
(2,2,'I like that.'),
(3,3,'This is great'),
(4,4,'I remember this'),
(5,5,'Wish I was there');

INSERT INTO likes
(liker_id,posts_id)
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

INSERT INTO pictures
(album_id, photo_url)
VALUES
(1,'../../pictures/'),
(2,),
(3,),
(4,),
(5,);


