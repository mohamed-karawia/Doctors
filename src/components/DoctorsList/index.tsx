import { DOCTORS } from "@/constants/DOCTORS";
import DoctorCard from "../DoctorCard";
import styles from "./DoctorsList.module.scss";

const DoctorsList = () => {
  return (
    <div className={styles["list"]}>
      {DOCTORS.map((doctor) => (
        <DoctorCard key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
