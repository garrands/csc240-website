window.onload = function () {
    // const infoButton = document.querySelector(".infoButton");
    const applyButton = document.querySelector(".applyButton");
    const sponsorButton = document.querySelector(".sponsorButton");
    const openButton = document.getElementById("openPopup");
    const closeButton = document.getElementById("closePopup");
    const popupForm = document.getElementById("emailForm");
    const contactForm = document.getElementById("contactForm");
    const formError = document.getElementById("formError");

    // JS to use button to open email client to send email
    // if (infoButton) {
    //     infoButton.addEventListener("click", function () {
    //         window.location.href = "mailto:information@troop4054.org";
    //     });
    // }

    // Redirect to application page when clicked
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            window.location.href = "https://my.scouting.org/online-registration/56ab6000-4875-480e-be1e-2abfa06590a7/applicant-type";
        });
    }
    
    // Redirect to fundraiser page when clicked
    if (sponsorButton) {
        sponsorButton.addEventListener("click", function () {
            window.location.href = "https://wreathsacrossamerica.org/pages/167300/Overview";
        });
    }   

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
