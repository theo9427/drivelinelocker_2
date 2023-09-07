-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: it_inventory_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES ('cable'),('desktop'),('docking station'),('keyboard'),('laptop'),('monitor'),('mouse'),('other');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `status` enum('active','inactive') NOT NULL,
  `location` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `location` (`location`),
  CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`location`) REFERENCES `locations` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (1,'Astrid Gielen','active','WA'),(2,'Brett Cook','active','WA'),(3,'Alex Cochrane','active','WA'),(4,'Garrett York','active','RMT'),(5,'Jorge Diaz','active','RMT'),(6,'JP Fasone','active','WA'),(7,'Dan Comstock','active','WA'),(8,'Hannah Edwards','active','AZ'),(9,'Rich Rogan','active','WA'),(10,'Kyle Boddy','active','WA'),(11,'Ben Kornegay','active','AZ'),(12,'Stephen Hart','active','AZ'),(13,'Alex Eldridge','active','WA'),(14,'Colby Morris','active','WA'),(15,'Mike Rathwell','active','WA'),(16,'Connor Watson','active','AZ'),(17,'Sam Kishline','active','WA'),(18,'Joseph Marsh','active','WA'),(19,'Chloe Camacho','active','WA'),(20,'Frank Minamino','active','WA'),(21,'Thomas Bentley','active','WA'),(22,'Nicholas Meyer','active','WA'),(23,'Yugo Hamakawa','active','WA'),(24,'Maxx Garrett','active','WA'),(25,'Kyle Shimp','active','RMT'),(26,'Alex Caravan','active','RMT'),(27,'Kyle Wasserberger','active','RMT'),(28,'Jason Hashimoto','active','WA'),(29,'Deven Morgan','active','WA'),(30,'Jay-J Jones','active','WA'),(31,'Dylan Hawley','active','WA'),(32,'Casey Wilson','active','WA'),(33,'Worth Wollpert','active','RMT'),(34,'Dylan Gargas','active','AZ'),(35,'Travis Fitta','active','AZ'),(36,'Conner Reynolds','active','WA'),(37,'Tyler Kozlowski','active','AZ'),(38,'Max Engelbrekt','active','AZ'),(39,'Emily Coolbah','active','RMT'),(40,'Matthew Kress','active','WA'),(41,'Max Dutto','active','WA'),(42,'Stephen Streich','active','AZ'),(43,'Alex Harter','active','RMT'),(44,'Andrew Aydt','active','WA'),(45,'Tanner Stokey','active','WA'),(46,'Mitch Viydo','active','WA'),(47,'Grant Ingram','active','WA'),(48,'Josh Herzenberg','active','WA'),(49,'Jack Lambert','active','WA'),(50,'Sam Hellinger','active','WA'),(51,'Elijah Boyer','active','AZ'),(52,'Eddie Yost','active','WA'),(53,'Cameron Haymans','active','WA'),(54,'Patrick Powers','active','AZ'),(55,'Ted Zerbe','active','RMT'),(56,'Aaron Rhodes','active','WA'),(57,'Josh Hejka','active','WA'),(58,'Cade Johnson','active','RMT'),(59,'Jaren Lesser','inactive','WA'),(60,'Jeremy Tecktiel','active','WA'),(61,'Jackson Sigman','active','WA'),(62,'Chris Langin','active','AZ'),(63,'Brice Crider','active','WA'),(64,'Connor White','active','RMT'),(65,'Jacob Sullivan','active','AZ'),(66,'Juan Rodriguez','active','AZ'),(67,'Gretchen Pouch','active','RMT'),(68,'Oscar Castro','active','WA'),(69,'Nicholas Chapa','active','RMT'),(70,'IT Cage','active','WA'),(71,'Anthony Adams','active','WA'),(72,'Shantanu Thorat','active','RMT'),(73,'Yeshas Nath','active','RMT'),(74,'Robert Frey','active','RMT'),(75,'Michael Capobianco','active','RMT'),(76,'Jacob Hirsh','active','WA'),(77,'Darby Fitta','active','AZ'),(78,'Daniel Catalan','active','WA'),(80,'WA Office','active','WA'),(81,'Sam Grace','active','AZ'),(82,'Dark Vader','active','WA'),(83,'Money','active','WA'),(84,'Joe','active','RMT');
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `employee_id` int DEFAULT NULL,
  `location` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `status` enum('ok','damaged') NOT NULL,
  `serial_number` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employee_id` (`employee_id`),
  KEY `location` (`location`),
  KEY `category` (`category`),
  CONSTRAINT `items_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `items_ibfk_2` FOREIGN KEY (`location`) REFERENCES `locations` (`name`),
  CONSTRAINT `items_ibfk_3` FOREIGN KEY (`category`) REFERENCES `categories` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=295 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Dell',1,'WA','laptop','ok','70DQ9C3',NULL),(2,'Unknown',1,'RMT','monitor','ok',NULL,2),(3,'Unknown',1,'RMT','keyboard','ok',NULL,NULL),(4,'Unknown',1,'RMT','mouse','ok',NULL,NULL),(5,'Unknown',5,'RMT','monitor','ok',NULL,NULL),(6,'Unknown',5,'RMT','docking station','ok',NULL,NULL),(7,'Predator',5,'RMT','laptop','ok','NHQ53AA00301701CE72600',NULL),(8,'MSI',2,'WA','laptop','ok','K2204N0004730',NULL),(9,'Lenovo',3,'WA','laptop','ok',NULL,NULL),(10,'Predator',4,'RMT','laptop','ok','NHQ3FAA0018380E2A3400',NULL),(11,'Lenovo',6,'WA','laptop','ok','PF2SSMNM',NULL),(12,'Unknown',6,'RMT','keyboard','ok',NULL,NULL),(13,'Unknown',6,'RMT','monitor','ok',NULL,3),(14,'Unknown',6,'RMT','mouse','ok',NULL,NULL),(15,'Unknown',6,'RMT','docking station','ok',NULL,NULL),(16,'Asus',7,'WA','laptop','ok','M1NRCX02S567042',NULL),(17,'Asus',8,'AZ','laptop','ok','L9NRCX043784387',NULL),(18,'Unknown',8,'RMT','monitor','ok',NULL,NULL),(19,'Unknown',8,'RMT','mouse','ok',NULL,NULL),(20,'Unknown',8,'RMT','keyboard','ok',NULL,NULL),(21,'Unknown',8,'RMT','docking station','ok',NULL,NULL),(22,'Stream Deck',8,'RMT','other','ok',NULL,NULL),(23,'MSI',9,'WA','laptop','ok','K1809N0014893',NULL),(24,'Unknown',9,'RMT','keyboard','ok',NULL,NULL),(25,'Unknown',9,'RMT','monitor','ok',NULL,2),(26,'Unknown',9,'RMT','mouse','ok',NULL,NULL),(27,'Unknown',9,'RMT','docking station','ok',NULL,NULL),(28,'Unknown',10,'RMT','keyboard','ok',NULL,NULL),(29,'Unknown',10,'RMT','monitor','ok',NULL,3),(30,'Unknown',10,'RMT','mouse','ok',NULL,NULL),(31,'Microphone',10,'RMT','other','ok',NULL,NULL),(32,'Webcam',10,'RMT','other','ok',NULL,NULL),(33,'USB-C Dock',10,'RMT','other','ok',NULL,NULL),(34,'Unknown',11,'RMT','keyboard','ok',NULL,NULL),(35,'Unknown',11,'RMT','mouse','ok',NULL,NULL),(36,'Unknown',11,'RMT','monitor','ok',NULL,2),(37,'Unknown',12,'AZ','laptop','ok','K2NRCV006520056G',NULL),(38,'Macbook Air',15,'WA','laptop','ok',NULL,NULL),(39,'Unknown',15,'RMT','mouse','ok',NULL,NULL),(40,'Unknown',15,'RMT','monitor','ok',NULL,NULL),(41,'Unknown',15,'RMT','keyboard','ok',NULL,NULL),(42,'MSI',16,'AZ','laptop','ok','K2110N0091498',NULL),(43,'Unknown',16,'RMT','monitor','ok',NULL,2),(44,'Unknown',16,'RMT','docking station','ok',NULL,NULL),(45,'Mac Mini',17,'RMT','laptop','ok','D0WH6V22DT',NULL),(46,'Unknown',17,'RMT','docking station','ok',NULL,NULL),(47,'Macbook',19,'WA','laptop','ok','C02FD7GBQ05N',NULL),(48,'Acer',20,'WA','laptop','ok','A5155556VK',NULL),(49,'Asus',22,'WA','laptop','ok','LBNRKD00837448C',NULL),(50,'Unknown',22,'RMT','mouse','ok',NULL,NULL),(51,'Unknown',22,'RMT','keyboard','ok',NULL,NULL),(52,'Unknown',22,'RMT','monitor','ok',NULL,2),(53,'Unknown',22,'RMT','docking station','ok',NULL,NULL),(54,'Lenovo',23,'WA','laptop','ok','PF2QKD1F',NULL),(55,'Unknown',23,'WA','mouse','ok',NULL,NULL),(56,'Unknown',23,'WA','monitor','ok',NULL,2),(57,'Acer',24,'WA','laptop','ok','NHQ3FAA00184505596400',NULL),(58,'Unknown',24,'RMT','keyboard','ok',NULL,NULL),(59,'Unknown',24,'RMT','monitor','ok',NULL,NULL),(60,'Unknown',24,'RMT','mouse','ok',NULL,NULL),(61,'Lenovo',25,'RMT','laptop','ok','PF2V1MX3',NULL),(62,'Predator',26,'WA','laptop','ok','NHQ9VAA00203701F412900',NULL),(63,'Unknown',26,'RMT','keyboard','ok',NULL,NULL),(64,'Unknown',26,'RMT','monitor','ok',NULL,2),(65,'Unknown',26,'RMT','mouse','ok',NULL,NULL),(66,'Unknown',26,'RMT','docking station','ok',NULL,NULL),(67,'Predator',27,'RMT','laptop','ok','NHQ3FAA001917035443400',NULL),(68,'Asus',28,'WA','laptop','ok','LCNRKD005852499',NULL),(69,'Unknown',28,'RMT','keyboard','ok',NULL,NULL),(70,'Unknown',28,'RMT','monitor','ok',NULL,NULL),(71,'Unknown',28,'RMT','mouse','ok',NULL,NULL),(72,'Unknown',28,'RMT','docking station','ok',NULL,NULL),(73,'Acer',29,'WA','laptop','ok',NULL,NULL),(74,'Dell',30,'WA','laptop','ok','5XTDLD2',NULL),(75,'Unknown',30,'RMT','keyboard','ok',NULL,NULL),(76,'Unknown',30,'RMT','monitor','ok',NULL,2),(77,'Unknown',30,'RMT','mouse','ok',NULL,NULL),(78,'Unknown',30,'RMT','docking station','ok',NULL,NULL),(79,'Lenovo',31,'WA','laptop','ok','CCAH17LP2610T0',NULL),(80,'Asus',33,'RMT','laptop','ok','L9NRCX04R715395',NULL),(81,'HP',36,'WA','laptop','ok','CND8425G4H',NULL),(82,'Unknown',36,'RMT','docking station','ok',NULL,NULL),(83,'Dell',37,'AZ','laptop','ok','GLTR5R3',NULL),(84,'Predator',38,'AZ','laptop','ok','NHQ3FAA0018600DE073400',NULL),(85,'Unknown',38,'RMT','keyboard','ok',NULL,NULL),(86,'Unknown',38,'RMT','monitor','ok',NULL,NULL),(87,'Unknown',38,'RMT','mouse','ok',NULL,NULL),(88,'Unknown',38,'RMT','docking station','ok',NULL,NULL),(89,'Lenovo',39,'RMT','laptop','ok',NULL,NULL),(90,'Unknown',39,'RMT','monitor','ok',NULL,2),(91,'Acer',13,'RMT','laptop','ok','NXHSPAA0040302636D7600',NULL),(92,'Unknown',43,'RMT','mouse','ok',NULL,NULL),(93,'Dell',44,'WA','laptop','ok','11233073162',NULL),(94,'Dell',45,'WA','laptop','ok','QK1Q0X2',NULL),(95,'Unknown',45,'RMT','keyboard','ok',NULL,NULL),(96,'Unknown',45,'RMT','monitor','ok',NULL,NULL),(97,'Unknown',45,'RMT','mouse','ok',NULL,NULL),(98,'Unknown',46,'WA','laptop','ok',NULL,NULL),(99,'Asus',49,'WA','laptop','ok','L9NRCX045752388',NULL),(100,'Unknown',51,'AZ','mouse','ok',NULL,NULL),(101,'Macbook',52,'WA','laptop','ok','FVFF1PAQ6L6',NULL),(102,'Unknown',52,'RMT','keyboard','ok',NULL,NULL),(103,'Unknown',52,'RMT','monitor','ok',NULL,2),(104,'Unknown',52,'RMT','docking station','ok',NULL,NULL),(105,'Dell',54,'AZ','laptop','ok','H7VKPN2',NULL),(106,'Asus',55,'RMT','laptop','ok','H8N0CV10L875347',NULL),(107,'Dell',56,'WA','laptop','ok','7VKTT93',NULL),(108,'Unknown',56,'RMT','mouse','ok',NULL,NULL),(109,'Unknown',56,'RMT','keyboard','ok',NULL,NULL),(110,'TUF',48,'WA','laptop','ok','L9NRCX044662388',NULL),(111,'MSI',58,'AZ','laptop','ok','K2110N0210032',NULL),(112,'Motile',59,'WA','laptop','ok','M141SL19H03111',NULL),(113,'Dell',60,'WA','laptop','ok','D2DR7T2',NULL),(114,'Unknown',60,'RMT','docking station','ok',NULL,NULL),(115,'Unknown',60,'RMT','mouse','ok',NULL,NULL),(116,'Unknown',60,'RMT','monitor','ok',NULL,2),(117,'Unknown',60,'RMT','keyboard','ok',NULL,NULL),(118,'Lenovo',61,'RMT','laptop','ok','PF3F4S6C',NULL),(119,'Dell',62,'AZ','laptop','ok','33975974883',NULL),(120,'Unknown',62,'RMT','docking station','ok',NULL,NULL),(121,'Unknown',62,'RMT','keyboard','ok',NULL,NULL),(122,'Unknown',62,'RMT','mouse','ok',NULL,NULL),(123,'Unknown',62,'RMT','monitor','ok',NULL,3),(124,'Acer',64,'AZ','laptop','ok','NHQ9GAA0010250DCB3400',NULL),(125,'Unknown',64,'RMT','monitor','ok',NULL,NULL),(126,'Unknown',64,'RMT','keyboard','ok',NULL,NULL),(127,'Asus',66,'AZ','laptop','ok','L9NRCX04R70539E',NULL),(128,'Unknown',66,'RMT','keyboard','ok',NULL,NULL),(129,'Unknown',66,'RMT','mouse','ok',NULL,NULL),(130,'Unknown',66,'RMT','monitor','ok',NULL,2),(131,'Unknown',66,'RMT','docking station','ok',NULL,NULL),(132,'Asus',67,'WA','laptop','ok','L6NRCV00971823E',NULL),(133,'Unknown',67,'RMT','mouse','ok',NULL,NULL),(134,'Acer',69,'RMT','laptop','ok','NHQ3FAA0018600E7803400',NULL),(135,'Lenovo',71,'WA','laptop','ok','FF295V3K',NULL),(136,'Asus',73,'RMT','laptop','ok','LBNRKD012183488',NULL),(137,'Asus',74,'RMT','laptop','ok','D0WH6V22DT',NULL),(138,'Asus',75,'RMT','laptop','ok','LBNRCX00F148457',NULL),(139,'Lenovo',76,'WA','laptop','ok','PF1NWHM8',NULL),(140,'Dell',78,'WA','laptop','ok','8MFC9S2',NULL),(141,'MSI',77,'AZ','laptop','ok','K2303N0140703',NULL),(142,'Macbook Pro',70,'WA','laptop','ok','C2WFDY9YDH2G',NULL),(143,'Macbook Pro',70,'WA','laptop','ok','C02YP7AMLVCF',NULL),(144,'Macbook Air',70,'WA','laptop','ok','FVFZVJXQLYWG',NULL),(145,'Acer',70,'WA','laptop','ok','NXHG8AA00102501DCB3400',NULL),(146,'Lenovo',70,'WA','laptop','ok','CCAF16LP2410T3',NULL),(147,'Macbook Pro',70,'WA','laptop','ok','CO2D474VMD6P',NULL),(148,'Inspiration',70,'WA','laptop','ok','6NP8GT2',NULL),(149,'Mac Mini',70,'WA','laptop','ok','C07XL8LUJYVW',NULL),(150,'Asus',70,'WA','laptop','ok','M1NRCX02S50',NULL),(151,'Motile',70,'WA','laptop','ok',NULL,NULL),(152,'Lenovo',70,'WA','laptop','ok','PF2V1MX3',NULL),(153,'Lenovo',70,'WA','laptop','ok','MP2469BX',NULL),(154,'Lenovo',70,'WA','laptop','ok','PF2HG9L',NULL),(155,'Unknown',80,'WA','mouse','ok',NULL,53),(156,'Unknown',70,'WA','mouse','ok',NULL,17),(157,'Unknown',80,'WA','keyboard','ok',NULL,52),(158,'Unknown',70,'WA','keyboard','ok',NULL,22),(159,'Unknown',80,'WA','docking station','ok',NULL,33),(160,'Unknown',70,'WA','docking station','ok',NULL,5),(161,'Dell',80,'WA','monitor','ok',NULL,31),(162,'Dell',70,'WA','monitor','ok',NULL,1),(163,'HP',80,'WA','monitor','ok',NULL,17),(164,'HP',70,'WA','monitor','ok',NULL,6),(165,'ThinkVision',80,'WA','monitor','ok',NULL,18),(166,'ThinkVision',70,'WA','monitor','ok',NULL,1),(167,'Lenovo',80,'WA','monitor','ok',NULL,17),(168,'Sceptre',80,'WA','monitor','ok',NULL,18),(169,'AOC',80,'WA','monitor','ok',NULL,7),(170,'AOC',70,'WA','monitor','ok',NULL,4),(171,'Asus',80,'WA','monitor','ok',NULL,3),(172,'Phillips',80,'WA','monitor','ok',NULL,1),(173,'LG',80,'WA','monitor','ok',NULL,3),(174,'Samsung',80,'WA','monitor','ok',NULL,4),(175,'Samsung',70,'WA','monitor','ok',NULL,1),(176,'Acer',80,'WA','monitor','ok',NULL,2),(177,'Laptop Stand',67,'RMT','other','ok',NULL,NULL),(178,'Laptop Stand',45,'RMT','other','ok',NULL,NULL),(179,'Laptop Stand',70,'WA','other','ok',NULL,9),(180,'Monitor Power Adapter',70,'WA','cable','ok',NULL,7),(181,'Mini PC',70,'WA','other','ok',NULL,4),(182,'Apple TV',70,'WA','other','ok',NULL,2),(183,'USB Ethernet Adapter',70,'WA','cable','ok',NULL,5),(184,'POE Injector',70,'WA','cable','ok',NULL,2),(185,'Microphone',70,'WA','other','ok',NULL,2),(186,'Flex Mini Switch',70,'WA','other','ok',NULL,9),(187,'IEC Power Strip',70,'WA','other','ok',NULL,4),(188,'Unify AC Pro',70,'WA','other','ok',NULL,3),(189,'Trackman (Old)',70,'WA','other','ok',NULL,1),(190,'Graphics Card',70,'WA','other','ok',NULL,5),(191,'Rapsodo Parts',70,'WA','other','ok',NULL,5),(192,'Laptop Battery',70,'WA','other','ok',NULL,5),(193,'PC Expansion Card',70,'WA','cable','ok',NULL,10),(194,'Ethernet Coupler',70,'WA','other','ok',NULL,7),(195,'USB Ethernet Adapter',70,'WA','cable','ok',NULL,4),(196,'USB Ethernet Adapter',70,'WA','desktop','ok',NULL,4),(197,'Ethernet Extension Cable',70,'WA','cable','ok',NULL,2),(198,'USB C Hubs',70,'WA','cable','ok',NULL,5),(199,'Analog to SDI Converter',70,'WA','cable','ok',NULL,3),(200,'HDMI Splitter',70,'WA','cable','ok',NULL,7),(201,'TP Link',70,'WA','other','ok',NULL,6),(202,'USB Micro B to HDMI',70,'WA','cable','ok',NULL,3),(203,'USB Hubs',70,'WA','other','ok',NULL,3),(204,'C13 Power Cord',70,'WA','cable','ok',NULL,36),(205,'15-15.9v Cable/Charger',70,'WA','cable','ok',NULL,5),(206,'C2 Power Cable',70,'WA','cable','ok',NULL,1),(207,'C5 Power Cable',70,'WA','cable','ok',NULL,12),(208,'C7 Power Cable',70,'WA','cable','ok',NULL,19),(209,'IPhone Charger',70,'WA','cable','ok',NULL,8),(210,'Mac Charger',70,'WA','cable','ok',NULL,6),(211,'C13 to C14 Power Cord',70,'WA','cable','ok',NULL,2),(212,'Laptop/Dekstop Hard Drives',70,'WA','other','ok',NULL,26),(213,'14-14.9v Cable/Charger',70,'WA','cable','ok',NULL,2),(214,'10-10.9v Charger/Cable',70,'WA','cable','ok',NULL,1),(215,'9-9.9v Charger/Cable',70,'WA','cable','ok',NULL,2),(216,'Ram/Memory',70,'WA','other','ok',NULL,50),(217,'Solid State Drive',70,'WA','other','ok',NULL,7),(218,'12-12.9v Charger/Cable',70,'WA','cable','ok',NULL,50),(219,'16-16.9v Charger/Cable',70,'WA','cable','ok',NULL,3),(220,'18-18.9v Charger/Cable',70,'WA','cable','ok',NULL,2),(221,'19-19.9v Charger/Cable',70,'WA','cable','ok',NULL,50),(222,'5-5.9v Charger/Cable',70,'WA','cable','ok',NULL,50),(223,'Remotes',70,'WA','other','ok',NULL,8),(224,'Patch Cable',70,'WA','cable','ok',NULL,10),(225,'Barrel Jack Cable',70,'WA','other','ok',NULL,10),(226,'Fiber Supplies',70,'WA','other','ok',NULL,1),(227,'SATA Cables',70,'WA','cable','ok',NULL,10),(228,'USB Type A to Mini B',70,'WA','other','ok',NULL,2),(229,'USB Extension Cable',70,'WA','cable','ok',NULL,4),(230,'USB Type A to USB Type B 3.0',70,'WA','cable','ok',NULL,8),(231,'USB Type A to Type A',70,'WA','cable','ok',NULL,9),(232,'USB Wall Charger',70,'WA','other','ok',NULL,20),(233,'USB Type A to Micro B',70,'WA','cable','ok',NULL,2),(234,'Auxillary Cable',70,'WA','cable','ok',NULL,5),(235,'USB Type C to Type C',70,'WA','cable','ok',NULL,6),(236,'Auxillary Cable Extension',70,'WA','cable','ok',NULL,10),(237,'USB Type A to Micro B',70,'WA','cable','ok',NULL,100),(238,'USB Type A to Type B',70,'WA','cable','ok',NULL,10),(239,'Hard Drive Caddy',70,'WA','other','ok',NULL,14),(240,'USB Type A to Type C',70,'WA','cable','ok',NULL,20),(241,'USB Type A to Type B',70,'WA','cable','ok',NULL,20),(242,'Tripod',70,'WA','other','ok',NULL,6),(243,'IPad case',70,'WA','other','ok',NULL,1),(244,'HDMI to HDMI',70,'WA','cable','ok',NULL,20),(245,'Display Port to Display Port',70,'WA','cable','ok',NULL,20),(246,'DVI to DVI',70,'WA','cable','ok',NULL,10),(247,'Power Pack',70,'WA','other','ok',NULL,1),(248,'Hard Drive',70,'WA','other','ok',NULL,1),(249,'Displayport to Mini Displayport',70,'WA','cable','ok',NULL,5),(250,'VGA to VGA',70,'WA','cable','ok',NULL,20),(251,'DVI to Displayport Adapter',70,'WA','cable','ok',NULL,3),(252,'HDMI/VGA Adapter',70,'WA','cable','ok',NULL,4),(253,'Displayport to HDMI',70,'WA','cable','ok',NULL,3),(254,'Ethernet Cables',70,'WA','cable','ok',NULL,100),(255,'Stalker Sport Cable',70,'WA','cable','ok',NULL,2),(256,'Printer Ink',70,'WA','other','ok',NULL,8),(257,'Label Maker',70,'WA','other','ok',NULL,4),(258,'Label Maker Tape',70,'WA','other','ok',NULL,21),(259,'Cable Tester',70,'WA','other','ok',NULL,1),(260,'Soldering Kit',70,'WA','other','ok',NULL,1),(261,'Chrome Cast',70,'WA','other','ok',NULL,5),(262,'Keyboard Pad',70,'WA','other','ok',NULL,5),(263,'Keyboard Wrist Support',70,'WA','other','ok',NULL,3),(264,'Assorted Batteries',70,'WA','other','ok',NULL,50),(265,'Headphones',70,'WA','other','ok',NULL,5),(266,'Power Adapter',70,'WA','cable','ok',NULL,40),(267,'Unknown',81,'AZ','laptop','ok','MP2469BX',NULL),(268,'Unknown',29,'WA','laptop','ok',NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES ('AZ'),('RMT'),('WA');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-05 12:49:35
