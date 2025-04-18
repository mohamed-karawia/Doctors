import { FC } from "react";
import DoctorCard from "../DoctorCard";
import styles from "./DoctorsList.module.scss";
import { Doctor } from "@/types/doctor";

type DoctorsListProps = {
  doctorsList: Doctor[];
};

const DoctorsList: FC<DoctorsListProps> = ({ doctorsList }) => {
  return (
    <div className={styles["list"]}>
      {doctorsList.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
