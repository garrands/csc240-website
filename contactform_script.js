
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

    // Submit form contents using mailto:
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // Check for empty fields & give error message
            event.preventDefault(); 
            // Use .trim() to remove extra whitespace
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
            const name = document.getElementById("name").value.trim(); 
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                formError.textContent = "Please fill in all fields before submitting.";
                return;
            }

            formError.textContent = "";

            // Prepare form contents to be placed into an email 
            const defaultRecipient = "information@troop4054.org"; 
            const emailSubject = encodeURIComponent("New message from website contact form");
            const emailMessage = encodeURIComponent(
                `SENDER'S EMAIL: ${email}\n\nMESSAGE:\n${message}`
            );

            const mailtoLink = `mailto:${defaultRecipient}?subject=${emailSubject}&body=${emailMessage}`;
            window.open(mailtoLink, '_blank');
        });
    }
};

