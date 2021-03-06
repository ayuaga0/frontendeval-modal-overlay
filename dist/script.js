/*
 * https://frontendeval.com/questions/modal-overlay
 *
 * Build a modal control and overlay
 */
const mainContainer = document.getElementById("main-container");

const offerButton = document.getElementById("show-offer");

let modalContainer = document.createElement("div");

let cancelButton = document.createElement("button");
cancelButton.classList.add("cancel-button");
cancelButton.innerHTML = "X";
cancelButton.setAttribute("data-id", "cancel-button");

let modalText = document.createElement("div");
modalText.innerHTML = "Click the button below to accept our amazing offer!";
modalText.classList.add("modal-text");

let modalButton = document.createElement("button");
modalButton.innerHTML = "Accept Offer";
modalButton.setAttribute("data-id", "accept-button");

modalContainer.classList.add("modal-container");

modalContainer.appendChild(cancelButton);
modalContainer.appendChild(modalText);
modalContainer.appendChild(modalButton);

let modalOverlay = document.createElement("div");
modalOverlay.classList.add("modal-overlay");
modalOverlay.setAttribute("data-id", "modal-overlay");
modalOverlay.appendChild(modalContainer);

offerButton.addEventListener("click", function () {
  mainContainer.appendChild(modalOverlay);
});

function closeModal(e) {
  if (e.target.dataset.id) {
    e.stopPropagation();
    mainContainer.removeChild(modalOverlay);
  }
}

modalOverlay.addEventListener("click", closeModal);

cancelButton.addEventListener("click", closeModal);

modalButton.addEventListener("click", function (e) {
  mainContainer.removeChild(offerButton);
  let acceptedText = document.createElement("div");
  acceptedText.innerHTML = "Offer Accepted";
  mainContainer.appendChild(acceptedText);
  closeModal(e);
});