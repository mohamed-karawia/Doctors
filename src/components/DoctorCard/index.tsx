import Image from "next/image";
import styles from "./DoctorCard.module.scss";

const DoctorCard = () => {
  return (
    <div className={styles["card"]}>
      <Image
        src="/images/doctor1.jpg"
        alt="Doctor"
        width={100}
        height={100}
        className={styles["card--image"]}
      />
      <div className={styles["card--info"]}>
        <h3 className={styles["card--name"]}>Dr. John Doe</h3>
        <p className={styles["card--specialty"]}>Cardiologist</p>
        <p className={styles["card--location"]}>New York, NY</p>
        <p className={styles["card--availability"]}></p>
      </div>
    </div>
  );
};

export default DoctorCard;
