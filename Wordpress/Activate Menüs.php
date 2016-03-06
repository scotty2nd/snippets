<?php
	/*
		==========================================
		 Activate menus
		==========================================
	*/
	function cw_theme_setup() {
		
		add_theme_support('menus');
		
		register_nav_menu('primary', 'Header Navigation');
		register_nav_menu('secondary', 'Footer Navigation');
		
	}

	add_action('init', 'cw_theme_setup');
?>