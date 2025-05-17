import { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import MapComponent from "./MapComponent";
import emailjs from "@emailjs/browser";

import ContactModal from "./ContactModal";

const Contact = () => {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const form = useRef();
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: "",
  });

  const [isMessageFocused, setIsMessageFocused] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const quickMessages = [
    "I'm looking for a React developer for a modern web project.",
    "Can you help build scalable full-stack applications using React and Node.js?",
    "Do you have experience deploying apps on Azure cloud services?",
    "I need assistance integrating React frontend with cloud-hosted backends.",
    "Are you available for consulting on React and cloud infrastructure?",
  ];

  // Filter quick messages based on typedMessage
  const filteredQuickMessages = quickMessages.filter((msg) =>
    msg.toLowerCase().includes(typedMessage.toLowerCase())
  );

  const selectQuickMessage = (message) => {
    const textarea = form.current.querySelector('textarea[name="message"]');
    const currentValue = textarea.value.trim();
    const newValue = currentValue ? `${currentValue}\n\n${message}` : message;
    textarea.value = newValue;
    setTypedMessage(newValue);
    textarea.focus();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });

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
          setIsMessageFocused(false);
          setTypedMessage("");

          // Close modal after successful submission
          setTimeout(() => {
            handleClose();
            setFormStatus({
              submitting: false,
              submitted: false,
              error: false,
              message: "",
            });
          }, 3000);
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
    <footer id="contact" className={styles.modernContainer}>
      {/* Social Links Row */}
      <div className={styles.socialSection}>
        <div className={styles.contactHeader}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <div className={styles.socialRow}>
          <a
            href="mailto:khanfarzan200@gmail.com"
            className={styles.socialCircle}
            aria-label="Email"
          >
            <img src="/assests/contact/GMAIL.png" alt="Email" />
            <span className={styles.socialTooltip}>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/"
            className={styles.socialCircle}
            aria-label="LinkedIn"
          >
            <img src="/assests/contact/LINKEDIN.png" alt="LinkedIn" />
            <span className={styles.socialTooltip}>LinkedIn</span>
          </a>

          <a
            href="https://x.com/farzankhan_17"
            className={styles.socialCircle}
            aria-label="Twitter"
          >
            <img src="/assests/contact/TWITTER.png" alt="Twitter" />
            <span className={styles.socialTooltip}>Twitter</span>
          </a>

          <a
            href="https://www.instagram.com/farzan.khan17/"
            className={styles.socialCircle}
            aria-label="Instagram"
          >
            <img src="/assests/contact/INSTAGRAM.png" alt="Instagram" />
            <span className={styles.socialTooltip}>Instagram</span>
          </a>

          <a
            href="https://github.com/khanfarzan17"
            className={styles.socialCircle}
            aria-label="GitHub"
          >
            <img src="/assests/contact/GITHUB.png" alt="GitHub" />
            <span className={styles.socialTooltip}>GitHub</span>
          </a>
        </div>
      </div>

      {/* Map Section with Contact Button */}
      <div className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          <MapComponent className={styles.map} />
          <div className={styles.mapOverlay}>
            <div className={styles.addressSection}>
              <div className={styles.address}>
                <svg className={styles.locationIcon} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                1st Stage 3rd Block HBR Layout Bengaluru 560043
              </div>
            </div>
            <button className={styles.contactBtn} onClick={handleShow}>
              <span className={styles.btnText}>Send Message</span>
              <svg className={styles.btnIcon} viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactModal
        showModal={showModal}
        handleClose={handleClose}
        form={form}
        typedMessage={typedMessage}
        setTypedMessage={setTypedMessage}
        isMessageFocused={isMessageFocused}
        setIsMessageFocused={setIsMessageFocused}
        filteredQuickMessages={filteredQuickMessages}
        selectQuickMessage={selectQuickMessage}
        sendEmail={sendEmail}
        formStatus={formStatus}
      />
    </footer>
  );
};

export default Contact;
