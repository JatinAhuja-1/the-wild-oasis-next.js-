"use client";
// here in this component we need to write js in the on Click prop so we have to use use client in order to do it

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteBooking } from "../_lib/action";

function DeleteReservation({ bookingId }) {
  return (
    <button
      onClick={() => deleteBooking(bookingId)}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
    >
      <TrashIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
