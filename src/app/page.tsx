"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.scss";
import DoctorsView from "@/components/Doctors/DoctorsView/DoctorsView";
import { Appointment } from "@/types/appointment";

const Summary = dynamic(() => import("@/components/Summary"), {
  loading: () => <p>Loading...</p>,
});

const TABS = ["doctors", "appointments summary"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("doctors");
  const [bookedAppointments, setBookedAppointments] = useState<Appointment[]>(
    []
  );

  const onBookAppointment = (appointment: Appointment) => {
    setBookedAppointments((prev) => [...prev, appointment]);
  };

  const handleKeyDown = (event: React.KeyboardEvent, tab: string) => {
    if (event.key === "Enter" || event.key === " ") {
      setActiveTab(tab);
    } else if (event.key === "ArrowRight") {
      const currentIndex = TABS.indexOf(activeTab);
      const nextIndex = (currentIndex + 1) % TABS.length;
      setActiveTab(TABS[nextIndex]);
    } else if (event.key === "ArrowLeft") {
      const currentIndex = TABS.indexOf(activeTab);
      const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
      setActiveTab(TABS[prevIndex]);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["tabs"]} role="tablist">
        {TABS.map((tab) => (
          <div
            key={tab}
            className={`${styles["tab"]} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
            onKeyDown={(e) => handleKeyDown(e, tab)}
            tabIndex={0}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
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
