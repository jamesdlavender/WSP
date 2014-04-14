(function($){




$('#search-button').click(function() {
	
	var search = $('#search').val();

  window.location.href = 'result.html';//
    
    $('.show-result').append( ' "' + search + '"');
    return false;
});

$('#sign-up-button').click(function() {
    window.location.href = 'sign-up.html';
    return false;
});







})(jQuery); // end private scope
