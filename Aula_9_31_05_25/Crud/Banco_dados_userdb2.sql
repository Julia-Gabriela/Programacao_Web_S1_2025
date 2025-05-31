CREATE DATABASE userdb2;

USE userdb2;

CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

select * from users;

insert into users values (2, 'vitu', 'vitu@vitu.vi');