let modal = document.getElementById("modal");
let modalImg = document.getElementById("modal-img");
let caption = document.getElementById("caption");
let whatsappBtn = document.getElementById("whatsappBtn");
let modalPrice = document.getElementById("modal-price");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

let cards = document.querySelectorAll(".card");

let currentImages = [];
let currentIndex = 0;
let currentId = "";
let currentPrice = "";

cards.forEach(card => {
  card.addEventListener("click", function () {
    // Get data from card
    currentId = card.dataset.id;
    currentPrice = card.dataset.price;
    currentImages = JSON.parse(card.dataset.images);
    currentIndex = 0;

    // Open modal
    modal.style.display = "block";
    modalImg.src = currentImages[currentIndex];
    caption.innerHTML = card.querySelector("h3").innerText;
    modalPrice.innerText = "Price: " + currentPrice;

    // WhatsApp button
    updateWhatsApp(currentId, currentPrice);
  });
});

// Close modal
document.querySelector(".close").onclick = () => (modal.style.display = "none");

// Slide next/prev
nextBtn.onclick = () => showSlide(currentIndex + 1);
prevBtn.onclick = () => showSlide(currentIndex - 1);

function showSlide(index) {
  if (index >= currentImages.length) index = 0;
  if (index < 0) index = currentImages.length - 1;
  currentIndex = index;
  modalImg.src = currentImages[currentIndex];
}

// WhatsApp button dynamic
function updateWhatsApp(cardId, price) {
  let phoneNumber = "1234567890"; // replace with your WhatsApp number
  let text = `Hi, I want to customize this card. Card ID: ${cardId}, Price: ${price}`;
  whatsappBtn.onclick = () => {
    window.open(`https://wa.me/${+917005576029}?text=${encodeURIComponent(text)}`, "_blank");
  };
}
