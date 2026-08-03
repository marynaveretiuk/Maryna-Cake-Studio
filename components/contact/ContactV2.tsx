"use client";

import { useState } from "react";
import GoogleMap from "./GoogleMap";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

// Contact section - form layout variant 2.
export default function ContactV2() {
  const [submitted, setSubmitted] = useState(false);
  const [fading, setFading] = useState(false);
  const [fields, setFields] = useState(EMPTY);

  // Build an onChange handler for one field, optionally sanitising the value.
  const update =
    (field: keyof typeof EMPTY, transform = (v: string) => v) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((p) => ({ ...p, [field]: transform(e.target.value) }));

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form logic here (send via API route or a 3rd-party service).
    setSubmitted(true);
    setFields(EMPTY);
    setTimeout(() => setFading(true), 3000);
    setTimeout(() => {
      setSubmitted(false);
      setFading(false);
    }, 3500);
  };

  return (
    <section className="contact-section" style={{ paddingTop: "100px", paddingBottom: "140px" }}>
      <div className="contact-map" style={{ paddingBottom: "140px" }}>
        <GoogleMap />
      </div>
      <div className="container">
        <div className="row gy-5">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} id="contact-form">
              <div className="contact-form__grid">
                <div className="contact-form__field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={fields.name}
                    onChange={update("name")}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={fields.email}
                    onChange={update("email")}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={fields.phone}
                    onChange={update("phone", (v) => v.replace(/[^\d+\-()\s]/g, ""))}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={fields.subject}
                    onChange={update("subject")}
                    required
                  />
                </div>

                <div className="contact-form__field">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={fields.message}
                    onChange={update("message")}
                    rows={6}
                    required
                  />
                </div>
              </div>

              {submitted && (
                <p className={`message-success${fading ? " fade-out" : ""}`}>
                  <i className="fa-regular fa-circle-check" aria-hidden="true" /> Your email was sent. Thanks!
                </p>
              )}

              <button type="submit" name="submit" className="btn-link">
                <div className="btn-reveal">
                  <span>Send message</span>
                  <span className="reveal">Send message</span>
                </div>
              </button>
            </form>
          </div>

          <div className="col-md-6 ps-md-4">
            <h4 className="mb-2">GET IN TOUCH</h4>
            <p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn’t, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua. Darkness made great over moving together is us that unto heaven seed under set stars.</p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn’t, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua. Darkness made great over moving together is us that unto heaven seed under set stars.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
