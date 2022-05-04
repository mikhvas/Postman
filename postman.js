{
	"info": {
		"_postman_id": "a414e265-327a-4313-b35a-70b2762f79c4",
		"name": "ksendzov",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "POST autotest",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// pm.test(\"Status code is 200\", function () {\r",
							"//     pm.response.to.have.status(200);\r",
							"// });\r",
							"\r",
							"// let item_1 = \"alex\"\r",
							"\r",
							"// pm.test(\"item_1 test_3\", function(){\r",
							"\r",
							"//   pm.expect (item_1).to.deep.equal(\"alex\")     //equal ожидает и сравнивает переменные\r",
							"// })\r",
							"const person = pm.response.json();\r",
							"\r",
							"// let person = {\r",
							"//     \"age\": \"33\",\r",
							"//     \"family\": {\r",
							"//         \"children\": [\r",
							"//             [\r",
							"//                 \"Alex\",\r",
							"//                 24\r",
							"//             ],\r",
							"//             [\r",
							"//                 \"Kate\",\r",
							"//                 12\r",
							"//             ]\r",
							"//         ],\r",
							"//         \"u_salary_1_5_year\": 4000\r",
							"//     },\r",
							"//     \"name\": \"Vasiliy\",\r",
							"//     \"salary\": 1000\r",
							"// }\r",
							"\r",
							"\r",
							"pm.test(\"person age\", function(){\r",
							"\r",
							"  pm.expect (+person.age).to.deep.equal(33)   //возраст в json пришел в string, мы переводим +person\r",
							"})\r",
							"\r",
							"\r",
							"pm.test(\"person family.children\", function(){\r",
							"\r",
							"  pm.expect (person.family.children[1][1]).to.deep.equal(12)   //equal сравнивает данные из массива путь массива person.family.children[1][1]\r",
							"})\r",
							"pm.test(\"person property name\", function(){\r",
							"pm.expect (person).to.have.property(\"name\")         //property - параметр нашего json (key-value) выводим name\r",
							"})\r",
							"\r",
							"pm.test(\"person salary\", function(){\r",
							"pm.expect (person).to.deep.include({salary:1000})         //include- определяет содержит ли массив какой-либо элемент, выводим salary\r",
							"})\r",
							"\r",
							"pm.test(\"person Kate\", function(){\r",
							"pm.expect (person.family.children[1]).to.deep.include(12)         //выводим Kate из массива\r",
							"})\r",
							"\r",
							"\r",
							"pm.test(\"person Array\", function(){\r",
							"pm.expect (person.family.children[1]).to.be.a(\"Array\")         //выводим тип данных\r",
							"})\r",
							"\r",
							"pm.test(\"person Number\", function(){\r",
							"pm.expect (person.family.children[1][1]).to.be.a(\"Number\")         //выводим тип данных\r",
							"})\r",
							"\r",
							"pm.test(\"person string\", function(){\r",
							"pm.expect (person.name).to.be.a(\"string\")         //выводим тип данных\r",
							"})\r",
							"\r",
							"\r",
							"\r",
							"pm.test(\"person massive_type\", function(){\r",
							"pm.expect (person.family.children[1]).to.be.an(\"Array\").that.include(12)         //проверям тип данных и определяем число в массиве\r",
							"})\r",
							"\r",
							"pm.test(\"person massive_type1\", function(){\r",
							"pm.expect (person.family.children[0]).to.deep.eql([\"Alex\", 24])               //сравниваем массив с массивом через eql(equal)\r",
							"\r",
							"})\r",
							"\r",
							"\r",
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
							"key": "age",
							"value": "33",
							"type": "text"
						},
						{
							"key": "salary",
							"value": "1000",
							"type": "text"
						},
						{
							"key": "name",
							"value": "Vasiliy",
							"type": "text"
						},
						{
							"key": "auth_token",
							"value": "/s34lfgbj/Vadim/jjd909/12242kjkWpqc322823r23r3r457271evny",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://162.55.220.72:5005/get_test_user",
					"protocol": "http",
					"host": [
						"162",
						"55",
						"220",
						"72"
					],
					"port": "5005",
					"path": [
						"get_test_user"
					]
				}
			},
			"response": []
		}
	]
}
