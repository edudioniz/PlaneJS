<?PHP
   header("Content-type: text/plain");
   header("Content-Disposition: attachment; filename=file.plane");
	
   print $_GET['f'];
?>