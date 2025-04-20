import Modal from "react-modal";
import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  title?: string;
  children: ReactNode;
  onAfterClose?: () => void;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "24px",
    padding: "16px 20px",
  },
};

const ModalComponent: FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  title,
  children,
  onAfterClose,
}) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCloseKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
      onAfterClose={onAfterClose}
      aria={{
        labelledby: title,
      }}
      contentLabel={title}
    >
      <div className={styles["heading"]}>
        <h3 className={styles["title"]} aria-label={title}>
          {title}
        </h3>
        <span
          className={styles["icon"]}
          onClick={closeModal}
          onKeyDown={handleCloseKeyDown}
          tabIndex={0}
          aria-label="Close popup"
          role="button"
        >
          &#x2715;
        </span>
      </div>
      <div className={styles["content"]}>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
