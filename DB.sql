-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.20 - MySQL Community Server (GPL)
-- Операционная система:         Win64
-- HeidiSQL Версия:              9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Дамп структуры базы данных easydiary
CREATE DATABASE IF NOT EXISTS `easydiary` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `easydiary`;

-- Дамп структуры для таблица easydiary.days
CREATE TABLE IF NOT EXISTS `days` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.days: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `days` DISABLE KEYS */;
/*!40000 ALTER TABLE `days` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `org_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.groups: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT IGNORE INTO `groups` (`id`, `org_id`) VALUES
	(1, 1);
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.organizations
CREATE TABLE IF NOT EXISTS `organizations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.organizations: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;
INSERT IGNORE INTO `organizations` (`id`, `title`) VALUES
	(1, 'ШКОЛА 666');
/*!40000 ALTER TABLE `organizations` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_day_subj
CREATE TABLE IF NOT EXISTS `rel_day_subj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) DEFAULT NULL,
  `subj_id` int(11) DEFAULT NULL,
  `subj_order` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_day_subj: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `rel_day_subj` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_day_subj` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_group_sch
CREATE TABLE IF NOT EXISTS `rel_group_sch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) DEFAULT NULL,
  `sch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_group_sch: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `rel_group_sch` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_group_sch` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_group_stud
CREATE TABLE IF NOT EXISTS `rel_group_stud` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) DEFAULT NULL,
  `stud_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_group_stud: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `rel_group_stud` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_group_stud` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_group_subj
CREATE TABLE IF NOT EXISTS `rel_group_subj` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) DEFAULT NULL,
  `subj_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_group_subj: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `rel_group_subj` DISABLE KEYS */;
INSERT IGNORE INTO `rel_group_subj` (`id`, `group_id`, `subj_id`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 4);
/*!40000 ALTER TABLE `rel_group_subj` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_sch_week
CREATE TABLE IF NOT EXISTS `rel_sch_week` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sch_id` int(11) DEFAULT NULL,
  `week_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_sch_week: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `rel_sch_week` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_sch_week` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.rel_stud_work_complete
CREATE TABLE IF NOT EXISTS `rel_stud_work_complete` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `work_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.rel_stud_work_complete: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `rel_stud_work_complete` DISABLE KEYS */;
/*!40000 ALTER TABLE `rel_stud_work_complete` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.schedules
CREATE TABLE IF NOT EXISTS `schedules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_from` datetime DEFAULT NULL,
  `date_to` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.schedules: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;
/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.students
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.students: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.subjects: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `subjects` DISABLE KEYS */;
INSERT IGNORE INTO `subjects` (`id`, `title`) VALUES
	(1, 'географія'),
	(2, 'економіка'),
	(3, 'біологія'),
	(4, 'математика');
/*!40000 ALTER TABLE `subjects` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.updaters
CREATE TABLE IF NOT EXISTS `updaters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL DEFAULT '1',
  `group_v` int(11) NOT NULL DEFAULT '1',
  `subj_v` int(11) NOT NULL DEFAULT '1',
  `work_v` int(11) NOT NULL DEFAULT '1',
  `day_v` int(11) NOT NULL DEFAULT '1',
  `week_v` int(11) NOT NULL DEFAULT '1',
  `sch_v` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.updaters: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `updaters` DISABLE KEYS */;
INSERT IGNORE INTO `updaters` (`id`, `group_id`, `group_v`, `subj_v`, `work_v`, `day_v`, `week_v`, `sch_v`) VALUES
	(1, 1, 3, 3, 4, 3, 3, 3);
/*!40000 ALTER TABLE `updaters` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.weeks
CREATE TABLE IF NOT EXISTS `weeks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sch_id` int(11) DEFAULT NULL,
  `day_0` int(11) DEFAULT NULL,
  `day_1` int(11) DEFAULT NULL,
  `day_2` int(11) DEFAULT NULL,
  `day_3` int(11) DEFAULT NULL,
  `day_4` int(11) DEFAULT NULL,
  `day_5` int(11) DEFAULT NULL,
  `day_6` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.weeks: ~0 rows (приблизительно)
/*!40000 ALTER TABLE `weeks` DISABLE KEYS */;
/*!40000 ALTER TABLE `weeks` ENABLE KEYS */;

-- Дамп структуры для таблица easydiary.works
CREATE TABLE IF NOT EXISTS `works` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subj_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `data_text` varchar(1023) NOT NULL DEFAULT '',
  `version` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Дамп данных таблицы easydiary.works: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `works` DISABLE KEYS */;
INSERT IGNORE INTO `works` (`id`, `subj_id`, `group_id`, `data_text`, `version`) VALUES
	(1, 1, 1, 'надо убить двухметрового паука в сонной долине', 1),
	(2, 2, 1, 'все обязаны познать таинства 97 завета греховных времён', 2),
	(3, 1, 1, 'пойти по этапу', 1),
	(4, 4, 1, 'произвести подсчёт сусликов во всём мире с точностью +- 1', 1),
	(5, 1, 1, 'Твiр роздум на тему : \r\n"життя у побудi \r\nтарганiв та великих  \r\nбобрiв" . врпава 7-12 \r\nусно( переказ ) , \r\nвправи 13 та 16 \r\nписьмено.\r\nыввыа ша зу\r\nТвiр роздум на тему : \r\n"життя у побудi \r\nтарганiв та великих  \r\nбобрiв" . врпава 7-12 \r\nусно( переказ ) , \r\nвправи 13 та 16 \r\nписьмено.\r\n\r\nТвiр роздум на тему : \r\n"життя у побудi \r\nтарганiв та великих  \r\nбобрiв" . врпава 7-12 \r\nусно( переказ ) , \r\nвправи 13 та 16 \r\nписьмено.\r\nвправи 13 та 16 \r\nписьмено.\r\n\r\nТвiр роздум на тему : \r\n"життя у побудi \r\nтарганiв та великих  \r\nбобрiв" . врпава 7-12 \r\nусно( переказ ) , \r\nвправи 13 та 16 \r\nписьмено.', 4);
/*!40000 ALTER TABLE `works` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
