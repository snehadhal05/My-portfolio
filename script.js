const text = [
    "Frontend Developer",
    "UI/UX Designer",
    "Creative Coder",
    "Web Designer"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.getElementById("typing").textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
        setTimeout(type, 1200);
    } 
    else{
        setTimeout(type, 100);
    }
})();
/* CURSOR GLOW */
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
/* ACTIVE NAVBAR */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll",()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});
/* DARK/LIGHT TOGGLE */
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggle-btn i");
toggleBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
    } 
    else{
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
    }
});