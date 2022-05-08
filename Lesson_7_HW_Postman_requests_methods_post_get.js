{
	"info": {
		"_postman_id": "a1929de6-1020-4dbb-8e65-899885a1970c",
		"name": "HW_Postman_requests",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "EP_1",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/get_method?name=Vasiliy&age=33",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"get_method"
					],
					"query": [
						{
							"key": "name",
							"value": "Vasiliy"
						},
						{
							"key": "age",
							"value": "33"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_3",
			"request": {
				"method": "GET",
				"header": []
			},
			"response": []
		},
		{
			"name": "EP_4",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_2?name=Vasiliy&age=33&salary=1500",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_2"
					],
					"query": [
						{
							"key": "name",
							"value": "Vasiliy"
						},
						{
							"key": "age",
							"value": "33"
						},
						{
							"key": "salary",
							"value": "1500"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_5",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_3?name=Vasiliy&age=33&salary=1500",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_3"
					],
					"query": [
						{
							"key": "name",
							"value": "Vasiliy"
						},
						{
							"key": "age",
							"value": "33"
						},
						{
							"key": "salary",
							"value": "1500"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_6",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_4?name=Vasiliy&age=33&salary=1500",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"object_info_4"
					],
					"query": [
						{
							"key": "name",
							"value": "Vasiliy"
						},
						{
							"key": "age",
							"value": "33"
						},
						{
							"key": "salary",
							"value": "1500"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "EP_2",
			"request": {
				"method": "POST",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005"
				}
			},
			"response": []
		},
		{
			"name": "EP_7",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "Vasiliy",
							"type": "text"
						},
						{
							"key": "age",
							"value": "33",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1500",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_2",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_2"
					],
					"query": [
						{
							"key": "name",
							"value": "Vasiliy",
							"disabled": true
						},
						{
							"key": "age",
							"value": "33",
							"disabled": true
						},
						{
							"key": "salary",
							"value": "1500",
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	]
}