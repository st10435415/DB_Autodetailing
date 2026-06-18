// ============================================
// QUOTE FORM → WHATSAPP
// ============================================
 
const quoteForm = document.getElementById('quote-form');
 
quoteForm.addEventListener('submit', function (event) {
    event.preventDefault();
 
    const name    = quoteForm.name.value.trim();
    const phone   = quoteForm.phone.value.trim();
    const vehicle = quoteForm.vehicle.value.trim();
    const service = quoteForm.service.value;
    const area    = quoteForm.area.value;
    const notes   = quoteForm.notes.value.trim();
 
    let message = `Hi DB AutoDetailing! I'd like to request a quote.\n\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Vehicle: ${vehicle}\n`;
    message += `Service: ${service}\n`;
    message += `Area: ${area}`;
 
    if (notes) {
        message += `\nNotes: ${notes}`;
    }
 
    const whatsappNumber  = '27648451241';
    const encodedMessage  = encodeURIComponent(message);
    const whatsappURL     = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
 
    window.open(whatsappURL, '_blank');
});
 
 
// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================
 
const yearSpan = document.getElementById('footer-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}