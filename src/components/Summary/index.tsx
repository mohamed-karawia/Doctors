import { FC } from "react";
import { Appointment } from "@/types/appointment";
import { DOCTORS } from "@/constants/DOCTORS";
import { Doctor } from "@/types/doctor";
import styles from "./Summary.module.scss";
import Image from "next/image";

type SummaryProps = {
  bookedAppointments: Appointment[];
};

const Summary: FC<SummaryProps> = ({ bookedAppointments }) => {
  if (bookedAppointments.length < 1) {
    return (
      <div className={styles["container"]}>
        <h3>You don&apos;t have any booked appointments yet</h3>
      </div>
    );
  }
  return (
    <div className={styles["container"]}>
      {bookedAppointments.map((appointment) => {
        const doctorData = DOCTORS.find(
          (doctor) => doctor.id === appointment.id
        ) as Doctor;
        const { id, name, specialty, location, imageSrc } = doctorData;

        return (
          <div key={id} className={styles["appointment--card"]}>
            <Image
              src={imageSrc}
              alt={`${name}'s profile picture`}
              width={100}
              height={100}
            />
            <div className={styles["appointment--card__info"]}>
              <h4 className={styles["appointment--card__name"]}>{name}</h4>
              <p className={styles["appointment--card__specialty"]}>
                {specialty}
              </p>
              <p className={styles["appointment--card__location"]}>
                {location}
              </p>
              <p className={styles["appointment--card__date"]}>
                {appointment.selectedDay}, {appointment.selectedTime}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Summary;
