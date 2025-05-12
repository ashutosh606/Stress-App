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

  <script src="js/rapid.js"></script>

  <script type="text/javascript">
    $(document).ready(function(){

      document.getElementById('q_6_q').style.display = 'none'
      document.getElementById('q_6_ig').style.display = 'none'
      document.getElementById('q_6_q_summary').style.display = 'none'
        document.getElementById('q_6_msg').style.display = 'none'
        document.getElementById('q_6_brk').style.display = 'none'

      document.getElementById('q_7_q').style.display = 'none'
      document.getElementById('q_7_ig').style.display = 'none'
        document.getElementById('q_7_q_summary').style.display = 'none'
        document.getElementById('q_7_msg').style.display = 'none'
        document.getElementById('q_7_brk').style.display = 'none'

      document.getElementById('q_8_q').style.display = 'none'
      document.getElementById('q_8_ig').style.display = 'none'
        document.getElementById('q_8_q_summary').style.display = 'none'
        document.getElementById('q_8_msg').style.display = 'none'
        document.getElementById('q_8_brk').style.display = 'none'

      document.getElementById('q_9_q').style.display = 'none'
      document.getElementById('q_9_ig').style.display = 'none'
        document.getElementById('q_9_q_summary').style.display = 'none'
        document.getElementById('q_9_msg').style.display = 'none'
        document.getElementById('q_9_brk').style.display = 'none'

      document.getElementById('q_10_q').style.display = 'none'
      document.getElementById('q_10_ig').style.display = 'none'
        document.getElementById('q_10_q_summary').style.display = 'none'
        document.getElementById('q_10_msg').style.display = 'none'
        document.getElementById('q_10_brk').style.display = 'none'

      document.getElementById('q_11_q').style.display = 'none'
      document.getElementById('q_11_ig').style.display = 'none'
        document.getElementById('q_11_q_summary').style.display = 'none'
        document.getElementById('q_11_msg').style.display = 'none'
        document.getElementById('q_11_brk').style.display = 'none'

      document.getElementById('q_12_q').style.display = 'none'
      document.getElementById('q_12_ig').style.display = 'none'
        document.getElementById('q_12_q_summary').style.display = 'none'
        document.getElementById('q_12_msg').style.display = 'none'
        document.getElementById('q_12_brk').style.display = 'none'

      document.getElementById('q_13_q').style.display = 'none'
      document.getElementById('q_13_ig').style.display = 'none'
        document.getElementById('q_13_q_summary').style.display = 'none'
        document.getElementById('q_13_msg').style.display = 'none'
        document.getElementById('q_13_brk').style.display = 'none'

      document.getElementById('q_14_q').style.display = 'none'
      document.getElementById('q_14_ig').style.display = 'none'
        document.getElementById('q_14_q_summary').style.display = 'none'
        document.getElementById('q_14_msg').style.display = 'none'
        document.getElementById('q_14_brk').style.display = 'none'

      document.getElementById('q_15_q').style.display = 'none'
      document.getElementById('q_15_ig').style.display = 'none'
        document.getElementById('q_15_q_summary').style.display = 'none'
        document.getElementById('q_15_msg').style.display = 'none'
        document.getElementById('q_15_brk').style.display = 'none'

      document.getElementById('q_16_q').style.display = 'none'
      document.getElementById('q_16_ig').style.display = 'none'
        document.getElementById('q_16_q_summary').style.display = 'none'
        document.getElementById('q_16_msg').style.display = 'none'
        document.getElementById('q_16_brk').style.display = 'none'

      document.getElementById('q_17_q').style.display = 'none'
      document.getElementById('q_17_ig').style.display = 'none'
        document.getElementById('q_17_q_summary').style.display = 'none'
        document.getElementById('q_17_msg').style.display = 'none'
        document.getElementById('q_17_brk').style.display = 'none'

    })  
  </script> 

</head>

<body class="login-page sidebar-collapse">
  
  <!-- <div class="page-header header-filter" style="background-image: url(''); background-size: cover; background-position: top center;"> -->
    <div class="container">

      

      <div id="ques_data" style="display: block;">
      % for x in data['sections']:
        <div class="row" style="margin-top: 75px;">
          <div class="col-md-6 ml-auto mr-auto">
            <div class="card card-login">
              <div class="card-header card-header-rose text-center">
                <h4 class="card-title" style="padding-left: 3%; padding-right: 3%;">{{!x['name']}}</h4>
                <p style="padding-left: 7%; padding-right: 7%; text-align: justify; text-justify: inter-word;">{{!x['summary']}}</p>
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
                    <p id="q_{{y['qid']}}_q_summary" style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block;">
                        % if y['question_information'] != -9.0:
                        {{y['question_information']}}
                        % end
                  </p>
                    <div id="q_{{y['qid']}}_ig" class="input-group" style="padding-left: 15px; display: block;">
                      
                      % if y['qtype'] == 'text':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <input type="text" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"  placeholder="{{y['ph']}}" style="width: 100%;">
                      % end

                      % if y['qtype'] == 'num':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <input type="number" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"  placeholder="{{y['ph']}}" maxlength="10000000" onkeyup="checkValid('q_{{y['qid']}}_data', '{{y['range']}}')" value="0" style="width: 100%;">
                      % end

                      % if y['qtype'] == 'date':
                        <p id="q_{{y['qid']}}_msg"></p>
                        <input type="date" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"  placeholder="{{y['ph']}}" style="width: 100%;">
                      % end

                      % if y['qtype'] == 'radio':
                        <p id="q_{{y['qid']}}_msg"></p>
                        % for z in y['ans']:
                          <button class="btn btn-round" id="q{{y['qid']}}_{{z['aid']}}" style="margin-bottom: 4px; white-space:normal;" onclick="select_radio('{{y['qid']}}', '{{z['aid']}}')"><b>{{z['value']}}</b></button>
                        % end
                        <br>
                        <input class="form-control" type="text" name="q_{{y['qid']}}_others_data" id="q_{{y['qid']}}_others_data" placeholder="Specify others" style="width: 100%; display: none;">
                      % end

                    </div>
                    
                        <p id="q_{{y['qid']}}_brk"><br></p>
                  
                  
                    <!--<br>-->
                  % end
                % end
                  
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