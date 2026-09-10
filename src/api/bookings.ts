import { get, post, patch } from "./client";
import type { Booking, NewBooking } from "../types/bookingTypes";

export const getBookings = () => get<Booking[]>("/bookings");

export const getBookingsByCarId = async (carId: string) => {
  const allBookings = await getBookings();
  return allBookings.filter((booking) => booking.carId === carId);
};

export const createBooking = (booking: NewBooking) =>
  post<Booking>("/bookings", booking);

export const getBookingsByEmail = (email: string) =>
  get<Booking[]>(`/bookings?email=${email}`);

export const cancelBooking = (id: string) =>
  patch<Booking>(`/bookings/${id}`, { status: "cancelled" });