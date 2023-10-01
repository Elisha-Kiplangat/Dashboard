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

document.addEventListener("DOMContentLoaded", function() {
  const likeButtons = document.querySelectorAll(".like");
  const allLink = document.querySelector(".all");
  const favLink = document.querySelector(".fav");

  // Add event listeners to all "like" buttons to toggle the icons
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", function() {
      toggleIcon(likeButton);
    });
  });

  // Function to toggle the icon
  function toggleIcon(likeButton) {
    const iconElement = likeButton.querySelector("i");
    if (iconElement.classList.contains("fa-star-o")) {
      iconElement.classList.remove("fa-star-o");
      iconElement.classList.add("fa-star");
    } else {
      iconElement.classList.remove("fa-star");
      iconElement.classList.add("fa-star-o");
    }
  }

  // Add event listeners for "All" and "Favourite" links
  allLink.addEventListener("click", function() {
    showAllCards();
  });

  favLink.addEventListener("click", function() {
    showFavouriteCards();
  });

  // Function to show all cards
  function showAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.display = "flex";
    });
  }

  // Function to show only cards with the favourite icon
  function showFavouriteCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const icon = card.querySelector(".like i");
      if (icon.classList.contains("fa-star-o")) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const likeButtons = document.querySelectorAll(".like");
  const allLink = document.querySelector(".all");
  const favLink = document.querySelector(".fav");

  // Function to toggle the icon
  function toggleIcon(likeButton) {
    const iconElement = likeButton.querySelector("i");
    if (iconElement.classList.contains("fa-star-o")) {
      iconElement.classList.remove("fa-star-o");
      iconElement.classList.add("fa-star");
    } else {
      iconElement.classList.remove("fa-star");
      iconElement.classList.add("fa-star-o");
    }
  }

  // Add event listeners to all "like" buttons to toggle the icons
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", function() {
      toggleIcon(likeButton);
    });
  });

  // Function to show all cards
  function showAllCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.display = "flex";
    });
  }

  // Function to show only cards with the favorite icon
  function showFavouriteCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const icon = card.querySelector(".like i");
      if (icon.classList.contains("fa-star-o")) {
        card.style.display = "none";
      } else {
        card.style.display = "flex";
      }
    });
  }

  // Add event listeners for "All" and "Favourite" links
  allLink.addEventListener("click", function() {
    showAllCards();
  });

  favLink.addEventListener("click", function() {
    showFavouriteCards();
  });
});





