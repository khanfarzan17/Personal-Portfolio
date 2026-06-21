import { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

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

  const quickMessages = [
    "I'm looking for a React developer for a modern web project.",
    "Can you help build scalable full-stack applications using React and Node.js?",
    "Do you have experience deploying apps on Azure cloud services?",
    "I need assistance integrating React frontend with cloud-hosted backends.",
    "Are you available for consulting on React and cloud infrastructure?",
  ];

  // Filter quick messages based on typedMessage
  const filteredQuickMessages = quickMessages.filter((msg) =>
    msg.toLowerCase().includes(typedMessage.toLowerCase()),
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
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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

          setTimeout(() => {
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
        },
      );
  };

  return (
    <footer id="contact" className={styles.modernContainer}>
      <div className={styles.contactHeader}>
        <h2>Let's Connect</h2>
        <p>
          Ready to bring your next web project to life? Send a message and I’ll
          respond fast.
        </p>
      </div>
      <div className={styles.contactWrap}>
        <div className={styles.contactLeft}>
          <p className={styles.contactIntro}>
            Let’s build something great together. Share your idea, and I’ll get
            back to you soon.
          </p>
          <form ref={form} onSubmit={sendEmail} className={styles.cf}>
            <div className={styles.fieldRow}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className={styles.field}
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className={styles.field}
              />
            </div>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              required
              className={styles.textarea}
              value={typedMessage}
              onChange={(e) => setTypedMessage(e.target.value)}
              onFocus={() => setIsMessageFocused(true)}
              onBlur={() => {
                setTimeout(() => {
                  const activeElement = document.activeElement;
                  const isQuickMessageBtn = activeElement?.closest(
                    `.${styles.quickMessageBtn}`,
                  );
                  if (!isQuickMessageBtn) {
                    setIsMessageFocused(false);
                  }
                }, 100);
              }}
            />

            {isMessageFocused && (
              <div className={styles.quickMessages}>
                <p className={styles.quickMessagesTitle}>
                  <span className={styles.quickIcon}>💡</span>
                  Quick Messages
                </p>
                <div className={styles.quickMessageOptions}>
                  {filteredQuickMessages.length ? (
                    filteredQuickMessages.map((msg, index) => (
                      <button
                        key={index}
                        type="button"
                        className={styles.quickMessageBtn}
                        onClick={() => selectQuickMessage(msg)}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {msg}
                      </button>
                    ))
                  ) : (
                    <p className={styles.noQuickMessages}>No matches found.</p>
                  )}
                </div>
              </div>
            )}

            {formStatus.submitted && (
              <div className={styles.successMessage}>
                <svg className={styles.statusIcon} viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                {formStatus.message}
              </div>
            )}

            {formStatus.error && (
              <div className={styles.errorMessage}>
                <svg className={styles.statusIcon} viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
                {formStatus.message}
              </div>
            )}

            <button
              className={styles.contactBtn}
              type="submit"
              disabled={formStatus.submitting}
            >
              <span className={styles.btnText}>Send Message</span>
            </button>
          </form>
        </div>

        <div className={styles.contactRight}>
          <div className={styles.cinfoRow}>
            <div className={styles.cinfoIc}>📍</div>
            <div>
              <div className={styles.cinfoLabel}>Location</div>
              <div className={styles.cinfoVal}>Bengaluru, India</div>
            </div>
          </div>

          <div className={styles.cinfoRow}>
            <div className={styles.cinfoIc}>
              <img
                src="/assests/contact/GMAIL.png"
                alt="Email Icon"
                className={styles.iconImg}
              />
            </div>
            <div>
              <div className={styles.cinfoLabel}>Email</div>
              <div className={styles.cinfoVal}>
                <a
                  href="https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  farzan-ateeque-khan
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cinfoRow}>
            <div className={styles.cinfoIc}>
              <img
                src="/assests/contact/LINKEDIN.png"
                alt="LinkedIn Icon"
                className={styles.iconImg}
              />
            </div>

            <div>
              <div className={styles.cinfoLabel}>LinkedIn</div>
              <div className={styles.cinfoVal}>
                <a
                  href="https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  farzan-ateeque-khan
                </a>
              </div>
            </div>
          </div>

          <div className={styles.cinfoRow}>
            <div className={styles.cinfoIc}>
              <img
                src="/assests/contact/GITHUB.png"
                alt="Github Icon"
                className={styles.iconImg}
              />
            </div>
            <div>
              <div className={styles.cinfoLabel}>Github</div>
              <div className={styles.cinfoVal}>
                <a
                  href="https://github.com/khanfarzan17"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/khanfarzan17
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
