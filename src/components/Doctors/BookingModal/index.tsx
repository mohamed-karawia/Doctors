import { FC, useState } from "react";
import Image from "next/image";
import ModalComponent from "@/components/Shared/Modal";
import { Doctor } from "@/types/doctor";
import styles from "./BookingModal.module.scss";
import Button from "@/components/Shared/Button";
import Rating from "@/components/Shared/Rating";
import { Appointment } from "@/types/appointment";

interface BookingModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  doctorData: Doctor;
  onBook: (appointment: Appointment) => void;
}

const BookingModal: FC<BookingModalProps> = ({
  isOpen,
  setIsOpen,
  doctorData,
  onBook,
}) => {
  const { name, imageSrc, location, availability, specialty, rating } =
    doctorData;

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleDayClick = (day: string) => {
    setSelectedDay(day);
    setAvailableTimes(availability[day] || []);
  };

  const clearData = () => {
    setSelectedDay(null);
    setSelectedTime(null);
  };

  const onBookAppointment = () => {
    if (selectedDay && selectedTime) {
      console.log("booked");
      onBook({ id: doctorData?.id, selectedDay, selectedTime });
      clearData();
      setIsOpen(false);
    }
  };

  const renderAvailableDays = () => {
    const availableDays = Object.keys(availability);
    return (
      <ul>
        {availableDays.map((day) => (
          <li
            key={day}
            className={selectedDay === day ? styles.selected : ""}
            onClick={() => handleDayClick(day)}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </li>
        ))}
      </ul>
    );
  };

  const renderAvailableTimeSlots = () => (
    <div className={styles["data--booking__times"]}>
      <>
        <h4>Available Times for {selectedDay}</h4>
        <ul>
          {availableTimes.length > 0 ? (
            availableTimes?.map((time, index) => (
              <li
                key={index}
                className={selectedTime === time ? styles["selected"] : ""}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </li>
            ))
          ) : (
            <p>No times available</p>
          )}
        </ul>
      </>
    </div>
  );

  return (
    <ModalComponent
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="Book Appointment"
      onAfterClose={clearData}
    >
      <div className={styles["content"]}>
        <div className={styles["data"]}>
          <Image
            src={imageSrc}
            alt={`${name}'s profile picture`}
            width={100}
            height={100}
            className={styles["data--image"]}
          />
          <div className={styles["data--info"]}>
            <h3 className={styles["data--name"]}>{name}</h3>
            <p className={styles["data--specialty"]}>{specialty}</p>
            <p className={styles["data--location"]}>{location}</p>
            <p className={styles["data--rating"]}>
              Rating: <Rating value={rating} />
            </p>
            <div className={styles["data--booking"]}>
              <div className={styles["data--booking__days"]}>
                <h4>Available Weekdays</h4>
                {renderAvailableDays()}
              </div>
              {selectedDay && renderAvailableTimeSlots()}
            </div>
          </div>
        </div>
        <div className={styles["actions"]}>
          <Button
            type="submit"
            onClick={() => onBookAppointment()}
            disabled={!selectedDay || !selectedTime}
          >
            Book
          </Button>
        </div>
      </div>
    </ModalComponent>
  );
};

export default BookingModal;
