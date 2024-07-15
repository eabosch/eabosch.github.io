document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const galleryCards = document.getElementById("galleryCards");
  const midThird = document.querySelector(".MidThird");

  if (!prevButton || !nextButton || !galleryCards || !midThird) {
    console.error("One or more required elements not found.");
    return;
  }

  const cards = galleryCards.querySelectorAll(".card");
  const cardWidth = cards[0].offsetWidth; // Assuming all cards have the same width
  const cardCount = cards.length;
  let currentIndex = 0;

  // Initial centering of the first card
  centerCurrentCard();

  prevButton.addEventListener("click", function() {
    currentIndex = Math.max(currentIndex - 1, 0);
    scrollToCard(currentIndex);
  });

  nextButton.addEventListener("click", function() {
    currentIndex = Math.min(currentIndex + 1, cardCount - 1);
    scrollToCard(currentIndex);
  });

  function scrollToCard(index) {
    currentIndex = index; // Update current index

    const centerOffset = (midThird.offsetWidth - cardWidth) / 2;
    const scrollX = index * cardWidth - centerOffset;
    galleryCards.style.transform = `translateX(-${scrollX}px)`;
  }

  function centerCurrentCard() {
    const centerOffset = (midThird.offsetWidth - cardWidth) / 2;
    const scrollX = currentIndex * cardWidth - centerOffset;
    galleryCards.style.transform = `translateX(-${scrollX}px)`;
  }
  
});