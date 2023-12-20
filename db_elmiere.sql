-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 20, 2023 at 07:29 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_elmiere`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `caption` varchar(200) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `title`, `caption`, `image`, `created_at`) VALUES
(1, 'Photography is our passion. Whenever we get time, We click. Photography is a very important part of ', 'Photography is like a moment, an instant. You need a half-second to get photo. So it\'s good capture people when they are themselves.I became passionate about nature filmmaking when I graduated from UC', 'assets/backoffice/uploads/images/about/b0134bb53e8e72a5dbf7a1a18e502a6b.jpg', '2023-12-20 17:21:17');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` text NOT NULL,
  `youtube` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `created_at`, `image`, `youtube`) VALUES
(1, 'Nabati', '2023-12-20 16:26:55', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Nabati_logo.svg', 'https://www.youtube.com/embed/gDUzaANQ01A?si=bBZrBEZfPZTc-KUH'),
(3, 'None', '2023-12-20 14:52:02', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `caption` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `id_client` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `image`, `caption`, `created_at`, `id_client`) VALUES
(4, 'assets/backoffice/uploads/images/gallery/dbbd2bf01b154fae83da6e1dbb054b3d.jpg', 'Gunung Burangrang', '2023-12-20 14:43:28', 1),
(6, 'assets/backoffice/uploads/images/gallery/79a11fd8c7f8f4032ed505b01f96123d.jpg', 'Tangkuban Parahu', '2023-12-20 14:49:08', 1),
(7, 'assets/backoffice/uploads/images/gallery/bc1a8e75aec12d800b0a6c948338a05e.jpg', 'Bromo 1', '2023-12-20 14:53:36', 3),
(8, 'assets/backoffice/uploads/images/gallery/f02f75507babebe46b30f7d1c8b38e38.jpg', 'Bromo 2', '2023-12-20 14:53:48', 3);

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `link` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `partner`
--

INSERT INTO `partner` (`id`, `name`, `image`, `link`, `created_at`) VALUES
(1, 'Nabati', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Nabati_brand_logo.png', 'https://nabati.com', '2023-12-20 15:13:35'),
(3, 'Astra', 'https://companieslogo.com/img/orig/AALI.JK-0b7df4bf.png?t=1651135388', 'https://astra.com', '2023-12-20 15:49:00'),
(4, 'MCD', 'https://upload.wikimedia.org/wikipedia/commons/3/32/McDonald\'s_1968_logo.png', 'https://mcd.com', '2023-12-20 15:55:41'),
(5, 'KFC', 'https://pngimg.com/uploads/kfc/kfc_PNG53.png', 'https://kfc.com', '2023-12-20 15:56:46'),
(6, 'Yamaha', 'https://static.vecteezy.com/system/resources/previews/020/975/541/original/yamaha-logo-yamaha-icon-transparent-free-png.png', 'https://yamaha.com', '2023-12-20 15:59:09');

-- --------------------------------------------------------

--
-- Table structure for table `portofolio`
--

CREATE TABLE `portofolio` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `caption` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portofolio`
--

INSERT INTO `portofolio` (`id`, `title`, `caption`, `image`, `created_at`) VALUES
(2, 'Smart Gallery', 'Life Style', 'assets/backoffice/uploads/images/portofolio/44dcd5569f220150c96b658b0f31958a.jpg', '2023-12-20 15:06:34'),
(3, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/85efc24835633ca7a6022059da38304b.jpg', '2023-12-20 16:01:29'),
(4, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/b673f7f876f78c9437bd28668750913d.jpg', '2023-12-20 16:01:46'),
(5, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/571effc3a6465a2b6f386d709a357e20.jpg', '2023-12-20 16:02:36'),
(6, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/692f15f1cd140f85e2af4c9a0de00b2e.jpg', '2023-12-20 16:03:39'),
(7, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/bd90b1475582528a2ff4a55d1b922445.jpg', '2023-12-20 16:03:52'),
(8, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/c62f88091690dcfff187fd6db1172370.jpg', '2023-12-20 16:04:04'),
(9, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/ba91233efee900cd0787820b9a00dee9.jpg', '2023-12-20 16:04:17'),
(10, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/172bdf92f6ce1a869db18bd16c881646.jpg', '2023-12-20 16:04:52'),
(11, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/ca2138e2ad2e306f55800e59900e700a.jpg', '2023-12-20 16:05:02'),
(12, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/c7f71828d0d375e86ce1e11fb66edc84.jpg', '2023-12-20 16:05:12'),
(13, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/d1cf4c6d56902e89379d7b95e3c6f093.jpg', '2023-12-20 16:06:11'),
(14, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/ab8943b21bbd06af3a7303a07427938a.jpg', '2023-12-20 16:06:23'),
(15, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/ea2cb5a1629eaa0842f59b972d56791a.jpg', '2023-12-20 16:06:38'),
(16, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/ce904fee47eec3215cd07fa33b5b40d9.jpg', '2023-12-20 16:06:54'),
(17, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/bc121c73f1f1c88df570750724759302.jpg', '2023-12-20 16:07:04'),
(18, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/4800ba41116746bf15816a62e7bf8ca9.jpg', '2023-12-20 16:07:15'),
(19, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/3074b320a84f800a58b76045142aad5b.jpg', '2023-12-20 16:07:25'),
(20, 'Smart Life Style', 'Photography', 'assets/backoffice/uploads/images/portofolio/7f54d19a1ffc3f43b9a4714b612872f0.jpg', '2023-12-20 16:07:37');

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `facebook` text NOT NULL,
  `instagram` text NOT NULL,
  `twitter` text NOT NULL,
  `behance` text NOT NULL,
  `pinterest` text NOT NULL,
  `linkedin` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `name`, `image`, `created_at`, `facebook`, `instagram`, `twitter`, `behance`, `pinterest`, `linkedin`) VALUES
(1, 'Elmiere', 'assets/backoffice/uploads/images/setting/e5740f5496351aeead5b56d6c3552f6f.png', '2023-12-20 18:26:47', 'https://facebook.com/elmiere', 'https://instagram.com/elmiere', 'https://twitter.com/elmiere', 'https://behance.com/elmiere', 'https://pinterest.com/elmiere', 'https://linkedin.com/elmiere');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `caption` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `image`, `caption`, `created_at`, `title`) VALUES
(1, 'assets/backoffice/uploads/images/slider/b0b8ba0f6e791ed0fdec97fc17045ee5.jpg', 'What you have caught on film is captured forever.', '2023-12-20 15:45:28', 'Potrait Photography update'),
(2, 'assets/backoffice/uploads/images/slider/14c09d65b05c6514506e2ef3f2a04bd7.jpg', 'Photography is a way of feeling, of touching, of loving.', '2023-12-20 15:44:53', 'Landscape Photography'),
(3, 'assets/backoffice/uploads/images/slider/309ead9d82177d124dec232d59a4f1c2.jpg', 'Photography Is An Immediate Reaction.', '2023-12-20 15:45:21', 'Wedding Photography');

-- --------------------------------------------------------

--
-- Table structure for table `socmed`
--

CREATE TABLE `socmed` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `testimoni`
--

CREATE TABLE `testimoni` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `caption` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimoni`
--

INSERT INTO `testimoni` (`id`, `title`, `caption`, `created_at`, `image`) VALUES
(1, 'Syetrot Ruberti', 'Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things after have forgotten everything. Photography powerful       mediu expression and communications, offers an infinite variety of perception, interpretation.', '2023-12-20 17:37:59', 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Image.png'),
(3, 'Bambang Pamungkas', 'Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things after have forgotten everything. Photography powerful mediu expression and communications, offers an infinite variety of perception, interpretation.', '2023-12-20 17:35:57', 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'),
(4, 'Christian Gonzalez', 'Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever... it remembers little things after have forgotten everything. Photography powerful mediu expression and communications, offers an infinite variety of perception, interpretation.', '2023-12-20 17:35:25', 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `created_at`) VALUES
(1, 'admin', '$2y$10$A37IKN7WLcdlgwq2.Y.IdeN2Sc8JuXIQ7Exa.VppEXCyT408ca6zG', '2023-12-15 16:22:28');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_gallery`
-- (See below for the actual view)
--
CREATE TABLE `v_gallery` (
`id` int(11)
,`image` varchar(100)
,`caption` text
,`created_at` timestamp
,`id_client` int(11)
,`name` varchar(30)
);

-- --------------------------------------------------------

--
-- Structure for view `v_gallery`
--
DROP TABLE IF EXISTS `v_gallery`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_gallery`  AS SELECT `g`.`id` AS `id`, `g`.`image` AS `image`, `g`.`caption` AS `caption`, `g`.`created_at` AS `created_at`, `g`.`id_client` AS `id_client`, `c`.`name` AS `name` FROM (`gallery` `g` join `client` `c` on(`c`.`id` = `g`.`id_client`))  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portofolio`
--
ALTER TABLE `portofolio`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `socmed`
--
ALTER TABLE `socmed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimoni`
--
ALTER TABLE `testimoni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `portofolio`
--
ALTER TABLE `portofolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `socmed`
--
ALTER TABLE `socmed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `testimoni`
--
ALTER TABLE `testimoni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
