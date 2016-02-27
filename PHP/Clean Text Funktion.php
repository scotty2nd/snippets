 <?php
	 /* Sauberen String ohne HTML Code zurueckgeben */
	 function cleantxt($txt) {
	   $txt = str_replace(Array('<br />','<br/>','<br>'), ' ', $txt);
	   $txt = html_entity_decode(strip_tags($txt), ENT_QUOTES, 'UTF-8');
	   $txt = htmlspecialchars_decode($txt);
	   $txt = trim(str_replace(Array('„','“','”','"'), "", $txt));
	   return preg_replace('/\s+/', ' ', $txt);
	 }
 ?>