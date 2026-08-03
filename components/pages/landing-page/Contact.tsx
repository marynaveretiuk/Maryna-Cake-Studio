"use client";

import { useState } from "react";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

// Landing - contact section.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [fading, setFading] = useState(false);
  const [fields, setFields] = useState(EMPTY);

  // Update one field, optionally sanitizing the value first.
  const update =
    (field: keyof typeof fields, transform: (v: string) => string = (v) => v) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((p) => ({ ...p, [field]: transform(e.target.value) }));

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle form logic here (send data via API route or 3rd party service)
    setSubmitted(true);
    setFields(EMPTY);
    setTimeout(() => setFading(true), 3000);
    setTimeout(() => {
      setSubmitted(false);
      setFading(false);
    }, 3500);
  };

  return (
    <section className="contact-section space">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-md-6">
            <h2 className="title-section-small mb-3">This webinar is everything you need in life &amp; more.</h2>
            <p>Together had said given day spirit. Land years upon, created winged all. Dry, days for form dry moved gathering meat light whose abundantly fowl said our. Have green. Cattle. Called i that waters dry one said firmament his after their night. Likeness.</p>
            <p>A divide rule that second said Two deep. Darkness made great over moving together is us that unto heaven seed under set stars lesser had to Fruit so open, of there isn't, whose saw. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed dusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p>
          </div>

          <div className="col-md-6 ps-md-4">
            <form onSubmit={handleSubmit} id="contact-form" className="pt-5">
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
                  <i className="fa-regular fa-circle-check"></i> Your email was sent. Thanks!
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
        </div>
      </div>
    </section>
  );
}
