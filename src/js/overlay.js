
let overlay =  document.getElementById("overlay")

document.addEventListener('mousemove', (event) =>{
    let  x  =  event.pageX  +  "px";
    let  y  =  event.pageY  +  "px";
    overlay.style.webkitMaskImage  =  `radial-gradient(circle at ${x}  ${y}, transparent 55px, black 0%)`;
})