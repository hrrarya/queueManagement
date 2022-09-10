<?php 
	header('Access-Control-Allow-Origin: *');
	header('Content-Type: application/json');
	header('Access-Control-Allow-Method: POST');
	header('Access-Control-Allow-Headers: Access-Control-Allow-Origin,Content-Type,Access-Control-Allow-Headers,Authorization,X-Requested-With');

	include_once '../../config/clients.php';

	$clients = new Clients;

	$data = json_decode(file_get_contents('php://input'));

	if(!empty($data->id)){
		$clients->id = $clients->get_input($data->id);

		if($clients->delete()){
			http_response_code(200);
			echo json_encode(array(
				'message' => 'deleted succesfully'
			));
		}else{
			http_response_code(503);
			echo json_encode(array(
				'message' => 'Not deleted'
			));
		}
	}else{
		http_response_code(400);
		echo json_encode(array(
			'message' => 'Id not found'
		));
	}
 ?>