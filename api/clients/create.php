<?php 

	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Method: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Origin,Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With');

	include_once '../../config/clients.php';

	$clients = new Clients;

	$data = json_decode(file_get_contents('php://input'));

	if(!empty($data->name) && !empty($data->isRunning) && !empty($data->type)){
		$clients->name = $clients->get_input($data->name);
		$clients->isRunning = $clients->get_input($data->isRunning);
		$clients->type = $clients->get_input($data->type);


		if($clients->create()){
			http_response_code(200);
			echo json_encode(array(
				'message' => 'Data added succesfully'
			));
		}else{
			http_response_code(503);
			echo json_encode(array(
				'message' => 'Not added'
			));
		}
	}else{
		http_response_code(400);
			echo json_encode(array(
				'message' => 'Incomplete'
			));
	}
 ?>