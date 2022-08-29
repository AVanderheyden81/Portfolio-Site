console.log("Arin's Portfolio Site")



function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

//apply a function for the onclick attribute which has been assigned a value of "menuToggle". Then assign a variable to the hamburger menu object telling it to search the document using the method which returns the value by looking for a matching id in the HTMl in this case "myNavtoggle" and assigns that value to X.

// X is now equal myNavtoggle

//to ensure the menu items appear/dissapear on click X (myNavtoggle) now needs to be made responsive by applying the property (.class.Name)  to X telling it to be responsive by adding the ' responsive' class to the current/clicked (+=) hamburger menu.

// X (myNavtoggle) is now also reponsive
