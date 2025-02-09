//nav menu open
const navMenu = document.getElementById("nav-menu"),
 navToggle = document.getElementById("nav-toggle"),
 navClose = document.getElementById("nav-close")

if(navToggle){
  navToggle.addEventListener(('click'), () => {
    navMenu.classList.add('show-menu')
  })
}

//nav menu close
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

//navigating the home page
const navLinks=document.querySelectorAll('.nav-link')

function LinkAction()
{
  const navMenu = document.getElementById('nav-menu')
  //after clicking on link we remove the nav-menu
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click',LinkAction))


//scroll-header
function scrollHeader()
{
  const header = document.getElementById("header")
  if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

//theme customization
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes =document.querySelectorAll('.choose-size span');
const colorPalette=document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');
//open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';  
}
//close Modal
const closeThemeModal = (e) => {
   if(e.target.classList.contains('customize-theme'))
   {
    themeModal.style.display='none';
   }
}
theme.addEventListener("click",openThemeModal)
themeModal.addEventListener("click",closeThemeModal)

//remove active class from span or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
  let fontSize;
  size.classList.toggle('active');
  if(size.classList.contains('font-size-1'))
  {
    fontSize='12px'
  }
  else  if(size.classList.contains('font-size-2'))
  {
    fontSize='14px'
  }
  else if(size.classList.contains('font-size-3'))
  {
    fontSize='16px'
  }
  else if(size.classList.contains('font-size-4'))
  {
    fontSize='18px'
  }
  document.querySelector('html').style.fontSize = fontSize;
})
})

//testimonial section
var swiper = new Swiper(".testimonial-wrapper",
 {
  loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//get all sections that have an id defined
const sections= document.querySelectorAll('section[id]');
//add an event listener listening for scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
   //get current scroll positions
   let scrollY = window.pageYOffset;
   //now we loop through sections to get height ,top and ID values for each
   sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <=sectionTop +sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }
    else 
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
   })
}

//color pallete

//remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click',()=> {
    let primaryHue;
    changeActiveColorClass();
    if(color.classList.contains('color-1'))
    {
      primaryHue=252;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue=52;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue=352;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue=202;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue=402;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue);
  })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;




//change background color

const changeBG = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--dark-color-lightness',darkColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);
}

Bg1.addEventListener('click', () => {
  //active
  Bg1.classList.add('active');
  //remove
  Bg2.classList.remove('active');
  Bg3.classList.remove('active');
  //remove customized changes from local storage
  window.location.reload();  
})

Bg2.addEventListener('click' , () =>{
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';

  //add Active class
  Bg2.classList.add('active');
  //remove active class from others 
  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBG();
})

Bg3.addEventListener('click' , () =>{
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //add Active class
  Bg3.classList.add('active');
    //remove active class from others
  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBG();
})

