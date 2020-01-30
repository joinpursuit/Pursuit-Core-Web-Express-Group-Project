DROP DATABASE IF EXISTS ruff_draft;
CREATE DATABASE ruff_draft;

\c ruff_draft;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS img_likes;
DROP TABLE IF EXISTS posts_likes;
DROP TABLE IF EXISTS comments;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    age INTEGER,
    profile_image INT REFERENCES pictures(id) ON DELETE SET NULL,
    about_statement TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE albums (
    id SERIAL PRIMARY KEY,
    album_name TEXT,
    album_owner INT REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pictures (
    id SERIAL PRIMARY KEY,
    picture TEXT,
    album INT REFERENCES albums(id),
    poster_id INT REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)

-- CREATE TABLE posts (
--     id SERIAL PRIMARY KEY,
--     author_id INT REFERENCES users (id),
--     body TEXT,
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- )

-- CREATE TABLE img_likes (
--     id SERIAL PRIMARY KEY,
--     img_id INT REFERENCES pictures (id),
--     liker_id INT REFERENCES users (id),
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- )

-- CREATE TABLE posts_likes (
--     id SERIAL PRIMARY KEY,
--     post_id INT REFERENCES posts(id),
--     liker_id INT REFERENCES users(id),
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- )

-- CREATE TABLE comments (
--     id SERIAL PRIMARY KEY,
--     author_id INT REFERENCES users(id),
--     body TEXT,
--     post_id INT REFERENCES posts(id),
--     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
-- )

-- INSERT INTO users (first_name, last_name,age,profile_image,about_statement)
--         VALUES ('david', 'marin',21, NULL, "hi"),
--                 ('maria', 'liza', 13, NULL, "bye"),
--                 ('samantha', 'Jimenez', 19, NULL, "yolo"),
--                 ('corey', 'Ladovsky',81, NULL, "cats rule"),
--                 ('john', 'x',41, NULL, "cats rule")

-- INSERT INTO posts (author_id,body)
--     VALUES (1,"Lorem ipsum dolor sit amet."),
--             (2,"marzipan fruitcake lemon drops"),
--             (2," donut topping tiramisu"),
--             (3, "Tiramisu cake lollipop I love"),
--             (3, "Chocolate cake jelly-o pastry "),
--             (3, "Jelly cotton candy toffee"),
--             (4, "beans lemon drops"),
--             (4, "claw croissant muffin"),
--             (5, "cupcake marshmallow ")


-- INSERT INTO posts_likes (post_id,liker_id)
--     VALUES (1,2),
--         (1,3),
--         (1,1),
--         (2,4),
--         (4,3),
--         (3,1)