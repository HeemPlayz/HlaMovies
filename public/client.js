/*
// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};
*/








$('.strip').each(function(){
  var $t = $(this),
      rows = $.trim($t.html()).split('<br>');

  $t.html('');

  $.each(rows, function(i, val){
    $('<span class="row"></span>').appendTo($t);

    var letters = $.trim(val).split('');

    $.each(letters, function(j, v){
      v = (v == ' ') ? '&nbsp;' : v;
      $('<span>' + $.trim(v) + '</span>').appendTo($('.row:last', $t));
    });

  });
});

$('body').click(function(){
  for (i = 0; i < $('.strip span').length; i++) {
    (function(ind) {
      setTimeout(function(){
          $('.strip span:not(".row")').eq(ind).toggleClass('animate');
      }, ind * 15);
    })(i);
  }
}).click();