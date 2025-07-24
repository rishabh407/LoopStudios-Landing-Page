const hamburgerIcon = document.querySelector(".hamburger img");
const homeSection = document.querySelector(".home-section");
const allSections = document.querySelectorAll(".hide");
const menuLinks = document.querySelector(".menu-links");
const images=document.querySelectorAll(".img img");
let isMenuOpen = false;
hamburgerIcon.addEventListener("click",()=>{
    isMenuOpen=!isMenuOpen; // first time value becomes true;
    
    // For changing icon from the hamburger to the close and vice versa
    hamburgerIcon.src=isMenuOpen ? "/images/icon-close.svg": "/images/icon-hamburger.svg";
    
    // For changing background  image from the home section
    homeSection.style.backgroundImage=isMenuOpen ? "none" : "url('/images/mobile/image-hero.jpg')";
    
    // For changing background color of the body
    document.body.style.backgroundColor=isMenuOpen ? "black" : "white";
    
    // For changing the visibility of the menu links
    menuLinks.classList.toggle("visible"); // now isMeniOpen is false
    allSections.forEach((Section)=>{
        Section.classList.toggle("visible");
    });
});
images.forEach(img=>{
    img.addEventListener("mouseover",(e)=>{
      const parentdiv=img.parentElement;
      const paragraph=parentdiv.querySelector("p");
      if(paragraph)
        {
            paragraph.style.color="black";
        }  
    })
    img.addEventListener("mouseout",(e)=>{
      const parentdiv=img.parentElement;
      const paragraph=parentdiv.querySelector("p");
      if(paragraph)
        {
            paragraph.style.color="white";
        }  
    })
});