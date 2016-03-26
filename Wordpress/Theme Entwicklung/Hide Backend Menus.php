Um im Backend Menu Items auszublenden folgendes in die funktions.php übernehmen

/*
	==========================================
	 Hide Menu Items in Backend
	==========================================
*/

function cw_remove_menus(){
  remove_menu_page( 'index.php' );                  //Dashboard
  remove_menu_page( 'edit.php' );                   //Posts
  remove_menu_page('edit.php?post_type=acf');		    //Eigene Felder
  remove_menu_page( 'edit-comments.php' );          //Comments
  remove_menu_page( 'themes.php' );                 //Appearance
  remove_menu_page( 'plugins.php' );                //Plugins
  remove_menu_page( 'users.php' );                  //Users
  remove_menu_page( 'tools.php' );                  //Tools
  remove_menu_page( 'options-general.php' );        //Settings
}

add_action( 'admin_menu', 'cw_remove_menus', 999 );