<?php 
	/*
	==========================================
	 Portfolio Taxonomies
	==========================================
	*/

	function cw_custom_taxonomies(){
		//Hierachicher Taxonomy //Es gibt auch noch nicht hierachische Taxonomys

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

		register_taxonomy('kategorie', array('stellenangebote'), $args); //Entweder für ein Custom Post Type oder für mehrere
		/*register_taxonomy('kategorie', array('anwaelte','stellenangebote', utf8_encode('taetigkeitsbereiche'), 'karrierebereich'), $args);*/
	}

	add_action('init', 'cw_custom_taxonomies');
?>