export interface LocationProps {
  latitude: number;
  longitude: number;
}

export interface JobProps {
  id: number;
  title: string;
  experience: string;
  salary: string;
  companyName: string;
  location: string;
  icon: string;
  role: number;
  isFavorite: boolean;
  toLoc: LocationProps;
}