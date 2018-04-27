DROP DATABASE IF EXISTS unearthdb;
CREATE DATABASE unearthdb;

\c unearthdb

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  email VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  user_image VARCHAR);

CREATE TABLE subscription (
  subscribe_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  subscribed_to INTEGER REFERENCES users);

CREATE TABLE media (
  media_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  facebook VARCHAR,
  twitter VARCHAR,
  soundcloud VARCHAR,
  youtube VARCHAR,
  vimeo VARCHAR,
  instagram VARCHAR,
  linkedIn VARCHAR);

CREATE TABLE distance (
  distance_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  latitude INTEGER,
  longitude INTEGER,
  location VARCHAR);

INSERT INTO users (username, password, email, first_name, last_name, user_image)
  VALUES ('Xavier', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'hotmail',
  'Xavier', 'Munroe', 'https://cdn.vox-cdn.com/thumbor/EjQXgW4zGd5jgsPFLHb69PKVxJY=/0x0:1370x781/1200x800/filters:focal(576x282:794x500)/cdn.vox-cdn.com/uploads/chorus_image/image/56644651/iphone_ten.0.png')
