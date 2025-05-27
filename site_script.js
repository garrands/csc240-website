window.onload = function () {
   
    const applyButton = document.querySelector(".applyButton");
    const sponsorButton = document.querySelector(".sponsorButton");
    const openButton = document.getElementById("openPopup");
    const closeButton = document.getElementById("closePopup");
    const popupForm = document.getElementById("emailForm");
    const contactForm = document.getElementById("contactForm");
    const formError = document.getElementById("formError");
  
    // Open & close contact form
    if (openButton && closeButton && popupForm) {
        openButton.addEventListener("click", function () {
            popupForm.style.display = "flex";
        });

        closeButton.addEventListener("click", function () {
            popupForm.style.display = "none";
        });
        // https://www.w3schools.com/jsref/event_target.asp
        // https://developer.mozilla.org/en-US/docs/Web/API/Event
        window.addEventListener("click", function (event) {
            if (event.target === popupForm) {
                popupForm.style.display = "none";
            }
        });
    }
    
    // Check for empty fields & give error message
    if (contactForm) {
    contactForm.addEventListener("submit", function (error) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
                error.preventDefault();
                // is this https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent 
                // better to use than .innerHTML?
                formError.textContent = "Please fill in all fields before submitting.";
            } else {
                formError.textContent = ""; 
            }
        });
    }
};
