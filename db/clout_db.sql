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
    proPicURL TEXT DEFAULT 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'
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
    album_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
    VALUES ('kwong', 'admin123', 'NYC ABC. DM for beats.I have always had a passion for creative and innovative technology that can change the way our society lives. Being part of Pursuit might give me a chance to finally be part of that. https://soundcloud.com/kj_wongg', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/35428358_10155525285981088_195203712392626176_n.jpg?_nc_cat=108&_nc_ohc=hFrvRM-lxQ0AX-loDFi&_nc_ht=scontent-lga3-1.xx&oh=fd27939bb7eab472adb49de8e39fde50&oe=5EBDF5B5'),
          ('kong', 'admin123', 'Love Avicii(R.I.P), BIG Pokemon fans', 'https://static1.squarespace.com/static/5b50ebb7e749401857e16f2f/t/5d7bbf0ef00cb05d84180599/1568390933661/CONGSONG%2C+YANG+-+Cong+Song+Yang.png'),
          ('trilltown', 'admin123', 'My name is Phil Awich. In joining Pursuit I hope to gain employment in the field of software development and be able to provide more for myself and my family. A fun fact about me is that I’m a huge kdrama addict. Currently watching Rookie Historian on Netflix', 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/p960x960/16487227_10208650262357468_7123361593220404403_o.jpg?_nc_cat=103&_nc_ohc=8S_bOuCzgPgAX_AGWds&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=4faa0a3e33f9744878f10f1242375afb&oe=5EB9BE36'),
          ('darsuabasi', 'admin123', 'Hi, I’m Uduakabasi. I actually joined Pursuit through an alum. I had the pleasure of being a part of Enza Academy’s HackFest. It was such an amazing experience and a lot of people were just so eager to help and that’s what I loved about it.', 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38013965_10204917767580174_3881332877056540672_o.jpg?_nc_cat=107&_nc_ohc=gcE0O2vTZzEAX-l2BYA&_nc_ht=scontent-lga3-1.xx&oh=4976b4496286307144e4654e8cc9545c&oe=5ED39057');


INSERT INTO posts (poster_id, imgURL, description)
    VALUES (1, 'https://media.inquirer.com/storage/inquirer/projects/year-in-pictures-2019/photos/POY2019_RedC.JPG', 'People will look up to you even after you''re gone. RIP Kobe the Legend'),
        (2, 'https://static.scientificamerican.com/sciam/cache/file/5C51E427-1715-44E6-9B14D9487D7B7F2D_source.jpg?w=590&h=800&91ED69A6-2A32-43A3-97F8B241182A7D50', 'i love tigers'),
        (4, 'https://www.rd.com/wp-content/uploads/2019/08/Amazon-Jungle-Yasuni-Ecuador-800x450.jpg', 'An amazing get away'),
        (1, 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg', 'lovin Canada'),
        (1, 'https://i0.wp.com/www.guggenheim.org/wp-content/uploads/2019/05/installation-srgm-artistic-license-2019-2480x1395.jpg?w=870&zoom=2', 'artistic clicense'),
        (3, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/42526215_10213145110365859_2225950093452771328_o.jpg?_nc_cat=102&_nc_ohc=x4S5g40A8IUAX-BNVIE&_nc_ht=scontent-lga3-1.xx&oh=0da895df71d9d1c6c808ac16511bad6d&oe=5ED36909', 'hangout in the city,'),
        (3, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1507053534%2F00-lead-plane-flying-clouds-LASTMINUTEHACKS1017.jpg%3Fitok%3DYHo_gGPL&q=85', 'See me in Paris'),
        (4, 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/17635342_10202987692209496_6565727501081893152_o.jpg?_nc_cat=106&_nc_ohc=n1e4Djnz5MAAX8sisyP&_nc_ht=scontent-lga3-1.xx&oh=b699b23941bda0c3f3ad1990def6eb60&oe=5EBA1778', 'having fun'),
        (3, 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/p960x960/17191675_10208897703383339_4397098756703387636_o.jpg?_nc_cat=109&_nc_ohc=i5wLrXDErOkAX9XHjiE&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=1097e22bd56a562d52fbb43ad42bfdde&oe=5EC9B910', 'KPOP YO'),
        (2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaUSy9dIb9FMKSbyOVfHwVRXAqYU-1l3MzjpKD3JJ7bpfwEDwL', 'art paints'),
        (2, 'https://www.francetoday.com/wp-content/uploads/2019/06/Caumont-Guggenheim.jpg', 'green farm'),
        (3, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/p960x960/44319720_10213301554596867_5397196873570189312_o.jpg?_nc_cat=101&_nc_ohc=TO0GIvFMgNoAX8418Z0&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=20cb34113c855268ddeca103a4258c27&oe=5EDB491E', 'water fall'),
        (3, 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/17966804_10209225039326533_5918438096743874858_o.jpg?_nc_cat=110&_nc_ohc=hnio5NRzB58AX9P7Tvw&_nc_ht=scontent-lga3-1.xx&oh=8f3bc54e0cfe2aa14b1e91cc3f1ca480&oe=5ED14C1D', 'partyy'),
        (3, 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/14380016_598667860294007_3506811280356476293_o.jpg?_nc_cat=102&_nc_ohc=-WmIl9dkFykAX_bqdxc&_nc_ht=scontent-lga3-1.xx&oh=31b315c4b32996d250f3be35b8a1ffc8&oe=5ED48779', 'night out'),
        (4, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13606540_10201927256979278_7391028318321080445_n.jpg?_nc_cat=109&_nc_ohc=L3xtP2FBE8gAX_E4nB5&_nc_ht=scontent-lga3-1.xx&oh=6eb4a7d52e9a32cb0a80abdc3579ad1a&oe=5EC3C344', 'LMAO'),
        (2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEETsfZN3QhAiu5bFsJmhVXOVLKd-EKTDE-FH2ur_2agkcvvWV', 'yellow paint'),
        (2, 'https://pm1.narvii.com/6304/45d14aa734fc9dda0a842e2991e78a464ef14f30_hq.jpg', 'charizard'),
        (2, 'https://pixelart.io/uploads/2018-11-25/pixelart_1543145545002.png', 'pikachu');


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
    (5, 'https://picsum.photos/536/354', 1),
    (6, 'https://picsum.photos/531/354', 2),
    (7, 'https://i.picsum.photos/id/937/536/354.jpg', 3),
    (8, 'https://picsum.photos/531/354', 4),
    (9, 'https://picsum.photos/516/354', 1),
    (11, 'https://i.picsum.photos/id/932/536/354.jpg', 3),
    (12, 'https://picsum.photos/136/354', 4),
    (13, 'https://picsum.photos/236/354', 6),
    (13, 'https://picsum.photos/336/354', 6),
    (13, 'https://picsum.photos/326/354', 6),
    (10, 'https://seoimgak.mmtcdn.com/blog/sites/default/files/images/Lake-Louise.jpg', 1);

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
    (4, 7),
    (4, 8),
    (4, 9),
    (3, 10),
    (4, 11),
    (2, 11),
    (4, 6),
    (1, 12),
    (2, 13),
    (3, 14),
    (2, 15),
    (1, 17),
    (2, 16),
    (1, 15);





