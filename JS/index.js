function toggle_display()
{
    var navbar = document.getElementById("navbar");
   
    var display_setting = navbar.style.display;

    var nav_button = document.getElementById('nav_toggle');

    if (display_setting == 'block') {
      navbar.style.display = 'none';
    }
    else {  
      navbar.style.display = 'block';
      
    }
  }