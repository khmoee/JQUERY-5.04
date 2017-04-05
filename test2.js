			

var radiobuttonResult = 0;	  
var checkBoxResult = 0;
$(function() {
	$(".result").bind("click", function() {
		radiobuttonResult = 0;
		var radio = $(".radioButton");
		for (var i = 0; i < radio.size(); i++) {
			if (radio.eq(i).prop("checked")) {
				radiobuttonResult++;
			}
		}
	
		checkBoxResult = 0;
		var check = $(".checkBox1");
		
		for (var j = 0; j < check.size(); j++) {
			if (check.eq(j).prop("checked")) {
				if (check.eq(j).hasClass("checkB")) {
					checkBoxResult += 0.5;
				} else {
					checkBoxResult -= 0.5;
				}
			}
		}
		if (checkBoxResult > 0) {
			radiobuttonResult += checkBoxResult;
		}
		
		checkBoxResult = 0;
		var check = $(".checkBox2");
		for (var k = 0; k < check.size(); k++) {
			
			
			if (check.eq(k).prop("checked")) {
				if (check.eq(k).hasClass("checkB")) {
					checkBoxResult += 0.5;
				} else {
					checkBoxResult -= 0.5;
				}
			}
		}
		if (checkBoxResult > 0) {
			radiobuttonResult += checkBoxResult;
		}
		alert("Всего " + radiobuttonResult + " набранно , верных ответов " + radiobuttonResult * 20 + "%");
	});
});
