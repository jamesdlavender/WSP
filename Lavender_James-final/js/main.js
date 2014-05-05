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
    $( this ).append( $( "<div class='img-toggle'><img class='favorite-not-banner' src='img/fav-not-saved.png' title='Add to favorites'><img class='favorite-banner' src='img/fav-saved.png' title='Add to favorites'></div>" + "<a href='details.html#start'><p class='details'>View Details</p></a>").hide().fadeIn(600));
  }, 
  function() {
    $( this ).find( ".favorite-banner" ).fadeOut(100);
    $( this ).find( ".details" ).fadeOut(100);
  }
);


$( ".login p" ).click(function() {
  $( ".login form" ).toggle( "fast", function() {
    // Animation complete.
  });
});

$( ".sign-in-m" ).click(function() {
  $( ".buttons form" ).toggle( "fast", function() {
    // Animation complete.
  });
});

$( ".filter" ).click(function() {
  $( ".filter-select" ).toggle( "fast", function() {
  });
});

$( ".filter-select" ).mouseleave(function() {
  $( this ).fadeOut();
});

$( ".filter-m" ).click(function() {
  $( ".filter-select" ).toggle( "fast", function() {
  });
});

$( ".filter-select" ).mouseleave(function() {
  $( this ).fadeOut();
});

$( ".game-goer" ).mouseleave(function() {
  $( ".login form" ).fadeOut();
});

$( ".game-goer" ).hover(
   function() {
     $('.login p').slideDown();
      $('.sign-up').slideDown();
   },
   function(){
   	 $('.login p').fadeOut(200);
   	 $('.sign-up').fadeOut(200);
   });

$('.button').click(function() {
    window.location.href = 'account.html';
    return false;
});






})(jQuery); // end private scope
