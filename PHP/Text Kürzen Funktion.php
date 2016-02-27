 <?php
	 /* Text kürzen */
	 function text_kuerzen($str, $max, $end="&nbsp;...") {
	   if(strlen($str) > $max) {
	     $diff = round($max/6);
	     $start = $max - $diff;
	     $str = substr($str, 0, $start).preg_replace('/(.*?)[\s|,|\.|\-].*/i', '$1', substr($str, $start, $diff)) . $end;
	   }
	   return $str;
	 }
 ?>