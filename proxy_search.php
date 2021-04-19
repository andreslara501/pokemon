<?php
	header('Content-Type: application/json');
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
	header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	header("Allow: GET, POST, OPTIONS, PUT, DELETE");
	$method = $_SERVER['REQUEST_METHOD'];
	if($method == "OPTIONS") {
		die();
	}

	
	$url = 'http://suggestqueries.google.com/complete/search?output=firefox&q=';
	$search = urlencode($_GET['search']);
	echo file_get_contents($url . $search);
?>