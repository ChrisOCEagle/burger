DROP DATABASE IF EXISTS burger_db;
-- Create the `burgers_db`.
CREATE DATABASE burger_db;
-- Switch to or use the `burgers_db`.
USE burger_db;
-- Create a `burgers` table with these fields:
CREATE TABLE burgers(
    -- id: an auto incrementing int that serves as the primary key.
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- burger_name: a string.
    burger_name VARCHAR(255) NOT NULL,
    -- devoured: a boolean.
    devoured BOOLEAN DEFAULT false
);
-- CREATE TABLE burgers (
--     -- id: an auto incrementing int that serves as the primary key.
--     id AUTO_INCREMENT PRIMARY KEY,
--     -- burger_name: a string.
--     burger_name VARCHAR NOT NULL,
--     -- devoured: a boolean.
--     devoured BOOLEAN,
-- );
