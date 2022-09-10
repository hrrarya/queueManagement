<?php 


	class Clients{
		private $pdo = null;
		private $stmt = null;
		public $dsn = "mysql:host=localhost:3306;dbname=queue_management";
		public $user = 'root';
		public $pass = '';

		// Object property 
		public $id;
		public $name;
		public $isRunning;
		public $type;


		function __construct(){
			try{
				$this->pdo = new PDO($this->dsn, $this->user,$this->pass);
				$this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
			}catch(PDOException $e){
				echo 'Connection failed: '. $e->getMessage();
			}
		}

		function __destruct(){
			if($this->stmt !== null){
				$this->stmt =null;
			}
			if($this->pdo !== null){
				$this->pdo =null;
			}
		}

		public function get_input($var){
			$var = htmlspecialchars($var);
			$var = strip_tags($var);
			$var = trim($var);
			return $var;
		}


		function read(){
			$query = 'select * from clients';
			$this->stmt = $this->pdo->prepare($query);
			$this->stmt->execute();

			return $this->stmt;
		}

		function create(){
			$query = "INSERT INTO clients SET name=:name,isRunning=:isRunning,type=:type";

			$this->stmt = $this->pdo->prepare($query);
			$this->stmt->bindParam(':name', $this->name);
			$this->stmt->bindParam(':isRunning', $this->isRunning);
			$this->stmt->bindParam(':type', $this->type);

			if($this->stmt->execute()){
				return true;
			}
			return false;
		}

		function delete(){
			$query = "DELETE FROM clients WHERE id=:id";
			$this->stmt = $this->pdo->prepare($query);
			$this->stmt->bindParam(':id', $this->id);

			if($this->stmt->execute()){
				return true;
			}
			return false;
		}

		function remove(){
			$query = "UPDATE clients SET isRunning=:isRunning WHERE id=:id";

			$this->stmt = $this->pdo->prepare($query);
			$this->stmt->bindParam(':isRunning', $this->isRunning);
			$this->stmt->bindParam(':id', $this->id);

			if($this->stmt->execute()){
				return true;
			}
			return false;
		}

		
	}
?>