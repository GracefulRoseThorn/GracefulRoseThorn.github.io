var express = require("express");
var app = express();
var PORT = 8089;
// get an instance of router
var router = express.Router();

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
    res.send('im the home page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
    res.send('im the about page!'); 
});

// apply the routes to our application
app.use('/', router);

//route('/filename'(css,js,etc...));
//all the assigment is is to recreate your files to connect to your other files(express does this) you can choose what kind of files it links to.

app.get('/Cal/:operator/:num1/:num2', function(req,res){
	
	var operator = req.params.operator
	var num1 = parseInt(req.params.num1);
	var num2 = parseInt(req.params.num2);
	var result;

	switch(operator){
		case "a":
		result = add(num1, num2);
		break;

		case "s":
		result = subtract(num1, num2);
		break;

		case "m":
		result = multiply(num1, num2);
		break;

		case "d":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}

	res.json(result);
});

app.get("/Cal", function(req, res){
	res.send("hello! This site is a calculator using the site name. you can only do one operation at a time and must input as such: operation/integer/integer<br> operations include:<br>a(add)<br>s(subtract)<br>m(multiply)<br>d(divide)<br><br>Example: localhost:(port)/a/12/1<br>(adds 12 and 1)");
});

//listener
app.listen(PORT, function(){
	console.log("App listening on PORT:" + PORT);
});