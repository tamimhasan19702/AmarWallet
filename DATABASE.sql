sqlite3 mySQLiteDB.db

-- database table creation

--categories 
CREATE TABLE IF NOT EXISTS "Categories" (
    "id"	INTEGER PRIMARY KEY AUTOINCREMENT,
   name TEXT NOT NULL,
   type TEXT NOT NULL CHECK (type IN ('Expense', 'Income'))
);

-- Transections
CREATE TABLE IF NOT EXISTS "Transactions" (
    "id"	INTEGER PRIMARY KEY AUTOINCREMENT,
   category_id INTEGER NOT NULL,
   amount REAL NOT NULL,
   date INTEGER NOT NULL,
   description TEXT,
   type TEXT NOT NULL CHECK (type IN ('Expense', 'Income'))
   Foreign Key (category_id) REFERENCES Categories(id)
);

-- inserting database info
INSERT INTO Categories (name, type) VALUES ('Utilities', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Electronics', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Dining Out', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Breakfast Supplies', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Household Items', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Christmas Gifts', 'Expense');
INSERT INTO Categories (name, type) VALUES ('New Year Party Supplies', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Thanksgiving Groceries', 'Expense');
INSERT INTO Categories (name, type) VALUES ('Bonus', 'Income');
INSERT INTO Categories (name, type) VALUES ('Consulting Work', 'Income');
INSERT INTO Categories (name, type) VALUES ('Part-time Job', 'Income');
INSERT INTO Categories (name, type) VALUES ('Online Sales', 'Income');
INSERT INTO Categories (name, type) VALUES ('Freelance Writing', 'Income');
INSERT INTO Categories (name, type) VALUES ('End of Year Bonus', 'Income');
INSERT INTO Categories (name, type) VALUES ('Thanksgiving Freelance', 'Income');


select * from Categories;



.quit