-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: 127.0.0.1    Database: portfolio_api
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(150) NOT NULL,
  `company_description` longtext NOT NULL,
  `project_description` longtext NOT NULL,
  `link` varchar(2083) DEFAULT NULL,
  `slug` varchar(200) NOT NULL,
  `tags` varchar(200) DEFAULT NULL,
  `industry` varchar(200) DEFAULT NULL,
  `year` int DEFAULT NULL,
  `role` varchar(200) DEFAULT NULL,
  `image` varchar(2083) DEFAULT NULL,
  `banner_image` varchar(2083) DEFAULT NULL,
  `homepage_screen` varchar(2083) DEFAULT NULL,
  `page_gif` varchar(2083) DEFAULT NULL,
  `category` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Movie Match','Movie Match helps two to plan their next movie party by providing them inspiration and finding movies they both agree to watch thanks to its matching systyem.','I\'ve been working on Movie Match during my training at Wild Code School in Lyon with 3 other students. This project has been done in 6 weeks time.','http://wildmoviematch.netlify.app/','movie-match','Design, Brandin, Development','Cinema',2020,'Designer - UX/UI - Developer','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/moviematch.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/moviematch-banner.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/movie-match-home.PNG','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/movie-match-internal-page.gif','Website'),(2,'Ideasworx','Ideasworx is a digital agency based in Melbourne, Australia, specialised in branding, websites, videography, print communication, digital marketing and insights & optimisation.','I’ve been in charge of creating Ideasworx website, from design to development, in collaboration with Albert Samuels, Art Director of the agency.','http://ideasworx.com/','ideasworx','Design, Development','Digital Marketing',2019,'Designer - UX/UI - Developer','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/ideasworx.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/ideasworx-banner.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/ideasworx-home.PNG','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/ideasworx-internal-page.gif','website'),(3,'Appart\' Ambiance','Appart’Ambiance is a real estate specialised in short-term and long-term lease. The agency manages and offers a full range of furnished apartments, fully equiped and a full range of services for professionals, travelers and owners.  Created in 2006, Appart’Ambiance is now the leader of furnished apartments rentals in Lyon.','I’ve been working for Appart’Ambiance for almost 2 years as digital project manager. I was in charge of multiple digital aspects of its marketing strategy, including SEO, copywriting, E-mailing, community management, web development and did some print communication as well.','https://www.appart-ambiance.com','appart-ambiance','SEO, Marketing, Communication, Social Media','Real Estate',2016,'Digital Project Manager','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/appart-ambiance.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/appart-ambiance-banner.jpg','','','Marketing'),(4,'Umbrella Health','Umbrella Health is a health company animated by the vision of a new future in healthcare that is patient focused and made easy to navigate through quality support.','I’ve been working on building their website, keeping in mind that it would be used by a wide range of clients. Technology being a key point of the strategy, i developed a fully responsive website in harmony with UX/UI design fundamentals.','https://umbrellahealth.com.au/','umbrella-health','Design, Development','Real Estate',2019,'UX Designer, Web Developer','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/umbrellahealth.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/umbrella-banner.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/umbrella-home.PNG','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/umbrella-health-internal-page.gif','Website'),(5,'C2 Capital','C2 Capital is an Australian and Asian focused boutique alternative asset investment firm. Founded in 2016, the company gained quick traction and was rethinking its whole branding.','Founded in 2016, C2 Capital gained quick traction and was re-thinking its whole branding. I was in charge of developing their website in website in a very short time as they were having a showcase 3 weeks later. Challenge done.','http://c2capital.com.au/','c2-capital','Design, Development','Investment, Finance',2019,'Web Developer','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/c2capital.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/c2capital-banner.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/c2-capital-home.PNG','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/c2-capital-internal-page.gif','Website'),(6,'Hubert Crabières','Hubert Crabieres is a Parisian photographer based in Argenteuil, France. His images oscillate between their potential autonomy and their necessary inscription as a whole.','I’ve been working closely with Hubert to keep consistency between his work and the way it could be showcase on his website. Pictures are organised by month, no matter the year they have been taken. In that way, they appear as twelve small series which communicate together in porous categories.','http://hubertcrabieres.fr/','hubert-crabieres','Design, Development','Fashion, Photography',2017,'Web Developer','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/hubertcrabieres.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/hubertcrabieres4.jpg','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/hubert-crabieres-home.png','https://raw.githubusercontent.com/Gottfrieden/portfolio/master/src/Images/hubert-crabieres-internal-page.gif','Website');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-23 17:33:47
