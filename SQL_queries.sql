use test_db
drop database test_db
create database test_db

CREATE TABLE `user_tbl` (
`UserID` int(11) NOT NULL AUTO_INCREMENT,
`UserName` varchar(45) DEFAULT NULL,
`Password` varchar(45) DEFAULT NULL,
`Email` varchar(45) DEFAULT NULL,
PRIMARY KEY (`UserID`) 
)ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from user_tbl