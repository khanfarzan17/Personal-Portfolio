import { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./ContactModal.module.css";

const ContactModal = ({
  showModal,
  handleClose,
  form,
  typedMessage,
  setTypedMessage,
  isMessageFocused,
  setIsMessageFocused,
  filteredQuickMessages,
  selectQuickMessage,
  sendEmail,
  formStatus,
}) => {
  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName={styles.contactModal}
      contentClassName={styles.contactModalContent}
      backdrop="static"
      animation={true}
    >
      <div className={styles.modalBackdrop}>
        <Modal.Header className={styles.modalHeader} closeButton>
          <Modal.Title className={styles.modalTitle}>
            <span className={styles.titleIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </span>
            Send a Message
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalBody}>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="user_name" className={styles.formLabel}>
                  Your Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="user_email" className={styles.formLabel}>
                  Your Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className={styles.formInput}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can I help you?"
                required
                className={styles.formTextarea}
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
                onFocus={() => setIsMessageFocused(true)}
                onBlur={() => {
                  setTimeout(() => {
                    const activeElement = document.activeElement;
                    const isQuickMessageBtn = activeElement.closest(
                      `.${styles.quickMessageBtn}`
                    );
                    if (!isQuickMessageBtn) {
                      setIsMessageFocused(false);
                    }
                  }, 100);
                }}
              />
            </div>

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
          </form>
        </Modal.Body>

        <Modal.Footer className={styles.modalFooter}>
          <Button
            variant="secondary"
            className={styles.cancelBtn}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className={styles.sendBtn}
            disabled={formStatus.submitting}
            onClick={() => form.current.requestSubmit()}
          >
            {formStatus.submitting ? (
              <>
                <span className={styles.loadingDot}></span>
                <span className={styles.loadingDot}></span>
                <span className={styles.loadingDot}></span>
                Sending
              </>
            ) : (
              <>
                <svg
                  className={styles.sendIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Send Message
              </>
            )}
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default ContactModal;
