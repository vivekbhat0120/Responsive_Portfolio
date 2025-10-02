/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When we click on each nav__link, we remove the show-menu class
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header') }

window.addEventListener('scroll', blurHeader)



/*=============== EMAIL JS ===============*/


const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) =>{
        e.preventDefault()

        //   service id -- template -- #form -- publickey 
        emailjs.sendForm('service_g2f9dh7','template_6uu0oeg','#contact-form','EfF1QtQuB1UbzyxyU')
          .then(() =>{
              // show message
              contactMessage.textContent = 'Message sent successfully ✅'

            //   remove message after 5 sec
              setTimeout(() =>{
                  contactMessage.textContent = ''
              }, 5000)

            //   clear input field 
              contactForm.reset()

            }, () =>{
                // show error message
                contactMessage.textContent = 'Something went wrong ❌'
            })
      }

      contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 560 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrolldown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),

              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrolldown > sectionTop && scrolldown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
 
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    // reset: true
})

sr.reveal(`.home__data, .experience, .skills, .contact__container`)
sr.reveal(`.home__img`, {delay: 600})
sr.reveal(`.home__scroll`, {delay: 600})
sr.reveal(`.work__card, .services__card`, {intervaln: 100})
sr.reveal(`.about__content`, {origin: 'right'})
sr.reveal(`.about__img`, {origin: 'left'})



/*=============== DARK MODE 1 ===============*/


// document.addEventListener('DOMContentLoaded', function() {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const body = document.body;
//     darkModeToggle.addEventListener('click',() => {
//         body.classList.toggle('dark-mode');
//         // const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
//         darkModeToggle.querySelector('i').classList.toggle(`ri-sun-line`);
//         darkModeToggle.querySelector('i').classList.toggle(`ri-moon-line`);
//         darkModeToggle.querySelector('i').classList.toggle(`dark-mode`);

// });
// });



/*=============== DARK MODE 2 ===============*/



// const switchTheme = (evt) => {
//     const btn = evt.target;
//     if (btn.textContent.toLowerCase() === "light"){
//         btn.textContent = "dark";

//         document.documentElement.setAttribute("data-theme", "dark");
//     }

//     else{
//         btn.textContent = "light";
//         document.documentElement.setAttribute("data-theme", "light");
//     }
// };

// const switchModeBtn = document.querySelector(".btn");
// switchModeBtn.addEventListener("click", switchTheme, false);

// let currentTheme = "dark";

// if (currentTheme){
//     document.documentElement.setAttribute("dark-theme", currentTheme);
//     switchModeBtn.textContent = currentTheme;
// }


/*=============== DARK MODE 3 ===============*/


// document.addEventListener('DOMContentLoaded', function() {
//     const darkModeToggle = document.getElementById('dark-mode-toggle');
//     const body = document.body;
//     const root = document.documentElement;

//     darkModeToggle.addEventListener('click', () => {
//         const isDarkMode = body.classList.contains('dark-mode');

//         if (isDarkMode) {
//             root.style.setProperty('--body-color', 'hsl(var(--hue), 30%, 95%)');
//             root.style.setProperty('--text-color', 'hsl(var(--hue), 40%, 16%)');
//             root.style.setProperty('--title-color', 'hsl(var(--hue), 40%, 10%)');
//             darkModeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
//         } else {
//             root.style.setProperty('--body-color', 'hsl(var(--hue), 40%, 16%)');
//             root.style.setProperty('--text-color', 'hsl(var(--hue), 20%, 80%)');
//             root.style.setProperty('--title-color', 'hsl(var(--hue), 30%, 95%)');
//             darkModeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
//         }

//         body.classList.toggle('dark-mode');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const root = document.documentElement;
    const navMenu = document.getElementById('nav-menu');

    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            root.style.setProperty('--body-color', 'hsl(var(--hue), 30%, 95%)');
            root.style.setProperty('--text-color', 'hsl(var(--hue), 40%, 16%)');
            root.style.setProperty('--title-color', 'hsl(var(--hue), 40%, 10%)');
            root.style.setProperty('--container-color', 'hsl(var(--hue), 90%, 90%)'); // Light background for work, services, footer
            root.style.setProperty('--arrow-color', 'hsl(var(--hue), 40%, 10%)'); // Light arrow for recent work animation
            darkModeToggle.querySelector('i').classList.replace('ri-sun-line', 'ri-moon-line');
        } else {
            root.style.setProperty('--body-color', 'hsl(var(--hue), 40%, 16%)');
            root.style.setProperty('--text-color', 'hsl(var(--hue), 20%, 80%)');
            root.style.setProperty('--title-color', 'hsl(var(--hue), 30%, 95%)');
            root.style.setProperty('--container-color', 'hsl(var(--hue), 40%, 20%)'); // Dark background for work, services, footer
            root.style.setProperty('--arrow-color', 'hsl(var(--hue), 20%, 80%)'); // Dark arrow for recent work animation
            darkModeToggle.querySelector('i').classList.replace('ri-moon-line', 'ri-sun-line');
        }

        body.classList.toggle('dark-mode');
    });

    // Hide dark-mode toggle when mobile menu is open
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            darkModeToggle.style.display = 'none';
        });
    }

    if (navClose) {
        navClose.addEventListener('click', () => {
            darkModeToggle.style.display = 'block';
        });
    }

    // Center the contact section horizontally
    const contactContainer = document.querySelector('.contact__container');
    if (contactContainer) {
        contactContainer.style.display = 'flex';
        contactContainer.style.justifyContent = 'center';
        contactContainer.style.alignItems = 'center';
    }
});
