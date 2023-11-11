/* ----- CTA Button Events ----- */
const ctaButton = document.getElementById("cta-button");
const contactSection = document.getElementById("contact-section");

ctaButton.addEventListener("click", scrollToContact);

function scrollToContact() {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
}

/* ----- Submit Button Events ----- */
const submitButton = document.getElementById("submit-button");
const modal = document.getElementById("modal-section");
const overlay = document.getElementById("overlay");
const requiredFormFieldsInput = document.querySelectorAll(".required input");

submitButton.addEventListener("click", openModal);

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

/* ----- Close Button Events ----- */
const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

/* ----- Intersection Observers for appear animation ----- */
const aboutSection = document.getElementById("about-section");

const aboutSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the in-viewport class when the element is in the viewport
      aboutSection.classList.add("in-viewport");
      // Disconnect the observer after the animation has started (optional)
      observer.disconnect();
    }
  });
});

const contactSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the in-viewport class when the element is in the viewport
        contactSection.classList.add("in-viewport");
        // Disconnect the observer after the animation has started (optional)
        observer.disconnect();
      }
    });
  });

// Start observing the target element
aboutSectionObserver.observe(aboutSection);
contactSectionObserver.observe(contactSection);
