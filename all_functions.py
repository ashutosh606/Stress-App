from pymongo import MongoClient
from bson.json_util import dumps
from fractions import Fraction
from datetime import datetime
import time
import json

from config_vars import *

client = MongoClient(MONGODB_URI)
# db = client.cas
db = client.castest  #


def get_date_csv(time_stamp):

    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    d = datetime.fromtimestamp(float(time_stamp))

    return str(d.day) + '/' + str(d.month) + '/' + str(d.year)

def get_feedback_data():
	fres = ''

	cur = db.new_feedback.find()
	fdata = json.loads(dumps(cur))

	fcsv = [['Date', 'Username', 'Q1', 'Q2', 'Q3', 'Q4', 'Q5']]

	q_res = ['Strongly Agree', 'Agree', 'Cant\' Say', 'Disagree', 'Strongly Disagree']

	for x in fdata:
		fline = []

		fline.append(str(get_date_csv(x['time_stamp'])))

		fline.append(str(x['username']))

		fline.append(q_res[int(x['q1'])])
		fline.append(q_res[int(x['q2'])])
		fline.append(q_res[int(x['q3'])])
		fline.append(q_res[int(x['q4'])])
		fline.append(int(x['q5']))

		fcsv.append(fline)

	for i in range(0, len(fcsv)):
		for j in range(0, len(fcsv[i])):
			fcsv[i][j] = str(fcsv[i][j])

	for x in fcsv:
		fres += ','.join(x) + '\r\n'

	return fres

def get_assessment_data(phase):
	
	flags = ['LOW', 'MODERATE', 'HIGH']

	cur = db.new_assessments.find({'phase': int(phase)})
	data = json.loads(dumps(cur))

	# print(data[0])

	line0 = ['PHASE', 'DATE', 'USERNAME', 'RESIDENTIAL SOCIETY NAME', 'BLOCK NAME', 'FLAT NO', 'MEDICAL: SCORE', 'MEDICAL: FLAG', 'EXPOSURE: SCORE', 'EXPOSURE: FLAG', 'SAFETY: SCORE', 'SAFETY: FLAG', 'OVERALL: SCORE', 'OVERALL: FLAG', 'AGE', 'GENDER', 'GENDER_ID', 'GENDER_SCORE', 'FEVER_VAL', 'FEVER_VAL_ID', 'FEVER_ONSET', 'FEVER_SCORE', 'COUGH_VAL', 'COUGH_VAL_ID', 'COUGH_ONSET', 'COUGH_SCORE', 'SORE_THROAT_VAL', 'SORE_THROAT_VAL_ID', 'SORE_THROAT_ONSET', 'SORE_THROAT_SCORE', 'COLD_VAL', 'COLD_VAL_ID', 'COLD_ONSET', 'COLD_SCORE', 'BREATH_VAL', 'BREATH_VAL_ID', 'BREATH_ONSET', 'BREATH_SCORE', 'VOMITING_VAL', 'VOMITING_VAL_ID', 'VOMITING_ONSET', 'VOMITING_SCORE', 'MET_VAL', 'MET_VAL_ID', 'MET_SCORE', 'WHERE_MET_VAL', 'WHERE_MET_VAL_ID', 'WHERE_MET_SCORE', 'WHERE_MET_OUTSIDE_VAL', 'WHERE_MET_OUTSIDE_VAL_ID', 'WHERE_MET_OUTSIDE_SCORE', 'FACETOFACE_NO_PROTECTION_VAL', 'FACETOFACE_NO_PROTECTION_VAL_ID', 'FACETOFACE_NO_PROTECTION_SCORE', 'FACETOFACE_YES_PROTECTION_VAL', 'FACETOFACE_YES_PROTECTION_VAL_ID', 'FACETOFACE_YES_PROTECTION_SCORE', 'DIABETES_VAL', 'DIABETES_VAL_ID', 'DIABETES_SCORE', 'COVID_POSITIVE_VAL', 'COVID_POSITIVE_VAL_ID', 'COVID_POSITIVE_SCORE', 'INTERNATIONAL_VAL', 'INTERNATIONAL_VAL_ID', 'INTERNATIONAL_SCORE', 'DOMESTIC_VAL', 'DOMESTIC_VAL_ID', 'DOMESTIC_SCORE', 'FESTIVAL_VAL', 'FESTIVAL_VAL_ID', 'FESTIVAL_SCORE', 'Q19_HOSPITAL_VAL', 'Q19_HOSPITAL_VAL_ID', 'Q19_HOSPITAL_SCORE', 'Q19_AIRPORT_VAL', 'Q19_AIRPORT_VAL_ID', 'Q19_AIRPORT_SCORE', 'Q19_BUS_RAILWAY_MARKET_VAL', 'Q19_BUS_RAILWAY_MARKET_VAL_ID', 'Q19_BUS_RAILWAY_MARKET_SCORE', 'Q19_NONE_OF_THE_ABOVE_VAL', 'Q19_NONE_OF_THE_ABOVE_VAL_ID', 'Q19_NONE_OF_THE_ABOVE_SCORE', 'Q19_OVERALL_SCORE', 'WFH_VAL', 'WFH_VAL_ID', 'WFH_SCORE', 'HOSPITAL_WORK_VAL', 'HOSPITAL_WORK_VAL_ID', 'HOSPITAL_WORK_SCORE', 'DRUGS_VAL', 'DRUGS_VAL_ID', 'DRUGS_SCORE', 'DOMESTIC_VAL', 'DOMESTIC_VAL_ID', 'DOMESTIC_HELP_SCORE', 'DELIVERY_BOYS_VAL', 'DELIVERY_BOYS_VAL_ID', 'DELIVERY_BOYS_SCORE', 'FACE_MASK_VAL', 'FACE_MASK_VAL_ID', 'FACE_MASK_SCORE', 'HAND_SANITISER_VAL', 'HAND_SANITISER_VAL_ID', 'HAND_SANITISER_SCORE', 'SOCIAL_DISTANCING_VAL', 'SOCIAL_DISTANCING_VAL_ID', 'SOCIAL_DISTANCING_SCORE', 'RAILINGS_LIFT_VAL', 'RAILINGS_LIFT_VAL_ID', 'RAILINGS_LIFT_SCORE', 'MAID_SANTISER_VAL', 'MAID_SANTISER_VAL_ID', 'MAID_SANTISER_SCORE', 'COMMON_AMENITIES_VAL', 'COMMON_AMENITIES_VAL_ID', 'COMMON_AMENITIES_SCORE', 'AVOID_TOUCHING_GRILLS_VAL', 'AVOID_TOUCHING_GRILLS_VAL_ID', 'AVOID_TOUCHING_GRILLS_SCORE']

	all_data = []
	all_res = ''

	q19_data = [{"aid":1,"value":"Hospital","value_id":3,"next_qid":20},{"aid":2,"value":"Airport","value_id":2,"next_qid":20},{"aid":3,"value":"Bus / railway station / Markets / provision stores / Religious places","value_id":1,"next_qid":20},{"aid":4,"value":"None of the above","value_id":0,"next_qid":20}]

	all_data.append(line0)

	for user in data:
		user_cur = db.new_users.find({'username': user['username']})
		user_data = json.loads(dumps(user_cur))[0]

		line_data = []

		line_data.append(str(phase))
		line_data.append(str(get_date_csv(user['time_stamp'])))
		line_data.append(str(user['username']))

		line_data.append(str(user_data['appartment_name']))
		line_data.append(str(user_data['block_name']).replace(',', '').replace('"',''))
		line_data.append(str(user_data['flat_no']).replace('"',''))

		line_data.append(str(user['scores'][0]['score']))
		line_data.append(str(flags[user['scores'][0]['flag']]))
		line_data.append(str(user['scores'][1]['score']))
		line_data.append(str(flags[user['scores'][1]['flag']]))
		line_data.append(str(user['scores'][2]['score']))
		line_data.append(str(flags[user['scores'][2]['flag']]))
		line_data.append(str(user['scores'][3]['score']))
		line_data.append(str(flags[user['scores'][3]['flag']]))


		f1 = False

		for i in range(1, 32):
			for x in user['assessment_data']:
				if(i == x['qid'] and i == 1):
					# print(x)
					line_data.append(str(x['selection']).replace(',', ''))
					f1 = False
					break
				elif(i == x['qid'] and i == 19):

					val = x['selection']

					overall_score = 0

					if(len(val) == 4):
					
						for k in range(len(val) - 1):
							if(val[k]['score'] != 0):
								line_data.append('Yes')
								line_data.append(val[k]['score'])
								line_data.append(q19_data[int(val[k]['score'])-1]['value_id'])

								overall_score += int(q19_data[int(val[k]['score'])-1]['value_id'])
							else:
								line_data.append('No')
								line_data.append('NA')
								line_data.append('0')

						if(val[3]['flag'] == 1 or val[3]['score'] != 0):
							line_data.append('Yes')
							line_data.append('4')
							line_data.append('0')
						else:
							line_data.append('No')
							line_data.append('NA')
							line_data.append('0')

						line_data.append(str(overall_score))

					else:
						line_data.append('NA')
						line_data.append('NA')
						line_data.append('0')
						line_data.append('NA')
						line_data.append('NA')
						line_data.append('0')
						line_data.append('NA')
						line_data.append('NA')
						line_data.append('0')
						line_data.append('NA')
						line_data.append('NA')
						line_data.append('0')
						line_data.append('0')

					f1 = False
					break
				elif((i == x['qid'] and x['qid'] >= 3) and (i == x['qid'] and x['qid'] <= 8)):
					line_data.append(str(x['selection']).replace(',', ''))
					line_data.append(str(x['value']))

					if(len(str(x['date'])) != 0):
						line_data.append(str(x['date']))
					else:
						line_data.append('NA')

					line_data.append(x['score'])
					
					f1 = False
					break
				elif(i == x['qid']):
					line_data.append(str(x['selection']).replace(',', ''))
					line_data.append(str(x['value']))
					line_data.append(x['score'])
					f1 = False
					break
				else:
					f1 = True
			if(f1):
				line_data.append('NA')
				line_data.append('NA')
				line_data.append('0')

		all_data.append(line_data)

	for i in range(len(all_data)):
		for j in range(len(all_data[i])):
			all_data[i][j] = str(all_data[i][j]).replace(',', '')

	for x in all_data:
		all_res += ','.join(x) + '\r\n'

	return all_res

def dash_data():
	cur = db.new_assessments.find().count()
	assessments_count_data = dumps(cur)

	cur = db.new_feedback.find().count()
	feedback_count_data = dumps(cur)

	cur = db.new_assessments.find({'assessment_data': {'$elemMatch': {'selection': 'Male'}}}).count()
	male_count_data = int(dumps(cur))

	cur = db.new_assessments.find({'assessment_data': {'$elemMatch': {'selection': 'Female'}}}).count()
	female_count_data = int(dumps(cur))

	mf_ratio = ':'.join(str(Fraction(round((female_count_data/male_count_data), 1)).limit_denominator()).split('/'))

	cur = db.all_apartments.find().count()
	apartment_count_data = dumps(cur)

	cur = db.new_assessments.find({"assessment_data.0.value": {"$lt": 60}}).count()
	data_60_minus = int(dumps(cur))

	cur = db.new_assessments.find({"assessment_data.0.value": {"$gte": 60}}).count()
	data_60_plus = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 0}}).count()
	data_low_count = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 1}}).count()
	data_moderate_count = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 2}}).count()
	data_high_count = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 0}, "assessment_data.0.value": {"$gte": 60}}).count()
	data_low_60_count = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 1}, "assessment_data.0.value": {"$gte": 60}}).count()
	data_moderate_60_count = int(dumps(cur))

	cur = db.new_assessments.find({"scores.3.flag": {"$eq": 2}, "assessment_data.0.value": {"$gte": 60}}).count()
	data_high_60_count = int(dumps(cur))


	return {
		'count': {'female': female_count_data, 'male': male_count_data},
		'age_count': {'60_minus': data_60_minus, '60_plus': data_60_plus},
		'risk_count': {'low': data_low_count, 'moderate': data_moderate_count, 'high': data_high_count},
		'risk_count_60': {'low': data_low_60_count, 'moderate': data_moderate_60_count, 'high': data_high_60_count},
		'assessments_count': assessments_count_data,
		'feedback_count': feedback_count_data,
		'mf_ratio': mf_ratio,
		'apartment_count': apartment_count_data,
		'csv_dump': ''
	}

def get_count_data():
	try:
		cur = db.new_assessments.find()
		data = json.loads(dumps(cur))

		cur_apa = db.all_apartments.find()
		data_apa = json.loads(dumps(cur_apa))

		appartments = []
		counts = []

		for x in data_apa:
			if 'id' in x and 'name' in x:
				appartments.append(x['id'])
				counts.append({'id': x['id'], 'name': x['name'], 'count': 0})

		appartments.append('OTH')
		counts.append({'id': 'OTH', 'name': 'Others', 'count': 0})

		for x in data:
			try:
				appartment_id = x['username'].split('_')[0]
				
				if(appartment_id in appartments):
					counts[appartments.index(appartment_id)]['count'] = counts[appartments.index(appartment_id)]['count'] + 1
			except (KeyError, IndexError):
				# Skip this entry if username doesn't exist or can't be split
				continue

		res = {'total': len(data), 'apartments': counts}
		return res
	except Exception as e:
		# Return empty data if there's an error
		return {'total': 0, 'apartments': [], 'error': str(e)}