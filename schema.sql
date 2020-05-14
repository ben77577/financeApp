DROP TABLE IF EXISTS purchases;

CREATE TABLE purchase (
  id SERIAL PRIMARY KEY,
  username TEXT,
  amount INT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
