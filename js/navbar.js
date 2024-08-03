    // JavaScript for Navbar functionality
    document.addEventListener('DOMContentLoaded', () => {
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
  
        let menuOpen = false;
  
        hamburgerIcon.addEventListener('click', () => {
          menuOpen = !menuOpen;
          if (menuOpen) {
            mobileMenu.classList.remove('closed');
            mobileMenu.classList.add('open');
            hamburgerMenuIcon.textContent = '✕';
          } else {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            hamburgerMenuIcon.textContent = '☰';
          }
        });
  
        window.addEventListener('scroll', () => {
          const header = document.getElementById('main-header');
          console.log("heyya")
          if (window.scrollY > 200) {
            header.classList.add('sticky');
          } else {
            header.classList.remove('sticky');
          }
        });
  
        window.closeNavbar = () => {
          menuOpen = false;
          mobileMenu.classList.remove('open');
          mobileMenu.classList.add('closed');
        };
      });