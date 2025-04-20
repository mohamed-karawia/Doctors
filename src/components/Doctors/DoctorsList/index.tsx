import { FC } from "react";
import DoctorCard from "../DoctorCard";
import styles from "./DoctorsList.module.scss";
import { Doctor } from "@/types/doctor";

type DoctorsListProps = {
  doctorsList: Doctor[];
  onBook: (id: number) => void;
};

const DoctorsList: FC<DoctorsListProps> = ({ doctorsList, onBook }) => {
  if (doctorsList.length < 1) {
    return (
      <div
        className={styles["list"]}
        role="region"
        aria-labelledby="no-doctors-found"
      >
        <h4 id="no-doctors-found">No Doctors found, try to change filters</h4>
      </div>
    );
  }

  return (
    <div
      className={styles["list"]}
      role="region"
      aria-labelledby="doctors-list"
    >
      {doctorsList.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onBook={onBook} />
      ))}
    </div>
  );
};

export default DoctorsList;
