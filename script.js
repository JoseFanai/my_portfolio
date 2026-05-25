const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const submitMail = document.getElementById('mail-submit')

submitMail.onclick = () => {

}

const textarea = document.getElementById('autoExpand');

textarea.addEventListener('input', function () {
    this.style.height = 'auto'; /* Height a reset phawt ang */
    this.style.height = (this.scrollHeight) + 'px'; /* A thu ziah len dan (scrollHeight) azirin a ti lian ang */
});

// Observer kan siam phawt ang
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Element chu screen-ah a rawn lang em tih a check
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // A lan chuan 'show' class a pe ang
        }
        /* Hnuaia line hi i telh chuan i scroll let leh pawhin a bo leh ang a, 
        i scroll thlak leh hunah a rawn lang nawn leh thin ang. 
        Vawikhat chauh lan i duh chuan i delete dawn nia. 
        */
        else {
            entry.target.classList.remove('show');
        }
    });
});

// HTML-a class 'hidden' nei zawng zawng a zawng chhuak ang
const hiddenElements = document.querySelectorAll('.hidden');

// Element tin te chu a vil (observe) tir ta a ni
hiddenElements.forEach((el) => observer.observe(el));