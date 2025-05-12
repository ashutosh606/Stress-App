json_data = {"data": [{"qid": 1, "qtype": "text", "ph": -9.0, "ques": {"english": "Name of the workplace", "kannada": ""}, "question_information": "-9.0", "section": "ORGANIZATION DETAILS", "next_qid": 2, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 2, "qtype": "radio", "ques": {"english": "Type of workplace ", "kannada": ""}, "question_information": "-9.0", "section": "ORGANIZATION DETAILS", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Private- Profit", "value_id": 0, "next_qid": 3}, {"aid": 2, "value": "Not for Profit ( NGOs) ", "value_id": 0, "next_qid": 3}, {"aid": 3, "value": "Public Sector", "value_id": 0, "next_qid": 3}]}, {"qid": 3, "qtype": "options", "ques": {"english": "Category of workplaces", "kannada": ""}, "question_information": "-9.0", "section": "ORGANIZATION DETAILS", "scoring_required": "False", "mandatory": "True", "capture_specifics": "True", "follow_up": "False", "ans": [{"aid": 1, "value": "Agriculture, Forestry, Fishing,and Hunting", "value_id": 0, "next_qid": 4}, {"aid": 2, "value": "Mining, Quarrying, and Oil/Gas Extraction", "value_id": 0, "next_qid": 4}, {"aid": 3, "value": "Wholesale Trade", "value_id": 0, "next_qid": 4}, {"aid": 4, "value": "Retail Trade", "value_id": 0, "next_qid": 4}, {"aid": 5, "value": "Hotel and Hospitality (Accommodation & Food Services)", "value_id": 0, "next_qid": 4}, {"aid": 7, "value": "Information Technology, IT enabled services and BPOs", "value_id": 0, "next_qid": 4}, {"aid": 8, "value": "Professional, Scientific, and Technical Service providers ", "value_id": 0, "next_qid": 4}, {"aid": 9, "value": "Transportation, mobility and Warehousing", "value_id": 0, "next_qid": 4}, {"aid": 10, "value": "Health Care and Social Assistance ( Hospitals, clincis, pharmacies, labs,social services)", "value_id": 0, "next_qid": 4}, {"aid": 11, "value": "Real Estate Rental & Leasing", "value_id": 0, "next_qid": 4}, {"aid": 12, "value": "Banking,Finance and Insurance", "value_id": 0, "next_qid": 4}, {"aid": 13, "value": "Management of Companies & Enterprises", "value_id": 0, "next_qid": 4}, {"aid": 14, "value": "Information , Journalism, telecommunication", "value_id": 0, "next_qid": 4}, {"aid": 15, "value": "Construction", "value_id": 0, "next_qid": 4}, {"aid": 16, "value": "Academic and Educational Services", "value_id": 0, "next_qid": 4}, {"aid": 17, "value": "Industries – Manufacturing, chemical, Apparel etc", "value_id": 0, "next_qid": 4}, {"aid": 18, "value": "Administrative and Support and Waste,Management and Remediation Services", "value_id": 0, "next_qid": 4}, {"aid": 19, "value": "Arts, Entertainment and Recreation", "value_id": 0, "next_qid": 4}, {"aid": 20, "value": "Other Services (except Public Administration):", "value_id": 0, "next_qid": 4}, {"aid": 21, "value": "Public Administration", "value_id": 0, "next_qid": 4}, {"aid": 22, "value": "Others", "value_id": 0, "next_qid": 4}]}, {"qid": 4, "qtype": "num", "ph": -9.0, "ques": {"english": "Pincode", "kannada": ""}, "question_information": "-9.0", "section": "ORGANIZATION DETAILS", "next_qid": 0, "scoring_required": "False", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999999}],"sections":[{"name":"ORGANIZATION DETAILS","summary":""}],"heading":"WORK STRESS AND ASSOCIATED SYMPTOMS ASSESSMENT"}


var res = []

function validatesection(section){
    
    //alert(section)
    var data_payload = []
    starting_question_idx=0;
    ending_question_idx=0;
    breakflag=false;
    for(var i=0; i<json_data.data.length; i++){
        
        //alert(json_data.data[i].qid)
        if (json_data.data[i].section == section){
            if(starting_question_idx==0){
                 //starting_question=json_data.data[i].qid
                 starting_question_idx=i
                 breakflag=true
            }
             
        }else if(breakflag==true){
            ending_question_idx=i-1
            //ending_question=json_data.data[i-1].qid
            break
        }     
        
    } 
    
    var enterdata=[]
    var selectdata=[]
    document.getElementById(section+'_msg1').innerHTML = ''
    
   // alert("starting_question_idx"+starting_question_idx)
    //alert("starting_question_idx"+ending_question_idx)
    //Iterate through section questions
    for(var i=starting_question_idx-1; i<=ending_question_idx; i++){
        
        var ques_type = json_data.data[i].qtype

		if(json_data.data[i].mandatory == "True"){
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})
               // alert((json_data.data[i].qid).toString()+':text:'+val)
				if(val.length == 0){
					enterdata.push(json_data.data[i].qid)
                    document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "red"
                    //flag = 1
				}else{
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "black"
                }
			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})
                //alert((json_data.data[i].qid).toString()+':num:'+val)
				if(val =='' || parseInt(val) < 0 || parseInt(val) == NaN){
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "red"
					enterdata.push(json_data.data[i].qid)
                    //flag = 2
				}else{
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "black"
                }
			}else if(ques_type == 'date'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})
                //alert((json_data.data[i].qid).toString()+':date:'+val)
				if(val.length == 0){
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "red"
					enterdata.push(json_data.data[i].qid)
                    //flag = 3
				}else{
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "black"
                }
			}else if(ques_type == 'radio' || ques_type == 'f_radio'){
				
				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)
                //alert((json_data.data[i].qid).toString()+':radio:'+val)
				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "red"
					selectdata.push(json_data.data[i].qid)
                    //flag = 5
				}else{
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "black"
                }

			}else if(ques_type == 'options'){
				
				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)
                // alert((json_data.data[i].qid).toString()+':options:'+val)
				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "red"
					selectdata.push(json_data.data[i].qid)
                    //flag = 4
				}else{
                     document.getElementById('q_'+json_data.data[i].qid+'_q').style.color = "black"
                }

			}
		}else{
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				//data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}
		}
        
    }
    
    enterquestions=''
    selectquestion=''
    message=''
    for(var i=0;i<enterdata.length;i++){
        
       // alert('enter'+i)
        enterquestions=enterquestions+'-'+enterdata[i].toString()
        //alert('enter'+enterdata[i])
    }
    
    for(var i=0;i<selectdata.length;i++){
        // alert('enter'+i)
         selectquestion=selectquestion+'-'+selectdata[i].toString()
        //alert('select'+selectdata[i])
    }
    
    if(enterquestions!=''){
        
        //alert('Please enter right information for questions '+enterquestions)
        message = 'Please enter right information for questions '+enterquestions
        document.getElementById(section+'_msg1').innerHTML = 'Please enter right information for questions '+enterquestions
    }
    
    if(selectquestion!=''){
        
        //alert('Please select right information for questions '+selectquestion)
        document.getElementById(section+'_msg2').innerHTML = 'Please select right information for questions '+selectquestion
    }
    
     if(enterquestions ==''&& selectquestion==''){
        
        //alert("Thanks for entering all details. Please move down to next section")
        document.getElementById(section+'_msg1').style.display = 'none'
        document.getElementById(section+'_msg2').style.display = 'none'
        document.getElementById(section+'_msg3').innerHTML="Thanks for entering all details. Please move down to next section"
    }
    //mandatory, it should have data or be selected.
    // Set the selected value
    
    //alert(starting_question_idx-1)
    //alert(ending_question_idx)
}

function select_radio(qid, element_id){

	var radio_element = document.getElementById('q'+qid+'_'+element_id)

	var element_count = json_data.data[parseInt(qid)-1]['ans'].length
    
    //alert(qid)
    //alert(element_id)

	json_data.data[parseInt(qid)-1].selection_val = parseInt(element_id)

	for(var i=0; i<element_count; i++){
		if((i+1) != parseInt(element_id)){
			var ele = document.getElementById('q'+qid+'_'+(i+1).toString())
			ele.classList.remove("btn-rose")
		}
	}

	radio_element.classList.add("btn-rose")
    

	//If the option selected for question 5 is Absent (option 2) ,then the user should skip to question 18
    if(parseInt(qid) == 5 ){
        
        new_qid_i=parseInt(qid) + 1
        new_qid = (parseInt(qid) + 1).toString()
        last_question_i=17
        last_question=last_question_i.toString()
		
        //If the selected option is Present (2nd option). Else, it should skip the next question few questions
		if(parseInt(element_id) == 2){
			 for(var i=new_qid_i; i<=last_question_i; i++){
			     new_qid=parseInt(i).toString()
                 document.getElementById('q_'+new_qid+'_q').style.display = 'block'
      		     document.getElementById('q_'+new_qid+'_ig').style.display = 'block'
            }
		}else{
			for(var i=new_qid_i; i<=last_question_i; i++){
			     new_qid=parseInt(i).toString()
                 document.getElementById('q_'+new_qid+'_q').style.display = 'none'
      		     document.getElementById('q_'+new_qid+'_ig').style.display = 'none'

      		     json_data.data[parseInt(new_qid)-1].selection_val = parseInt(element_id)
            }
		}
	}
}

function calculate_score(){

	
    total_score=0

	//work_stress_ques = 14 - 45
	//symptoms_ques = 46 - 61

	for(var i=0; i<20; i++){
        //alert(i)
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			total_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            
		}
	}

	//for(var i=45; i<61; i++){
	//	if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "true"){
	//		aid = parseInt(json_data.data[i].selection_val)
	//		symptoms_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
	//	}
	//}

	console.log(total_score)

	msgs = {"ncd_rapid": total_score}

	/*if(work_stress_score <= 48){
		msgs.work_stress = work_stress_msg[0].msg
	}else if(work_stress_score > 48 && work_stress_score <= 59){
		msgs.work_stress = work_stress_msg[1].msg
	}else if(work_stress_score > 59 && work_stress_score <= 73){
		msgs.work_stress = work_stress_msg[2].msg
	}else if(work_stress_score > 73){
		msgs.work_stress = work_stress_msg[3].msg
	}
	if(symptoms_score <= 16){
		msgs.symptoms = symptoms_msg[0].msg
	}else if(symptoms_score > 16 && symptoms_score <= 29){
		msgs.symptoms = symptoms_msg[1].msg
	}else if(symptoms_score > 29 && symptoms_score <= 36){
		msgs.symptoms = symptoms_msg[2].msg
	}else if(symptoms_score > 36){
		msgs.symptoms = symptoms_msg[3].msg
	}*/

	return msgs

}








function on_submit(){
	var flag = 0

	var data_payload = []

	for(var i=0; i<json_data.data.length; i++){
		
		var ques_type = json_data.data[i].qtype

		
		if(json_data.data[i].mandatory == "True"){
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(val.length == 0){
					flag = 1
				}
			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(parseInt(val) < 0 || parseInt(val) == NaN){
					flag = 2
				}
			}else if(ques_type == 'date'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

				if(val.length == 0){
					flag = 3
				}
			}else if(ques_type == 'radio'){
				
				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)

				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
					flag = 5
				}

			}
		}else{
			if(ques_type == 'text'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}else if(ques_type == 'num'){
				var val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_data').value

				json_data.data[i].selection_val = val

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': val})

			}
		}

	}

	if(flag == 0){

		

		//localStorage.setItem('_stress_app_user_name', data_payload[0].selection_val)
		//localStorage.setItem('_stress_app_work_stress_msg', scores.work_stress)
		//localStorage.setItem('_ncd_rapid_msg', scores.ncd_rapid)
		//alert(scores.ncd_rapid)
		document.getElementById('done_spinner').style.display = 'block'

		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	          //console.log(this.responseText);
	          window.location.href = '/ncdthankyou'
	        }
	    };
	    xhttp.open("POST", "/add_organization_Details", true);
	    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xhttp.send('data='+encodeURIComponent(JSON.stringify(data_payload)));

	    console.log(JSON.stringify(data_payload))

	}else if(flag == 1){
		alert('Please answer all the text questions')
	}else if(flag == 2){
		alert('Please answer all the numeric questions')
	}else if(flag == 3){
		alert('Please answer all the date questions')
	}else if(flag == 4){
		alert('Please answer all the selection questions')
	}else if(flag == 5){
		alert('Please answer all the questions')
	}else if(flag == 6){
		alert('Please answer all the checkbox questions')
	}
    
}
