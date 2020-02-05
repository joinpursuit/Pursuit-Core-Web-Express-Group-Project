DROP DATABASE IF EXISTS cipher_db;
CREATE DATABASE cipher_db;

\c cipher_db;

DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    full_name text,
    email text,
    date_of_birth date,
    gender text,
    profile_pic text,
    join_date date DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    body text,
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    body text,
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id),
    user_id INT REFERENCES users(id)
);



CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    album_name text, 
    thumbnail text, 
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE pictures(
    id SERIAL PRIMARY KEY,
    album_id INT REFERENCES albums(id),
    photo_url text,
    time_stamp timestamp DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(id, full_name, email, date_of_birth, gender, profile_pic)
VALUES(1, 'Rafid Hossain', 'rafidhosain@pursuit.org', '1995-07-11', 'male', 'new profile pic'),
(2, 'Henry Nunez', 'henrynunez@pursuit.org', '1991-10-11','male', 'no profile pic'),
(3, 'Cassidy Beni', 'cassidybeni@pursuit.org', '1996-11-01', 'female', 'no profile pic'),
(4, 'Javon Fowler', 'javonfowler@pursuit.org', '1994-04-14', 'male', 'no profile pic')