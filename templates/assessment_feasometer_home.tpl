<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="">
  <link rel="icon" type="image/png" href="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    {{data['heading']}} | NIMHANS | QUESTIONNAIRE
  </title>
  <!--     Fonts and icons     -->
  <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="../assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <script src="js/feasometer.js"></script>

  <script type="text/javascript">
    $(document).ready(function(){

      

    })  
  </script> 

</head>

<body class="login-page sidebar-collapse">
  
  <!-- <div class="page-header header-filter" style="background-image: url(''); background-size: cover; background-position: top center;"> -->
    <div class="container">

      
     
            <div class="card card-login">
      
        <div class="card-header card-header-primary text-center">
                <h4 class="card-title" style="padding-left: 3%; padding-right: 3%;">We have provided a list of interventions to be implemented in your workplace to reduce NCDs, NCD risk factors and mental disorders. Please indicate feasibility of actually implemeting the below listed interventons <b>in your workplace </b> on a scale of 0-10</h4>  
              </div>
        </div>
    
      <div id="ques_data" style="display: block;">           
      % for x in data['sections']:
        <div class="row" style="margin-top: 75px;">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="card card-login">
              <div class="card-header card-header-rose text-center">
                <h4 class="card-title" style="padding-left: 3%; padding-right: 3%;">{{!x['name']}}</h4>  
                <!--<p style="padding-left: 7%; padding-right: 7%; text-align: center; font-weight: bold; text-justify: inter-word;">{{!x['summary']}}</p>-->
              </div>
              <div class="card-body" style="padding-top: 15px; padding-bottom: 15px;">
                % for y in data['data']:
                  % if y['section'] == x['name']:
                    <p id="q_{{y['qid']}}_q" style="font-weight: 400; padding-left: 15px; font-size: 1em; display: block;">
                      {{y['qid']}}. {{!y['ques']['english']}} 
                      % if y['mandatory'] == 'True':
                        <span style="font-weight: bold; color: red; font-size: 1em;">*</span> 
                      % end
                    </p> 
                   
                    <div id="q_{{y['qid']}}_ig" class="input-group" style="padding-left: 15px; display: block;">
                      
                      % if y['qtype'] == 'text':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <input type="text" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"  placeholder="Enter name" style="width: 100%;">
                      % end

                      % if y['qtype'] == 'num':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <input type="number" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"  placeholder="0 to 10" maxlength="999999" onkeyup="captureFeasibiliy('{{y['qid']}}')"  style="width: 100%;"> 
                      % end

                    
                      % if y['qtype'] == 'radio':
                        <p id="q_{{y['qid']}}_msg"></p>
                        % for z in y['ans']:
                          <button class="btn btn-round" id="q{{y['qid']}}_{{z['aid']}}" style="margin-bottom: 4px; white-space:normal;" onclick="select_radio('{{y['qid']}}', '{{z['aid']}}')"><b>{{z['value']}}</b></button>
                        % end
                        <br>
                        <input class="form-control" type="text" name="q_{{y['qid']}}_others_data" id="q_{{y['qid']}}_others_data" placeholder="Specify others" style="width: 100%; display: none;"> 
                      % end
                      
                      
                      % if y['qtype'] == 'options':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <select class="form-control" id="q{{y['qid']}}_data" onchange="select_options('{{y['qid']}}')" style="width: 100%;">
                        <option value="-1">Select</option>
                        % for z in y['ans']:
                          <option value="{{z['aid']}}" >{{z['value']}}</option>
                        % end
                        </select>
                        <br>
                        <input class="form-control" type="text" name="q_{{y['qid']}}_others_data" id="q_{{y['qid']}}_others_data" placeholder="Specify others" style="width: 100%; display: none;">           
                      % end
                      

                    </div>       

                    <p id="q_{{y['qid']}}_brk"><br></p>
                  % end
                % end
      
              <!-- <div class="col-md-6 ml-auto mr-auto text-center">
           
            <button class="btn btn-rose btn-raised" style="" onclick="validatesection('{{x['name']}}')">Validate Section</button>
                      
            <center> <p  id="{{x['name']}}_msg1"style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">Please click here to make sure you have entered or selected right information for all the mandatory questions in this section
                  </p></center>
            <center> <p  id="{{x['name']}}_msg2"style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">
                  </p></center>
            <center> <p  id="{{x['name']}}_msg3"style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">
                  </p></center>
          
        </div>-->
              </div>
            </div>
          </div>
        </div>
      % end

      <div class="row" style="margin-top: 15px; margin-bottom: 50px;">
        <div class="col-md-6 ml-auto mr-auto text-center">
           <!--<a href="/home">-->
            <button class="btn btn-rose btn-raised" style="" onclick="on_submit()">Submit</button>
            <center><img id="done_spinner" src="img/spinner.gif" style="width: 75px; display: none;"></center>
          <!--</a>-->
          <br>
          <a href="/ncdhome">Go To Home</a>
          <!--<br>
          <a href="/logout">Logout</a> -->
        </div>
      </div>

    </div>


    </div>
    
   <!--   Core JS Files   -->
  <script src="../assets/js/core/jquery.min.js" type="text/javascript"></script>
  <script src="../assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="../assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
  <script src="../assets/js/plugins/moment.min.js"></script>
  <!--	Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker -->
  <script src="../assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="../assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
  <!--  Google Maps Plugin    -->
  <!-- Control Center for Material Kit: parallax effects, scripts for the example pages etc -->
  <script src="../assets/js/material-kit.js?v=2.0.7" type="text/javascript"></script>
</body>

</html>
