/**
roles: 'frontman' | 'manager' | 'soldier' | 'worker'
*/

CREATE TABLE `organisers` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(255),
  `phone_code` char(5),
  `phone_number` varchar(15),
  `password` varchar(255),
  `role` varchar(20) NOT NULL,
  `name` varchar(255) DEFAULT '',
  `money_amount` bigint DEFAULT 0,
  `money_currency` char(3) DEFAULT 'USD'
);

CREATE TABLE `participants` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) DEFAULT ''
);

CREATE TABLE `games` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) DEFAULT ''
);

/**
result: 'completed' | 'eliminated' | 'wasted' | 'skipped' | 'saved'
*/

CREATE TABLE `participants_games_junction` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `participant_id` int NOT NULL,
  `game_id` int NOT NULL,
  `result` varchar(30) NOT NULL
);

INSERT INTO `organisers` (`email`, `role`, `name`, `money_amount`)
VALUES ('frontman@squidcorp.com', 'frontman', '2021 Frontman', 1000000);

INSERT INTO `organisers` (`email`, `role`, `name`, `money_amount`, `money_currency`)
VALUES ('actuallycop@kypd.com', 'manager', 'Hwang Jun-ho', 20000, 'KRW');

INSERT INTO `participants` (`name`)
VALUES 
('Seong Gi-hun'),
('Kang Sae-byeok'),
('Cho Sang-woo'),
('Ali Abdul'),
('Oh Il-nam');

INSERT INTO `games` (`name`)
VALUES 
('Red Light, Green Light'),
('Sugar Honeycombs'),
('Tug of War'),
('Marbles'),
('Glass Stepping Stones'),
('Squid Game');

-- 'completed' | 'eliminated' | 'wasted' | 'skipped' | 'saved'

INSERT INTO `participants_games_junction` (`participant_id`, `game_id`, `result`)
VALUES 
(1, 1, 'completed'),
(1, 2, 'completed'),
(1, 3, 'completed'),
(1, 4, 'completed'),
(1, 5, 'completed'),
(1, 6, 'completed'),
(2, 1, 'completed'),
(2, 2, 'completed'),
(2, 3, 'completed'),
(2, 4, 'completed'),
(2, 5, 'wasted'),
(5, 1, 'completed'),
(5, 2, 'completed'),
(5, 3, 'completed'),
(5, 4, 'saved');

SELECT *
FROM participants
INNER JOIN participants_games_junction ON participants.id = participants_games_junction.participant_id;


-- incorrect result
SELECT
  *
FROM
  participants_games_junction junc
  LEFT JOIN participants p ON (junc.participant_id = p.id)
  LEFT JOIN games g ON (junc.participant_id = g.id);

-- not needed since I've updated original Create statement here
ALTER TABLE `participants_games_junction`
ADD result varchar(30) NOT NULL;

CREATE TABLE `sessions` (
  `session_id` varchar(50) NOT NULL PRIMARY KEY,
  `user_id` int NOT NULL
);

--- did till here
