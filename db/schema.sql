DROP DATABASE IF EXISTS cipher_db;
CREATE DATABASE cipher_db;

\c cipher_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS photos;
DROP TABLE IF EXISTS albums;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    full_name text,
    email text,
    date_of_birth text,
    gender text,
    profile_pic text,
    join_date date
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id),
    body text,
    time_stamp date
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    commenters_id INT REFERENCES users(id),
    comment_post_id INT REFERENCES posts(id),
    body text
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    comment_id INT REFERENCES comments(id),
    likers_id INT REFERENCES users(id)
);



CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    albums_id INT REFERENCES users(id),
    album_name text, 
    thumbnail text, 
    time_stamp date
);


CREATE TABLE photos(
    id SERIAL PRIMARY KEY,
    table_id INT REFERENCES users(id),
    photos_id INT REFERENCES albums(id),
    photo_url text,
    time_stamp date
);

INSERT INTO users(id, full_name, email, date_of_birth, gender, profile_pic, join_date)
VALUES(1, 'Rafid Hossain', 'rafidhos9@gmail.com', 'July 11 1995', 'male', 'new profile pic', '12/10/2012'),
(2, 'Henry Nunez', 'henrynunez@pursuit.org', 'October 11 1991','male', 'no profile pic', '12/12/2010')
