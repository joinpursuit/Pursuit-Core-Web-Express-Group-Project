DROP DATABASE IF EXISTS git_me;
CREATE DATABASE git_me;

\c git_me;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS prefrences;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    userName TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    dob date NOT NULL,
    gender TEXT NOT NULL,
    orientation TEXT NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  body VARCHAR (250)
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
  liker_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
  commentor_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  post_id INTEGER REFERENCES posts(id) ON DELETE SET NULL,
  body VARCHAR(250)
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
  albums_id INTEGER REFERENCES albums(id) ON DELETE SET NULL,
  picture_url TEXT
);

CREATE TABLE preferences (
    id SERIAL PRIMARY KEY,
  users_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  do_have_child BOOLEAN,
  want_child BOOLEAN,
  drink BOOLEAN,
  smoke_weed BOOLEAN,
  long_term BOOLEAN
);

INSERT INTO users ( firstName, lastName, userName, password, email, dob, gender, orientation)
    VALUES ('corey','lawinsky', 'claw45', '1234', 'claw45@gmail.com', '1994,04,22', 'Male', 'male' ), 
            ('jon', 'lawinsky', 'Jon64', '1234', 'jlaw45@gmail.com', '1994,04,22', 'Male', 'female'), 
            ('jhenya', 'lawinsky', 'Jenmis', '1234', 'jenlaw45@gmail.com', '1994,04,22', 'female', 'male'),
            ('celine', 'lawinsky', 'celine5', '1234', 'cellaw45@gmail.com', '1994,04,22', 'female', 'male'),
            ('jerry', 'lawinsky', 'jerrylaw45', '1234', 'jerrylaw45@gmail.com', '1994,04,22', 'Male', 'male');
INSERT INTO posts (users_id, body)
    VALUES (1,'Hi im corey Looking for hot dates' ), 
            (2, 'Hi im jon looking to have a good time'), 
            (3, 'Hey im just here for friends'),
            (4, 'Not ready for commitment'),
            (5, 'Not sure what i want');
INSERT INTO likes (liker_id, post_id)
    VALUES (1,3), 
            (2,4 ), 
            (3, 5),
            (4, 2),
            (5, 1);
INSERT INTO comments (commentor_id, post_id, body)
    VALUES (1, 3,'nah'), 
            (2, 4 , 'dub'), 
            (3, 5, 'i like'),
            (4, 2,'wow'),
            (5, 1, 'all that');
INSERT INTO albums (users_id)
    VALUES (1), 
            (2), 
            (3),
            (4),
            (5);
INSERT INTO pictures (albums_id, picture_url)
    VALUES (1, 'https://i.imgur.com/cMy8V5j.png'), 
            (2,'https://image.shutterstock.com/image-photo/portrait-smiling-red-haired-millennial-260nw-1194497251.jpg'), 
            (3,'https://pbs.twimg.com/media/D6tUG4QWsAAvdEu.jpg'),
            (4,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoGD7biWDJeibLLUe4OcwgErgzaAdL3d9gqSWgBZAVTjk1LjQp'),
            (5,'https://image.shutterstock.com/image-photo/headshot-successful-smiling-cheerful-african-260nw-567772042.jpg');
INSERT INTO preferences (users_id, do_have_child, want_child, drink, smoke_weed, long_term)
    VALUES (1,'y','y','y','y','y'), 
            (2,'y','y','y','y','y'),
            (3,'y','y','y','y','y'),
            (4,'y','y','y','y','y'),
            (5,'y','y','y','y','y');


