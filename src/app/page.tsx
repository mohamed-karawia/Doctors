"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import DoctorsView from "@/components/Doctors/DoctorsView/DoctorsView";
import Summary from "@/components/Summary";
import { Appointment } from "@/types/appointment";

const TABS = ["doctors", "appointments summary"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("doctors");
  const [bookedAppointments, setBookedAppointments] = useState<Appointment[]>(
    []
  );

  const onBookAppointment = (appointment: Appointment) => {
    console.log(appointment);
    setBookedAppointments((prev) => [...prev, appointment]);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["tabs"]}>
        {TABS.map((tab) => (
          <div
            key={tab}
            className={`${styles["tab"]} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      {activeTab === "doctors" && (
        <DoctorsView handleBookAppointment={onBookAppointment} />
      )}
      {activeTab === "appointments summary" && (
        <Summary bookedAppointments={bookedAppointments} />
      )}
    </div>
  );
}
