import React, { useState } from "react";

const Contact = () => {
  // Replace this with your Formspree endpoint (e.g., https://formspree.io/f/xxxxxxx)
  const FORMSPREE_ENDPOINT =
    import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/meoykebd";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const resumeLink = "https://vikrant-bhati.github.io/Resume/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    if (FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID")) {
      setStatus({
        type: "error",
        message: "Form endpoint not configured. Please add your Formspree ID.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Thanks! Your message was sent." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Message failed to send. Please try again." });
      }
    } catch (err) {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section__inner">
      <h2 className="section__title">Get in Touch</h2>
      <p className="section__subtitle">
        If you would like to discuss a project, role, or collaboration, feel free to reach out.
      </p>

      <div className="contact__grid">
        <div className="card contact contact--info">
          <p>
            The best way to reach me is by email. I try my best to respond within a reasonable time.
          </p>
          <div className="contact__rows">
            <div className="contact__row">
              <span className="contact__label">✉️ Email</span>
              <a href="mailto:bhati.vikrant@outlook.com">bhati.vikrant@outlook.com</a>
            </div>
            <div className="contact__row">
              <span className="contact__label">💻 GitHub</span>
              <a href="https://github.com/vikrant-bhati" target="_blank" rel="noreferrer">
                github.com/vikrant-bhati
              </a>
            </div>
            <div className="contact__row">
              <span className="contact__label">🔗 LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/vikrantbhati/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/vikrantbhati
              </a>
            </div>
            <div className="contact__row">
              <span className="contact__label">📄 Resume</span>
              <a href={resumeLink} target="_blank" rel="noreferrer">
                View resume (PDF)
              </a>
            </div>
          </div>
        </div>

        <div className="card contact contact--form">
          <h3>Send a Message</h3>
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name, as you like to be called"
              />
            </label>
            <label className="contact__field">
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I reach you back?"
                required
              />
            </label>
            <label className="contact__field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What’s on your mind?"
              />
            </label>
            <label className="contact__field">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Share a few details so I can dive in."
              />
            </label>
            <button type="submit" className="contact__submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "✉️ Send message"}
            </button>
            {status && (
              <p
                className={`contact__status contact__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
