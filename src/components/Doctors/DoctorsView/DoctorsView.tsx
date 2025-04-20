import { FC, useEffect, useMemo, useState } from "react";
import Dropdown, { OptionType } from "@/components/Shared/Dropdown";
import styles from "./DoctorsView.module.scss";
import { DOCTORS } from "@/constants/DOCTORS";
import stringsToOptions from "@/utils/stringsToOptions";
import { SPECIALTIES, WEEK_DAYS } from "@/constants/FILTERS";
import { Doctor } from "@/types/doctor";
import { Appointment } from "@/types/appointment";
import DoctorsList from "../DoctorsList";
import BookingModal from "../BookingModal";

type DoctorsViewProps = {
  handleBookAppointment: (appointment: Appointment) => void;
};

const DoctorsView: FC<DoctorsViewProps> = ({ handleBookAppointment }) => {
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

  const openBookingModal = (id: number) => {
    const doctor = DOCTORS.find((doc) => doc.id === id);
    if (doctor) {
      setSelectedDoctor(doctor);
      setIsDoctorModalOpen(true);
    }
  };

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
          options={specialtiesOptions}
          value={specialty}
          handleChange={(val) => setSpecialty(val)}
          placeholder="Specialty"
        />
        <Dropdown
          options={weekDaysOptions}
          value={weekDay}
          handleChange={(val) => setWeekDay(val)}
          placeholder="Availability"
        />
      </div>
      <DoctorsList doctorsList={filteredDoctors} onBook={openBookingModal} />
      {selectedDoctor && (
        <BookingModal
          isOpen={isDoctorModalOpen}
          setIsOpen={setIsDoctorModalOpen}
          doctorData={selectedDoctor}
          onBook={handleBookAppointment}
        />
      )}
    </div>
  );
};

export default DoctorsView;
