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
  search_distance INTEGER,
  latitude DECIMAL(11,8),
  longitude DECIMAL(11,8));

CREATE TABLE subscription (
  subscribe_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  subscribed_to INTEGER REFERENCES users);

CREATE TABLE profile (
  profile_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  bio VARCHAR,
  facebook VARCHAR,
  twitter VARCHAR,
  soundcloud VARCHAR,
  youtube VARCHAR,
  vimeo VARCHAR,
  instagram VARCHAR,
  linkedIn VARCHAR);

CREATE TABLE locations (
  location_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  name VARCHAR,
  latitude DECIMAL(11,8),
  longitude DECIMAL(11,8));

INSERT INTO users (username, password, email, first_name, last_name, user_image, search_distance, latitude, longitude)
  VALUES ('Xavier', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'hotmail',
  'Xavier', 'Munroe', 'https://cdn.vox-cdn.com/thumbor/EjQXgW4zGd5jgsPFLHb69PKVxJY=/0x0:1370x781/1200x800/filters:focal(576x282:794x500)/cdn.vox-cdn.com/uploads/chorus_image/image/56644651/iphone_ten.0.png',
  10, 40.86999, -73.8453), ('Reed', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'gmail', 'Joey', 'Gains', 'https://cdn.shopify.com/s/files/1/0896/0640/products/oboe-reed-winfield-standard-oboe-reed-1_400x400.jpeg?v=1487682604', 5, 40.7888000, -73.7800000),
  ('Matthew', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'gmail', 'Matt', 'Munroe', 'https://www.foodnetwork.com/recipes/ree-drummond/chili-beans-2632850', 15, 34.0522, -118.2437),
  ('Elon', '$2a$10$C10mTqxF6zBf2CnQE3oxfOP/8PpF25LyN1v7lRp4KjLYIBLczWGvm', 'mail', 'Edge', 'Jeff', 'https://4vector.com/i/free-vector-e-train-clip-art_109308_E_Train_clip_art_hight.png', 15, 34.0578, -118.4437);
INSERT INTO profile (user_id, bio, facebook, twitter, soundcloud, youtube, vimeo, instagram, linkedIn)
  VALUES (1, 'Faithful black man.umble legend.', 'facebook.com', 'twitter.com', 'soundcloud.com', 'youtube.com', 'vimeo.com', 'instagram.com', 'linkedIn.com')
