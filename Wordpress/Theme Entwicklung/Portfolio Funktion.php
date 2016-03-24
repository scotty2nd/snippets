<?php
	/*
		==========================================
		 Portfolio function
		==========================================
	*/

	function cw_custom_post_type (){

		$labels = array(
			'name' => 'Stellenangebote',
			'singular_name' => 'Stellenangebot',
			'add_new' => 'Neu erstellen',
			'all_items' => 'Alle Eintr&auml;ge',
			'add_new_item' => 'Neu erstellen',
			'edit_item' => 'Eintrag bearbeiten',
			'new_item' => 'Neuer Eintrag',
			'view_item' => 'Zeige Eintrag',
			'search_item' => 'Stellenangebot durchsuchen',
			'not_found' => 'Keine Eintr&auml;ge gefunden',
			'not_found_in_trash' => 'Keine Eintr&auml;ge im Papierkorb gefunden',
			'parent_item_colon' => 'Parent Item'
		);

		$args = array(
			'labels' => $labels,
			'public' => true,
			'has_archive' => true,
			'publicly_queryable' => true,
			'query_var' => true,
			'rewrite' => true,
			'capability_type' => 'post',
			'hierarchical' => false,
			'supports' => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'custom-fields'
			),
			//'taxonomies' => array('category', 'post_tag'), //muss ich nochmal nachgucken wofür das war???
			'menu_position' => 5,
			'exclude_from_search' => false
		);
		register_post_type('stellenangebote', $args);
	}
	add_action('init', 'cw_custom_post_type');
?>