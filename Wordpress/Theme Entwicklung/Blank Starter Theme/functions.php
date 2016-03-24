<?php
/*
	==========================================
	 Include scripts
	==========================================
*/
function cw_script_enqueue() {
	//css
	wp_enqueue_style('customstyle', get_template_directory_uri() . '/css/style.css', array(), '1.0.0', 'all');
	wp_enqueue_style('custommobilestyle', get_template_directory_uri() . '/css/style-mobile.css', array(), '1.0.0', 'all');
	wp_enqueue_style('customprintstyle', get_template_directory_uri() . '/css/style-print.css', array(), '1.0.0', 'all');
	//js
	wp_enqueue_script('jquery');
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);
	
}

add_action( 'wp_enqueue_scripts', 'cw_script_enqueue');

/*
	==========================================
	 Activate menus
	==========================================
*/
function cw_theme_setup() {
	
	add_theme_support('menus');
	
	register_nav_menu('primary', 'Primary Header Navigation');
	/*register_nav_menu('primary-mobile', 'Primary Mobile Header Navigation');*/
	register_nav_menu('secondary', 'Footer Navigation');
	
}

add_action('init', 'cw_theme_setup');

/*
	==========================================
	 Theme support function
	==========================================
*/
/*add_theme_support('custom-background');
add_theme_support('custom-header');*/
add_theme_support('post-thumbnails');
add_theme_support('post-formats',array('aside','image','video'));
/*add_theme_support('html5', array('search-form'));*/

/*
	==========================================
	 Portfolio function
	==========================================
*/

function cw_custom_post_type (){

	$labels = array(
		'name' => 'Immobilien',
		'singular_name' => 'Immobilie',
		'add_new' => 'Neu erstellen',
		'all_items' => 'Alle Eintr&auml;ge',
		'add_new_item' => 'Neu erstellen',
		'edit_item' => 'Eintrag bearbeiten',
		'new_item' => 'Neuer Eintrag',
		'view_item' => 'Zeige Eintrag',
		'search_item' => 'Immobilien durchsuchen',
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
			/*'excerpt',*/
			'thumbnail',
			/*'revisions',*/
			/*'custom-fields'*/
		),
		/*'taxonomies' => array('category', 'post_tag'),*/
		'menu_position' => 5,
		'exclude_from_search' => false
	);
	register_post_type('immobilien', $args);

}
add_action('init', 'cw_custom_post_type');

/*
	==========================================
	 Portfolio function
	==========================================
*/

function cw_custom_taxonomies(){
	//Hierachicher Taxonomy

	$labels = array(
		'name' => 'Kategorien',
		'singular_name' => 'Kategorie',
		'seach_items' => 'Kategorien durchsuchen',
		'all_items' => 'Alle Kategorien',
		'parent_item' => '&Uuml;bergeordnete Kategorie',
		'parent_item_colon' => 'Hauptkategorie',
		'edit_item' => 'Kategorie bearbeiten',
		'update_item' => 'Kategorie aktualisieren',
		'add_new_item' => 'Kategorie hinzuf&uuml;gen',
		'new_item' => 'Neue Kategorie',
		'new_item_name' => 'Neue Kategorie',
		'menu_name' => 'Kategorien',
		'not_found' => 'Keine Kategorien gefunden',
		'add_new' => 'Neu erstellen',
		/*'view_item' => 'Zeige Eintrag'*/
	);

	$args = array(
		'hierarchical' => true,
		'labels' => $labels,
		'show_ui' => true,
		'show_admin_column' => true,
		'query_var' => true,
		'sort' => true,
		'rewrite' => array('slug' => 'kategorie')
	);

	register_taxonomy('kategorie', array('immobilien'), $args);
}

add_action('init', 'cw_custom_taxonomies');