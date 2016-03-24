<?php 
	/*
		==========================================
		 Include scripts
		==========================================
	*/
	function cw_script_enqueue() {
		//css
		wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), '3.3.4', 'all');
		wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/schackow.css', array(), '1.0.0', 'all');
		wp_enqueue_style('custommobilestyle', get_template_directory_uri() . '/css/schackow-mobile.css', array(), '1.0.0', 'all');
		//js
		wp_enqueue_script('jquery');
		wp_enqueue_script('googlemapsjs', 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&signed_in=true', array(), '3.2.3', true);
		wp_enqueue_script('bootstrapjs', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '3.3.4', true);
		wp_enqueue_script('customjs', get_template_directory_uri() . '/js/schackow.js', array(), '1.0.0', true);
		
	}

	add_action( 'wp_enqueue_scripts', 'cw_script_enqueue');
?>