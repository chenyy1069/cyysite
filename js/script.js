document.getElementById('contact-btn').addEventListener('click', function () {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        setTimeout(() => {
            contactInfo.style.opacity = '1';
        }, 10);
        this.textContent = 'Hide Contact Info';
    } else {
        contactInfo.style.opacity = '0';
        setTimeout(() => {
            contactInfo.style.display = 'none';
        }, 300);
        this.textContent = 'Show Contact Info';
    }
});
