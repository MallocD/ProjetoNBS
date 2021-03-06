CREATE TABLE `project_nbs`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `last` VARCHAR(45) NOT NULL,
  `birth` VARCHAR(45) NOT NULL,
  `CPF` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `vehicle` VARCHAR(45) NOT NULL,
  `color` VARCHAR(45) NOT NULL,
  `payment` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `CPF_UNIQUE` (`CPF` ASC) VISIBLE);