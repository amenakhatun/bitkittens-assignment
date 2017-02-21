$(document).ready(function() {

  $('.summon-cats').on('click', function(){
    console.log("clicked");


    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json',
      }).done(function(data) {



         for(var i=0; i < data.cats.length; i++) {
           $('<img>').attr('src', data.cats[i]['photo']).attr('alt', 'Photo of: ' + data.cats[i]['name'])
                .appendTo('#cat' + (i + 1) )
              })

    });

  });
});


//
// Creates a new <img> tag
// Sets the src attribute of the <img> to the cat's photo
// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
// Inserts that <img> into one of the empty .cat-box divs
