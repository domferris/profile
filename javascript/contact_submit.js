// CONTACT SUBMISSION
const backendContact = "https://domferris.herokuapp.com/contact";
const contactHeader = document.querySelector(".contact > h3");
const contactForm = document.querySelector(".contact-form");
const contactConfirmation = document.querySelector(".contact-confirmation");

contactForm.onsubmit = async (event) => {
  event.preventDefault();

  const body = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value,
  };

  const response = await fetch(backendContact, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (response.status == 200) {
    contactHeader.classList.add("submitted");
    contactForm.classList.add("submitted");
    contactConfirmation.classList.add("active");
  } else {
    // TODO: handle error
  }
};
