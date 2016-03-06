<?php 
	/*
	==========================================
	 Erlaubte Get Parameter in URL Festlegen
	==========================================
	*/

	function add_query_vars_filter( $vars ){
		$vars[] = "bereich";
		$vars[] = "taetigkeitsbereich";
		$vars[] = "standort";
		return $vars;
	}
	add_filter( 'query_vars', 'add_query_vars_filter' );
?>