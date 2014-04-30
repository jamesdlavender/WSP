(function($){

var number = (Math.random() * 9)+1;


 $('#search-button').click(function() {
    var search = $('#search').val();
    window.location.href = 'result.html?search=' + search; //This line is edited
    $('.show-result').append( ' "' + search + '"');
    return false;
});

function getUrlVars() { 
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
});
return vars;
}

var search = getUrlVars()["search"]; 
 $('.show-result').append( ' "' + search + '"');

$('#sign-up-button').click(function() {
    window.location.href = 'sign-up.html';
    return false;
});

 $('.games li').append( $( "<div class='rating'><p>"+number.toFixed(1)+"</p></div>" ) );

$( ".games li" ).hover(
  function() {
    $( this ).append( $( "<img class='favorite-banner' src='img/fav-not-saved.png'>" + "<a href='details.html'><p class='details'>View Details</p></a>").hide().fadeIn(800));
  }, function() {
    $( this ).find( ".favorite-banner" ).fadeOut(100);
    $( this ).find( ".details" ).fadeOut(100);
  }
);







})(jQuery); // end private scope
