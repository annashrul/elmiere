<?php
//$url='https://demo.voidcoders.com/htmldemo/potoliaV2/main-files/'
?>
<?php
$url = base_url();
$setting = $this->M_crud->read_data('setting', '*')[0];
?>
<!DOCTYPE html>
<html lang='en'>

<head>

    <meta charset='utf-8'>
    <title>Elmiere - Multipurpose Photography HTML Template</title>
    <meta name='description' content>
    <meta name='author' content>
    <meta name='keywords' content>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>

    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1'>

    <link href='https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Adamina' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&display=swap' rel='stylesheet'>


    <link rel='stylesheet' href='<?= $url ?>assets/css/bootstrap.min.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/jquery-ui.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/font-awesome.min.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/flaticon/flaticon.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/owl.carousel.min.css'>
    <link rel='stylesheet' href='<?= $url ?>assets/css/owl.theme.default.min.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/jquery.fancybox.min.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/slicknav.min.css'>
    <link rel='stylesheet' href='<?= $url ?>assets/css/nav-menu.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/vmm.menu.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/animate.css'>
    <link rel='stylesheet' href='<?= $url ?>assets/css/ripple.min.css'>

    <link rel='stylesheet' href='<?= $url ?>assets/css/style.css'>

    <link rel='shortcut icon' type='image/png' href='<?= $url ?>assets/img/favicon.ico'>


    <!--[if lt IE 9]>
	<script src='https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js'></script>
	<script src='https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js'></script>
	<![endif]-->

    <link rel='stylesheet' type='text/css' href='<?= $url ?>assets/revolution/css/settings.css'>

    <link rel='stylesheet' type='text/css' href='<?= $url ?>assets/revolution/css/layers.css'>

    <link rel='stylesheet' type='text/css' href='<?= $url ?>assets/revolution/css/navigation.css'>
</head>

<body class='dark-bg'>
    <div id='preloader'></div>

    <header class='header-area fotolia-header header_2'>
        <div class='voidmega-header'>
            <div class='container'>
                <div class='row'>
                    <div class='col-12 col-xl-10'>
                        <div class='vmm-header header-transparent-on vmm-mega-menu mega-menu-fullwidth'>
                            <div class='container'>

                                <div class='vmm-header-container'>

                                    <div class='logo' data-mobile-logo="<?= base_url() .
                                        $setting['image'] ?>" data-sticky-logo="<?= base_url() .$setting['image'] ?>">
                                        <a href="<?= base_url() ?>"><img src="<?= base_url() .$setting['image'] ?>" alt='logo' /></a>
                                    </div>

                                    <div class='burger-menu'>
                                        <div class='line-menu line-half first-line'></div>
                                        <div class='line-menu'></div>
                                        <div class='line-menu line-half last-line'></div>
                                    </div>

                                    <nav class='vmm-menu menu-caret submenu-scale'>
                                        <ul>
                                            <?php foreach (['', 'photos', 'gallery'] as $row ): ?>
                                            <li class='mega-menu'><a style="color:<?= $this->uri->segment(1) == $row ? '#eb9d37': '##f7f7f7' ?>" href="<?=$row==''?base_url():base_url().$row ?>"><?=$row==''?'Home':$row?></a></li>
                                            <?php endforeach; ?>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='d-none col-xl-2 d-xl-block'>
                        <div class='search-menu-btn'>
                            <div class='searchV1-btn'>
                                <div class='soc-btn search-open'>
                                    <i class='fa fa-search'></i>
                                </div>
                                <div class='soc-btn search-close'>
                                    <i class='fa fa-close'></i>
                                </div>
                            </div>
                            <span class='menu2nd-btn'><i class='fa fa-bars fa-2x'></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <div class='search_V1'>
        <form>
            <input type='text' class='input'>
        </form>
    </div>

    <div class='secondMenu_V1'>
        <nav class='fotoliaCircular-menu'>
            <div class='circle'>
                <a href='index.html'><i class='flaticon-001-camera'></i></a>
                <a href='portfolio-1.html'><i class='flaticon-030-album'></i></a>
                <a href='portfolio-2.html'><i class='flaticon-025-video-camera'></i></a>
                <a href='gallery-3.html'><i class='flaticon-019-histogram'></i></a>
                <a href='album-1.html'><i class='flaticon-017-len-2'></i></a>
                <a href='album-2.html'><i class='flaticon-004-spotlight'></i></a>
                <a href='portfolio-4.html'><i class='flaticon-022-portrait'></i></a>
                <a href='portfolio-5.html'><i class='flaticon-037-timer'></i></a>
            </div>
            <span class='menu2nd-btn'>
                <i class='fa fa-times fa-2x'></i>
            </span>
        </nav>
    </div>

    <?php $this->load->view($pages); ?>

    <footer class="footer-area section-padding">
        <div class="container">
            <div class="col-md-12">
                <div class="footer-copyr-logo">
                    <img src="<?= base_url() . $setting['image'] ?>" alt>
                    <p>© 2019 All rights reserved by
                        <?= $setting['name'] ?>
                    </p>
                </div>
                <div class="footer-social">
                    <ul>
                        <li><a target="_blank" href="https://wa.me/<?= $setting[
                            'whatsapp'
                        ] ?>?text=hallo"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'twitter'
                        ] ?>"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'behance'
                        ] ?>"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'facebook'
                        ] ?>"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'pinterest'
                        ] ?>"><i class="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'linkedin'
                        ] ?>"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a target='_blank' href="<?= $setting[
                            'instagram'
                        ] ?>"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>


    <script src="<?= $url ?>assets/js/jquery-3.2.0.min.js"></script>
    <script src="<?= $url ?>assets/js/jquery-ui.js"></script>

    <script src="<?= $url ?>assets/js/owl.carousel.min.js"></script>

    <script src="<?= $url ?>assets/js/jquery.counterup.min.js"></script>
    <script src="<?= $url ?>assets/js/countdown.js"></script>
    <script src="<?= $url ?>assets/js/jquery.scrollUp.js"></script>
    <script src="<?= $url ?>assets/js/jquery.waypoints.min.js"></script>
    <script src="<?= $url ?>assets/js/shuffle.min.js"></script>
    <script src="<?= $url ?>assets/js/jquery.fancybox.min.js"></script>
    <script src="<?= $url ?>assets/js/jquery.ripples.min.js"></script>

    <script src="<?= $url ?>assets/js/jquery.slicknav.min.js"></script>

    <script src="<?= $url ?>assets/js/vmm.menu.js"></script>

    <script src="<?= $url ?>assets/js/bootstrap.min.js"></script>
    <script src="<?= $url ?>assets/js/imagesloaded.pkgd.js"></script>
    <script src="<?= $url ?>assets/js/masonry.pkgd.js"></script>
    <script src="<?= $url ?>assets/js/wow.js"></script>

    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/revolution.addon.slicey.min.js"></script>

    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.actions.min.js">
    </script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.kenburn.min.js">
    </script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="<?= $url ?>assets/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>

    <script src="<?= $url ?>assets/js/theme.js"></script>


    <script>
    $(document).ready(function() {
        $('.imagePorto').owlCarousel({
            items: 6,
            slideSpeed: 2000,
            margin: 10,
            nav: true,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 6
                }
            }
            // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });
    });
    </script>
</body>

</html>