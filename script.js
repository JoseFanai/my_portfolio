const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const submitMail = document.getElementById('mail-submit')

submitMail.onclick = () => {
    
}

const textarea = document.getElementById('autoExpand');

        textarea.addEventListener('input', function() {
            this.style.height = 'auto'; /* Height a reset phawt ang */
            this.style.height = (this.scrollHeight) + 'px'; /* A thu ziah len dan (scrollHeight) azirin a ti lian ang */
        });