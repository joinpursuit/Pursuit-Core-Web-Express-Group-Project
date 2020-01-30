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
       album_id INT REFERENCES albums(id) ON DELETE SET NULL,
       user_id INT REFERENCES users(id) ON DELETE CASCADE,
       post_time timestamp
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








INSERT INTO users(user_name,email,password,phone_number)
    VALUES('danny123','danny@email.com','danny123',718),
          ('dug123','dug@email.com','dug123',212),
          ('farah123','farah@email.com','farah123',917),
          ('luna123','luna@email.com','luna123',305);
    INSERT INTO albums(title,user_id)
        VALUES('All Photos',1),
              ('All Photos',2),
              ('All Photos',3),
              ('All Photos',4);
    INSERT INTO posts(type,body,album_id,user_id)
        VALUES('img','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6jNOcpKrnAhVCg3IEHXkpDwAQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.thekitchn.com%2Feasy-everyday-pizza-dough-that-is-gluten-free-255421&psig=AOvVaw3yKZdhSRHCBDN4FrN5GUrT&ust=1580437923656859',1,1),
              ('img','https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi1jt-jparnAhV7hHIEHdlCD5AQjRx6BAgBEAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHamburger&psig=AOvVaw19jG3cIwEAWrXtt9h4vABV&ust=1580438169504671',1,2);
    INSERT INTO posts(type,body,user_id)
        VALUES('text','who up for chinese food?',3),
              ('text','lets get italian food!',4);
    INSERT INTO likes(user_id,post_id)   
        VALUES(3,4) ,
              (2,3);
    INSERT INTO comments(user_id,post_id,body)   
        VALUES(1,2,'NO BEEF #VEGANLIFE'),
              (4,1,'lets order together!');     