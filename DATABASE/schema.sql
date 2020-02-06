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
    username TEXT UNIQUE,
    password TEXT,
    firstname TEXT,
    lastname TEXT,
    age INT,
fix_Schema
    profile_pic TEXT

);

CREATE TABLE albums
(
    id SERIAL PRIMARY KEY,
    creator_id INT REFERENCES users(id) ON DELETE CASCADE,
    title TEXT
);

CREATE TABLE pictures
(
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE,
    photo_url TEXT
);

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE,
    body TEXT
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



INSERT INTO users
    (username,password,firstname,lastname,age,profile_pic)
VALUES
('Agent_Smith','EatSteak1','John', 'Smith',28,'../../avatars/3.eps'),
('HAL','Daisy1','Stanley','Kubrik',8,'../../avatars/4.eps'),
('Flower_Girl','Fauna12','Blossom', 'Utopium', 11,'../../avatars/5.eps'),
('Sports_fiend','Stadium12','Vince', 'Campbell',40,'../../avatars/6.eps'),
('Griph','Karma12','Geoff','Ramsey',43,'../../avatars/7.eps');

INSERT INTO albums
 fix_Schema
(creator_id, title)
VALUES
(1,'Movies'),
(2, 'Memories'),
(3, 'Superbowl 2020');


INSERT INTO pictures
(album_id, photo_url)
VALUES
(1,'../../pictures/architecture-building-business-cinema-436413.jpg'),
(1,'../../pictures/photos-in-the-wooden-box-5841.jpg'),
(2,'../../pictures/greayscale-photo-of-baby-feet-with-father-and-mother-hands-in-733881.jpg'),
(2,'../../pictures/people-silhouette-during-sunset-853168.jpg'),
 fix_Schema
(2,'../../pictures/cottages-in-the-middle-of-beach-753626.jpg'),
(3,'https://specials-images.forbesimg.com/imageserve/5e378fb0a854780006b049a0/960x0.jpg?fit=scale'),
(3,'https://ca-times.brightspotcdn.com/dims4/default/537da86/2147483647/strip/true/crop/4174x2782+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F4a%2Fe6%2F9a32968d4c93a3e33c7a571318ed%2F49ers-chiefs-super-bowl-football-90882.jpg');


INSERT INTO posts
(poster_id,album_id,body)
VALUES
(1,1,'This is the begining of a great day.' ),
 fix_Schema
(2,2, 'Momentos Ive kept throughout the years'),
(1,3, 'Best time of my life. Go Chiefs!!!');


INSERT INTO comments
(commenter_id,posts_id,body)
VALUES
(1,1,'Nice'),
(2,1,'I like that'),
(3,2,'This is great'),
(5,1,'I remember this'),
(4,2,'Wish I was there');

INSERT INTO likes
(liker_id,posts_id)
VALUES
(5,1),
(2,1),
(3,2),
(4,2),
(1,1);




