DROP DATABASE IF EXISTS clout_db;

CREATE DATABASE clout_db;

\c clout_db;

DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS albums;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password TEXT,
    bio TEXT,
    proPicURL TEXT
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    poster_id INT REFERENCES users(id) ON DELETE CASCADE,
    imgURL TEXT,
    description TEXT,	
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
    id	SERIAL PRIMARY KEY,
    post_id	INT REFERENCES posts(id) ON DELETE CASCADE,
    author_id	INT REFERENCES users(id) ON DELETE CASCADE,
    content	TEXT,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE albums(
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    album_title TEXT,
    album_date DATE,
    album_coverURL TEXT
);

CREATE TABLE pictures(
    id SERIAL PRIMARY KEY,
    post_id	INT REFERENCES posts(id) ON DELETE CASCADE,
    pictureURL TEXT,
    album_id INT REFERENCES albums(id) ON DELETE CASCADE
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE CASCADE,
    post_id INT REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT UC_like UNIQUE (liker_id,post_id)
);


INSERT INTO users (username, password, bio, proPicURL)
    VALUES ('kwong', 'admin123', 'NYC ABC. DM for beats', 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/profile-face-of-a-small-black-labrador-retriever-pup-dejavu-designs.jpg'),
          ('kong', 'admin123', 'Kong''s Bio Would Go Here', 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'),
          ('trilltown', 'admin123', 'Phil''s Bio Would Go Here', 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'),
          ('darsuabasi', 'admin123', 'Uduakabasi''s Bio Would Go Here', 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png');


INSERT INTO posts (poster_id, imgURL, description)
    VALUES (1, 'https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG', 'People will look up to you even after you''re gone. RIP Kobe the Legend'),
        (2, 'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=590&h=800&91ED69A6-2A32-43A3-97F8B241182A7D50', 'i love tigers'),
        (4, 'https://www.rd.com/wp-content/uploads/2019/08/Amazon-Jungle-Yasuni-Ecuador-800x450.jpg', 'An amazing get away'),
        (3, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1507053534%2F00-lead-plane-flying-clouds-LASTMINUTEHACKS1017.jpg%3Fitok%3DYHo_gGPL&q=85', 'See me in Paris'),
        (1, 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg', 'lovin Canada');


INSERT INTO comments (post_id, author_id, content)
VALUES (2, 1, 'Beautiful tiger!'),
    (2, 3, 'I love it''s stripes'),
    (2, 4, 'Amazing pic I wish I had a tiger'),
    (1, 4, 'Inspiring message. Rest in peace Kobe'),
    (1, 3, 'Legendary.'),
    (3, 2, 'Where is this?? Beautiful'),
    (3, 1, 'Wow so jealous right now'),
    (4, 3, 'Have fun!!'),
    (4, 2, 'Those clouds look puffy'),
    (5, 2, 'Wowwww'),
    (5, 4, 'Great shot, wish I was here too'),
    (5, 3, 'Omggggg ....');


INSERT INTO albums (owner_id, album_title, album_date, album_coverURL)
VALUES
    (1, '2019 Album', '2019-12-30', 'http://devote-movie.info/wp-content/uploads/2019/01/Beaches-in-India_1.jpg' ),
    (1, '2020 Album', '2020-01-15', 'https://maxcdn.icons8.com/app/uploads/2019/06/digital-illustration-brian-edward-miller-8.jpg' ),
    (2, 'Animals', '2020-01-10', 'https://live.staticflickr.com/3791/11052824583_21e83c65bc_b.jpg'),
    (2, 'Cities', '2020-01-12', 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fannabel%2Ffiles%2F2018%2F02%2FLouisville_Skyline-1200x801.jpg'),
    (3, 'Travel', '2019-09-20' , 'https://i.pinimg.com/736x/cc/f4/05/ccf40549a4b257cb6e97e75c80cfef2c.jpg'),
    (4, 'Adventures 2019', '2019-12-09', 'https://i.pinimg.com/originals/2f/33/58/2f3358414ca30f8012f2a542b6888878.jpg');


INSERT INTO pictures (post_id, pictureURL, album_id)
VALUES
    (1, 'https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG', 2),
    (2, 'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=590&h=800&91ED69A6-2A32-43A3-97F8B241182A7D50', 3),
    (3, 'https://www.rd.com/wp-content/uploads/2019/08/Amazon-Jungle-Yasuni-Ecuador-800x450.jpg', 6),
    (4, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1507053534%2F00-lead-plane-flying-clouds-LASTMINUTEHACKS1017.jpg%3Fitok%3DYHo_gGPL&q=85', 5),
    (5, 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg', 1);

INSERT INTO likes
    (liker_id, post_id)
VALUES
    (1, 2),
    (1, 3),
    (1, 4),
    (2, 1),
    (2, 3),
    (1, 5),
    (3, 1),
    (3, 2),
    (3, 4),
    (3, 5),
    (4, 1),
    (4, 2),
    (4, 3),
    (4, 5);





