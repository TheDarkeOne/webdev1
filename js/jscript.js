$(function(){
	
	$('#thumbBox').on( "mouseover", function(e){
		if ($(this).css("height") == '200px')
		{
			$(this).css({"transform": "scale(1.1)", "transition-duration": "300ms"});
		}
	});
	
	$('#thumbBox').on( "mouseout", function(e){
		$(this).css({"transform": "scale(1)", "transition-duration": "300ms"});
	});
	
	$('#thumbBox').on( "click", function(e){
		$(this).css({"transform": "scale(1)", "transition-duration": "300ms"});
	
		
		if ($(this).css("height") == '500px')
		{
			$(this).css({"height": "200px", "width": "200px"})
			$(this).css({"transform": "scale(1.1)", "transition-duration": "300ms"});
		}
		else{
			$(this).css({"height": "500px", "width": "500px"});
		}
	});
	
	$('#navButton').on( "click", function(e){
		if($('#navBar').css("display") == 'none')
		{
			$('#navBar').css({"display": "block"});
		}
		else
		{
			$('#navBar').css({"display": "none"});
		}
		
	});	
	
});


