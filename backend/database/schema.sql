DROP DATABASE IF EXISTS lunch_buddies_db;
CREATE DATABASE lunch_buddies_db;

\c lunch_buddies_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS albums;


CREATE TABLE users
(
      id SERIAL PRIMARY KEY,
      user_name TEXT UNIQUE,
      email TEXT UNIQUE,
      password TEXT,
      phone_number INT UNIQUE
);


CREATE TABLE albums
(
      id SERIAL PRIMARY KEY,
      title TEXT,
      user_id INT REFERENCES users(id) ON DELETE SET NULL
);


CREATE TABLE posts
(
      id SERIAL PRIMARY KEY,
      type VARCHAR,
      body TEXT,
      url_img TEXT ,
      album_id INT REFERENCES albums(id) ON DELETE SET NULL,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      post_time timestamp
);


CREATE TABLE likes
(
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      post_id INT REFERENCES posts(id) ON DELETE CASCADE
);


CREATE TABLE comments
(
      id SERIAL PRIMARY KEY,
      body text,
      user_id INT REFERENCES users(id) ON DELETE CASCADE,
      post_id INT REFERENCES posts(id) ON DELETE CASCADE
);








INSERT INTO users
      (user_name,email,password,phone_number)
VALUES('danny123', 'danny@email.com', 'danny123', 718),
      ('dug123', 'dug@email.com', 'dug123', 212),
      ('farah123', 'farah@email.com', 'farah123', 917),
      ('luna123', 'luna@email.com', 'luna123', 305);
INSERT INTO albums
      (title,user_id)
VALUES('All Photos', 1),
      ('All Photos', 2),
      ('All Photos', 3),
      ('All Photos', 4);
INSERT INTO posts
      (type,body,url_img,album_id,user_id)
VALUES('img', 'pizza', 'https://www.refrigeratedfrozenfood.com/ext/resources/NEW_RD_Website/DefaultImages/default-pizza.jpg?1430942592', 1, 1),
      ('img', 'burger', 'https://upload.wikimedia.org/wikipedia/commons/8/80/Guacamole_Pepper-Jack_Burger.jpg', 1, 2);
INSERT INTO posts
      (type,body,user_id)
VALUES('text', 'who up for chinese food?', 3),
      ('text', 'lets get italian food!', 4);
INSERT INTO likes
      (user_id,post_id)
VALUES(3, 4) ,
      (2, 3);
INSERT INTO comments
      (user_id,post_id,body)
VALUES(1, 2, 'NO BEEF #VEGANLIFE'),
      (4, 1, 'lets order together!');     