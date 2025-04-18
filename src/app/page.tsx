"use client";

import { useEffect, useMemo, useState } from "react";
import DoctorsList from "@/components/DoctorsList";
import Dropdown, { OptionType } from "@/components/Shared/Dropdown";
import styles from "./page.module.scss";
import { SPECIALTIES, WEEK_DAYS } from "@/constants/FILTERS";
import { DOCTORS } from "@/constants/DOCTORS";
import stringsToOptions from "@/utils/stringsToOptions";

export default function Home() {
  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);
  const [specialty, setSpecialty] = useState<null | OptionType>(null);
  const [weekDays, setWeekDay] = useState<OptionType[]>([]);

  useEffect(() => {
    let filtered = DOCTORS;

    if (specialty) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.specialty.toLowerCase() === specialty?.value?.toLowerCase()
      );
    }

    if (weekDays.length > 0) {
      filtered = filtered.filter((doctor) =>
        weekDays.some((weekDay) => doctor.availability[weekDay?.value])
      );
    }

    setFilteredDoctors(filtered);
  }, [specialty, weekDays]);

  const specialtiesOptions = useMemo(() => {
    return stringsToOptions(SPECIALTIES);
  }, [SPECIALTIES]);

  const weekDaysOptions = useMemo(() => {
    return stringsToOptions(WEEK_DAYS);
  }, [WEEK_DAYS]);

  return (
    <div className={styles["container"]}>
      <div className={styles["filters"]}>
        <h3>Filter by</h3>
        <Dropdown
          value={specialty}
          options={specialtiesOptions}
          handleChange={(val) => setSpecialty(val)}
        />
        <Dropdown
          value={weekDays}
          options={weekDaysOptions}
          handleChange={(val) => setWeekDay(val)}
          isMulti
        />
      </div>
      <DoctorsList doctorsList={filteredDoctors} />
    </div>
  );
}
