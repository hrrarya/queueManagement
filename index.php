<?php 
  include_once 'config/clients.php';
 ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Pt. maintainer</title>
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/font.min.css" />
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <a href="" class="btn btn-default" id="hideShow">Show input form</a>
          <a href="" class="btn btn-default right" id="start">Start</a>
          <a href="" class="btn btn-default" style="display: none">Update List</a>
        </div>
      </div>
      <br>
      <div class="row" id="adminSide">
        <div class="col-md-6 col-offset-1">
          <form action="" onsubmit="handleSubmit()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="নাম এখানে লিখুন....."
                id="name"
                name="name"
                required
              />
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="checkOld" />
              <label class="form-check-label" for="checkOld">পুরাতন রোগী</label>
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="checkEmergency"
              />
              <label class="form-check-label" for="checkEmergency"
                >ইমার্জেন্সী রোগী</label
              >
            </div>
            <button type="submit" id="submit" class="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3 class="countClient"></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="clientNamePart">
            <ul id="ulList" class="list-group"></ul>
          </div>
        </div>
        <div class="col-md-4">
        <div class="panel panel-default nowClientSection">
            <div class="panel-heading">এখন দেখা হচ্ছে: &nbsp; <span id="nowClient"></span></div>
          </div>
          <div class="panel panel-default nextClientSection">
            <div class="panel-heading">পরবর্তী রোগী: &nbsp; <span id="nextClient"></span></div>
          </div>
        </div>
      </div>
    </div>



  <script>
    let list = new Object();
    list.names = [];
  </script>
    <?php 
       $client = new Clients;

      $res = $client->read();

      $num = $res->rowCount();
      
      if($num>0){
        $client_arr = array();
        $client_arr['data'] = array();
        $client_arr['lastId'] = array();

        while($row = $res->fetch(PDO::FETCH_ASSOC)){
          extract($row);

             if($isRunning=="zero"){
               $single_arr = array(
                'id' => (int) $id,
                'name' => $name,
                'isRunning' => $isRunning == "zero" ? false : true,
                'type' => $type
              );
            array_push($client_arr['data'],$single_arr );
             }

        }

        $client_arr['lastId'] = $id;

        ?>
        <script type="text/javascript">
          list.names = <?php  echo json_encode($client_arr) ?>;
          list.id = <?php echo $client_arr['lastId'] ?>
        </script>
        <?php
      }
       ?>

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/mains.js"></script>
  </body>
</html>
