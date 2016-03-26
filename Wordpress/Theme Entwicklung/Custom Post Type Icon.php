Um im Backend die ein eigenes Icon für einen Custom Post Type zu setzen muss folgendes in der 
functions.php an das $args Array hinzugefügt werden. 
Es gibt zwei Quellen für das Icon entweder wählt man ein Icon aus der vorhandenen Dashicons Font mit diesem Code Schnipsel 'menu_icon' => 'dashicons-admin-home'.
Eine komplette Übersicht gibt es auf https://developer.wordpress.org/resource/dashicons oder 
es wird ein eigenes Symbol verwendet dazu dann diesen Code Schnipsel verwenden 'menu_icon' => 'get_template_directory_uri() . "/img/cutom-posttype-icon.png"'.

Kompletes Beispiel

<?php
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
			'thumbnail',
		),
		'menu_position' => 5,
		'menu_icon' => 'dashicons-admin-home',
		'exclude_from_search' => false
	);
	register_post_type('immobilien', $args);

}
add_action('init', 'cw_custom_post_type');
?>
