$(function() {
  
var oneThousand = true;
var sections = $('ul.sections li');
var current;
var others;
var aboutMe = "<h2>About Me</h2>" +
              "I'm Jacob Haile, a junior web developer for hire. I like pizza, " + 
              "but I love coding. Some of the languages that take up most of my time " +
              "are Ruby on Rails, Javascript, HTML/CSS/Jquery, and Backbone.js.";
var contactMe = "<h2>Contact Me</h2>" + 
                "<a href=\"mailto:jacobhaile@gmail.com\">jacobhaile@gmail.com</a><br>" + 
                "<a href=\"http://www.linkedin.com/in/jacobhaile\">LinkedIn</a><br>" + 
                "<a href=\"http://www.github.com/jacobhaile\">Github</a><br>" +
                "<a href=\"https://www.dropbox.com/s/svkgvmll572xxev/Jacob_Haile_Resume.pdf\">My Resume</a>";
var portfolio = "<h2>My Projects</h2>" +
                "<div style=\"width:100%;\">" +
                  "<div style=\"display:inline-block; float:left; width:30%;\">" +
                    "<a style=\"color:blue; text-align:left;\" href=\"https://github.com/jacobhaile/pictur/\">Pictur</a>" + 
                  "</div>" +
                  "<div style=\"display:inline-block; overflow:hidden; width:70%; text-align:left; line-height:150%;\">" +
                  "Social image sharing site with commenting, favoriting, and " + 
                  "voting using AJAX, incorporating extensive CSS and a focus on the finer detail." +
                  "</div>" +
                  
                  "<br>" +
                  
                  "<div style=\"display:inline-block; float:left; width:30%;\">" +
                    "<a style=\"color:blue; text-align:left;\" href=\"http://jacobhaile.github.io/asteroids/\">Asteroids</a>" + 
                  "</div>" +
                  "<div style=\"display:inline-block; overflow:hidden; width:70%; text-align:left; line-height:150%;\">" +
                  "Browser playable arcade game, developed using JS and HTML" + 
                  "Canvas. Uses clever mathematical calculations and vectors to" + 
                  "determine momentum and trajectories of asteroids and ships. WASD to move, P to shoot." +
                  "</div>" +
                  
                  "<br>" +
                  
                  "<div style=\"display:inline-block; float:left; width:30%;\">" +
                    "<a style=\"color:blue; text-align:left;\" href=\"https://github.com/zh2009/CHIPS\">CHIPS</a>" + 
                  "</div>" +
                  "<div style=\"display:inline-block; overflow:hidden; width:70%; text-align:left; line-height:150%;\">" +
                  "A team made Android application built to keep track of a" + 
                  "user’s dietary consumption habits and offers meal suggestions" + 
                  " adhering to user selected health goals based on ingredients" + 
                  " the user possesses." +
                  "</div>" +
                  
                "</div>";
                
                  
                

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