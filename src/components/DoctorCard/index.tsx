import { FC } from "react";
import Image from "next/image";
import { Doctor } from "@/types/doctor";
import styles from "./DoctorCard.module.scss";
import Button from "../Shared/Button";

type DoctorCardProps = {
  doctor: Doctor;
};

const DoctorCard: FC<DoctorCardProps> = ({ doctor }) => {
  const { name, imageSrc, location, availability, specialty, rating } = doctor;

  const availabilityDays = Object.keys(availability).join(", ");

  return (
    <div className={styles["card"]}>
      <Image
        src={imageSrc}
        alt={`${name}'s profile picture`}
        width={100}
        height={100}
        className={styles["card--image"]}
      />
      <div className={styles["card--info"]}>
        <h3 className={styles["card--name"]}>{name}</h3>
        <p className={styles["card--specialty"]}>{specialty}</p>
        <p className={styles["card--location"]}>{location}</p>
        <p className={styles["card--rating"]}>Rating: {rating}</p>
        <p className={styles["card--availability"]}>
          Available: {availabilityDays}
        </p>
      </div>
      <div className={styles["card--actions"]}>
        <Button type="button">Book Now</Button>
      </div>
    </div>
  );
};

export default DoctorCard;
