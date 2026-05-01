(() => {
  const config = {
    whatsappNumber: "919400778065"
  };

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const leadForm = document.getElementById("leadForm");
  const formStatus = document.getElementById("formStatus");

  const buildWhatsAppLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${config.whatsappNumber}?text=${encoded}`;
  };

  if (leadForm) {
    leadForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!leadForm.checkValidity()) {
        formStatus.textContent = "Please complete all required fields.";
        leadForm.reportValidity();
        return;
      }

      const formData = new FormData(leadForm);
      const payload = Object.fromEntries(formData.entries());
      const intro = `Hi, I am ${payload.name}. Phone: ${payload.phone}. I need support for: ${payload.message}`;
      const fallbackUrl = buildWhatsAppLink(intro);

      formStatus.textContent = "Sending request...";

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error("Form submission failed");

        const result = await response.json();
        formStatus.textContent = "Thanks. Opening WhatsApp now...";
        window.location.href = result.redirect || fallbackUrl;
      } catch (_error) {
        formStatus.textContent = "Could not send online form. Opening WhatsApp directly...";
        window.location.href = fallbackUrl;
      }
    });
  }

  const detailsList = Array.from(document.querySelectorAll(".faq-list details"));
  detailsList.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;
      detailsList.forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });
})();
