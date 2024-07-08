var sidenav=document.querySelector(".side-navbar")

function shownavbar()
{
    sidenav.style.left="0"
}
function closenavbar()
{
    sidenav.style.left="-60%"
}


// document.addEventListener("DOMContentLoaded", () => {
//     const text ="I'm a Frontend Developer";
//     const container = document.getElementById("frontend-web-designer");
//     const words =text.split(" ");
//     container.innerHTML = "";

//     words.forEach((word, index) => {
//         const span = document.createElement("span");
//         span.textContent = word;
//         span.style.animationDelay = `${index * 0.2}s`;
//         container.appendChild(span);
//         container.appendChild(document.createTextNode(" "));
//     });
// });
