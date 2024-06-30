const modal = document.querySelector("#modal");
const openElements = document.querySelectorAll(".open-button");
const closeModal = document.querySelector(".close-button");
console.log('closeModal', closeModal)
closeModal.addEventListener("click", () => {
  console.log('Bacon')
  modal.close();
});


const addOpenEventListener = (element) => {
  element.addEventListener("click", () => {
    console.log('Eggs')
    modal.showModal();
  });
}

for(let i = 0; i < openElements.length; i++) {
  addOpenEventListener(openElements[i]);
}

const email1 = document.getElementById('#email');
const email2 = document.getElementById('#email2');
const error = document.getElementById('#error-message');

email2.addEventListener(function() {
  if (email1.value !== email2.value) {
    error.textContent = 'Emails do not match';
  } else {
    error.textContent = '';
  }
});
