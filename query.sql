CREATE DATABASE blog:

USE blog;

CREATE TABLE articles(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    content VARCHAR(15000) NOT NULL,
    tags VARCHAR(200),
    published_at DATETIME,
    created_at DATETIME NOT NULL
);

CREATE TABLE comments(
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   user_id INT NOT NULL,
   content VARCHAR(1000) NOT NULL,
   articles_id INT NOT NULL,
   created_at DATETIME NOT NULL 
);

CREATE TABLE users(
   id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
   name VARCHAR(50),
   surname VARCHAR(50),
   email VARCHAR(75),
   password VARCHAR(50),
   birthdate DATE,
   country VARCHAR(50)
);

INSERT INTO users values (null, 'Matias', 'Andres', 'andresmatias@gmail.com', '12345', '2000-05-27', 'Argentina');
INSERT INTO articles values (
    null,
    1,
    '',
    '',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)