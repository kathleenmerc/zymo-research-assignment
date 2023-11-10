/*  CTA button events  */
const ctaButton = document.getElementById("cta-button");
const contactSection = document.getElementById("contact-section");
ctaButton.addEventListener("click", scrollToContact);

function scrollToContact() {
  contactSection.scrollIntoView({
    behavior: "smooth",
  });
}
