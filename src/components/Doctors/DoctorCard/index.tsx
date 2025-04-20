import { FC } from "react";
import Image from "next/image";
import { Doctor } from "@/types/doctor";
import Button from "@/components/Shared/Button";
import styles from "./DoctorCard.module.scss";
import Rating from "@/components/Shared/Rating";

type DoctorCardProps = {
  doctor: Doctor;
  onBook: (id: number) => void;
};

const DoctorCard: FC<DoctorCardProps> = ({ doctor, onBook }) => {
  const { id, name, imageSrc, location, availability, specialty, rating } =
    doctor;

  const availabilityDays = Object.keys(availability).join(", ");

  return (
    <div
      className={styles["card"]}
      role="region"
      aria-labelledby={`doctor-${id}`}
    >
      <Image
        src={imageSrc}
        alt={`Profile picture of Dr. ${name}`}
        width={100}
        height={100}
        className={styles["card--image"]}
        aria-hidden="true"
      />
      <div className={styles["card--info"]}>
        <h3 className={styles["card--name"]} id={`doctor-${id}`}>
          {name}
        </h3>
        <p className={styles["card--specialty"]} aria-label="Specialty">
          {specialty}
        </p>
        <p className={styles["card--location"]} aria-label="Location">
          {location}
        </p>
        <p className={styles["card--rating"]} aria-label={`Rating: ${rating}`}>
          Rating: <Rating value={rating} />
        </p>
        <p className={styles["card--availability"]} aria-label="Availability">
          Available: {availabilityDays}
        </p>
      </div>
      <div className={styles["card--actions"]}>
        <Button
          type="button"
          onClick={() => onBook(id)}
          aria-label={`Book an appointment with Dr. ${name}`}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
