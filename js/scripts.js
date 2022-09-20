
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

//apply a function for the onclick attribute which has been assigned a value of "menuToggle". Then assign a variable to the hamburger menu object telling it to search the document using the method which returns the value by looking for a matching id in the HTMl in this case "myNavtoggle" and assigns that value to X.

// X is now equal myNavtoggle

//to ensure the menu items appear/dissapear on click X (myNavtoggle) now needs to be made responsive by applying the property (.class.Name)  to X telling it to be responsive by adding the ' responsive' class to the current/clicked (+=) hamburger menu.

// X (myNavtoggle) is now also reponsive

////////////////////////////////////////////////////////

// call for Owl initializer function for carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});


// Auto width style caroseul function
$('.owl-carousel').owlCarousel({
    margin:100,
    loop:false,
    autoWidth:false,
    items:1
})

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "25%";  // IE10
    elements[i].style.flex = "25%";
  }
}
