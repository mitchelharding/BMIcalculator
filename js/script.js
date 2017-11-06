var bmiCalc = function(number1, number2){
return (number1 / (number2 * number2)) *703;
};

var number1 = parseInt(prompt("What is your weight in lbs?"));

var number2 = parseInt(prompt("what is your height in inches?"));

var result = bmiCalc(number1, number2);


if (result<18.5) { alert("You are underweight.")
};

if(result>18.5) {
alert("You are of nomral weight.")
};

if(result>25) {
alert("You are over-weight.")
};

if(result>29){
alert("You are obese.")
};
