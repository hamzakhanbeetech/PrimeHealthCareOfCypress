// navbar.js
window.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.querySelector('.footer-container');
  
    if (navbarContainer) {
      fetch('footer/footer.html')
        .then(response => response.text())
        .then(data => {
          navbarContainer.innerHTML = data;
        })
        .catch(error => {
          console.error('Error fetching navigation bar:', error);
        });
    }
  });
  