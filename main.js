/* -----  Selectors ----- */
const ctaButton = document.getElementById("cta-button");
const contactSection = document.getElementById("contact-section");
const submitButton = document.getElementById("submit-button");
const modal = document.getElementById("modal-section");
const overlay = document.getElementById("overlay");
const requiredFormFieldsInput = document.querySelectorAll(".required input");
const closeButton = document.getElementById("close-button");
const aboutSection = document.getElementById("about-section");


/* ----- Event Listeners ----- */
ctaButton.addEventListener("click", scrollToContact);
submitButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);


/* ----- Event Listener Functions ----- */
function scrollToContact() {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
}

function openModal(event) {
  let isFormValid = true;

  // Check each input value for a string and trim to remove whitespace
  requiredFormFieldsInput.forEach((input) => {
    if (!input.value.trim()) {
      isFormValid = false;
    }
  });

  // Open modal if the required form fields are filled
  if (isFormValid) {
    event.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

/* ----- Intersection Observers for appear animation ----- */

const aboutSectionObserver = createIntersectionObserver(aboutSection, "in-viewport");
const contactSectionObserver = createIntersectionObserver(contactSection, "in-viewport");

function createIntersectionObserver(target, className) {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.classList.add(className);

          // Disconnect the observer after the animation has started
          observer.disconnect();
        }
      });
    });
  }

// Observe the target elements: when the section is in viewport, start the appear animation
aboutSectionObserver.observe(aboutSection);
contactSectionObserver.observe(contactSection);
