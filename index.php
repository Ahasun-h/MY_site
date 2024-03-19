<!DOCTYPE html>
<html class="no-js vlt-is--custom-cursor" lang="en">

<head>
	<meta charset="utf-8">
	<title>Ahasun_H</title>
	<meta name="description" content="I'm Md.Ahasun Habib from Uttara, Dhaka. My birthplace is Cumilla district. I have completed my B.Sc in CSE from Dhaka Institute of Science Trade & Technology (ISTT) University in 2021. I have been familiar with PHP and Laravel for over 1 years. My dream is to be a Full Stack Software Engineer and I'm working heart and soul to make my dream true. Now I am looking for a job to improve my skills and build my career.">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!--Favicon-->
	<link rel="icon" type="image/png" href="assets/img/root/favicon.png">
	<!--Framework-->
	<link rel="stylesheet" href="assets/css/framework/bootstrap.min.css">
	<!--Fonts-->
	<link rel="stylesheet" href="assets/fonts/Inter/style.css">
	<!--Plugins-->
	<link rel="stylesheet" href="assets/css/vlt-plugins.min.css">
	<!--Style-->
	<link rel="stylesheet" href="assets/css/vlt-main.css">
	<!--Custom-->
	<link rel="stylesheet" href="assets/css/custom.css">

	<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>

	<link rel="stylesheet" href="assets/css/plugins/slicknav.css" >

    <link rel="stylesheet" href="assets/css/plugins/owl.carousel.min.css" />
	
	<style>
	    .disclaimer{
	        display:none;
	    }
	</style>

<script src="assets/vendors/jquery.min.js" ></script>
<script src="data/index.js"></script>

</head>

<body class=" animsition" onload="screenLoad()" style="scroll-behavior: smooth;">

	<!--====== Loading Screen ====== -->
    <div id="pre_loader" class="loading__backround">
        <div class="loading">
            <div class="d-flex justify-content-center align-items-center pre_loader_content ring">
                <img src="assets/img/MY_IMAGE.png" alt="">
                <span></span>
            </div>
        </div>
    </div>


	<!-- Header -->
	<nav class="sidebar close" id="sidebar">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="assets/img/MY_IMAGE.png" alt="">
                </span>
                <div class="text logo-text">
                    <span class="name">Ahasun_H</span>
                    <span class="profession">Web developer</span>
                </div>
            </div>
            <i class='bx bx-chevron-right toggle' id="toggle"></i>
        </header>

        <div class="menu-bar">
            <div class="menu">
                <ul class="menu-links" id="menu_links">
                    <li class="nav-link">
                        <a class="menu_bar_item menu_home active" href="#Home">
                            <i class='bx bx-home-alt icon'></i>
                            <span class="text nav-text">Home</span>
                        </a>
                    </li>

					<li class="nav-link">
                        <a class="menu_bar_item menu_services" href="#Services">
                            <i class='bx bx-message-alt-edit icon'></i>
                            <span class="text nav-text">Services</span>
                        </a>
                    </li>
					<li class="nav-link">
                        <a class="menu_bar_item menu_experience" href="#Experience">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Resume</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a class="menu_bar_item menu_skills" href="#Skills">
                            <i class='bx bx-user icon'></i>
                            <span class="text nav-text">About Me</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a class="menu_bar_item menu_portfolio" href="#Portfolio">
                            <i class='bx bx-cabinet icon'></i>
                            <span class="text nav-text">Portfolio</span>
                        </a>
                    </li>
					<li class="nav-link">
                        <a class="menu_bar_item menu_testimonials" href="#Testimonials">
                            <i class='bx bx-comment-dots icon'></i>
                            <span class="text nav-text">Testimonials</span>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a class="menu_bar_item menu_contact" href="#Contact">
                            <i class='bx bx-mail-send icon'></i>
                            <span class="text nav-text">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

	<!-- Mobile Top Header --> 
	<header class="mobile-header">  
		<img src="assets/img/MY_IMAGE.png" style="border-radius: 50px;" />
		<h4>Ahasun_H<br><span>Web developer</span></h4>
	</header>
	<!--/ Mobile Top Header --> 


	<!-- Mobile Menu Toggle -->
    <nav class="mobile_nav" id="mobile_nav" >
        <a class="nav_item mobile_menu_home active" href="#Home" title="Home" ><i class='bx bx-home-alt icon'></i></a>
		<a class="nav_item mobile_menu_services" href="#Services" title="Services" ><i class='bx bx-message-alt-edit icon'></i></a>
		<a class="nav_item mobile_menu_experience" href="#Experience" title="Experience" ><i class='bx bx-bar-chart-alt-2 icon' ></i></a>
        <a class="nav_item mobile_menu_skills" href="#Skills" title="About Me" ><i class='bx bx-user icon'></i></a>
        <a class="nav_item mobile_menu_portfolio" href="#Portfolio" title="Portfolio" ><i class='bx bx-cabinet icon'></i></a>
		<a class="nav_item mobile_menu_testimonials" href="#Testimonials" title="#Testimonials" ><i class='bx bx-comment-dots icon'></i></a>
        <a class="nav_item mobile_menu_contact" href="#Contact" title="Contact" ><i class='bx bx-mail-send icon'></i></a>
    </nav>


	<!--Offcanvas Menu-->
	<div class="vlt-offcanvas-menu">
		<div class="vlt-offcanvas-menu__header">
			<!--Locales-->
			<nav class="vlt-offcanvas-menu__locales">
                <a class="active" href="#">Eng</a>
                <a href="#">Fra</a>
                <a href="#">Ger</a>
            </nav>
			<!--Menu Burger-->
            <a class="vlt-menu-burger vlt-menu-burger--opened js-offcanvas-menu-close" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </a>
		</div>
		<nav class="vlt-offcanvas-menu__navigation">
			<!--Navigation-->
			<ul class="sf-menu">
				<li data-menuanchor="Home"><a href="#Home">Home</a></li>
				<li data-menuanchor="Services"><a href="#Services">Services</a></li>
				<li data-menuanchor="Experience"><a href="#Experience">Experience</a></li>
				<li data-menuanchor="Skills"><a href="#Skills">Skills</a></li>
				<li data-menuanchor="Portfolio"><a href="#Portfolio">Portfolio</a></li>
				<li data-menuanchor="Awards"><a href="#Awards">Awards</a></li>
				<li data-menuanchor="Testimonials"><a href="#Testimonials">Testimonials</a></li>
				<li data-menuanchor="Blog"><a href="#Blog">Blog</a></li>
				<li data-menuanchor="Contact"><a href="#Contact">Contact</a></li>
			</ul>
		</nav>
		<div class="vlt-offcanvas-menu__footer">
			<!--Socials-->
			<div class="vlt-offcanvas-menu__socials"><a href="#" target="_blank">Fb.</a><a href="#" target="_blank">Bē.</a><a href="#" target="_blank">Tw.</a><a href="#" target="_blank">In.</a></div>
			<!--Copyright-->
			<div class="vlt-offcanvas-menu__copyright">
				<p>&copy; 2020 Copiright.<br>All rights reserved.</p>
			</div>
		</div>
	</div>
	<!--Site Overlay-->
	<div class="vlt-site-overlay"></div>

	<!--Main-->
	<main class="vlt-main">
		<!--Fullpage Slider-->
		<div class="vlt-fullpage-slider" data-loop-top="" data-loop-bottom="" data-speed="800">
			<!-- Start:Home Section-->
			<section class="vlt-section pp-scrollable" data-anchor="Home" id="Home" data-brightness="dark" style="background-image: url(/assets/img/root/hero-bg.png);">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Particles-->
						<div class="vlt-section__particles">
							<div class="vlt-particle vlt-fade-in-left vlt-custom--1451" style="background-image: url(assets/img/root/plus-dark-pattern.png); transition-duration: 1s;"></div>
							<div class="vlt-particle d-none d-xl-block vlt-fade-in-right vlt-custom--1512" style="background-image: url(assets/img/root/elipse-home-slide.png); transition-duration: 1.5s; transition-delay: 300ms;"></div>
							<div class="vlt-particle vlt-custom--4124"></div>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-lg-7 offset-lg-1">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:0s; animation-duration:700ms;">
										<h5 class="vlt-display-1 has-white-color" id="home_user_name">Md.Ahasun Habib</h5>
										<div class="vlt-gap-10"></div>
										<h1 class="vlt-large-heading has-white-color">I’m <br /><spna id="home_user_profession" >WebDeveloper</spna></h1>
										<div class="vlt-gap-40"></div>
										<div class="row">
											<div class="col-auto">
												<!--Counter Up Small-->
												<div class="vlt-counter-up-small" data-ending-number="12" data-animation-speed="1000" data-delimiter=""><span class="counters" id="home_completed_project" >0</span>
													<h6 class="vlt-display-1">Completed<br>projects</h6>
												</div>
												<div class="vlt-gap-20--sm"></div>
											</div>
											<div class="col-auto">
												<!--Counter Up Small-->
												<div class="vlt-counter-up-small" data-ending-number="6" data-animation-speed="1000" data-delimiter=""><span class="counters" id="home_satisfied_user">0</span>
													<h6 class="vlt-display-1">Satisfied<br>customers</h6>
												</div>
											</div>
										</div>
										<div class="vlt-gap-40"></div>
                                        <a class="vlt-link has-white-color" id="resume_one" href="#">Watch Resume</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- End:Home Section-->

			<!-- Start:Services Section-->
			<section class="vlt-section pp-scrollable" data-anchor="Services" id="Services" data-brightness="light" >
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Particles-->
						<div class="vlt-section__particles">
							<div class="vlt-particle vlt-custom--1259 vlt-fade-in-right" style="background-image: url(assets/img/root/plus-light-pattern.png); animation-delay: 750ms;"></div>
							<div class="vlt-particle vlt-custom--2355 vlt-fade-in-left" style="background-image: url(assets/img/root/elipse-light.png); animation-delay: 500ms;"></div>
						</div>
						<div class="container">
							<div class="row">
								<div class="col-lg-2 offset-lg-1 d-none d-lg-block">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:0s; animation-duration:700ms;">
										<!--Counter Up-->
										<div class="vlt-counter-up" id="service_vlt_counter_up" data-ending-number="0" data-animation-speed="1000" data-delimiter="">
											<span id="service_experience_year">0</span><sup>+</sup>
										</div>
										<div class="vlt-gap-40"></div>
										<h6>Years <br>Experience <br>Working</h6>
									</div>
								</div>
								<div class="col-lg-8 col-md-12">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:100ms; animation-duration:700ms;">
										<h4>
											<span id="service_title">design and develop services for customers of all sizes, specializing in creating</span> 
											<span class="has-first-color" id="service_title_color">
												stylish, modern websites, web services and online stores.
											</span>
										</h4>
									</div>
									<div class="vlt-gap-70"></div>
									<div class="row" id="service_item">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--Experience-->
			<!--Section-->
			<section class="vlt-section pp-scrollable resume" data-anchor="Experience" id="Experience" data-brightness="dark">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Ken Burn Effect-->
						<div class="vlt-section__ken-burn-background"><img src="assets/img/attachment-02.jpg" alt=""></div>
						<div class="container">
							<div class="row">
								<div class="col-lg-10 offset-lg-1">
									<h4 class="has-white-color">Education</h4>
									<hr >
									<div id="education_items"></div>
									<h4>Professional Experience</h4>
									<hr>
									<div id="professional_experience"></div>
									<div class="resume-step"></div>
									<h4>Training Experience</h4>
									<hr>
                                    <div id="training_experience"></div>
									<div class="resume-step"></div>

									<div class="vlt-gap-50"></div>
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:200ms; animation-duration:700ms;">
										<!--Button-->
										<a class="vlt-btn vlt-btn--primary" id="resume_two" href="#" target="_self">
											<span class="vlt-btn__text">Download Resume</span>
											<span class="vlt-btn__icon vlt-btn__icon--right">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round">
													<line x1="12" y1="5" x2="12" y2="19"></line>
													<polyline points="19 12 12 19 5 12"></polyline>
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- Start: About Me -->
			<section class="vlt-section pp-scrollable" data-anchor="Skills" id="Skills" data-brightness="light">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Particles-->
						<div class="vlt-section__particles">
							<div class="vlt-particle vlt-custom--1259 vlt-fade-in-right" style="background-image: url(assets/img/root/plus-light-pattern.png); animation-delay: 750ms;"></div>
							<div class="vlt-particle vlt-custom--2355 vlt-fade-in-left" style="background-image: url(assets/img/root/elipse-light.png); animation-delay: 500ms;"></div>
						</div>
						<div class="container">
							<div class="row align-items-center">
								<div class="col-lg-4 offset-lg-1">
									<div class="vlt-slide-photo">
										<div class="vlt-slide-photo__inside">
											<img id="my_image" src="./assets/img/loding.gif" data-src="assets/img/my_image.jpg" alt="">
										</div>
										<div class="vlt-slide-photo__particle vlt-fade-in-bottom--small has-border-radius has-box-shadow" style="top: -50px; right: -40px; width: 100px; transition-delay: 300ms;"><img src="assets/img/root/parallax-particle-01.png" alt=""></div>
										<div class="vlt-slide-photo__particle vlt-fade-in-bottom--small has-border-radius has-box-shadow" style="top: 40px; left: -30px; width: 80px; transition-delay: 600ms;"><img src="assets/img/root/parallax-particle-02.png" alt=""></div>
										<div class="vlt-slide-photo__particle vlt-fade-in-left--small has-border-radius has-box-shadow" style="left: 30px; bottom: -50px; width: 100px; transition-delay: 900ms;"><img src="assets/img/root/parallax-particle-03.png" alt=""></div>
										<div class="vlt-slide-photo__particle vlt-fade-in-left--small negative-z-index" style="right: -40px; bottom: -30px; width: 290px; transition-delay: 1.2s;"><img src="assets/img/root/plus-light-pattern.png" alt=""></div>
									</div>
									<div class="vlt-gap-100--md"></div>
								</div>
								<div class="col-lg-5 offset-lg-1">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:100ms; animation-duration:700ms;">
										<h4>I'm <span class="has-first-color" id="my_name">Md.Ahasun Habib</span></h4>
										<div class="vlt-gap-20"></div>
										<p id="about_me">from Uttara, Dhaka. My birthplace is Cumilla district. I have completed my B.Sc in CSE from Dhaka Institute of Science Trade & Technology (ISTT) University in 2021. I have been familiar with PHP and Laravel for over 1 years. My dream is to be a Full Stack Software Engineer and I'm working heart and soul to make my dream true. Now I am looking for a job to improve my skills and build my career.</p>
									</div>
									<div class="vlt-gap-50"></div>
									
									<!--Animated Block-->
									<div class="vlt-animated-block row" style="animation-delay:300ms; animation-duration:700ms;">
										<ul class="col-12 about_myself">
											<li>
												<i class='bx bx-chevron-right icon'></i>
                                                <strong>Date of Birth :</strong> <spna id="dob">23 Jun 1998</spna>
											</li>
											<li>
												<i class='bx bx-chevron-right icon'></i>
												 <strong>Gender :</strong> <span id="gender">Male</span>
											</li>
											<li>
												<i class='bx bx-chevron-right icon'></i>
                                                <strong>Mobile :</strong> <span id="mobile_number">+8801966205647</span>
											</li>
											<li>
												<i class='bx bx-chevron-right icon'></i>
												 <strong>Email :</strong> <span id="email">habibahasun019@gmail.com</span>
											</li>
											<li>
												<i class='bx bx-chevron-right icon'></i>
												 <strong>Address :</strong> <span id="address">Uttara,Dhaka,Bangladesh</span>
											</li>
										</ul>
									</div>
									<div class="vlt-gap-30"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <!-- End: About Me -->

			<!-- Start:Portfolio Section-->
			<section class="vlt-section pp-scrollable Portfolio" data-anchor="Portfolio" id="Portfolio" data-brightness="dark">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Ken Burn Effect-->
						<div class="vlt-section__ken-burn-background"><img src="assets/img/attachment-03.jpg" alt=""></div>
						<div class="container">
							<div class="portfolio_menu">
								<ul id="portfolio_menu">
								</ul>
							</div>
	
							<div class="gallery" data-ref="mixitup-container">
								<div class="row col-12" id="portfolio_item" style="margin: auto;">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            <!-- End:Portfolio Section-->
			
			<!-- Start:Testimonials -->
			<section class="vlt-section pp-scrollable" data-anchor="Testimonials" id="Testimonials" data-brightness="light">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">

						<!--Particles-->
						<div class="vlt-section__particles">
							<div class="vlt-particle vlt-custom--1259 vlt-fade-in-right" style="background-image: url(assets/img/root/plus-light-pattern.png); animation-delay: 750ms;"></div>
							<div class="vlt-particle vlt-custom--2355 vlt-fade-in-left" style="background-image: url(assets/img/root/elipse-light.png); animation-delay: 500ms;"></div>
						</div>

						<!--Ken Burn Effect-->
						<!-- <div class="vlt-section__ken-burn-background"><img src="assets/img/attachment-04.jpg" alt=""></div> -->
						<div class="container">
							<div class="row">
								<div class="col-lg-10 offset-lg-1" >
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:0s; animation-duration:700ms;">
										<div class="d-block d-md-flex align-items-center justify-content-between">
											<h1>Testimonials</h1>
											<div class="vlt-gap-30--sm"></div>
											<div class="vlt-testimonial-slider-controls"><span class="prev">🡐</span><span class="pagination"></span><span class="next">🡒</span></div>
										</div>
									</div>
									<div class="vlt-gap-50"></div>
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:100ms; animation-duration:700ms;">
										<!--Testimonial Slider-->
										<div class="vlt-testimonial-slider">
											<div class="swiper-container">
												<div class="swiper-wrapper" id="testimonial_item_append">
												</div>
											</div>
										</div>
									</div>
									<div class="vlt-gap-70"></div>
									<div class="row d-flex align-items-center justify-content-md-between owl-carousel owl-theme" id="work_with">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			<!--Contact-->
			<!--Section-->
			<section class="vlt-section pp-scrollable" data-anchor="Contact" id="Contact" data-brightness="dark">
				<div class="vlt-section__vertical-align">
					<div class="vlt-section__content">
						<!--Ken Burn Effect-->
						<div class="vlt-section__ken-burn-background"><img src="assets/img/attachment-05.jpg" alt=""></div>
						<div class="container">
							<div class="row">
								<div class="col-lg-4 offset-lg-1">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:0s; animation-duration:700ms;">
										<h1 class="has-white-color">Contact</h1>
										<div class="vlt-gap-20"></div>
										<p class="has-gray-color">You'll called for yielding male, so lights<br>Stars abundantly, is their.</p>
										<div class="vlt-gap-50"></div>
										<div class="has-white-color">
											<h6 class="vlt-display-1 has-gray-color">Email:</h6>
											<div class="vlt-gap-5"></div><a href="mailto:habibahasun019@gmail.com" id="contact_email">habibahasun019@gmail.com</a>
										</div>
										<div class="vlt-gap-30"></div>
										<div class="has-white-color">
											<h6 class="vlt-display-1 has-gray-color">Phone:</h6>
											<div class="vlt-gap-5"></div>
											<a href="tel:+8801966205647" id="contact_number">+8801966205647</a>&nbsp;
										</div>
										<div class="vlt-gap-40"></div>
                                        <a class="vlt-btn vlt-btn--secondary" target="_blank" id="contact_location" href="https://goo.gl/maps/KpjDNkccuhw96Rst9">
                                            <span class="vlt-btn__text">Get direction</span>
                                            <span class="vlt-btn__icon vlt-btn__icon--right">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin">
													<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
													<circle cx="12" cy="10" r="3" />
                                                </svg>
                                            </span>
                                        </a>
									</div>
									<div class="vlt-gap-70--sm"></div>
								</div>
								<div class="col-lg-6">
									<!--Animated Block-->
									<div class="vlt-animated-block" style="animation-delay:100ms; animation-duration:700ms;">
										<h5 class="has-white-color">I am always looking for great collaborators. Let’s message me and make <span class="has-first-color">something together!</span></h5>
										<div class="vlt-gap-40"></div>
										<form class="vlt-contact-form" action="contact.php" method="POST" novalidate="novalidate">
											<div class="vlt-form-row two-col">
												<div class="vlt-form-group">
													<label class="has-white-color" for="name">Your name (required)</label>
													<input type="text" id="name" name="name" required="required" placeholder="Your Name">
												</div>
												<div class="vlt-form-group">
													<label class="has-white-color" for="email">Your email (required)</label>
													<input type="email" id="email" name="email" required="required" placeholder="Your Email">
												</div>
											</div>
											<div class="vlt-form-row">
												<div class="vlt-form-group">
													<label class="has-white-color" for="email">Your message subject (required)</label>
													<input type="text" id="subject" name="subject" required="required" placeholder="Your Subject">
												</div>
												
											</div>
											<div class="vlt-form-group">
												<label class="has-white-color" for="message">Your Message</label>
												<textarea name="message" id="message" rows="3" placeholder="Message"></textarea>
											</div>

											<?php
                                               if (isset($_GET['error'])) {
                                                   echo '<div class="message success">Your message is successfully sent.</div>';
                                               }

                                               if (isset($_GET['success'])) {
                                                   echo '<div class="message danger">Sorry something went wrong!</div>';
                                               }
                                             ?>
											<button class="vlt-btn vlt-btn--primary"><span class="vlt-btn__text">Contact Me</span><span class="vlt-btn__icon vlt-btn__icon--right"></span></button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--Progress Bar-->
			<ul class="vlt-fullpage-slider-progress-bar">
				<li data-menuanchor="Home"></li>
				<li data-menuanchor="Services"></li>
				<li data-menuanchor="Experience"></li>
				<li data-menuanchor="Skills"></li>
				<li data-menuanchor="Portfolio"></li>
				<li data-menuanchor="Testimonials"></li>
				<li data-menuanchor="Contact"></li>
			</ul>
			<!--Numbers-->
			<div class="vlt-fullpage-slider-numbers"></div>
		</div>
		<!--Footer-->
		<footer class="vlt-footer vlt-footer--fixed ">
			<!--Copyright-->
			<div class="vlt-footer-copyright row">
                <div class="vlt-fixed-socials col-6"></div>
				<p class="col-6">&copy; 2023 Copiright.<br>All rights reserved.</p>
			</div>
		</footer>
	</main>
	<!--Libs-->
	<script src="assets/vendors/jquery-3.5.1.min.js"></script>
	<script src="assets/scripts/vlt-plugins.min.js"></script>
	<script src="assets/scripts/vlt-helpers.js"></script>
	<script src="assets/scripts/vlt-controllers.js"></script>
	<script src="assets/vendors/mixitup.min.js"></script>
	<script src="assets/vendors/jquery.unveil.js"></script>
	<script src="assets/scripts/extra.js"></script>
    <!-- <script src="assets/vendors/jquery.unveil.min.js"></script> -->
    <script src="assets/vendors/owl.carousel.min.js"></script>
	<script src="assets/scripts/custom.js"></script>

</body>

</html>