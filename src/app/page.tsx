import DoctorsList from "@/components/DoctorsList";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <DoctorsList />
    </div>
  );
}
