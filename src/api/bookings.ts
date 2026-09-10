import { get, post, patch } from "./client";
import type { Booking, NewBooking } from "../types/bookingTypes";

export const getBookingsByCarId = (carId: string) =>
  get<Booking[]>(`/bookings?carId=${carId}`);

export const createBooking = (booking: NewBooking) =>
  post<Booking>("/bookings", booking);

export const getBookingsByEmail = (email: string) =>
  get<Booking[]>(`/bookings?email=${email}`);

export const cancelBooking = (id: string) =>
  patch<Booking>(`/bookings/${id}`, { status: "cancelled" });