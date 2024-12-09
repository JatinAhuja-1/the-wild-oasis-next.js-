"use client";

import { deleteBooking } from "../_lib/action";
import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  // 1) first one is optimistic state that will be returned in the begining while no async operation in going on
  // 2) setter function which will show that booking will be deleted immediately
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currBookings, bookingId) => {
      return currBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  // using this we have to now think of 2 states
  // 1) actual booking data
  // 2) and the optimistic state(where the booking will be deleted immediately)

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId); // ye client side ui se ussi time delete krdega
    await deleteBooking(bookingId); //ye supabase se delete krna chalu krega
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
