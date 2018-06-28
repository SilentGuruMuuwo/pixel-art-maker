// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	makeGrid(height, width);
});

function makeGrid(h,w) {

	$('tr').remove();
	for(var i = 1; i<=h; i++){
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(var j = 1; j<=w; j++){
			$('table' + i).append('<td></td>');
		}
	};
	$('td').click(function addColor(){
		color = $('#colorPicker').value();

		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else {
			$(this).attr('style','background-color' + color);
		}

	});

};
