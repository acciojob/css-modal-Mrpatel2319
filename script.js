//your JS code here. If required.
// Get elements
const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.querySelector('.close-modal');

// Open modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when close button is clicked
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
