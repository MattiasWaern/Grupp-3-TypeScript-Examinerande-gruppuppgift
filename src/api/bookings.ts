import { get, post } from "./client";
import type { Booking, NewBooking } from "../types/bookingTypes";

export const getBookingsByCarId = (carId: string) =>
  get<Booking[]>(`/bookings?carId=${carId}`);

export const createBooking = (booking: NewBooking) =>
  post<Booking>("/bookings", booking);