/* ========================================
   MARO DESIGN | Website Interactions
======================================== */

document.addEventListener("DOMContentLoaded", function () {
    const whatsappNumber = "966560602116";
    const emailAddress = "m.amr88ali@gmail.com";

    // Update copyright year automatically
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Send service requests to WhatsApp
    const orderButtons = document.querySelectorAll(
        ".order-button[data-service]"
    );

    orderButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const serviceName = button.dataset.service;

            const message =
                `مرحبًا، عايز أطلب خدمة ${serviceName} من MARO DESIGN. ` +
                "ممكن أعرف التفاصيل ومدة التنفيذ؟";

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );
        });
    });

    // Configure the main contact button
    const contactButton = document.getElementById("contact-button");

    if (contactButton) {
        contactButton.href = `https://wa.me/${whatsappNumber}`;
        contactButton.target = "_blank";
        contactButton.rel = "noopener noreferrer";
    }

    // Configure Gmail contact links
    const emailLinks = document.querySelectorAll(
        'a[href^="https://mail.google.com/mail/"]'
    );

    emailLinks.forEach(function (link) {
        link.href =
            "https://mail.google.com/mail/?view=cm&fs=1&to=" +
            encodeURIComponent(emailAddress);
    });
});