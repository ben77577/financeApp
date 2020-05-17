DROP TABLE IF EXISTS purchase;

CREATE TABLE purchase (
  id SERIAL PRIMARY KEY,
  username TEXT,
  amount INT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS incomes;

CREATE TABLE incomes (
  id SERIAL PRIMARY KEY,
  username TEXT,
  amount INT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
