const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;

//Adding tooltip initialization
document.addEventListener("DOMContentLoaded", function(){
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
});

// Auto-load CV from URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check for CV parameter and trigger download/display
document.addEventListener("DOMContentLoaded", function() {
    const cvParam = getUrlParameter('cv') || getUrlParameter('showcv');
    
    // Check if CV parameter exists and has a valid value
    if (cvParam !== null && (cvParam === 'true' || cvParam === '1' || cvParam === '')) {
        // Determine the correct path based on current page location
        let cvPath;
        if (window.location.pathname.includes('/publication/')) {
            cvPath = '../assets/Jian_Xie_CV.pdf';
        } else {
            cvPath = 'assets/Jian_Xie_CV.pdf';
        }
        
        // Use window.open for better browser compatibility
        // This will open the PDF in a new tab/window
        setTimeout(function() {
            window.open(cvPath, '_blank');
            
            // Clean up URL parameters
            if (window.history && window.history.replaceState) {
                const url = new URL(window.location);
                url.searchParams.delete('cv');
                url.searchParams.delete('showcv');
                window.history.replaceState({}, document.title, url.pathname + url.search);
            }
        }, 100); // Small delay to ensure page is fully loaded
    }
});
