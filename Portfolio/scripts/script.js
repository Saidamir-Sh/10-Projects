// menu 
const menuIcon = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar")
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change-line");
});
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change-nav");
});

// filtering works
const filterbtn = document.querySelectorAll(".filter-btn");
const section = document.querySelectorAll(".thumb");

filterbtn.forEach(item => {
    item.addEventListener('click', () => {
        filterbtn.forEach(item => {
            item.className = "";
        });
        item.className = "active"

        // show images
        let values = item.textContent;
        section.forEach(show => {
            show.style.display = "none";
            if (show.getAttribute("data-id") === values || values === "All") {
                show.style.display = "flex";
            }
        });
    });
});


// WAYPOINTS

const down = document.querySelector('.fa-angle-double-down');
down.classList.add('animate__fadeInDown');