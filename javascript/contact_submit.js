// CONTACT SUBMISSION
const urlContact = window.location.href;
let backendContact;
if (urlContact.includes("localhost") || urlContact.includes("127.0.0.1")) {
  backendContact = "http://localhost:3000/contact";
} else {
  backendContact = "https://domferris.herokuapp.com/contact";
}

const contactHeader = document.querySelector(".contact > h3");
const contactForm = document.querySelector(".contact-form");
const contactFormItems = document.querySelectorAll(".contact-form > *");
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

  if (response.status === 200) {
    contactHeader.classList.add("submitted");
    contactFormItems.forEach((item) => item.setAttribute("disabled", ""));
    contactForm.classList.add("submitted");
    contactConfirmation.classList.add("active");
  } else {
    const data = await response.json();

    alert(
      `Uh oh! Your message failed to send. Please try again.\r\n
      Status: ${response.status}\r\n
      ${data.error}`
    );
  }
};
