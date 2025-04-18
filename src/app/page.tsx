"use client";

import { useEffect, useMemo, useState } from "react";
import DoctorsList from "@/components/Doctors/DoctorsList";
import Dropdown, { OptionType } from "@/components/Shared/Dropdown";
import styles from "./page.module.scss";
import { SPECIALTIES, WEEK_DAYS } from "@/constants/FILTERS";
import { DOCTORS } from "@/constants/DOCTORS";
import stringsToOptions from "@/utils/stringsToOptions";
import BookingModal from "@/components/Doctors/BookingModal";
import { Doctor } from "@/types/doctor";

export default function Home() {
  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);
  const [specialty, setSpecialty] = useState<null | OptionType>(null);
  const [weekDay, setWeekDay] = useState<null | OptionType>(null);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<null | Doctor>(null);

  useEffect(() => {
    let filtered = DOCTORS;

    if (specialty) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() === specialty?.value?.toLowerCase()
      );
    }

    if (weekDay) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.availability[weekDay.value] &&
          doctor.availability[weekDay.value].length > 0
      );
    }

    setFilteredDoctors(filtered);
  }, [specialty, weekDay]);

  const specialtiesOptions = useMemo(() => {
    return stringsToOptions(SPECIALTIES);
  }, [SPECIALTIES]);

  const weekDaysOptions = useMemo(() => {
    return stringsToOptions(WEEK_DAYS);
  }, [WEEK_DAYS]);

  const handleBooking = (id: number) => {
    const doctor = DOCTORS.find((doc) => doc.id === id); // Find the doctor by ID
    if (doctor) {
      setSelectedDoctor(doctor);
      setIsDoctorModalOpen(true);
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["filters"]}>
        <h3>Filter by</h3>
        <Dropdown
          options={specialtiesOptions}
          value={specialty}
          handleChange={(val) => setSpecialty(val)}
        />
        <Dropdown
          options={weekDaysOptions}
          value={weekDay}
          handleChange={(val) => setWeekDay(val)}
        />
      </div>
      <DoctorsList doctorsList={filteredDoctors} onBook={handleBooking} />
      {selectedDoctor && (
        <BookingModal
          isOpen={isDoctorModalOpen}
          setIsOpen={setIsDoctorModalOpen}
          doctorData={selectedDoctor}
        />
      )}
    </div>
  );
}
