CREATE TABLE IF NOT EXISTS users (
    id SERIAL NOT NULL,
    name varchar(50),
    password_hash varchar(200),
    email varchar(100)
);

INSERT INTO users (name, password_hash, email)
VALUES ('user1', '', 'user1@email.com');