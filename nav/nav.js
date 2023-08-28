// navbar.js
window.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.querySelector('.nav-container');
  
    if (navbarContainer) {
      fetch('nav/nav.html')
        .then(response => response.text())
        .then(data => {
          navbarContainer.innerHTML = data;
        })
        .catch(error => {
          console.error('Error fetching navigation bar:', error);
        });
    }
  });
  