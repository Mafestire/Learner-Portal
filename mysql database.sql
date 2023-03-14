CREATE TABLE Users(
userID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL,
emailAddress VARCHAR (30) NOT NULL,
contactNo VARCHAR(12) NOT NULL,
userPassword TEXT NOT NULL,
userRole VARCHAR (12) NOT NULL,
relationship VARCHAR (15) NOT NULL,
childFirstName VARCHAR(20) NOT NULL,
childLastName VARCHAR(20) NOT NULL,
childGender VARCHAR(10) not null,
childAge INT NOT NULL,
enrollment VARCHAR(50) NOT NULL);

CREATE TABLE Admins(
adminID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(30) NOT NULL,
lastName VARCHAR(30) NOT NULL, 
emailAddress VARCHAR(30) NOT NULL,
adminPassword TEXT NOT NULL,
adminProfile TEXT );

CREATE TABLE Products(
ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
prodName VARCHAR (30),
prodDescription TEXT,
category VARCHAR(20),
price DECIMAL(10,2),
prodQuantity INT,
imgURL TEXT,
adminID INT , FOREIGN KEY(adminID)
references Admins(adminID)
on delete cascade
on update cascade 
);

SELECT * FROM Users;

CREATE TABLE Cart(  
num INT,
prodName VARCHAR (30), 
category VARCHAR(20), 
price DECIMAL(10,2), 
quantity INT, 
prodDescription TEXT, 
imgURL TEXT,
ID INT, FOREIGN KEY(ID)
references Products(ID)
on delete cascade
on update cascade );

