import { useRef, useState, useEffect } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import ContactModal from "./ContactModal";
import LazyImage from "./LazyImage";
import ScrollFadeIn from "./ScrollFadeIn";

const SOCIALS = [
  {
    href: "mailto:khanfarzan200@gmail.com",
    label: "Email",
    img: "/assests/contact/GMAIL.png",
    color: "rgba(234,67,53,0.12)",
    border: "rgba(234,67,53,0.22)",
  },
  {
    href: "https://www.linkedin.com/in/farzan-ateeque-khan-6a9669236/",
    label: "LinkedIn",
    img: "/assests/contact/LINKEDIN.png",
    color: "rgba(10,102,194,0.12)",
    border: "rgba(10,102,194,0.22)",
  },
  {
    href: "https://x.com/farzankhan_17",
    label: "Twitter / X",
    img: "/assests/contact/TWITTER.png",
    color: "rgba(29,161,242,0.10)",
    border: "rgba(29,161,242,0.20)",
  },
  {
    href: "https://www.instagram.com/farzan.khan17/",
    label: "Instagram",
    img: "/assests/contact/INSTAGRAM.png",
    color: "rgba(225,48,108,0.10)",
    border: "rgba(225,48,108,0.20)",
  },
  {
    href: "https://github.com/khanfarzan17",
    label: "GitHub",
    img: "/assests/contact/GITHUB.png",
    color: "rgba(249,250,251,0.05)",
    border: "rgba(249,250,251,0.12)",
  },
];

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

  const filteredQuickMessages = quickMessages.filter((msg) =>
    msg.toLowerCase().includes(typedMessage.toLowerCase()),
  );

  const selectQuickMessage = (message) => {
    const textarea = form.current.querySelector('textarea[name="message"]');
    const cur = textarea.value.trim();
    textarea.value = cur ? `${cur}\n\n${message}` : message;
    setTypedMessage(textarea.value);
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
            message: "Message sent! I'll get back to you soon.",
          });
          form.current.reset();
          setIsMessageFocused(false);
          setTypedMessage("");
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
        (err) => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: true,
            message: "Failed to send. Please try again.",
          });
          console.error(err);
        },
      );
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.topAccent} />

      <div className={styles.inner}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <span className={styles.sectionTag}>Get in touch</span>
          <h2 className={styles.title}>
            Let's work <span className={styles.titleAccent}>together.</span>
          </h2>
          <p className={styles.subtitle}>
            Open to freelance, full-time roles, and interesting collaborations.
            I respond within 24 hours.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className={styles.grid}>
          {/* LEFT — contact form */}
          <div className={styles.leftCol}>
            <p className={styles.colLabel}>
              <span className={styles.colDot} /> Send a message
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.cf}
              noValidate
            >
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label htmlFor="user_name" className={styles.fieldLabel}>
                    Name
                  </label>
                  <input
                    id="user_name"
                    type="text"
                    name="user_name"
                    placeholder="Farzan Khan"
                    required
                    className={styles.field}
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label htmlFor="user_email" className={styles.fieldLabel}>
                    Email
                  </label>
                  <input
                    id="user_email"
                    type="email"
                    name="user_email"
                    placeholder="you@email.com"
                    required
                    className={styles.field}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="message" className={styles.fieldLabel}>
                  Message
                </label>
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
                      if (
                        !document.activeElement?.closest(
                          `.${styles.quickMessageBtn}`,
                        )
                      ) {
                        setIsMessageFocused(false);
                      }
                    }, 100);
                  }}
                />
              </div>

              {/* Quick suggestions */}
              {isMessageFocused && (
                <div className={styles.quickMessages}>
                  <p className={styles.quickTitle}>
                    <span aria-hidden="true">💡</span> Quick suggestions
                  </p>
                  <div className={styles.quickOptions}>
                    {filteredQuickMessages.length ? (
                      filteredQuickMessages.map((msg, i) => (
                        <button
                          key={i}
                          type="button"
                          className={styles.quickMessageBtn}
                          onClick={() => selectQuickMessage(msg)}
                          onMouseDown={(e) => e.preventDefault()}
                        >
                          {msg}
                        </button>
                      ))
                    ) : (
                      <p className={styles.noQuick}>No matches found.</p>
                    )}
                  </div>
                </div>
              )}

              {/* Status */}
              {formStatus.submitted && (
                <div className={styles.successMsg}>
                  <svg
                    className={styles.statusIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  {formStatus.message}
                </div>
              )}
              {formStatus.error && (
                <div className={styles.errorMsg}>
                  <svg
                    className={styles.statusIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                  {formStatus.message}
                </div>
              )}

              <div className={styles.formFooter}>
                <div className={styles.availBadge}>
                  <span className={styles.availDot} />
                  Available for new projects
                </div>
                <button
                  type="submit"
                  className={styles.sendBtn}
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className={styles.bounceDot} />
                      <span className={styles.bounceDot} />
                      <span className={styles.bounceDot} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className={styles.colDivider} />

          {/* RIGHT — info + socials */}
          <div className={styles.rightCol}>
            <p className={styles.colLabel}>
              <span
                className={styles.colDot}
                style={{ background: "#60A5FA" }}
              />{" "}
              Contact info
            </p>

            {/* Social cards */}
            <div className={styles.socialBlock}>
              <div className={styles.socialGrid}>
                {SOCIALS.map(({ href, label, img, color, border }, idx) => (
                  <ScrollFadeIn
                    key={label}
                    direction="up"
                    delay={idx * 0.08}
                    duration={0.6}
                  >
                    <a
                      href={href}
                      className={styles.socialCard}
                      aria-label={label}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      style={{ "--sc": color, "--sb": border }}
                    >
                      <div className={styles.socialIco}>
                        <LazyImage src={img} alt="" aria-hidden="true" />
                      </div>
                      <span className={styles.socialName}>{label}</span>
                      <svg
                        className={styles.socialArrow}
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </ScrollFadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer strip ── */}
        <div className={styles.footerStrip}>
          <span className={styles.footerTxt}>
            © {new Date().getFullYear()} Farzan Khan · Built with React.js &amp;
            ❤️
          </span>
          <span className={styles.footerTxt}>Bengaluru, India</span>
        </div>
      </div>

      {/* ContactModal — still available if triggered elsewhere */}
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
