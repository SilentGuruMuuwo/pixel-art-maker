//declaring the height, width and color variables
var height, width, color;
$('#sizePicker').on('submit', function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWidth').val();
	color = $('#colorPicker').val();
//we call the makegrid function below
	makeGrid(height, width);
});

function makeGrid(h,w) {
//creating the makegrid function which allows us to input height and width values for the grid
	$('tr').remove();
	for(var i = 1; i<=h; i++){
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for(var j = 1; j<=w; j++){
			$('tr').filter(':last').append('<td></td>');
			$('td').attr("class", 'cells');
		}
	};
	//this section of the code allows you to allocate colors to the cells in the grid created
	$('.cells').click(function (event) {
  		var paint = $('#colorPicker').val();
  		$(event.target).css('background-color', paint);
	});
};
