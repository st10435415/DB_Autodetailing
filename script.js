// ============================================
// QUOTE FORM → WHATSAPP
// ============================================

// Find the form by its id
const quoteForm = document.getElementById('quote-form');

// Listen for when the user submits it
quoteForm.addEventListener('submit', function (event) {
    // Stop the form from doing its default behaviour (page refresh)
    event.preventDefault();

    // Read each field's value
    const name = quoteForm.name.value.trim();
    const phone = quoteForm.phone.value.trim();
    const vehicle = quoteForm.vehicle.value.trim();
    const pkg = quoteForm.package.value;
    const area = quoteForm.area.value;
    const notes = quoteForm.notes.value.trim();

    // Build the WhatsApp message
    let message = `Hi DB AutoDetailing! I'd like to request a quote.\n\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Vehicle: ${vehicle}\n`;
    message += `Package: ${pkg}\n`;
    message += `Area: ${area}`;

    if (notes) {
        message += `\nNotes: ${notes}`;
    }

    // Build the WhatsApp URL
    const whatsappNumber = '27648451241';
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
});


// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

const yearSpan = document.getElementById('footer-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}