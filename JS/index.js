const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav .nav-items li a');

window.addEventListener('scroll', ()=>{
  let current = '';

  sections.forEach(section =>{
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >=(sectionTop - sectionHeight/ 3)){
      current = section.getAttribute('id');
    }

  })
   navLi.forEach(li =>{
     li.classList.remove('active');
     if(li.classList.contains(current)){
       li.classList.add('active');
     }
   })
})



function toggle_display()
{
    var navbar = document.getElementById("navbar2");
   
    var display_setting = navbar.style.display;

    var nav_button = document.getElementById('nav_toggle');

    if (display_setting == 'block') {
      navbar.style.display = 'none';
    }
    else {  
      navbar.style.display = 'block';
      
    }
  }


