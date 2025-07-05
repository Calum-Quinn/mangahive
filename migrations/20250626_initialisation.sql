DROP TABLE IF EXISTS sessions;
DROP TABLE IF EXISTS user_mangas;
DROP TABLE IF EXISTS manga_volumes;
DROP TABLE IF EXISTS manga_series;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL,
    surname TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL, --Hash?
    admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE manga_series (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    description TEXT,
    year INTEGER CHECK (year > 0),
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE manga_volumes (
    id SERIAL PRIMARY KEY,
    series_id INTEGER REFERENCES manga_series(id),
    volume_number INTEGER NOT NULL CHECK (volume_number > 0),
    release_date DATE,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_mangas (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    volume_id INTEGER REFERENCES manga_volumes(id),
    user_image_url TEXT,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sessions (
    id TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL
);