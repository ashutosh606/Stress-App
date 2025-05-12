<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="">
  <link rel="icon" type="image/png" href="">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    {{data['heading']}} | NIMHANS | WORK STRESS QUESTIONNAIRE PUBLIC
  </title>
  <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="../assets/css/material-kit.css?v=2.0.7" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <script src="js/stress.js"></script>

  <script type="text/javascript">
    $(document).ready(function() {

        let orgName = localStorage.getItem('_orgName')

        const orgMap = {
  '1': 'Mindera',
  '2': 'TVS',
  '3': 'HPCL',
  '4': 'BPCL',
  '5': 'RECOUP',
  '6': 'ShwethaESI',
  '7': 'Amrutapohare',
  '8': 'Star health insurance'
};
// Get the full name
const orgFullName = orgMap[orgName] || '';
  orgName = orgMap[orgName] || '';

        const urlParams = new URLSearchParams(location.search);
        for (const [key, value] of urlParams) {
          orgName = value
        }

        //alert(orgName)

        if (orgName != 'TVS' && orgName != 'HPCL' && orgName != 'BPCL' && orgName != 'RECOUP' && orgName != 'ShwethaESI' &&
          orgName != 'Amrutapohare' && orgName != 'SHI') {
          alert("You are not authorised to use this web page and will not be able to take this assessment from " +
            orgName)
          document.getElementById('submit').style.display = 'none'
          document.getElementById('ques_data').style.display = 'none'
          document.getElementById('startAssessment').style.display = 'none'
        } else {

          
        }

        document.getElementById('orgName').innerHTML = orgFullName

        document.getElementById('q_13_q').style.display = 'none'
        document.getElementById('q_13_ig').style.display = 'none'

        document.getElementById('q_15_q').style.display = 'none'
        document.getElementById('q_15_ig').style.display = 'none'


        document.getElementById('q_17_q').style.display = 'none'
        document.getElementById('q_17_ig').style.display = 'none'

        document.getElementById('q_19_q').style.display = 'none'
        document.getElementById('q_19_ig').style.display = 'none'

        document.getElementById('q_21_q').style.display = 'none'
        document.getElementById('q_21_ig').style.display = 'none'

        document.getElementById('q_23_q').style.display = 'none'
        document.getElementById('q_23_ig').style.display = 'none'

        document.getElementById('q_25_q').style.display = 'none'
        document.getElementById('q_25_ig').style.display = 'none'

        document.getElementById('q_27_q').style.display = 'none'
        document.getElementById('q_27_ig').style.display = 'none'

        document.getElementById('q_29_q').style.display = 'none'
        document.getElementById('q_29_ig').style.display = 'none'

        document.getElementById('q_31_q').style.display = 'none'
        document.getElementById('q_31_ig').style.display = 'none'

        document.getElementById('q_33_q').style.display = 'none'
        document.getElementById('q_33_ig').style.display = 'none'

        document.getElementById('q_35_q').style.display = 'none'
        document.getElementById('q_35_ig').style.display = 'none'

        document.getElementById('q_37_q').style.display = 'none'
        document.getElementById('q_37_ig').style.display = 'none'

        document.getElementById('q_39_q').style.display = 'none'
        document.getElementById('q_39_ig').style.display = 'none'

        document.getElementById('q_41_q').style.display = 'none'
        document.getElementById('q_41_ig').style.display = 'none'

        document.getElementById('q_43_q').style.display = 'none'
        document.getElementById('q_43_ig').style.display = 'none'

        document.getElementById('q_45_q').style.display = 'none'
        document.getElementById('q_45_ig').style.display = 'none'
      }
      // alert(orgName)

    )
  </script>

</head>

<body class="login-page sidebar-collapse">



  <div class="container">


    <div class="card-header card-header-amber text-center">
      <div class="social-line">
        <!--<img src="img/who.png" style="width: 75px;">-->
        <img src="img/nimhans.png" style="width: 75px;">
        <img src="img/cph.png" style="width: 75px;">
      </div>
      <h4 class="card-title" style="color:black">TOOL TO ASSESS AND CLASSIFY WORK STRESS <br> TAWS -16</h4>

      <center>
        <p style="font-weight: bold;">Work-related stress, especially in chronic and harmful proportions, is a known
          risk factor for onset and progression of Non Communicable Diseases (NCDs) and mental disorders. Regular and
          early identification of work stress is important from health and productivity perspective.</p>
      </center>
      <center>
        <p style="font-weight: bold;">This “Tool to assess and classify work stress (TAWS – 16)” will help in
          identification of stress due to key work related stressors. It is short, easy to understand and can be
          interviewer or self-administered. Based on the responses provided, an inbuilt algorithm provides your “work
          stress score” and “level of stress”.</p>
      </center>

      <center>
        <p style="font-weight: bold">Please read information about the stress level assessment for employees at
          workplace and privacy policy</p>
      </center>
      <center>
        <p><a href="/policy" target="_blank" style="font-weight: 400; text-align: center">HERE</a></p>
      </center>

      <div id="startAssessment">
        <h4 class="card-title" style="color:black">DEAR <span id="orgName"> </span> EMPLOYEE</h4>
        <h4 class="card-title" style="color:black">YOUR ASSESSMENT STARTS FROM HERE</h4>
      </div>

    </div>






    <div id="ques_data" style="display: block;">
      <!--<div class="row" style="margin-top: 75px;">-->
      <!--<div class="col-md-6 ml-auto mr-auto">-->
      <!--<div class="card card-login">-->
      <!--<div class="card-header card-header-rose text-center">-->
      <!--<h4 class="card-title" style="padding-left: 3%; padding-right: 3%;">Your assessment starts from here</h4>-->
      <!--</div>-->
      <!-- </div>-->
      <!--</div>-->

      % for x in data['sections']:
      % question_index=0
      <div class="row" style="margin-top: 75px;">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="card card-login">
            <div class="card-header card-header-rose text-center">
              <h4 class="card-title" style="padding-left: 3%; padding-right: 3%;">{{!x['name']}}</h4>
              <p style="padding-left: 7%; padding-right: 7%; text-align: justify; text-justify: inter-word;">
                {{!x['summary']}}</p>
            </div>
            <div class="card-body" style="padding-top: 15px; padding-bottom: 15px;">
              % for y in data['data']:
              % if y['section'] == x['name']:
              <p id="q_{{y['qid']}}_q" style="font-weight: 400; padding-left: 15px; font-size: 1em; display: block;">
                {{y['qid']}}. {{!y['ques']['english']}}
                % if y['mandatory'] == 'true':
                <span style="font-weight: bold; color: red; font-size: 1em;">*</span>
                % end
              </p>
              <div id="q_{{y['qid']}}_ig" class="input-group" style="padding-left: 15px; display: block;">

                % if y['qtype'] == 'text':
                <p id="q_{{y['qid']}}_msg"></p>
                <input type="text" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"
                  placeholder="{{y['ph']}}" style="width: 100%;" onchange="markAnswered('{{question_index}}','text')">
                % end

                % if y['qtype'] == 'num':
                <p id="q_{{y['qid']}}_msg"></p>
                <input type="number" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"
                  placeholder="{{y['ph']}}" maxlength="10000000"
                  onkeyup="checkValid('{{question_index}}','q_{{y['qid']}}_data', '{{y['range']}}')" value="0"
                  style="width: 100%;">
                % end

                % if y['qtype'] == 'date':
                <p id="q_{{y['qid']}}_msg"></p>
                <input type="date" class="form-control" id="q_{{y['qid']}}_data" name="q_{{y['qid']}}_data"
                  placeholder="{{y['ph']}}" style="width: 100%;" onchange="markAnswered('{{question_index}}','date')">
                % end

                % if y['qtype'] == 'radio':
                <p id="q_{{y['qid']}}_msg"></p>
                % for z in y['ans']:
                <button class="btn btn-round" id="q{{y['qid']}}_{{z['aid']}}"
                  style="margin-bottom: 4px; white-space:normal;"
                  onclick="select_radio('{{question_index}}','{{y['qid']}}', '{{z['aid']}}')"><b>{{z['value']}}</b></button>
                % end
                <br>

                <input class="form-control" type="text" name="q_{{y['qid']}}_others_data"
                  id="q_{{y['qid']}}_others_data" placeholder="Specify others" style="width: 100%; display: none;">
                % end

              </div>

              <p id="q_{{y['qid']}}_brk"><br></p>
              % end
              % question_index=question_index+1
              % end
              <div class="col-md-6 ml-auto mr-auto text-center">
                <!--<a href="/home">-->
                <!--<button class="btn btn-rose btn-raised" style="" onclick="validatesection('{{x['name']}}')">Validate Section</button>-->

                <center>
                  <p id="{{x['name']}}_msg1"
                    style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">Once you
                    have answered the questions, the questions turn to green colour. Please verify in the section if all
                    the questions are green, hence indicating they are answered
                  </p>
                </center>
                <center>
                  <p id="{{x['name']}}_msg2"
                    style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">
                  </p>
                </center>
                <center>
                  <p id="{{x['name']}}_msg3"
                    style="font-weight: 400; padding-left: 15px; font-size: 0.8em; display: block; color: red;">
                  </p>
                </center>

              </div>

            </div>
          </div>
        </div>
      </div>
      % end

      <div class="row" style="margin-top: 15px; margin-bottom: 50px;">
        <div class="col-md-6 ml-auto mr-auto text-center">

          <button class="btn btn-rose btn-raised" style="" onclick="on_submit()" id="submit">Submit</button>
          <center><img id="done_spinner" src="img/spinner.gif" style="width: 75px; display: none;"></center>
          <!--</a>-->
          <br>
          <a href="/landing">Go To Home</a>
          <!--<br>

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