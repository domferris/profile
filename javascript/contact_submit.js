// CONTACT SUBMISSION
const backendContact = "https://domferris.herokuapp.com/contact";
const contactForm = document.getElementById("contact-form");

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
    console.log("success");
  } else {
    console.log("failure");
  }
};
