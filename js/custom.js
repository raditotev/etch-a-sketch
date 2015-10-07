function createGrid(rows, cols){	
	div_row = "<div class='row'></div>"
	div_col = "<div class='col'></div>"
	for (var i = 0; i < rows; i++) {
		$('.container').append(div_row);		
	}
	for (var j = 0; j < cols; j++){
			$('.row').append(div_col);
	}	

}

function draw(){
	$('.col').hover(
		function(){
    		$(this).css("background-color", "yellow");
    	}, 
    	function(){
    		$(this).css("background-color", "gray");
	});
}

function dialog(){
	$("#dialog").dialog({
		autoOpen: false
	});
}

function button(){
  	$(".container").empty();  	
	$("#dialog").dialog('open');		
	
}

function newDrawing(){		
	$("#submit").click(function(e) {
		var rows = $("#rows").val();
		var cols = $("#cols").val();

		var box_size_height =  Math.floor(960/rows);
		var box_size_width =  Math.floor(960/cols);
		var box_size = {'width': box_size_width +'px', 'height': box_size_height + 'px'};

		if (rows === '' || cols === '') {
			alert("Please give number of rows and columns!");
			e.preventDefault();
		}
		$(".ui-dialog-content").dialog("close");
		e.preventDefault();		
		createGrid(rows, cols);
		$('.col').css(box_size);
		draw();		
	});		
}

$(document).ready(function(){		
	dialog();	
	newDrawing();		
});