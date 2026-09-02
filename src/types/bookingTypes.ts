export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  available: boolean;
  description: string;
  image: string;
  seats: number;
  transmission: "Automat" | "Manuell"
  fuelType: "Bensin" | "Diesel" 
  airConditioning: boolean;
  luggageCapacity: string;
}

export type BookingStatus = "confirmed" | "cancelled";

export interface Booking {
  id: string;
  carId: string;
  customerName: string;
  email: string;
  startDate: string;
  endDate: string;
  status: BookingStatus;
}

export type NewBooking = Omit<Booking, "id">;