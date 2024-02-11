CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
id INT(11) NOT NULL AUTO_INCREMENT,
NAME VARCHAR(45) DEFAULT NULL,
salary INT(5) DEFAULT NULL,
PRIMARY KEY (id)
);

INSERT INTO employee VALUES (1,'Sven',3000),
(2,'Lina',2548),
(3,'Techis',500),
(4,'Hakiro',4100),
(5,'GrowLancer',6001);
