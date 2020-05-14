DROP DATABASE IF EXISTS finance;
DROP USER IF EXISTS finance_user@localhost;
CREATE DATABASE finance CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER finance_user@localhost IDENTIFIED BY '@financeUser';
GRANT ALL PRIVILEGES ON finance.* TO finance_user@localhost;
