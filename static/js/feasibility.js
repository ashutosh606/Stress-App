json_data = {"data": [{"qid": 1, "qtype": "date", "ph": "dd/mm/yyyy", "ques": {"english": "Date of starting the activity", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 2, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": {}}, {"qid": 2, "qtype": "text", "ph": "Enter Designation", "ques": {"english": "Designation of the person conducting the appraisal", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 3, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 3, "qtype": "text", "ph": "xxx@yyy.com", "ques": {"english": "Email ID", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 4, "scoring_required": "False", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 4, "qtype": "text", "ph": -9, "ques": {"english": "Phone", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 5, "scoring_required": "False", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": []}, {"qid": 5, "qtype": "num", "ph": -9, "ques": {"english": "Number of employees (permanent+contract) as on appraisal start date", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 6, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 99999999}, {"qid": 6, "qtype": "num", "ph": -9, "ques": {"english": "Percentage of male employees( Example 40%. 60% )", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 7, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 100}, {"qid": 7, "qtype": "num", "ph": -9, "ques": {"english": "Percentage of  employees aged 30+ years ( Example 40%. 60% )", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 8, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 100}, {"qid": 8, "qtype": "num", "ph": -9, "ques": {"english": "Average age of employees ( enter age in years)", "kannada": ""}, "question_information": "-9", "section": "GENERAL INFORMATION", "next_qid": 9, "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 60}, {"qid": 9, "qtype": "radio", "ques": {"english": "Does your workplace have an occupational health and safety(OSH)policy? ", "kannada": ""}, "question_information": "Answer Yes, if there is a displayed occupational health and safety policy, signed by the management/ representative", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 10}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 10}]}, {"qid": 10, "qtype": "radio", "ques": {"english": "Does your workplace have a policy  for health promotion or for prevention of NCDs and NCD risk factors? ", "kannada": ""}, "question_information": "Answer Yes, if there is a displayed health promotion , NCD prevention policy, signed by the management/ representative", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes, as a separate policy", "value_id": 3, "next_qid": 11}, {"aid": 2, "value": "Yes, but as a part of OSH policy", "value_id": 2, "next_qid": 11}, {"aid": 3, "value": "No", "value_id": 0, "next_qid": 11}]}, {"qid": 11, "qtype": "radio", "ques": {"english": "Does your workplace have a designated multi-stakeholder committee to implement health promotion, NCD prevention activities?", "kannada": ""}, "question_information": "Answer YES, if there is a designated/elected set of members  to plan, implement, monitor, and evaluate NCD and mental health programmes in your workplace. Members may include management representative, health staff, employees, external expert, etc", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 3, "next_qid": 12}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 12}]}, {"qid": 12, "qtype": "radio", "ques": {"english": "Does your workplace have a set of guidelines ,  or follow standard guidelines for implementation of NCD & NCD risk factor reduction programmes?", "kannada": ""}, "question_information": "Answer YES, if workplace has some guidelines document or have a copy of standard guidelines (issued by Ministry, CDC, WHO, Local health authorities, institutes or experts) which is used/ referred to implement NCD control interventions in the workplace", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 13}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 13}]}, {"qid": 13, "qtype": "radio", "ques": {"english": "Does you workplace have an annual dedicated budget to implement health promotion interventions to reduce NCDs? ", "kannada": ""}, "question_information": "Answer Yes, if there is an sanctioned and available budget for at-least yearly to implement NCD control interventions in the workplace", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 3, "next_qid": 14}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 15}]}, {"qid": 14, "qtype": "num", "ph": -9, "ques": {"english": "What is the annual budget in rupees (approximate)", "kannada": ""}, "question_information": "-9", "section": "MACRO LEVEL INTERVENTIONS", "next_qid": 15, "scoring_required": "False", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": [], "range": 99999999}, {"qid": 15, "qtype": "radio", "ques": {"english": "Does your workplace have a designated person to implement health promotion / NCD prevention activities in your workplace?", "kannada": ""}, "question_information": "Answer YES, if there is a doctor, medical officer, OH nurse or any other person formally designated to implement NCD control interventions. He/She can be full-time or part-time. Maybe appointed specifically or identified from an existing employee", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 16}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 16}]}, {"qid": 16, "qtype": "radio", "ques": {"english": "Does your workplace have an yearly action-plan for NCD prevention? (or set of activities with measurable targets and specific timelines)? ", "kannada": ""}, "question_information": "Answer Yes, if there is a document or GANTT chart displayed which indicates set of NCD prevention or health promotion activities to be conducted, time specification an measurable targets to be achieved for the year", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 3, "next_qid": 17}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 17}]}, {"qid": 17, "qtype": "radio", "ques": {"english": "Is there an  onsite occupational health center or clinic ? ", "kannada": ""}, "question_information": "Answer Yes, if there is a functional onsite (located in premises of the workplace) health center or clinic for planning and implementing health promotion , clinical or follow-up services for employees", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 18}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 18}]}, {"qid": 18, "qtype": "radio", "ques": {"english": "Does your workplace conduct training for occupational health staff or NCD committee members or designated person to implement  NCD programmes in workplaces?", "kannada": ""}, "question_information": "Answer YES, if the health staff, NCD committee or designated coordinator is trained (formally or on-job) to implement NCD control interventions in the workplace", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 19}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 19}]}, {"qid": 19, "qtype": "radio", "ques": {"english": "Does your workplace provide health insurance coverage for workers (for NCDs treatment as well)?", "kannada": ""}, "question_information": "Refers to any insurance coverage provided by employers , it could be ESI, private insurance or other government driven schemes", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 20}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 20}]}, {"qid": 20, "qtype": "radio", "ques": {"english": "Does your workplace have a  cadre of trained volunteers  to facilitate implementation, participation and sustainability of health programmes? ", "kannada": ""}, "question_information": "-9", "section": "MACRO LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 21}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 21}]}, {"qid": 21, "qtype": "radio", "ques": {"english": "Does your workplace conduct a yearly situational assessment of NCD prevention or health promotion activities?", "kannada": ""}, "question_information": "Answer YES, if there is a yearly activity to assess status or progress of NCD prevention or health promotion activities in the workplace , conducted either by workplace committees or other external agencies", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 22}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 23}]}, {"qid": 22, "qtype": "radio", "ques": {"english": "If Yes to previous question, how is the yearly situational assessment of NCD prevention  activities conducted ?", "kannada": ""}, "question_information": "-9", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Objective assessment  of avaibale systems or analyse availbale data;", "value_id": 1, "next_qid": 23}, {"aid": 2, "value": "Interviews with employees", "value_id": 1, "next_qid": 23}, {"aid": 3, "value": "Both ", "value_id": 2, "next_qid": 23},{"aid": 4, "value": "Not Appicable ", "value_id": 0, "next_qid": 23}]}, {"qid": 23, "qtype": "radio", "ques": {"english": "Does your workplace conduct yearly screening for NCDs, NCD risk factors or mental disorders?", "kannada": ""}, "question_information": "Answer YES, if there is  screening for NCDs either as a standalone programme or as a part of periodical medical examination programme ", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 5, "next_qid": 24}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 24}]}, {"qid": 24, "qtype": "radio", "ques": {"english": "Where is the screening conducted?", "kannada": ""}, "question_information": "refers to screening conducted in the workplace", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Onsite ", "value_id": 0, "next_qid": 25}, {"aid": 2, "value": "Outside of the premises", "value_id": 0, "next_qid": 25}, {"aid": 3, "value": "Both ", "value_id": 0, "next_qid": 25}, {"aid": 4, "value": "Neither", "value_id": 0, "next_qid": 25}]}, {"qid": 25, "qtype": "radio", "ques": {"english": "How employees are screened?", "kannada": ""}, "question_information": "HR, OH or CSR dept or person-in-charge of workplace woiuld know about this", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "All employees are screened over a few consecutive days ", "value_id": 0, "next_qid": 26}, {"aid": 2, "value": "Pre-decided number of employees are screened every month", "value_id": 0, "next_qid": 26}]}, {"qid": 26, "qtype": "radio", "ques": {"english": "Does the screening involve Interview based assessment?", "kannada": ""}, "question_information": "-9", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 27}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 27}]}, {"qid": 27, "qtype": "radio", "ques": {"english": "Does the screening involve measurements? ( weight, height, blood pressure etc)", "kannada": ""}, "question_information": "-9", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 28}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 28}]}, {"qid": 28, "qtype": "radio", "ques": {"english": "Does the screening involve Laboratory tests? ( blood sugar, cholestrol etc)", "kannada": ""}, "question_information": "-9", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 29}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 29}]}, {"qid": 29, "qtype": "checkbox", "ques": {"english": "Are the below NCDs, NCD risk factors screened ?", "kannada": ""}, "question_information": "-9", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Alcohol use", "value_id": 1, "next_qid": 30}, {"aid": 2, "value": "Tobacco use ", "value_id": 1, "next_qid": 30}, {"aid": 3, "value": "Unhealthy dietery practices ", "value_id": 1, "next_qid": 30}, {"aid": 4, "value": "Physical activity/ inactivity ", "value_id": 1, "next_qid": 30}, {"aid": 5, "value": "Overweight/ obesity  ", "value_id": 1, "next_qid": 30}, {"aid": 6, "value": "Blood sugar  ", "value_id": 1, "next_qid": 30}, {"aid": 7, "value": "Blood pressure ", "value_id": 1, "next_qid": 30}, {"aid": 8, "value": "Abnormal cholestrol levels  ", "value_id": 1, "next_qid": 30}, {"aid": 9, "value": "Harmful work stress  ", "value_id": 1, "next_qid": 30}, {"aid": 10, "value": "Psychological distress/ depression/ anxiety / mental morbidity  ", "value_id": 1, "next_qid": 30}]}, {"qid": 30, "qtype": "radio", "ques": {"english": "Does your workplace disseminate the findings of the screening to employees at-least once a year?", "kannada": ""}, "question_information": "Answer Yes, if there is newsletter or email or document provided in notice board/ e-media pertaining to summary results of screening activity", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 31}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 31}]}, {"qid": 31, "qtype": "radio", "ques": {"english": "Does your workplace involve NCD volunteers from within the organization to conduct screening?", "kannada": ""}, "question_information": "Answer YES, if trained NCD volunteers from within the workplace are involved to conduct the screening", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 32}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 32}]}, {"qid": 32, "qtype": "radio", "ques": {"english": "Does the workplace maintain health data of each employee being screened using appropriate methods? ( formats, health records, case files, digital formats)", "kannada": ""}, "question_information": "Answer YES, if Health data / screening data is maintained either as registers/ records or as digital formats", "section": "SITUATIONAL ASSESSMENT AND SCREENING", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes, digital format", "value_id": 2, "next_qid": 33}, {"aid": 2, "value": "Yes, as hard format", "value_id": 1, "next_qid": 33}, {"aid": 3, "value": "No", "value_id": 0, "next_qid": 33}]}, {"qid": 33, "qtype": "checkbox", "ques": {"english": "Does the OSH policy mention specifically or include the below NCDs, NCD risk factors ?", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS", "scoring_required": "True", "mandatory": "False", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Alcohol use", "value_id": 1, "next_qid": 34}, {"aid": 2, "value": "Tobacco use ", "value_id": 1, "next_qid": 34}, {"aid": 3, "value": "Unhealthy dietery practices ", "value_id": 1, "next_qid": 34}, {"aid": 4, "value": "Physical activity/ inactivity ", "value_id": 1, "next_qid": 34}, {"aid": 5, "value": "Overweight/ obesity  ", "value_id": 1, "next_qid": 34}, {"aid": 6, "value": "Blood sugar  ", "value_id": 1, "next_qid": 34}, {"aid": 7, "value": "Blood pressure ", "value_id": 1, "next_qid": 34}, {"aid": 8, "value": "Abnormal cholestrol levels  ", "value_id": 1, "next_qid": 34}, {"aid": 9, "value": "Harmful work stress  ", "value_id": 1, "next_qid": 34}, {"aid": 10, "value": "Psychological distress/ depression/ anxiety / mental morbidity  ", "value_id": 1, "next_qid": 34}]}, {"qid": 34, "qtype": "radio", "ques": {"english": "Does the workplace OSH policy  specifically mention ‘Tobacco’’ or has statements that specifically mention reduction of tobacco use ? ", "kannada": ""}, "question_information": "Answer Yes, if there is a anti-tobacco policy or tobacco is covered in the Health policies", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 35}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 35}]}, {"qid": 35, "qtype": "radio", "ques": {"english": " Does your workplace conduct regular (yearly) screening for tobacco use? ", "kannada": ""}, "question_information": "Answer Yes, if tobacco use is assessed during periodical examination, other health risk appraisals or in clinic visit records", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "False", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 36}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 36}]}, {"qid": 36, "qtype": "radio", "ques": {"english": "Does your workplace conduct yearly identification for tobacco dependence among users?", "kannada": ""}, "question_information": "Answer YES, if users are assessed for nicotine dependence using multiple methods like self-report by e-platforms,  checklists in specifically determined places and times, example in the clinics or in canteens etc", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 37}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 37}]}, {"qid": 37, "qtype": "radio", "ques": {"english": "Does your workplace provide or facilitate access for tobacco cessation services ? ", "kannada": ""}, "question_information": "Answer YES, if there are basic tobacco cessation services (dependence assessment, counselling, nicotine replacement) offered within the workplace or employees are referred to identified persons or facilities for cessation (free of cost)", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 3, "next_qid": 38}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 38}]}, {"qid": 38, "qtype": "radio", "ques": {"english": "Does your workplace communicate regularly, the provisions of the COTPA Act to employees? ", "kannada": ""}, "question_information": "Answer YES, if there are messages of No Smoking, No smoking signs as per the COTPA Act in prominent locations in the workplace. Also answer YES, if there are programmes or education material about COTPA circulated to employees in the past 12 months", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 39}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 39}]}, {"qid": 39, "qtype": "radio", "ques": {"english": "Does your workplace have a list of resources centers or referral centers to facilitate tobacco cessation services? ", "kannada": ""}, "question_information": "Answer YES, if there is a resource mapping of centres (hospitals, psychiatry clinics, NGOs etc. provided) and list of resource centres and referral centres with contact number", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 40}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 40}]}, {"qid": 40, "qtype": "radio", "ques": {"english": "Does your workplace have ‘systems to levy fines” or have levied fines for those using tobacco during working hours inside the workplace , in-line with COTPA Act? ", "kannada": ""}, "question_information": "Answer Yes, if fines were levied from employees found smoking or using tobacco in the workplace premises", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 41}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 41}]}, {"qid": 41, "qtype": "radio", "ques": {"english": "Does your workplace train the health staff or other interested employees in assessment of tobacco use and dependence and to provide brief intervention services? ", "kannada": ""}, "question_information": "Answer YES, if health staff or NCD volunteers have been formally trained( training programme conducted by professionals) to provide basic tobacco cessation services and have a proof of training completion", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 42}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 42}]}, {"qid": 42, "qtype": "radio", "ques": {"english": "Is there a prohibition the sale of tobacco products on worksite premises? ", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 43}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 43}]}, {"qid": 43, "qtype": "radio", "ques": {"english": "Does your workplace collect information on key indicators useful for analyzing progress towards tobacco cessation? ", "kannada": ""}, "question_information": "Answer Yes, if data is collected yearly, from multiple or single sources with regards to tobacco use (%), dependence (%), % reduction in use, number availing cessation etc for monitoring progress towards tobacco cessation", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 44}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 44}]}, {"qid": 44, "qtype": "radio", "ques": {"english": "Does the workplace conduct regular IEC, health awareness programmes regarding harm from tobacco and tobacco cessation?", "kannada": ""}, "question_information": "Answer “yes” if, for example, your worksite offers brochures, videos, posters, web-based programs, or newsletters on tobacco cessation", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 45}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 45}]}, {"qid": 45, "qtype": "radio", "ques": {"english": "Does your workplace have a specific policy on limiting access to alcohol or reduction of alcohol use? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has an organization wide policy to encourage and support employees to reduce alcohol use", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 46}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 46}]}, {"qid": 46, "qtype": "radio", "ques": {"english": "Does your workplace facilitate access to brief interventions for employees with harmful or dependent alcohol use?", "kannada": ""}, "question_information": "Answer Yes, if your workplace conducts brief intervention such as identification, risk assessment, referral, follow up for employees with alcohol use and dependent  behavior", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 47}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 47}]}, {"qid": 47, "qtype": "radio", "ques": {"english": "Does your workplace conduct random breath testing for alcohol among employees? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace conducts testing of alcohol use randomly among employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 48}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 48}]}, {"qid": 48, "qtype": "radio", "ques": {"english": "Does your workplace have  referral linkages with  hospitals for management of alcohol use problems among employees?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has  tie ups with ESI hospitals or other hospitals for referral and detailed assessment and treatment in case of identification with severe alcohol use problem", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 49}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 49}]}, {"qid": 49, "qtype": "radio", "ques": {"english": "Does your workplace conduct capacity building programmes  (to deliver basic alcohol use reduction services)  for health staff and volunteers? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has skill development and capacity building programmes for employees and occupational health staffs for identification of problems related to alcohol use reduction", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 50}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 50}]}, {"qid": 50, "qtype": "radio", "ques": {"english": "Does your workplace conduct educational programmes /provide educational materials to reduce alcohol use?", "kannada": ""}, "question_information": "Answer Yes, if your workplace takes measures of activities like educational campaigns, display of educational messages, communication of information through various media regarding alcohol use and its consequences", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 51}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 51}]}, {"qid": 51, "qtype": "radio", "ques": {"english": "Does your workplace administration discourage or limit access to alcohol or use of company funds for alcohol at work sponsored events? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace takes measures to limit or ban consumption of alcohol in company sponsored events for its employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 52}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 52}]}, {"qid": 52, "qtype": "radio", "ques": {"english": "Does your workplace have a policy for promoting physical activity in the workplace? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace have an organisation wide policy to encourage and support employees to be more physically active or physical activity promotion is listed to be addressed in the health and safety policy", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 53}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 53}]}, {"qid": 53, "qtype": "radio", "ques": {"english": "Does your workplace provide educational materials for promoting physical activity among employees? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace provides e-posters, resource material, videos , information leaflets focused on enhancing physical activity, benefits of regular physical activity for access by employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 54}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 54}]}, {"qid": 54, "qtype": "radio", "ques": {"english": "Does your workplace take measures to reduce sedentary time of employees? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace take initiatives to reduce sitting time, promote employees to take stretch breaks and physical activity breaks, promote use of stairways, and form support networks", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 55}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 55}]}, {"qid": 55, "qtype": "radio", "ques": {"english": "Does your workplace have provision to provide or subsidies purchase of equipment for sports/exercise or to gain access to physical activity facilities outside the workplace? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace provides or subsidizes buying of pedometers, sports equipment’s, membership to fitness centres etc", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 56}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 56}]}, {"qid": 56, "qtype": "radio", "ques": {"english": "Does your workplace promote use of active transportation among employees? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace take efforts for promoting active transportation among employees such as by mapping safe walking/biking routes, securing bicycle racks, promoting brisk walk groups, providing showering facilities, locker area and changing facilities at workplace", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 57}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 57}]}, {"qid": 57, "qtype": "radio", "ques": {"english": "Does your workplace encourage, facilitate or organize physical activity, sports or exercise related events or programmes at least once a year? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace take efforts for conducting sports events like cricket, marathon, badminton, sports day for employees etc at least once a year", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 58}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 58}]}, {"qid": 58, "qtype": "radio", "ques": {"english": "Does your workplace establish partnerships with local community centres for increasing opportunity for physical activity in workplace? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has partnership with community resources such as local sports, leisure facilities, parks, gyms, sports clubs, green spaces etc.", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 59}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 59}]}, {"qid": 59, "qtype": "radio", "ques": {"english": "Does your workplace provide facilities / amenities for facilitating exercises within the workplace? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has facilities such as playground, indoor courts, swimming pool, gym or fitness centre etc  for employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 60}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 60}]}, {"qid": 60, "qtype": "radio", "ques": {"english": "Does your workplace have a policy for promoting healthy diet in the workplace? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has an organisation wide policy to encourage and support employees to consume healthy diets with rich intake of fruits and vegetables, reduced salt intake, limited sweetened beverages", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 61}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 61}]}, {"qid": 61, "qtype": "radio", "ques": {"english": "Does your workplace have onsite food outlets or canteens with balanced and healthy dining menu?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has canteens or food outlets with healthy food and drink choices", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 62}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 62}]}, {"qid": 62, "qtype": "radio", "ques": {"english": "Does your workplace collaborate with local suppliers or  farmers for providing healthy food options in the workplace ?", "kannada": ""}, "question_information": "Answer Yes, if your workplace sells fresh farm products for employees at or near the worksite", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 63}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 63}]}, {"qid": 63, "qtype": "radio", "ques": {"english": "Does your workplace have vending machine or vendors who serve fried snacks, aerated drinks and processed foods? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has vending machine or vendors who serve fried snacks, aerated drinks and processed foods", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 0, "next_qid": 64}, {"aid": 2, "value": "No", "value_id": 1, "next_qid": 64}]}, {"qid": 64, "qtype": "radio", "ques": {"english": "Does your workplace promote and provide nutritional education and counselling among employees?", "kannada": ""}, "question_information": "Answer Yes, if your workplace takes measures of one to one nutritional counselling by clinicians or dieticians or of educating the employees about healthy diet intake and self-monitoring of dietary intake through media sources and other activities like educational campaigns, observation of national days related with nutrition", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 65}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 65}]}, {"qid": 65, "qtype": "radio", "ques": {"english": "Does your workplace provide educational materials regarding healthy eating to employees?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has partnership with community resources such as local sports, leisure facilities, parks, gyms, sports clubs, green spaces etc.", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 66}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 66}]}, {"qid": 66, "qtype": "radio", "ques": {"english": "Does your workplace conduct inhouse training for occupational health (OH) team members or NCD volunteers in providing nutritional education? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has training on nutritional education for OH staffs and NCD volunteers or marshalls", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 67}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 67}]}, {"qid": 67, "qtype": "radio", "ques": {"english": "Does your workplace provide  lifestyle education and behavioral change communication(for weight reduction) for employees?", "kannada": ""}, "question_information": "Answer Yes, if there are educational awareness programmes, IEC material informing employees at repeatedly to monitor, maintain or reduce weight", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 68}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 68}]}, {"qid": 68, "qtype": "radio", "ques": {"english": "Does your workplace provide counselling services   aimed at reducing weight?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has trained counsellors to counsel at-risk or high risk employees regarding adoption of  healthy lifestyles or counselling services are facilitated over phone or through third-party?", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 69}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 69}]}, {"qid": 69, "qtype": "radio", "ques": {"english": "Does your workplace provide facilities (or access to facilities) for self-monitoring of weight ?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has weight monitoring points, provides subsidies on weighing scales, has e-application for weight self-monitoring", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 70}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 70}]}, {"qid": 70, "qtype": "radio", "ques": {"english": "Is there a system for identification of high risk employees and referring them for medical interventions for weight reduction?", "kannada": ""}, "question_information": "Answer Yes, if your workplace has trained doctors nurses to identify employees with high BMI, comorbid conditions needing medical care or specialized care and referring them appropriately", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 71}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 71}]}, {"qid": 71, "qtype": "radio", "ques": {"english": "Does your workplace have mechanisms for regular monitoring of blood pressure? ", "kannada": ""}, "question_information": "Answer Yes, if there are points or health centres with automatic BP monitors or BP monitors are provided to employees at subsidized rates for regular monitoring. <br> Answer Yes, if there is a portal or application for employees to enter and monitor their blood pressure regularly", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Raised blood sugar, blood pressure and cholestrol", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 72}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 72}]}, {"qid": 72, "qtype": "radio", "ques": {"english": "Does your workplace have mechanisms for regular monitoring of blood sugars? ", "kannada": ""}, "question_information": "Answer Yes, if there are points or health centres with glocometers or glucometers  are provided to employees at subsidized rates for regular monitoring or there is a tie up with third party for regular monitoring of blood glucose <br>Answer Yes, if there is a portal or application for employees to enter and monitor their blood glucose  regularly", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Raised blood sugar, blood pressure and cholestrol", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 73}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 73}]}, {"qid": 73, "qtype": "radio", "ques": {"english": "Does your workplace have mechanism  to identify and refer employees with elevated blood pressure, sugar or cholesterol? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace has tie-up with third party for management and follow-up of prediabetes, diabetes, hypertension and other NCDs", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Raised blood sugar, blood pressure and cholestrol", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 74}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 74}]}, {"qid": 74, "qtype": "radio", "ques": {"english": "Does your workplace have a system for identifying work-related stressors  (yearly work stress appraisal)?", "kannada": ""}, "question_information": "Answer Yes, if your workplace conducts an appraisal of job demand, job control, role ambiguity, physical working environment, work-life balance, prevalence of harmful work stress etc at least once a year", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 75}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 75}]}, {"qid": 75, "qtype": "radio", "ques": {"english": "Does your workplace  discuss with employees (or representatives) to fix-up work timings and  targets ?", "kannada": ""}, "question_information": "Answer Yes, if your workplace hold meetings with employees or representatives to fix work timings, work targets, work nature and flexibility in working style like work from home", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 76}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 76}]}, {"qid": 76, "qtype": "radio", "ques": {"english": "Does your workplace undertake interventions to improve coping skills of employees to work related stressors?", "kannada": ""}, "question_information": "Answer Yes, if employees are sent to pre-induction training, training for skill enhancement, updates regarding softwares, effective communication techniques, time management   etc which improve their capacities to cope with work related stressors", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 77}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 77}]}, {"qid": 77, "qtype": "radio", "ques": {"english": "Does the workplace offer employees training  to reduce health effects of work stressors on mind and body?", "kannada": ""}, "question_information": "Answer yes if there are stress management workshops that cover progressive muscle relaxation, yoga, mindfulness or exercise based therapies ", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 78}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 78}]}, {"qid": 78, "qtype": "radio", "ques": {"english": "Does your workplace have a clear and transparent work-performance appraisal system? ", "kannada": ""}, "question_information": "Answer yes if there is a yearly performance appraisal system alsom linked to hike in work remuneration at prior agreed timelines", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 79}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 79}]}, {"qid": 79, "qtype": "radio", "ques": {"english": "Does your workplace train employee volunteers  within the workplace to deliver stress management programmes?", "kannada": ""}, "question_information": "Answer yes if there are stress management training delivered to interested volunteers to further conduct the same to employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 80}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 80}]}, {"qid": 80, "qtype": "radio", "ques": {"english": "Does your workplace conduct a yearly assessment of policies, programs, activities  to reduce mental health disorders in workplace?", "kannada": ""}, "question_information": "Answer Yes, if your workplace conducts an appraisal of systems and services available for preventing and controlling common mental disorders, suicidal tendencies and psychological distress", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 81}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 81}]}, {"qid": 81, "qtype": "radio", "ques": {"english": "Does your workplace undertake regular screening for common mental disorders and harmful work stress  among employees? ", "kannada": ""}, "question_information": "Answer Yes, if your workplace conducts interview ( self or administered) screening for employees for depression, anxiety, psychological distress and suicidal  ideation among employees", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 82}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 82}]}, {"qid": 82, "qtype": "radio", "ques": {"english": "Is there a mental health policy for your  workplace or existing OSH policy includes  control of mental disorders workplace?", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 83}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 83}]}, {"qid": 83, "qtype": "radio", "ques": {"english": "Does the workplace conduct activities or programmes to improve mental health literacy among employees? ", "kannada": ""}, "question_information": "Answer yes if there are educational programmes aimed to increase knowledge of employees regarding depression anxiety, suicide prevention and also where to access care for the above", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 84}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 84}]}, {"qid": 84, "qtype": "radio", "ques": {"english": "Does your workplace have a confidential system for grievance redressal or reporting of harrasment? ", "kannada": ""}, "question_information": "Answer yes if there is a committee or person in-charge to whom employees can confidentially report harassment or other grievances", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 85}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 85}]}, {"qid": 85, "qtype": "radio", "ques": {"english": "Does your workplace have systems for  providing psychological first-aid services like counselling and referral (by trained personnel)? ", "kannada": ""}, "question_information": "Answer yes if there screened positive employees are evaluated by a trained person , provided first aid services like counselling and referral services", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 86}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 86}]}, {"qid": 86, "qtype": "radio", "ques": {"english": "Does your workplace train volunteer/employees within the workplace to deliver basic mental health services? ", "kannada": ""}, "question_information": "Answer yes if there are trainings conducted for employees to function as psychological first aid providers (lay counsellors", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 87}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 87}]}, {"qid": 87, "qtype": "radio", "ques": {"english": "Are indicators pertaining to mental health included in annual review and  surveillance ?", "kannada": ""}, "question_information": "Answer yes if there indicators related to mental disorders, suicidal tendencies are included in yearly review of NCD control programmes in the workplace", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 88}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 88}]}, {"qid": 88, "qtype": "radio", "ques": {"english": " Does your work place have a system to collate data  to conduct regular surveillance", "kannada": ""}, "question_information": "Answer Yes. If data pertaining to health risk appraisals or screening or periodical examination or clinic visits or insurance claims data are systematically collected or collated atleast once a year for purpose of monitoring progress in NCD risk reduction <br>It implies there are specific formats to collect and represent data", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 89}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 89}]}, {"qid": 89, "qtype": "radio", "ques": {"english": "Is there a  specific set of indicators (agreed upon ) for monitoring and surveillance of NCDs, NCD risk and common mental disorders ?", "kannada": ""}, "question_information": "Answer Yes, if there are defined set of indicators pertaining to input (resources), process (activitie, participations) and outcome (morbidity rates,ratios) with clear defintioni of numerator, denominator and data sources to compile the indicators", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 90}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 90}]}, {"qid": 90, "qtype": "radio", "ques": {"english": "Is there a set of targets (derived from the indicators) to quantify reduction of NCDs, NCD risk and common mental disorders in the workplace? ", "kannada": ""}, "question_information": "Answer Yes, if there are defined set of targets  to quantify extent of reduction of NCDs, NCD risk factors and common mental disorders", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 91}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 91}]}, {"qid": 91, "qtype": "radio", "ques": {"english": "Is the status of indicators and targets communicated to senior management and employees at least once a year? ", "kannada": ""}, "question_information": "Answer Yes, if status of indicators and targets are communicated to management and employees once a year in form of notice board posts, email communication, posters, newsletters etc", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 92}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 92}]}, {"qid": 92, "qtype": "radio", "ques": {"english": "Does the NCD committee / health department or person in-charge review indicators and targets to take data based decisions ?", "kannada": ""}, "question_information": "Answer Yes, if there is annual meeting to review indicators and targets to prepare next year action plan", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 93}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 93}]}, {"qid": 93, "qtype": "radio", "ques": {"english": "Is there a   senior or mid-level management  employee in the workplace NCD or OSH committee?", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 2, "next_qid": 94}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 94}]}, {"qid": 94, "qtype": "radio", "ques": {"english": "Is there a regular update to  senior or mid-level management about progress in NCD control activities in the workplace ? ", "kannada": ""}, "question_information": "Answer Yes, if monthly or half-yearly reports are sent to management", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 95}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 95}]}, {"qid": 95, "qtype": "radio", "ques": {"english": "Does the workplace involve senior management  to preside over key programmes, award ceremonies etc implemented to reduce NCDs in the workplace?", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 96}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 96}]}, {"qid": 96, "qtype": "radio", "ques": {"english": "Does the workplace identify and train a sample of interested employees as NCD volunteers ? ", "kannada": ""}, "question_information": "Refers to informal and formal training of volunteers to support implementation of NCD control interventions in the workplace", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 97}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 97}]}, {"qid": 97, "qtype": "radio", "ques": {"english": "Does the workplace have a reward system focusing on health of employees? ", "kannada": ""}, "question_information": "Answer Yes, if there are incentives to employees for improving their health status, if there are best employee awards for health, employees are role-modelled in newsletters and reports etc", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 98}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 98}]}, {"qid": 98, "qtype": "radio", "ques": {"english": "Does the workplace implement activities to get certifications or accreditation for  NCD control and prevention efforts? ", "kannada": ""}, "question_information": "Answer Yes, if external agencies have accredited the ongoing NCD control activities.", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 99}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 99}]}, {"qid": 99, "qtype": "radio", "ques": {"english": "Have any external agencies conducted monitoring or evaluation of health programmes? ", "kannada": ""}, "question_information": "Refers to any external assessment by experts, academic institutes or NGOs for purpose of assessing quality of  services, accreditation or for awards", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 100}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 100}]}, {"qid": 100, "qtype": "radio", "ques": {"english": "Does the workplace  participate in ongoing national health  programmes (NPCDCS , NMHP) to improve scope and coverage for employees? ", "kannada": ""}, "question_information": "Answer Yes, if there is visits by counselors or health staff from national programme to provide services or employees are referred to public health facilities in the national programmes. Example – employees sent for DMHP centre / hospital for drugs or counselling ", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 101}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 101}]}, {"qid": 101, "qtype": "radio", "ques": {"english": "Does the workplace administration have a tie-up with nearby medical colleges (department of community medicine, public health, psychiatry, social work, general medicine) for  support in capacity building, data analysis , monitoring and surveillance?", "kannada": ""}, "question_information": "-9", "section": "SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY", "scoring_required": "True", "mandatory": "True", "capture_specifics": "False", "follow_up": "False", "ans": [{"aid": 1, "value": "Yes", "value_id": 1, "next_qid": 0}, {"aid": 2, "value": "No", "value_id": 0, "next_qid": 0}]}],"sections":[{"name":"GENERAL INFORMATION","summary":""},{"name":"MACRO LEVEL INTERVENTIONS","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SITUATIONAL ASSESSMENT AND SCREENING","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"}, {"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Raised blood sugar, blood pressure and cholestrol","summary":""},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders","summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE" ,"summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"},{"name":"SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY" ,"summary":"PLEASE RESPOND TO THE BELOW QUESTIONS CONISIDERING AN IMPLEMENTATION  TIME PERIOD OF LAST 12 MONTHS"}],"heading":"NCD-METER for WORKPLACES"}
var res = []


function validatesection(section){
    
    //alert(section)
    var data_payload = []
    starting_question_idx=0;
    ending_question_idx=0;
    breakflag=false;
    for(var i=0; i<json_data.data.length; i++){
        //alert('index'+i)
        //alert(json_data.data[i].qid)
        if (json_data.data[i].section == section){
            //alert('index inside'+i)
            if(breakflag==false){
                //alert('index inside inside'+i)
                 //starting_question=json_data.data[i].qid
                 starting_question_idx=i
                //alert ('first question inside'+starting_question_idx)
                 breakflag=true
            }
             
        }else if(breakflag==true){
            ending_question_idx=i-1
            //ending_question=json_data.data[i-1].qid
            break
        }     
        
    } 
    
   // alert ('first question'+starting_question_idx)
    //alert ('last question'+ending_question_idx)
    
    var enterdata=[]
    var selectdata=[]
    document.getElementById(section+'_msg1').innerHTML = ''
    
   // alert("starting_question_idx"+starting_question_idx)
    //alert("starting_question_idx"+ending_question_idx)
    //Iterate through section questions
    for(var i=starting_question_idx; i<=ending_question_idx; i++){
        
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
        if(enterquestions==''){
            enterquestions=enterdata[i].toString()
        }else{
            enterquestions=enterquestions+'-'+enterdata[i].toString()
        }
        
        //alert('enter'+enterdata[i])
    }
    
    for(var i=0;i<selectdata.length;i++){
        // alert('enter'+i)
        if (selectquestion==''){
            selectquestion=selectdata[i].toString()
        } else{
            selectquestion=selectquestion+'-'+selectdata[i].toString()
        }
        //selectquestion=selectquestion+'-'+selectdata[i].toString()
        //alert('select'+selectdata[i])
    }
    
    if(enterquestions!=''){
        
        //alert('Please enter right information for questions '+enterquestions)
        message = 'Please enter right information for questions '+enterquestions
        document.getElementById(section+'_msg1').innerHTML = 'Please enter right information for questions : '+enterquestions
    }
    
    if(selectquestion!=''){
        
        //alert('Please select right information for questions '+selectquestion)
        document.getElementById(section+'_msg2').innerHTML = 'Please select right information for questions : '+selectquestion
    }
    
     if(enterquestions ==''&& selectquestion==''){
        
        //alert("Thanks for entering all details. Please move down to next section")
        document.getElementById(section+'_msg1').style.display = ''
        document.getElementById(section+'_msg2').style.display = ''
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

    if (val < 0 || val > parseInt(field_range)){
        document.getElementById(field_id).value = ''
        alert('Please enter values <='+field_range)
    }
}

/*function captureFeasibiliy(qid){
    
    
    //Capture the fasibility score for all questions between 14 and 124
    if (parseInt(qid) >= 14 && parseInt(qid) <= 124){
        //q_14_feasibility_data
        feasibility_score=0;
        if (document.getElementById('q_'+qid+'_feasibility_data').value==''){
            feasibility_score=0
        }else{
            feasibility_score=document.getElementById('q_'+qid+'_feasibility_data').value
            //alert('here')
        }
        
        if (feasibility_score < 0 || feasibility_score > 10){
        document.getElementById('q_'+qid+'_feasibility_data').value = ''
        alert('Please enter values less than 10 only')
        } else{
        
        json_data.data[parseInt(qid)-1].feasibility_score = feasibility_score
        }
        
        
    }
    
}*/

function select_options(qid){
    
    var options_element = document.getElementById('q'+qid+'_data')
    var selection_val = options_element.value
    
    
    json_data.data[parseInt(qid)-1].selection_val = parseInt(selection_val)
    if(selection_val==22){
        
         document.getElementById('q_'+qid+'_others_data').style.display = 'block'
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
    
    // For question 13  if the selected option is Yes, go to the next question, else go to 20th question
	if(parseInt(qid) == 13 ){
		//alert(qid)
		next_qid_i=parseInt(qid)+1
        
        //new_qid = (parseInt(qid) + 1).toString()
        if (parseInt(element_id) == 2){
            document.getElementById('q_'+next_qid_i+"_data").value=0
            document.getElementById('q_'+next_qid_i+"_data").readOnly = true
        }else{
            document.getElementById('q_'+next_qid_i+"_data").readOnly = false
        }
        
	}
    
    if(parseInt(qid) == 21 ){
		
        next_qid_i=parseInt(qid)+1
        next_qid_selected_id=4
		//new_qid = (parseInt(qid) + 1).toString()
        
        if (parseInt(element_id) == 2){
            var next_radio_element = document.getElementById('q'+next_qid_i+'_'+next_qid_selected_id)
            next_radio_element.classList.add("btn-rose")
            document.getElementById('q_'+next_qid_i+'_q').style.display = 'none'
      		document.getElementById('q_'+next_qid_i+'_ig').style.display = 'none'
            json_data.data[parseInt(next_qid_i)-1].selection_val = 4
        }else{
            document.getElementById('q_'+next_qid_i+'_q').style.display = 'block'
      		document.getElementById('q_'+next_qid_i+'_ig').style.display = 'block'
            var next_radio_element_1 = document.getElementById('q'+next_qid_i+'_1')
            var next_radio_element_2 = document.getElementById('q'+next_qid_i+'_2')
            var next_radio_element_3 = document.getElementById('q'+next_qid_i+'_3')
            var next_radio_element_4 = document.getElementById('q'+next_qid_i+'_4')
            
            next_radio_element_1.classList.remove("btn-rose")
            next_radio_element_2.classList.remove("btn-rose")
            next_radio_element_3.classList.remove("btn-rose")
            next_radio_element_4.classList.remove("btn-rose")
            
        }

		
	}
    // For question 26  if the selected option is Yes, go to the next question, else go to 45th question
    
    
    
}

function calculate_score(){

	//macro = 14 - 25
	//situational = 26 - 46
    //situational = 26 - 46
    //47-56-interventions
    //57-67 - tobacco
    //68-74- alcohol
    //75-82-inactivity
    //83-89 - healthy diet
    //90-93-overweight
    //94-96-dia-bp
    //97-102 - harmful workstress
    //103-110 - mental
    //112-115-surve
    //116-124-sustainability

    macro_score = 0
    macro_feasibility_score=0
    macro_max=22
    macro_questions=0
    macro_feasibility_avg=0
    macro_score_percentage=0
    
	for(var i=8; i<=19; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			macro_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            macro_questions=macro_questions+1
            //macro_feasibility_score += parseInt(json_data.data[i].feasibility_score)
            //alert(macro_feasibility_score)
		}
	}
    macro_score_percentage=parseInt((macro_score/macro_max)*100)
   // macro_feasibility_avg=parseInt(macro_feasibility_score/macro_questions)
    //alert(macro_feasibility_avg)

    situational_score = 0
    situational_feasibility_score=0
    situational_max=27
    situational_questions=0
    situational_feasibility_avg=0
    situational_score_percentage=0
	situational_score = 0
    
    for(var i=20; i<=31; i++){
        if(json_data.data[i].qtype=='checkbox'){
            if(json_data.data[i].selection_values.length!=0){
             //Loop through the options that are checked
              for(var j=0;j<json_data.data[i].selection_values.length;j++){
                  selected_value=json_data.data[i].selection_values[j]
                  //alert("selected_value"+selected_value)
                  for(var k=0;k<json_data.data[i].ans.length;k++){
                      //alert("check item"+json_data.data[i].ans[k].aid)
                      if(json_data.data[i].ans[k].aid==selected_value){
                          situational_score=situational_score + parseInt(json_data.data[i].ans[k].value_id)
                          
                      }
                  }
              }
                //alert("situational_score for checkbox=="+situational_score)
             // For each item, determine the score by looping through the ans array of json data
             // Add the score and it to situational_score 
         }
        }else{
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			situational_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            situational_questions=situational_questions+1
           // situational_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
        }
	}
    situational_score_percentage=parseInt((situational_score/situational_max)*100)
    //situational_feasibility_avg=parseInt(situational_feasibility_score/situational_questions)
    
    interventions_score = 0
    interventions_feasibility_score=0
    interventions_max=10
    interventions_questions=0
    interventions_feasibility_avg=0
    interventions_score_percentage=0
	interventions_score = 0
    
    if("selection_values" in json_data.data[32] && json_data.data[32].scoring_required == "True"){
        i=32
        //alert("interventions_score for checkbox==")
        if(json_data.data[i].qtype=='checkbox'){
            // alert("interventions_score for checkbox inside==")
            if(json_data.data[i].selection_values.length!=0){
               // alert("interventions_score for checkbox inside 2==")
             //Loop through the options that are checked
              for(var j=0;j<json_data.data[i].selection_values.length;j++){
                 // alert("interventions_score for checkbox inside for 1==")
                  selected_value=json_data.data[i].selection_values[j]
                  for(var k=0;k<json_data.data[i].ans.length;k++){
                     // alert("interventions_score for checkbox inside for 2==")
                      if(json_data.data[i].ans[k].aid==selected_value){
                          //alert("interventions_score for checkbox inside final if==")
                          interventions_score=interventions_score + parseInt(json_data.data[i].ans[k].value_id)
                          
                          
                      }
                  }
              }
            // alert("interventions_score for checkbox=="+interventions_score)
             // For each item, determine the score by looping through the ans array of json data
             // Add the score and it to situational_score 
         }
        }
        interventions_questions=interventions_questions+1
        
    }
    
    // Interventions to be handled
    
    
    interventions_score_percentage=parseInt((interventions_score/interventions_max)*100)
    
    
    tobacco_score = 0
    tobacco_feasibility_score=0
    tobacco_max=13
    tobacco_questions=0
    tobacco_feasibility_avg=0
    tobacco_score_percentage=0
	tobacco_score = 0
    
    for(var i=33; i<=43; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			tobacco_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            tobacco_questions=tobacco_questions+1
            //tobacco_feasibility_score +=parseInt(json_data.data[i].feasibility_score)
		}
	}
    tobacco_score_percentage=parseInt((tobacco_score/tobacco_max)*100)
   // tobacco_feasibility_avg=parseInt(tobacco_feasibility_score/tobacco_questions)
    
    alcohol_score = 0
    alcohol_feasibility_score=0
    alcohol_max=9
    alcohol_questions=0
    alcohol_feasibility_avg=0
    alcohol_score_percentage=0
	alcohol_score = 0
    
    for(var i=44; i<=50; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			alcohol_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            alcohol_questions=alcohol_questions+1
           // alcohol_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    alcohol_score_percentage=parseInt((alcohol_score/alcohol_max)*100)
    //alcohol_feasibility_avg=parseInt(alcohol_feasibility_score/alcohol_questions)
    
    inactivity_score = 0
    inactivity_feasibility_score=0
    inactivity_max=11
    inactivity_questions=0
    inactivity_feasibility_avg=0
    inactivity_score_percentage=0
	inactivity_score = 0
    
    for(var i=51; i<=58; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			inactivity_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            inactivity_questions=inactivity_questions+1
            //inactivity_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    inactivity_score_percentage=parseInt((inactivity_score/inactivity_max)*100)
    //inactivity_feasibility_avg=parseInt(inactivity_feasibility_score/inactivity_questions)
    
    healthydiet_score = 0
    healthydiet_feasibility_score=0
    healthydiet_max=7
    healthydiet_questions=0
    healthydiet_feasibility_avg=0
    healthydiet_score_percentage=0
	healthydiet_score = 0
    
    for(var i=59; i<=65; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			healthydiet_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            healthydiet_questions=healthydiet_questions+1
            //healthydiet_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    healthydiet_score_percentage=parseInt((healthydiet_score/healthydiet_max)*100)
   // healthydiet_feasibility_avg=parseInt(healthydiet_feasibility_score/healthydiet_questions)
    
    overweight_score = 0
    overweight_feasibility_score=0
    overweight_max=4
    overweight_questions=0
    overweight_feasibility_avg=0
    overweight_score_percentage=0
	overweight_score = 0
    
    for(var i=66; i<=69; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			overweight_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            overweight_questions=overweight_questions+1
            //overweight_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    overweight_score_percentage=parseInt((overweight_score/overweight_max)*100)
    //overweight_feasibility_avg=parseInt(overweight_feasibility_score/overweight_questions)
    
    
    diabp_score = 0
    diabp_feasibility_score=0
    diabp_max=3
    diabp_questions=0
    diabp_feasibility_avg=0
    diabp_score_percentage=0
	diabp_score = 0
    
    for(var i=70; i<=72; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			diabp_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            diabp_questions=diabp_questions+1
           // diabp_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    diabp_score_percentage=parseInt((diabp_score/diabp_max)*100)
   // diabp_feasibility_avg=parseInt(diabp_feasibility_score/diabp_questions)
    
    harmfulstress_score = 0
    harmfulstress_feasibility_score=0
    harmfulstress_max=8
    harmfulstress_questions=0
    harmfulstress_feasibility_avg=0
    harmfulstress_score_percentage=0
	harmfulstress_score = 0
    
    for(var i=73; i<=78; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			harmfulstress_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            harmfulstress_questions=harmfulstress_questions+1
            //harmfulstress_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    harmfulstress_score_percentage=parseInt((harmfulstress_score/harmfulstress_max)*100)
    //harmfulstress_feasibility_avg=parseInt(harmfulstress_feasibility_score/harmfulstress_questions)
    
    mental_score = 0
    mental_feasibility_score=0
    mental_max=12
    mental_questions=0
    mental_feasibility_avg=0
    mental_score_percentage=0
	mental_score = 0
    
    for(var i=79; i<=86; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			mental_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            mental_questions=mental_questions+1
           // mental_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    mental_score_percentage=parseInt((mental_score/mental_max)*100)
   // mental_feasibility_avg=parseInt(mental_feasibility_score/mental_questions)
    
    surveillance_score = 0
    surveillance_feasibility_score=0
    surveillance_max=6
    surveillance_questions=0
    surveillance_feasibility_avg=0
    surveillance_score_percentage=0
	surveillance_score = 0
    
    for(var i=87; i<=91; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			surveillance_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            surveillance_questions=surveillance_questions+1
            //surveillance_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    surveillance_score_percentage=parseInt((surveillance_score/surveillance_max)*100)
    //surveillance_feasibility_avg=parseInt(surveillance_feasibility_score/surveillance_questions)
    
    sustainability_score = 0
    sustainability_feasibility_score=0
    sustainability_max=10
    sustainability_questions=0
    sustainability_feasibility_avg=0
    sustainability_score_percentage=0
	sustainability_score = 0
    
    for(var i=92; i<=100; i++){
		if("selection_val" in json_data.data[i] && json_data.data[i].scoring_required == "True"){
			aid = parseInt(json_data.data[i].selection_val)
			sustainability_score += parseInt(json_data.data[i].ans[aid - 1].value_id)
            sustainability_questions=sustainability_questions+1
            //sustainability_feasibility_score += parseInt(json_data.data[i].feasibility_score)
		}
	}
    sustainability_score_percentage=parseInt((sustainability_score/sustainability_max)*100)
   // sustainability_feasibility_avg=parseInt(sustainability_feasibility_score/sustainability_questions)
	

	/*console.log(work_stress_score, symptoms_score)

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
	}*/
    
    var table_content = [
		{
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>MACRO LEVEL INTERVENTIONS</span>",
			"score": macro_score_percentage,
           // "feasibility":macro_feasibility_avg,
            "maxScore":macro_max,
            "questions":macro_questions
		},
		{
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SITUATIONAL ASSESSMENT AND SCREENING</span>",
			"score": situational_score_percentage,
           // "feasibility":situational_feasibility_avg,
            "maxScore":situational_max,
            "questions":situational_questions
		},
		{
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS</span>",
			"score": interventions_score_percentage,
           // "feasibility":interventions_feasibility_avg,
            "maxScore":interventions_max,
            "questions":interventions_questions
		},
		{
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - TOBACCO USE</span>",
			"score": tobacco_score_percentage,
           // "feasibility":tobacco_feasibility_avg,
            "maxScore":tobacco_max,
            "questions":tobacco_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - ALCOHOL USE</span>",
			"score": alcohol_score_percentage,
            //"feasibility":alcohol_feasibility_avg,
            "maxScore":alcohol_max,
            "questions":alcohol_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - PHYSICAL INACTIVITY</span>",
			"score": inactivity_score_percentage,
            //"feasibility":inactivity_feasibility_avg,
            "maxScore":inactivity_max,
            "questions":inactivity_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - HEALTHY DIET</span>",
			"score": healthydiet_score_percentage,
           // "feasibility":healthydiet_feasibility_avg,
            "maxScore":healthydiet_max,
            "questions":healthydiet_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - OVERWEIGHT</span>",
			"score": overweight_score_percentage,
            "feasibility":overweight_feasibility_avg,
            "maxScore":overweight_max,
            "questions":overweight_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Raised blood sugar, blood pressure and cholestrol</span>",
			"score": diabp_score_percentage,
           // "feasibility":diabp_feasibility_avg,
            "maxScore":diabp_max,
            "questions":diabp_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Harmful work stress</span>",
			"score": harmfulstress_score_percentage,
            //"feasibility":harmfulstress_feasibility_avg,
            "maxScore":harmfulstress_max,
            "questions":harmfulstress_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - Common Mental Disorders</span>",
			"score": mental_score_percentage,
           // "feasibility":mental_feasibility_avg,
            "maxScore":mental_max,
            "questions":mental_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SURVEILLANCE </span>",
			"score": surveillance_score_percentage,
           // "feasibility":surveillance_feasibility_avg,
            "maxScore":surveillance_max,
            "questions":surveillance_questions
		},
        {
			"Section": "<span style='color: #FBC02D; font-weight: 550;'>SYSTEMS AND SERVICE LEVEL INTERVENTIONS - SUSTAINABILITY </span>",
			"score": sustainability_score_percentage,
           // "feasibility":sustainability_feasibility_avg,
            "maxScore":sustainability_max,
            "questions":sustainability_questions
		}
    
	]

	return table_content

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
			}else if(ques_type == 'radio' || ques_type == 'f_radio'){
				
				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)

				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
					flag = 5
				}

			}else if(ques_type == 'options'){
				
				data_payload.push({'qid': json_data.data[i].qid, 'selection_val': json_data.data[i].selection_val})

				//console.log(json_data.data[i].selection_val)

				if(json_data.data[i].selection_val == undefined || json_data.data[i].selection_val.length == 0){
					flag = 4
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

			}else if (ques_type == 'checkbox'){
                
               //Loop through the options and check if they are checked
               //If checked, then add them to selected_vals array
               //Add the array to json_data
                selected_values=[]
                qid=i+1
                var element_count = json_data.data[i]['ans'].length
                for(j=1;j<=element_count;j++){
                    if(document.getElementById("q"+qid+"_"+j).checked==true){
                        selected_values.push(j)
                    }
                }
                
                json_data.data[i].selection_values = selected_values
                
                
            }
                
		}

	}

	if(flag == 0){

		var scores = calculate_score()
        
        
		
        
        localStorage.setItem('_macro_score', scores[0].score)
		
        
        localStorage.setItem('_screening_score', scores[1].score)
		
        
        localStorage.setItem('_system_score', scores[2].score)
	
        
        localStorage.setItem('_tobacco_score', scores[3].score)
		
        
        localStorage.setItem('_alcohol_score', scores[4].score)
	
        
        localStorage.setItem('_inactivity_score', scores[5].score)
		
        
        localStorage.setItem('_diet_score', scores[6].score)
		
        
        localStorage.setItem('_ow_score', scores[7].score)
		
        
        localStorage.setItem('_sugar_score', scores[8].score)
		
        
        localStorage.setItem('_stress_score', scores[9].score)
		
        
        localStorage.setItem('_mental_score', scores[10].score)
	
        
        localStorage.setItem('_surv_score', scores[11].score)
		
        
        localStorage.setItem('_sust_score', scores[12].score)
		
        
		
		
		document.getElementById('done_spinner').style.display = 'block'

		var xhttp = new XMLHttpRequest();
	    xhttp.onreadystatechange = function() {
	        if (this.readyState == 4 && this.status == 200) {
	          //console.log(this.responseText);
	          window.location.href = '/ncdFeasometer'
	        }
	    };
	    xhttp.open("POST", "/add_ncdfeasibility_assessment", true);
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
