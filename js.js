$(function() {
  
var oneThousand = true;
var sections = $('ul.sections li');
var current;
var others;
var aboutMe = $('#about-me').html();
var portfolio = $('#portfolio').html();
var contactMe = $('#contact-me').html();

sections.on('click', function() {
  if (!$(this).hasClass('current')) {
    current = $(this).index();
    slide(current);
  }
});

function slide(current) {
  var sections = $('ul.sections li');
  sections.removeClass('current').eq(current).addClass('current');
  others = $('ul.sections li:not(.current)');
  others.fadeOut('fast').promise().done(function() {
    $('ul.sections li').html(sections.eq(current));
    sections.eq(current).animate({'left': '39%'}, 300, function() {
      $('.sections').prepend(others.eq(0).fadeIn('slow').css({"display":"inline-block", "left":"9%"}));
      $('.sections').append(others.eq(1).fadeIn('slow').css({"display":"inline-block", "left":"68%"}));
    }); 
    $('#content').fadeOut('fast', function() {
      fillContent();
    });
  })
};

function fillContent() {
  switch($('.current').attr('id')) {
  case 'first':
    $('#content').html(portfolio).fadeIn('fast');
    break;
  case "second":
    $('#content').html(aboutMe).fadeIn('fast');
    break;
  case "third":
    $('#content').html(contactMe).fadeIn('fast'); 
    break; 
  }
}

});