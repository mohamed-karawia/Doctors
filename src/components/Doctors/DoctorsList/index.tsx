import { FC } from "react";
import DoctorCard from "../DoctorCard";
import styles from "./DoctorsList.module.scss";
import { Doctor } from "@/types/doctor";

type DoctorsListProps = {
  doctorsList: Doctor[];
  onBook: (id: number) => void;
};

const DoctorsList: FC<DoctorsListProps> = ({ doctorsList, onBook }) => {
  return (
    <div className={styles["list"]}>
      {doctorsList.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} onBook={onBook} />
      ))}
    </div>
  );
};

export default DoctorsList;
