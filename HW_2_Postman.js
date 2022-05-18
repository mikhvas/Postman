{
	"info": {
		"_postman_id": "181742b5-0a2e-475f-8052-f56adfe52871",
		"name": "HW_2 Postman",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "1 http://162.55.220.72:5005/first",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"pm.test(\"Body is correct\", function () {\r",
							"    pm.response.to.have.body(\"This is the first responce from server!\");\r",
							"}); // проверяем значение типа данных string\r",
							"pm.test(\"Body matches string\", function () {\r",
							"    pm.expect(pm.response.text()).to.include(\"\");\r",
							"});   //проверяем тип данных string"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/first",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"first"
					]
				}
			},
			"response": []
		},
		{
			"name": "2 http://162.55.220.72:5005/user_info_3",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"// Статус код 200\r",
							"\r",
							"\r",
							"\r",
							"// let jsonBody = JSON.parse(responseBody);\r",
							"// console.log(jsonBody)\r",
							"// console.log(responseBody)\r",
							"\r",
							"let jsonData = pm.response.json()  \r",
							"  // спарсить response body в json\r",
							"console.log(jsonData)\r",
							"\r",
							"pm.test(\"name pass\", function () {\r",
							"    pm.expect(jsonData.name).to.eql(\"Vasiliy\")  //Проверить, что name в ответе равно name s request (name вбить руками.)\r",
							"});\r",
							"pm.test(\"age pass\", function () {\r",
							"    pm.expect(jsonData.age).to.eql(\"33\")    // Проверить, что age в ответе равно age s request (age вбить руками.)\r",
							"});\r",
							"\r",
							"pm.test(\"salary pass\", function () {\r",
							"    pm.expect(jsonData.salary).to.eql(2000)  //Проверить, что salary в ответе равно salary s request (salary вбить руками.)\r",
							"});\r",
							"\r",
							"\r",
							"let req = request.data; //Спарсить request.\r",
							"console.log(req)\r",
							"\r",
							"\r",
							"pm.test(\"name в ответе равно name s request\", function () {\r",
							"    pm.expect(jsonData.name).to.eql(req.name)  //Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"});\r",
							"\r",
							"pm.test(\"age в ответе равно age s request\", function () {\r",
							"    pm.expect(jsonData.age).to.eql(req.age)  //Проверить, что age в ответе равно age s request (age забрать из request.)\r",
							"});\r",
							"\r",
							"pm.test(\"salary в ответе равно salary s request \", function () {\r",
							"    pm.expect(jsonData.salary).to.eql(+ req.salary)  //Проверить, что salary в ответе равно salary s request (salary забрать из request.)\r",
							"});\r",
							"\r",
							"console.log(jsonData.family)  // Вывести в консоль параметр family из response.\r",
							"\r",
							"\r",
							"// Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)\r",
							"pm.test(\"u_salary_1_5_year в ответе равно salary*4\", function () {\r",
							"    pm.expect(jsonData.family.u_salary_1_5_year).to.eql(req.salary *4)\r",
							"});  \r",
							"\r",
							""
						],
						"type": "text/javascript"
					}
				}
			],
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
							"value": "2000",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/user_info_3",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"user_info_3"
					]
				}
			},
			"response": []
		},
		{
			"name": "3 http://162.55.220.72:5005/object_info_3",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});  // Статус код 200\r",
							"\r",
							"let jsonData = pm.response.json();   //Спарсить response body в json.\r",
							"console.log(jsonData)\r",
							"\r",
							"let req1 = pm.request.url.query.all();  //Спарсить request через all возвращает массив\r",
							"console.log(req1)\r",
							"\r",
							"pm.test(\"name в ответе равно name s request all\", function () {\r",
							"    pm.expect(jsonData.name).to.eql(req1[0].value) \r",
							"}); \r",
							"\r",
							"let req = pm.request.url.query.toObject();  //Спарсить request возвращает объект\r",
							"console.log(req)\r",
							"\r",
							"pm.test(\"name в ответе равно name s request toObject\", function () {\r",
							"    pm.expect(jsonData.name).to.eql(req.name) \r",
							"});  //Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"\r",
							"pm.test(\"age в ответе равно age s request\", function () {\r",
							"    pm.expect(jsonData.age).to.eql(req.age) \r",
							"\r",
							"});  //Проверить, что age в ответе равно age s request (age забрать из request.)\r",
							"\r",
							"pm.test(\"salary в ответе равно salary s request\", function () {\r",
							"    pm.expect(jsonData.salary).to.eql(+ req.salary) \r",
							"\r",
							"});\r",
							"\r",
							"console.log(jsonData.family)  //Вывести в консоль параметр family из response.\r",
							"\r",
							"pm.test(\"Проверить, что у параметра dog есть параметры name\", function () {\r",
							"     pm.expect (jsonData.family.pets.dog).to.have.property(\"name\") ;\r",
							"}); \r",
							"//Проверить, что у параметра dog есть параметры name.\r",
							"pm.test(\"Проверить, что у параметра dog есть параметры age\", function () {\r",
							"     pm.expect (jsonData.family.pets.dog).to.have.property(\"age\") ;\r",
							"}); \r",
							"// Проверить, что у параметра dog есть параметры age.\r",
							"\r",
							"pm.test(\"Проверить, что параметр name имеет значение Luky\", function () {\r",
							"    pm.expect(jsonData.family.pets.dog.name).to.eql(\"Luky\") \r",
							"});\r",
							"//Проверить, что параметр name имеет значение Luky.\r",
							"\r",
							"pm.test(\"Проверить, что параметр age имеет значение 4.\", function () {\r",
							"    pm.expect(jsonData.family.pets.dog.age).to.eql(4) \r",
							"});\r",
							"\r",
							"//Проверить, что параметр age имеет значение 4."
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_3?name=Vasiliy&age=33&salary=2000",
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
							"value": "2000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "4 http://162.55.220.72:5005/object_info_4",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});  // Статус код 200\r",
							"\r",
							"let jsonData = pm.response.json();\r",
							"console.log(jsonData);  //Спарсить response body в json.\r",
							"\r",
							"let req = pm.request.url.query.toObject();\r",
							"console.log(req)  //Спарсить request.\r",
							"\r",
							"pm.test(\"name в ответе равно name s request toObject\", function () {\r",
							"    pm.expect(jsonData.name).to.eql(req.name) \r",
							"}); //Проверить, что name в ответе равно name s request (name забрать из request.)\r",
							"pm.test(\"Проверить, что age в ответе равно age из request\", function () {\r",
							"    pm.expect(jsonData.age).to.eql(+ req.age) \r",
							"}); //Проверить, что age в ответе равно age из request (age забрать из request.)\r",
							"\r",
							"console.log(req.salary) //Вывести в консоль параметр salary из request.\r",
							"\r",
							"console.log(jsonData.salary) // Вывести в консоль параметр salary из response.\r",
							"console.log(jsonData.salary[0]) //Вывести в консоль 0-й элемент параметра salary из response.\r",
							"\r",
							"console.log(jsonData.salary[1]) //Вывести в консоль 1-й элемент параметра salary параметр salary из response.\r",
							"\r",
							"console.log(jsonData.salary[2]) //Вывести в консоль 2-й элемент параметра salary параметр salary из response.\r",
							"\r",
							"pm.test(\"0-й элемент параметра salary равен salary из request\", function () {\r",
							"    pm.expect(jsonData.salary[0]).to.eql(+ req.salary) \r",
							"}); //Проверить, что 0-й элемент параметра salary равен salary*2 из request (salary забрать из request.)\r",
							"pm.test(\"1-й элемент параметра salary равен salary*2 из request\", function () {\r",
							"    pm.expect(+ jsonData.salary[1]).to.eql(req.salary*2) \r",
							"}) //Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"2-й элемент параметра salary равен salary*3 из request\", function () {\r",
							"    pm.expect(+ jsonData.salary[2]).to.eql(req.salary*3) \r",
							"}) //Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)\r",
							"\r",
							"\r",
							"pm.environment.set(\"name\", req.name); //Передать в окружение переменную name\r",
							"pm.environment.set(\"age\", req.age); //Передать в окружение переменную age\r",
							"pm.environment.set(\"salary\", req.salary); //Передать в окружение переменную salary\r",
							"\r",
							"for (let i = 0; i < 3 ; i++) {\r",
							"    console.log(\"salary \", jsonData.salary[i])\r",
							"}\r",
							"//Написать цикл который выведет в консоль по порядку элементы списка из параметра salary. можно реализовать i < jsondata.salary.length[i]"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://162.55.220.72:5005/object_info_4?name=Vasiliy&age=33&salary=2000",
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
							"value": "2000"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "5  http://162.55.220.72:5005/user_info_2",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"pm.test(\"Status code is 200\", function () {\r",
							"    pm.response.to.have.status(200);\r",
							"});\r",
							"\r",
							"let jsonData = pm.response.json();//Спарсить response body в json.\r",
							"console.log(jsonData);\r",
							"\r",
							"let req = request.data; //Спарсить request.\r",
							"console.log(req)\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр start_qa_salary\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"start_qa_salary\") ;\r",
							"}); \r",
							"//Проверить, что json response имеет параметр start_qa_salary\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр qa_salary_after_6_months\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"qa_salary_after_6_months\") ;\r",
							"}); //Проверить, что json response имеет параметр qa_salary_after_6_months\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр qa_salary_after_12_months\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"qa_salary_after_12_months\");\r",
							"}); //Проверить, что json response имеет параметр qa_salary_after_12_months\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр qa_salary_after_1.5_year\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"qa_salary_after_1.5_year\");\r",
							"}); //Проверить, что json response имеет параметр qa_salary_after_1.5_year\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр qa_salary_after_3.5_years\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"qa_salary_after_3.5_years\");\r",
							"}); //Проверить, что json response имеет параметр qa_salary_after_3.5_years\r",
							"\r",
							"pm.test(\"Проверить, что json response имеет параметр person\", function () {\r",
							"     pm.expect (jsonData).to.have.property(\"person\");\r",
							"}); //Проверить, что json response имеет параметр person\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.start_qa_salary).to.eql(+ req.salary) \r",
							"}); //Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.qa_salary_after_6_months).to.eql(+ req.salary*2) \r",
							"}); //Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.qa_salary_after_12_months).to.eql(+ req.salary*2.7) \r",
							"}); //Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData[\"qa_salary_after_1.5_year\"]).to.eql( req.salary*3.3) \r",
							"}); //Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData[\"qa_salary_after_3.5_years\"]).to.eql(req.salary*3.8) \r",
							"}); //Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)\r",
							"\r",
							"pm.test(\"Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.person.u_name[1]).to.eql(+req.salary) \r",
							"}); //Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что что параметр u_age равен age из request (age забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.person.u_age).to.eql(+req.age) \r",
							"}); //Проверить, что что параметр u_age равен age из request (age забрать из request.)\r",
							"\r",
							"\r",
							"pm.test(\"Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)\", function () {\r",
							"    pm.expect(jsonData.person.u_salary_5_years).to.eql(+req.salary*4.2) \r",
							"}); //Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)"
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "formdata",
					"formdata": [
						{
							"key": "name",
							"value": "{{name}}",
							"type": "text"
						},
						{
							"key": "age",
							"value": "{{age}}",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "{{salary}}",
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
							"value": "{{name}}",
							"disabled": true
						},
						{
							"key": "age",
							"value": "{{age}}",
							"disabled": true
						},
						{
							"key": "salary",
							"value": "{{salary}}",
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	]
}
