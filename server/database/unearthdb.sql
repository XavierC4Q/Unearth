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
  user_image VARCHAR,
  search_distance INTEGER);

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

CREATE TABLE userlocation (
  userlocation_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  latitude DECIMAL(10,8),
  longitude DECIMAL(10,8),
  location_name VARCHAR);

CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  name VARCHAR,
  latitude DECIMAL(10,8),
  longitude DECIMAL(10,8));

INSERT INTO users (username, password, email, first_name, last_name, user_image, search_distance)
  VALUES ('Xavier', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'hotmail',
  'Xavier', 'Munroe', 'https://cdn.vox-cdn.com/thumbor/EjQXgW4zGd5jgsPFLHb69PKVxJY=/0x0:1370x781/1200x800/filters:focal(576x282:794x500)/cdn.vox-cdn.com/uploads/chorus_image/image/56644651/iphone_ten.0.png',
  7), ('Reed', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'gmail', 'Joey', 'Gains', 'https://cdn.shopify.com/s/files/1/0896/0640/products/oboe-reed-winfield-standard-oboe-reed-1_400x400.jpeg?v=1487682604', 5);

INSERT INTO userlocation (user_id, latitude, longitude, location_name)
  VALUES (1, 40.86999, -73.8453, 'Casa De Munroe'), (2, 40.7888000, -73.7800000, 'Reed House');
