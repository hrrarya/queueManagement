-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 11, 2019 at 02:03 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.3.8-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `queue_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `isRunning` varchar(255) NOT NULL,
  `type` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `isRunning`, `type`) VALUES
(72, 'hridoy', 'one', 'emergency'),
(73, 'dsfj', 'one', 'new'),
(74, 'df', 'one', 'old'),
(75, 'dsfds', 'one', 'emergency'),
(76, 'hrd', 'one', 'new'),
(77, 'hridoy', 'one', 'new'),
(78, 'df', 'one', 'new'),
(79, 'dsf', 'one', 'new'),
(80, 'sdf', 'one', 'new'),
(81, 'sdf', 'one', 'new'),
(82, 'sdf', 'one', 'emergency'),
(83, 'dsf', 'one', 'new'),
(84, 'sdf', 'one', 'emergency'),
(85, 'hrid', 'one', 'emergency'),
(86, 'dsf', 'one', 'old'),
(87, 'fg', 'one', 'new'),
(88, 'fdg', 'one', 'emergency'),
(89, 'hridoy', 'one', 'new'),
(90, 'dsf', 'one', 'emergency'),
(91, 'hridoy', 'one', 'emergency'),
(92, 'dsf', 'one', 'new'),
(93, 'dsf', 'one', 'new'),
(94, 'dsf', 'one', 'new'),
(95, 'sdf', 'one', 'emergency'),
(96, 'dfg', 'one', 'emergency'),
(97, 'hridoy', 'one', 'new'),
(98, 'dfg', 'one', 'new'),
(99, 'fdg', 'one', 'emergency'),
(100, 'dsf', 'one', 'emergency'),
(101, 'dfs', 'one', 'emergency'),
(102, 'hridoy', 'one', 'new'),
(103, 'hri', 'one', 'new'),
(104, 'fdsf', 'one', 'emergency'),
(105, 'dsf', 'one', 'new'),
(106, 'sdf', 'one', 'new'),
(107, 'fdf', 'one', 'new'),
(108, 'df', 'one', 'emergency'),
(109, 'dsf', 'one', 'new'),
(110, 'df', 'one', 'new'),
(111, 'sdf', 'one', 'new'),
(112, 'dsf', 'one', 'new'),
(113, 'dsf', 'one', 'old'),
(114, 'dsf', 'one', 'new'),
(115, 'sdf', 'one', 'old'),
(116, 'fds', 'one', 'new'),
(117, 'sdf', 'one', 'new'),
(118, 'sdf', 'one', 'emergency'),
(119, 'dsf', 'one', 'new'),
(120, 'fsdf', 'one', 'old'),
(121, 'sdf', 'one', 'emergency'),
(122, 'sdf', 'one', 'emergency'),
(123, 'dsf', 'one', 'new'),
(124, 'fdsf', 'one', 'new'),
(125, 'dsf', 'one', 'emergency'),
(126, 'sdf', 'one', 'new'),
(127, 'dsf', 'one', 'new'),
(128, 'sdf', 'one', 'new'),
(129, 'fsdf', 'one', 'emergency'),
(130, 'fdg', 'one', 'new'),
(131, 'dfg', 'one', 'emergency'),
(132, 'dsfhds', 'one', 'new'),
(133, 'dsfds', 'one', 'new'),
(134, 'dgfdg', 'one', 'emergency'),
(135, 'ds', 'one', 'new'),
(136, 'sdf', 'one', 'new'),
(137, 'sdf', 'one', 'new'),
(138, 'dsf', 'one', 'emergency'),
(139, 'sdf', 'one', 'new'),
(140, 'dsf', 'one', 'emergency'),
(141, 'hrid', 'one', 'new'),
(142, 'dsf', 'one', 'new'),
(143, 'df', 'one', 'emergency'),
(144, 'dsf', 'one', 'new'),
(145, 'df', 'one', 'new'),
(146, 'sdf', 'one', 'new'),
(147, 'sdf', 'one', 'emergency'),
(148, 'hridoy', 'one', 'new'),
(149, 'hridoy', 'one', 'new'),
(150, 'dsf', 'one', 'emergency'),
(151, 'dsf', 'one', 'new'),
(152, 'dsf', 'one', 'emergency'),
(153, 'hridoy', 'one', 'new'),
(154, 'df', 'one', 'new'),
(155, 'dfs', 'one', 'emergency'),
(156, 'hridoy', 'one', 'new'),
(157, 'rika', 'one', 'new'),
(158, 'rimon', 'one', 'emergency'),
(159, 'fds', 'one', 'new'),
(160, 'fdsf', 'one', 'new'),
(161, 'dsf', 'one', 'emergency'),
(162, 'dsf', 'one', 'new'),
(163, 'hridoy', 'one', 'emergency'),
(164, 'hridoy', 'one', 'new'),
(165, 'hr', 'one', 'new'),
(166, 'sf', 'one', 'new'),
(167, 'dsf', 'one', 'new'),
(168, 'hridoy', 'one', 'emergency'),
(169, 'hrido', 'one', 'new'),
(170, 'hridoy', 'one', 'new'),
(171, 'rila', 'one', 'new'),
(172, 'dsfjk', 'one', 'new'),
(173, 'sdfds', 'one', 'new'),
(174, 'sdf', 'one', 'new'),
(175, 'sdf', 'one', 'new'),
(176, 'sdf', 'one', 'new'),
(177, 'sdf', 'one', 'new'),
(178, 'sdf', 'one', 'new'),
(179, 'sdf', 'one', 'new'),
(180, 'sf', 'one', 'new'),
(181, 'sdf', 'one', 'new'),
(182, 'sdf', 'one', 'new'),
(183, 'sdf', 'one', 'new'),
(184, 'sdf', 'one', 'new'),
(185, 'sdf', 'one', 'new'),
(186, 'hridoy', 'one', 'emergency'),
(187, 'dsfkj', 'one', 'emergency'),
(188, 'hridoy', 'one', 'emergency'),
(189, 'fsdfkjdsf', 'one', 'new'),
(190, 'dsfjksdjf', 'one', 'emergency'),
(191, 'hrd', 'one', 'new'),
(192, 'dsfsd', 'one', 'new'),
(193, 'dsf', 'one', 'new'),
(194, 'dsf', 'one', 'new'),
(195, 'dsf', 'one', 'new'),
(196, 'hridoy', 'one', 'new'),
(197, 'rika', 'one', 'new'),
(198, 'rimon', 'one', 'emergency'),
(199, 'hridoy', 'one', 'new'),
(200, 'rika', 'one', 'new'),
(201, 'rimon', 'one', 'new'),
(202, 'sdf', 'one', 'old'),
(203, '1', 'one', 'new'),
(204, '2', 'one', 'new'),
(205, '3', 'one', 'new'),
(206, '4', 'one', 'new'),
(207, '5', 'one', 'new'),
(208, '6', 'one', 'new'),
(209, '7', 'one', 'new'),
(210, '8', 'one', 'new'),
(211, '9', 'one', 'new'),
(212, '1', 'one', 'new'),
(213, '2', 'one', 'new'),
(214, '3', 'one', 'new'),
(215, '4', 'one', 'new'),
(216, '5', 'one', 'new'),
(217, '66', 'one', 'new'),
(218, '77', 'one', 'new'),
(219, '8', 'one', 'new'),
(220, '1', 'one', 'new'),
(221, '2', 'one', 'new'),
(222, '3', 'one', 'new'),
(223, '4', 'one', 'new'),
(224, '5', 'one', 'new'),
(225, '667', 'one', 'new'),
(226, '78', 'one', 'new'),
(227, '8', 'one', 'new'),
(228, 'hridoy', 'one', 'new'),
(229, 'dsf', 'one', 'new'),
(230, 'cv', 'one', 'new'),
(231, 'as', 'one', 'new'),
(232, 'dsfr', 'one', 'emergency'),
(233, 'ju', 'one', 'new'),
(234, 'hridoy', 'one', 'emergency'),
(235, 'fdg', 'one', 'new'),
(236, 'dfg', 'one', 'new'),
(237, 'dfg', 'one', 'new'),
(238, 'hridoy', 'one', 'emergency'),
(239, 'dsfkj', 'one', 'emergency'),
(240, 'à§§', 'one', 'new'),
(241, 'à§§', 'one', 'new'),
(242, 'à§§à§¨', 'one', 'new'),
(243, 'à§§à§©', 'one', 'new'),
(244, 'à§§à§ª', 'one', 'new'),
(245, 'à§§à§«', 'one', 'emergency'),
(246, 'à§§à§ª', 'one', 'emergency'),
(247, 'à§§à§¯', 'one', 'emergency'),
(248, 'hridoy', 'one', 'emergency'),
(249, 'dsfkj', 'one', 'new'),
(250, 'dsf', 'one', 'new'),
(251, 'sdf', 'one', 'new'),
(252, 'sdf', 'one', 'old'),
(253, 'fsdf', 'one', 'new'),
(254, 'sdf', 'one', 'new'),
(255, 'dsf', 'one', 'new'),
(256, 'dsf', 'one', 'old'),
(257, 'dsfg', 'one', 'emergency'),
(258, 'dsf', 'one', 'new'),
(259, 'dsf', 'one', 'new'),
(260, 'dsf', 'one', 'new'),
(261, 'dsf', 'one', 'new'),
(262, 'hridoy', 'one', 'new'),
(263, 'dsf', 'one', 'new'),
(264, 'df', 'one', 'new'),
(265, 'df', 'one', 'new'),
(266, 'hudf', 'one', 'new'),
(267, 'df', 'one', 'new'),
(268, 'df', 'one', 'new'),
(269, 'dsf', 'one', 'new'),
(270, 'dsfsdf', 'one', 'new'),
(271, 'sdfggsfsafs', 'one', 'new'),
(272, 'hridoy', 'one', 'old'),
(273, 'fdsfkj', 'one', 'new'),
(274, 'dsf', 'one', 'new'),
(275, 'dsf', 'one', 'new'),
(276, 'hridoy', 'one', 'old'),
(277, 'hridoy', 'one', 'emergency'),
(278, 'dsfjsd', 'one', 'new'),
(279, 'sdfsd', 'one', 'new'),
(280, 'hridoy', 'one', 'emergency'),
(281, 'sdfj', 'one', 'new'),
(282, 'dsf', 'one', 'new'),
(283, 'fdsf', 'one', 'new'),
(284, 'hridoy', 'one', 'emergency'),
(285, 'dsfds', 'one', 'new'),
(286, 'sdf', 'one', 'new'),
(287, 'dsf', 'one', 'old'),
(288, 'fdg', 'one', 'new'),
(289, 'fg', 'one', 'emergency'),
(290, 'hridoy', 'one', 'emergency'),
(291, 'dsf', 'one', 'old'),
(292, 'dfg', 'one', 'new'),
(293, 'hridoy', 'one', 'new'),
(294, 'à¦°à¦¹à¦¿à¦® à¦‰à¦¦à§à¦¦à§€à¦¨', 'one', 'new'),
(295, 'à¦•à¦°à¦¿à¦®à¦¨ à¦¬à¦¿à¦¬à¦¿', 'one', 'new'),
(296, 'à¦•à¦°à¦¿à¦®à¦¨ à¦¬à¦¿à¦¬à¦¿', 'one', 'old'),
(297, 'à¦°à¦¹à¦®à¦¤ à¦†à¦²à¦¿', 'one', 'new'),
(298, 'à¦°à¦¹à¦®à¦Ÿ', 'one', 'emergency'),
(299, 'à¦°à¦¿à¦®à¦¨', 'one', 'emergency'),
(300, 'à¦°à¦¿à¦•à¦¾', 'one', 'new'),
(301, 'à¦°à¦¿à¦•à¦¾', 'one', 'emergency'),
(302, 'à¦°à¦¿à¦®à¦¨', 'one', 'emergency');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
