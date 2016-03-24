<?php
	//Benutzerdefinierte Felder Anzahl hochsetzten. Der Standart ist auf 30 gesetzt.
	//Folgenden Snippet in die funktions.php einsetzen 

	/*
		==========================================
		Custom Fields Maximum Hochsetzten
		==========================================
	*/
	 
	function change_custom_field_limit($limit){
	                return 60;
	}
	add_filter('postmeta_form_limit','change_custom_field_limit');
?>