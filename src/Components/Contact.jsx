import { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import MapComponent from "./MapComponent";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => {
    // Debug environment variables on component mount
    console.log("VITE ENV VARIABLES:");
    console.log(
      "Service ID:",
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "NOT FOUND"
    );
    console.log(
      "Template ID:",
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "NOT FOUND"
    );
    console.log(
      "Public Key:",
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "NOT FOUND"
    );

    console.log("Netlify Env:", {
      service: import.meta.env.VITE_EMAILJS_SERVICE_ID || "missing",
      template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "missing",
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "exists" : "missing",
    });

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

    // Replace with your actual EmailJS credentials
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setFormStatus({
            submitting: false,
            submitted: true,
            error: false,
            message: "Message sent successfully! I'll get back to you soon.",
          });
          form.current.reset();
        },
        (error) => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: true,
            message: "Failed to send message. Please try again.",
          });
          console.error(error);
        }
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className={styles.formTextarea}
            />
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </button>

          {formStatus.submitted && (
            <div className={styles.successMessage}>{formStatus.message}</div>
          )}
          {formStatus.error && (
            <div className={styles.errorMessage}>{formStatus.message}</div>
          )}
        </form>

        <small className={styles.address}>
          1st Stage 3rd Block HBR Layout Bengaluru 560043
        </small>
        <MapComponent className={styles.map} />
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:khanfarzan200@gmail.com">
            <img src="/assests/contact/GMAIL.png" alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/">
            <img src="/assests/contact/LINKEDIN.png" alt="LinkedIn icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://x.com/farzankhan_17">
            <img src="/assests/contact/TWITTER.png" alt="X icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.instagram.com/farzan.khan17/">
            <img src="/assests/contact/INSTAGRAM.png" alt="Instagram icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/khanfarzan17">
            <img src="/assests/contact/GITHUB.png" alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
