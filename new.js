
var firstNumber;
var operation;
$(".digits").click(function() {
	$("#resultSpace").val($("#resultSpace").val() + $(this).val());	 
});

$(".zero").click(function() {
    if ($("#resultSpace").val() === "0") { 
    $("#resultSpace").val() === "0" } else {
				$("#resultSpace").val($("#resultSpace").val() + $(this).val());	 
			}
	 
});
$(".dot").click(function() {
	if ($("#resultSpace").val() === ""){
    $("#resultSpace").val() = null;
    } else {
        if ($("#resultSpace").val().indexOf('.') === -1 ){
            	$("#resultSpace").val($("#resultSpace").val() + $(this).val());	
            
        }
    }	 
});

$(".calculatons").click(function() {
	firstNumber = +$("#resultSpace").val();
	operation = $(this).val();
	$("#resultSpace").val("");
    
});

$(".plusMinus").click(function() {
	$("#resultSpace").val($("#resultSpace").val() * (-1));
})

$(".clear").click(function() {
	$("#resultSpace").val("");
	firstNumber = null;
    operation = null;
});

$(".equall").click(function() {
	switch(operation) {
		case "+":
			$("#resultSpace").val(firstNumber + +$("#resultSpace").val());
            operation = null;
			break;
		case "-":
			$("#resultSpace").val(firstNumber - $("#resultSpace").val());
            operation = null;
			break;
		case "*":	
			$("#resultSpace").val(firstNumber * $("#resultSpace").val());
			operation = null;
            break;
		case "/":
			if ($("#resultSpace").val() === "0") {                               
            alert("Деление на ноль");
			} else {
				$("#resultSpace").val(firstNumber / $("#resultSpace").val());
			}
            operation = null;
			break;	
	}
});

