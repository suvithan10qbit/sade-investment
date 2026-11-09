"use client";

import { useEffect } from "react";

export default function ContactFormHandler() {
  useEffect(() => {
    const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
    if (!form) return;

    const handleSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
      if (button) {
        button.disabled = true;
        button.textContent = "Inquiry Received";
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return null;
}
