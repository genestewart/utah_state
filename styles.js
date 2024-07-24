const modal = document.querySelector("#modal");
const openElements = document.querySelectorAll(".open-button");
const closeModal = document.querySelector(".close-button");
console.log('closeModal', closeModal)
closeModal.addEventListener("click", () => {
  modal.close();
});


const addOpenEventListener = (element) => {
  element.addEventListener("click", () => {
    modal.showModal();
  });
}

for(let i = 0; i < openElements.length; i++) {
  addOpenEventListener(openElements[i]);
}

const email1 = document.getElementById('email');
const email2 = document.getElementById('email2');
const error = document.getElementById('error-message');

function checkEmail() {
  error.innerText = email1.value == email2.value ? '' : 'Not Matching';
}

email1.addEventListener('keyup', () => {
  if (email1.value.length != 0) checkEmail();
})

email2.addEventListener('keyup', checkEmail);