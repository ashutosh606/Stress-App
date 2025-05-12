json_data = {"data": [{"qid": 1, "qtype": "text", "ph": "Employee ID", "ques": {"english": "Employee ID", "kannada": ""}, "question_information": "-9", "section": "General Information", "next_qid": 2, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 2, "qtype": "radio", "ques": {"english": "Gender", "kannada": ""}, "question_information": "-9", "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Male", "value_id": 0, "next_qid": 3}, {"aid": 2, "value": "Female", "value_id": 0, "next_qid": 3}, {"aid": 3, "value": "Third Gender", "value_id": 0, "next_qid": 3}]}, {"qid": 3, "qtype": "date", "ph": "DD/MM/YYYY", "ques": {"english": "Date of Birth ", "kannada": ""}, "question_information": "-9", "section": "General Information", "next_qid": 4, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": {}}, {"qid": 4, "qtype": "radio", "ques": {"english": "Marital Status ", "kannada": ""}, "question_information": "-9", "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Currently Married", "value_id": 0, "next_qid": 5}, {"aid": 2, "value": "Single", "value_id": 0, "next_qid": 6}, {"aid": 3, "value": "Separated", "value_id": 0, "next_qid": 5}, {"aid": 4, "value": "Divorced", "value_id": 0, "next_qid": 5}]}, {"qid": 5, "qtype": "num", "ph": "Enter number", "ques": {"english": "Number of living children ( enter number of children )", "kannada": ""}, "question_information": "-9", "section": "General Information", "next_qid": 6, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 6, "qtype": "radio", "ques": {"english": "Educational status ", "kannada": ""}, "question_information": "-9", "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not literate ", "value_id": 0, "next_qid": 7}, {"aid": 2, "value": "Up to High school", "value_id": 0, "next_qid": 7}, {"aid": 3, "value": "II PUC", "value_id": 0, "next_qid": 7}, {"aid": 4, "value": "Professional/ ITI/JOC training ", "value_id": 0, "next_qid": 7}, {"aid": 5, "value": "Degree and above", "value_id": 0, "next_qid": 7}]}, {"qid": 7, "qtype": "text", "ph": "Enter text", "ques": {"english": "Designation ", "kannada": ""}, "question_information": "-9", "section": "General Information", "next_qid": 8, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 8, "qtype": "pair_num_yymm", "ph": -9, "ques": {"english": "Service ( Since how many years and months you are employed in this workplace)", "kannada": ""}, "question_information": "-9", "section": "General Information", "next_qid": 9, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 9, "qtype": "radio", "ques": {"english": "Work shift ", "kannada": ""}, "question_information": " If you are alternating between day and night every 1-15 days , enter response as rotating day and night", "section": "General Information", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Predominantly Day shift ", "value_id": 0, "next_qid": 10}, {"aid": 2, "value": "Predominantly Night shift", "value_id": 0, "next_qid": 10}, {"aid": 3, "value": "Rotating Day and Night shift ", "value_id": 0, "next_qid": 10}]}, {"qid": 10, "qtype": "radio", "ques": {"english": "Have you ever used the <b><u>Tobacco  (cigarette, beedi, gutka)r</u></b> in the  <b><u>last one year</u></b> ? ", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening <br>Tobacco Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes;on a daily basis", "value_id": 1, "next_qid": 11}, {"aid": 2, "value": "Yes; but on a less than daily basis", "value_id": 2, "next_qid": 11}, {"aid": 3, "value": "No, Not at all ", "value_id": 0, "next_qid": 11}]}, {"qid": 11, "qtype": "radio", "ques": {"english": "Have you ever used the <b><u>Tobacco  (cigarette, beedi, gutka) r</u></b> in the  <b><u>last 30 days</u></b> ? ", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening <br>Tobacco Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes;on a daily basis", "value_id": 1, "next_qid": 12}, {"aid": 2, "value": "Yes; but on a less than daily basis", "value_id": 2, "next_qid": 12}, {"aid": 3, "value": "No, Not at all ", "value_id": 0, "next_qid": 12}, {"aid": 4, "value": "Not Applicable", "value_id": 99, "next_qid": 12}]}, {"qid": 12, "qtype": "radio", "ques": {"english": "How often did you have a <b><u> drink containing alcohol</u></b> in the <b><u>past year</u></b>?", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening <br>Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Never consumed alcohol ever ", "value_id": 0, "next_qid": 13}, {"aid": 2, "value": "Monthly once or less", "value_id": 1, "next_qid": 13}, {"aid": 3, "value": "Two to four times a month", "value_id": 2, "next_qid": 13}, {"aid": 4, "value": "Two to three times a week", "value_id": 3, "next_qid": 13}, {"aid": 5, "value": "Four or more times a week", "value_id": 4, "next_qid": 13}]}, {"qid": 13, "qtype": "radio", "ques": {"english": "How <u>many drinks containing alcohol</u> did you have <u>on a typical day</u> when you were drinking in the past year?", "kannada": ""}, "question_information": "One alcoholic drink refers to 350 ml of beer, 90 ml of wine and 30 ml of hard liquor like whisky, rum, vodka etc.", "section": "NCD risk factor screening <br>Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "1 or 2 drinks ", "value_id": 0, "next_qid": 14}, {"aid": 2, "value": "3 or 4 drinks", "value_id": 1, "next_qid": 14}, {"aid": 3, "value": "5 or 6 drinks", "value_id": 2, "next_qid": 14}, {"aid": 4, "value": "7 to 9 drinks", "value_id": 3, "next_qid": 14}, {"aid": 5, "value": "10 or more  drinks", "value_id": 4, "next_qid": 14}]}, {"qid": 14, "qtype": "radio", "ques": {"english": "How often did you <u>have six or more drinks </u> on one occasion in the past year?", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening <br>Alcohol Use", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Never", "value_id": 0, "next_qid": 15}, {"aid": 2, "value": "Less than monthly", "value_id": 1, "next_qid": 15}, {"aid": 3, "value": "Monthly", "value_id": 2, "next_qid": 15}, {"aid": 4, "value": "Weekly ", "value_id": 3, "next_qid": 15}, {"aid": 5, "value": "Daily or almost daily", "value_id": 4, "next_qid": 15}]}, {"qid": 15, "qtype": "radio", "ques": {"english": "What is your <b><u>Predominant Diet</u></b>?", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening<br>Unhealthy diets", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Only Vegetarian", "value_id": 1, "next_qid": 16}, {"aid": 2, "value": "Mixed but predominantly vegetarian", "value_id": 2, "next_qid": 16}, {"aid": 3, "value": "Mixed but predominantly Non-vegetarian", "value_id": 3, "next_qid": 16}]}, {"qid": 16, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week, approximately <b><u>how many times</u></b> do you consume deep fried food stuffs (fried chicken, mutton, fish , fries, samosas chips,puffs, papdi etc)", "kannada": ""}, "question_information": "Enter number of times  you consume fried foods. Example For  today, if you ate samosa in the morning, chicken fry afternoon and egg puffs in evening, then the answer is 3, Similarly, enter for the week", "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 17, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 17, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week <b><u>how many times</u></b> you consume food with high salt content (pickles, pappad, canned foods etc)", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 18, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 18, "qtype": "num", "ph": -9, "ques": {"english": "In a typical week, <b><u>how many days</u></b> you consume fruits ", "kannada": ""}, "question_information": "-9", "section": "NCD risk factor screening<br>Unhealthy diets", "next_qid": 19, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 19, "qtype": "radio", "ques": {"english": "Apart from your work , do you indulge in <b>regular exercise or physical sports</b>?", "kannada": ""}, "question_information": "Regular means following a  fixed routine or fixed time on fixed days , followed at least for three months \nPhysical activity referes to moderate-vigourous intensity activities and sports \nSports refer to vigorous-intensity sports, fitness or recreational (leisure) activities that cause large increases in breathing or heart rate like [running or football] for at least 10 minutes continuously", "section": "NCD risk factor screening <br>Physical Inactivity", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No, I do not regularly exercise or play sports", "value_id": 0, "next_qid": 20}, {"aid": 2, "value": "Yes, for less than 50 minutes per week", "value_id": 1, "next_qid": 20}, {"aid": 3, "value": "Yes, for 50-99 minutes per week", "value_id": 2, "next_qid": 20}, {"aid": 4, "value": "Yes, for 100-149 minutes per week", "value_id": 3, "next_qid": 20}, {"aid": 5, "value": "Yes for 150+ minutes per week", "value_id": 4, "next_qid": 20}]}, {"qid": 20, "qtype": "num", "ph": -9, "ques": {"english": "How many days in a week you indulge in physical activity (leisure related, not work related)?", "kannada": ""}, "question_information": "Enter number of days you exercise or play sport per week ", "section": "NCD risk factor screening <br>Physical Inactivity", "next_qid": 21, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 999}, {"qid": 21, "qtype": "radio", "ques": {"english": "Over the last 2 weeks, how often have you been bothered by <b>Little interest or pleasure in doing things </b>?", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all ", "value_id": 0, "next_qid": 22}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 22}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 22}, {"aid": 4, "value": "Nearly every day ", "value_id": 3, "next_qid": 22}]}, {"qid": 22, "qtype": "radio", "ques": {"english": "Over the last 2 weeks, how often have you been bothered by <b>Feeling down, depressed, or hopeless  </b>?", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all ", "value_id": 0, "next_qid": 23}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 23}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 23}, {"aid": 4, "value": "Nearly every day ", "value_id": 3, "next_qid": 23}]}, {"qid": 23, "qtype": "radio", "ques": {"english": "Do you perceive that you often get excessively stressed because of your work? ", "kannada": ""}, "question_information": "Stress here refers to stress experienced in your workplace . This does not refer to other stress in life like stress related to death of family member, traffic, disability, relationships, disease etc. ", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No , I am not excessively stressed", "value_id": 0, "next_qid": 24}, {"aid": 2, "value": "No, But I am not very sure ", "value_id": 1, "next_qid": 24}, {"aid": 3, "value": "Yes, to a minimal extent (for <50% of  my worktime)", "value_id": 2, "next_qid": 24}, {"aid": 4, "value": "Yes, to some extent (50-75% of my work time)  ", "value_id": 3, "next_qid": 24}, {"aid": 5, "value": "Yes, to great extent (>75% of my work time) ", "value_id": 4, "next_qid": 24}]}, {"qid": 24, "qtype": "radio", "ques": {"english": "Do you feel it is difficult for you to cope with work stress ?", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "No, I do not have excess work stress", "value_id": 0, "next_qid": 25}, {"aid": 2, "value": "Yes, I manage cope to great extent", "value_id": 3, "next_qid": 25}, {"aid": 3, "value": "Yes, I manage to cope to some extent", "value_id": 2, "next_qid": 25}, {"aid": 4, "value": "No, I find it difficult to cope", "value_id": 1, "next_qid": 25}, {"aid": 5, "value": "No, I cannot cope at all", "value_id": 0, "next_qid": 25}]}, {"qid": 25, "qtype": "radio", "ques": {"english": "Do you feel that you are experiencing health problems due to stress? ", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes, I strongly feel so", "value_id": 1, "next_qid": 26}, {"aid": 2, "value": "Yes, to some extent ", "value_id": 2, "next_qid": 26}, {"aid": 3, "value": "Cannot say ", "value_id": 3, "next_qid": 26}, {"aid": 4, "value": "No,I don’t think so", "value_id": 4, "next_qid": 26}]}, {"qid": 26, "qtype": "num", "ph": -9, "ques": {"english": "How many hours you sleep daily on an average?", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "next_qid": 27, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 24}, {"qid": 27, "qtype": "radio", "ques": {"english": "In the last 6 months, have you felt that it is not worth living anymore and these thoughts been repetitive and increasing in intensity?", "kannada": ""}, "question_information": "-9", "section": "Mental wellbeing screening", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Not at all", "value_id": 0, "next_qid": 28}, {"aid": 2, "value": "Several days", "value_id": 1, "next_qid": 28}, {"aid": 3, "value": "More than half the days", "value_id": 2, "next_qid": 28}, {"aid": 4, "value": "Nearly every day", "value_id": 3, "next_qid": 28}]}, {"qid": 28, "qtype": "num", "ph": "Enter cms", "ques": {"english": "Height ( in centi metres)", "kannada": ""}, "question_information": "-9", "section": "Measurement", "next_qid": 29, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 500}, {"qid": 29, "qtype": "num", "ph": "Enter KGs", "ques": {"english": "Weight  (in kilograms)  ", "kannada": ""}, "question_information": "-9", "section": "Measurement", "next_qid": 30, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 500}, {"qid": 30, "qtype": "pair_num_bp", "ph": "in mm of Hg", "ques": {"english": "Blood Pressure (in mm of Hg)", "kannada": ""}, "question_information": "-9", "section": "Measurement", "next_qid": 31, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 31, "qtype": "radio", "ques": {"english": "Blood pressure measure type ", "kannada": ""}, "question_information": "-9", "section": "Measurement", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Self measured using Digital BP apparatus", "value_id": 0, "next_qid": 32}, {"aid": 2, "value": "Measured by health staff ", "value_id": 0, "next_qid": 32}]}, {"qid": 32, "qtype": "num", "ph": "In mg/dl", "ques": {"english": "Random Blood Sugar ( mg/dl)", "kannada": ""}, "question_information": "-9", "section": "Measurement", "next_qid": 33, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 1000}, {"qid": 33, "qtype": "num", "ph": "in minutes", "ques": {"english": "Minutes of regular exercise or physical sport per week", "kannada": ""}, "question_information": "-9", "section": "Measurement", "next_qid": 0, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 10080}],"sections": [{"name":"General Information","summary":""},{"name":"NCD risk factor screening <br>Tobacco Use","summary":""},{"name":"NCD risk factor screening <br>Alcohol Use","summary":""},{"name":"NCD risk factor screening<br>Unhealthy diets","summary":""},{"name":"NCD risk factor screening <br>Physical Inactivity","summary":""},{"name":"Mental wellbeing screening","summary":""},{"name":"Measurement","summary":""}], "heading":"NCD-SCREEN"}


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

function checkValid(field_id, field_range){

	//console.log(field_id, field_range)

    var val = document.getElementById(field_id).value
    //alert('val'+val)
    //alert('field_range'+field_range)
    

    if (val < 0 || val > parseInt(field_range)){
        document.getElementById(field_id).value = ''
        alert('Please enter values <='+field_range)
    }
}

function select_radio(qid, element_id){

	var radio_element = document.getElementById('q'+qid+'_'+element_id)

	var element_count = json_data.data[parseInt(qid)-1]['ans'].length

	json_data.data[parseInt(qid)-1].selection_val = parseInt(element_id)

	for(var i=0; i<element_count; i++){
		if((i+1) != parseInt(element_id)){
			var ele = document.getElementById('q'+qid+'_'+(i+1).toString())
			ele.classList.remove("btn-rose")
		}
	}

	radio_element.classList.add("btn-rose")
    //If the answer for 4th question is 2 (Single), then the 5th question should be skipped
	if(parseInt(qid) == 4){
		
		new_qid = (parseInt(qid) + 1).toString()
        //If the selected option is 1st, 3rd or 4th , the user should be displayed the 5th question. Else, it should skip the next question
		if(parseInt(element_id) == 1 || parseInt(element_id) == 3 || parseInt(element_id) == 4){
			document.getElementById('q_'+new_qid+'_q').style.display = 'block'
      		document.getElementById('q_'+new_qid+'_ig').style.display = 'block'
		}else{
			document.getElementById('q_'+new_qid+'_q').style.display = 'none'
      		document.getElementById('q_'+new_qid+'_ig').style.display = 'none'

      		json_data.data[parseInt(new_qid)-1].selection_val = parseInt(element_id)
		}
	}
}

function calculate_score(){

	var work_stress_msg = [
		{
			"msg": "You are not experiencing any significant level of work-stress.",
			"score": "less or equal to 48"
		},
		{
			"msg": "Your work-stress level is <span style='color: #FBC02D; font-weight: 550;'>MILD</span>.",
			"score": "between 48 - 59"
		},
		{
			"msg": "Your work-stress level is <span style='color: #FF5722; font-weight: 550;'>MODERATE</span>.",
			"score": "between 60 - 73"
		},
		{
			"msg": "Your work-stress level is <span style='color: #D32F2F; font-weight: 550;'>SEVERE</span>.",
			"score": "more than 73"
		}
	]

	var symptoms_msg = [
		{
			"msg": "You do not have any symptoms suggestive of work-stress.</span>",
			"score": "less or equal to 16"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #FBC02D; font-weight: 550;'>MILD</span>.",
			"score": "between 16 - 29"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #FF5722; font-weight: 550;'>MODERATE</span>.",
			"score": "between 30 - 36"
		},
		{
			"msg": "The symptoms suggestive of work-stress level is <span style='color: #D32F2F; font-weight: 550;'>SEVERE</span>.",
			"score": "more than 36"
		}
	]

	work_stress_score = 0
	symptoms_score = 0

	//work_stress_ques = 14 - 45
	//symptoms_ques = 46 - 61

	for(var i=13; i<45; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			work_stress_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
		}
	}

	for(var i=45; i<61; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			symptoms_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
		}
	}

	console.log(work_stress_score, symptoms_score)

	msgs = {"work_stress": "", "symptoms": ""}

	if(work_stress_score <= 48){
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
	}

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

			}else if(ques_type == 'pair_num_yymm'){
                //Capture numbe of years and months
                //q_{{y['qid']}}_yy_data
				var yy_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_yy_data').value
                var mm_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_mm_data').value

				json_data.data[i].selection_val_yy = yy_val
                json_data.data[i].selection_val_mm = mm_val
                

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val_yy': yy_val, 'selection_val_mm':mm_val})
                

				if(parseInt(yy_val) < 0 || parseInt(yy_val) == NaN){
					flag = 2
				}
                if(parseInt(mm_val) < 0 || parseInt(mm_val) == NaN){
					flag = 2
				}
			}else if(ques_type == 'pair_num_bp'){
                //Capture numbe of systolic and diabolic
                //q_{{y['qid']}}_sys_data
				var sys_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_sys_data').value
                var dia_val = document.getElementById('q_'+(json_data.data[i].qid).toString()+'_dia_data').value

				json_data.data[i].selection_val_sys = sys_val
                json_data.data[i].selection_val_dia =dia_val
                

				data_payload.push({'qid': json_data.data[i].qid, 'selection_val_sys': sys_val, 'selection_val_dia':dia_val})
                

				if(parseInt(sys_val) < 0 || parseInt(sys_val) == NaN){
					flag = 2
				}
                if(parseInt(dia_val) < 0 || parseInt(dia_val) == NaN){
					flag = 2
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
    }

	if(flag == 0){
        
        //alert(json_data);

		//var scores = calculate_score()

		/*localStorage.setItem('_stress_app_user_name', data_payload[0].selection_val)
		localStorage.setItem('_stress_app_work_stress_msg', scores.work_stress)
		localStorage.setItem('_stress_app_symptoms_msg', scores.symptoms)*/
		
		document.getElementById('done_spinner').style.display = 'block'
         localStorage.setItem('_bingealco', 'N')
        localStorage.setItem('_inactive', 'N')
        localStorage.setItem('_unhealthy', 'N')
        localStorage.setItem('_overwt', 'N')
        localStorage.setItem('_obesity', 'N')
        localStorage.setItem('_diabetes', 'N')
        localStorage.setItem('_bp', 'N')
        localStorage.setItem('_harmfullstress', 'N')
        localStorage.setItem('_stress', 'N')
        localStorage.setItem('_mental', 'N')
        localStorage.setItem('_suicide', 'N')
        localStorage.setItem('_tobacco', 'N')
        localStorage.setItem('_alcohol', 'N')
        
        if(parseInt(json_data.data[10].selection_val)==1 || parseInt(json_data.data[10].selection_val)==2){
            localStorage.setItem('_tobacco', 'Y')
        }
        if(parseInt(json_data.data[11].selection_val)==1 || parseInt(json_data.data[11].selection_val)==2 || parseInt(json_data.data[11].selection_val)==3 || parseInt(json_data.data[11].selection_val)==4){
            localStorage.setItem('_alcohol', 'Y')
        }
        
        if(parseInt(json_data.data[12].selection_val)==2 || parseInt(json_data.data[12].selection_val)==3 || parseInt(json_data.data[12].selection_val)==4){
            localStorage.setItem('_bingealco', 'Y')
        }
        
        if(parseInt(json_data.data[18].selection_val)==1 || parseInt(json_data.data[18].selection_val)==2 || parseInt(json_data.data[18].selection_val)==3 || parseInt(json_data.data[18].selection_val)==4){
        localStorage.setItem('_inactive', 'Y')
         }
        
        if((parseInt(json_data.data[15].selection_val)>3 && parseInt(json_data.data[17].selection_val)<3) || (parseInt(json_data.data[16].selection_val)>3 && parseInt(json_data.data[17].selection_val)<3)){
        localStorage.setItem('_unhealthy', 'Y')
        }
        
        wt = json_data.data[28].selection_val
        ht= json_data.data[27].selection_val/100
        
        bmi=wt/(ht*ht)
        if(bmi>25){
        localStorage.setItem('_overwt', 'Y')
        }
         if(bmi>30){
        localStorage.setItem('_obesity', 'Y')
         }
        if(parseInt(json_data.data[31].selection_val)>200){
             localStorage.setItem('_diabetes', 'Y')
        }
        
        if(json_data.data[29].selection_val_sys > 140 || json_data.data[29].selection_val_dia > 90){
       
        localStorage.setItem('_bp', 'Y')
        }
        if (json_data.data[22].selection_val == 3 || json_data.data[22].selection_val == 4){
            localStorage.setItem('_stress', 'Y')
        }
        
        if ((json_data.data[22].selection_val == 3 || json_data.data[22].selection_val == 4) && (json_data.data[23].selection_val == 3 || json_data.data[23].selection_val == 4 || json_data.data[23].selection_val == 5)){
        localStorage.setItem('_harmfullstress', 'N')
     }
        mentalscore= json_data.data[20].selection_val+json_data.data[21].selection_val
    if(mentalscore>3){
        localStorage.setItem('_mental', 'Y')
    }
        
    if(parseInt(json_data.data[26].selection_val)==2 || parseInt(json_data.data[26].selection_val)==3 || parseInt(json_data.data[26].selection_val)==4){
        localStorage.setItem('_suicide', 'Y')
    }
        

		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	          //console.log(this.responseText);
	          window.location.href = '/ncdscreening_score'
	        }
	    };
	    xhttp.open("POST", "/add_ncdscreening_assessment", true);
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

function submitTestResponse(testName, responseData) {
    fetch('/add_test_response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            test_name: testName, // Replace with the test name
            data: JSON.stringify(responseData) // Replace with the actual response data
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'ok') {
            console.log('Test response saved successfully!');
        } else {
            console.error('Error saving test response:', data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



