CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  github_id INT UNIQUE,
  username VARCHAR(30) UNIQUE,
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  first_name VARCHAR(30) NOT NULL DEFAULT 'user',
  last_name VARCHAR(30),
  role VARCHAR(30) NOT NULL DEFAULT 'user',
  last_online TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id INT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  last_online TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);