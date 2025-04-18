type Availability = {
  [day: string]: string[];
};

export interface Doctor {
  id: number;
  name: string;
  imageSrc: string;
  location: string;
  availability: Availability;
  specialty: string;
  rating: number;
}
