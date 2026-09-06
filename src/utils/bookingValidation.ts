import type { Booking } from "../types/bookingTypes";

export function hasOverlap(
    existingBookings: Booking[],
    startDate: string,
    endDate: string
): boolean {
    const newStart = new Date(startDate);
    const newEnd = new Date(endDate);

    return existingBookings.some((booking) => {
        if (booking.status === "cancelled") return false;

        const existingStart = new Date(booking.startDate);
        const existingEnd = new Date(booking.endDate);

        return newStart <= existingEnd && newEnd >= existingStart;
    })
}