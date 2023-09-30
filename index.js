//like icon
document.addEventListener("DOMContentLoaded", function() {
  const likeElements = document.querySelectorAll('.like');

  likeElements.forEach(likeElement => {
    likeElement.addEventListener('click', () => {
      toggleIcon(likeElement);
    });

    const cardId = likeElement.getAttribute('data-id');
    
    // Check localStorage for the selected icon and apply it on page load
    const likeStatus = localStorage.getItem(cardId);
    if (likeStatus) {
      const iconElement = likeElement.querySelector('i');
      iconElement.classList.remove('fa-star', 'fa-star-o');
      iconElement.classList.add(likeStatus);
    }
  });

  function toggleIcon(likeElement) {
    const iconElement = likeElement.querySelector('i');
    const cardId = likeElement.getAttribute('data-id');
    
    if (iconElement.classList.contains('fa-star-o')) {
      iconElement.classList.remove('fa-star-o');
      iconElement.classList.add('fa-star');
      // Save the selection in localStorage with the card's unique identifier
      localStorage.setItem(cardId, 'fa-star');
    } else {
      iconElement.classList.remove('fa-star');
      iconElement.classList.add('fa-star-o');
      // Save the selection in localStorage with the card's unique identifier
      localStorage.setItem(cardId, 'fa-star-o');
    }
  }
});


//display all or favourite tasks

