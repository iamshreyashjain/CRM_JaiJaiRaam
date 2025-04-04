import { useState } from "react";

import { Typography, Box } from "@mui/material";
import BookingSection from "./Component/BookingSection/BookingSection";
import BrokrageSection from "./Component/BrokrageSection/BrokrageSection";

export default function Bookings() {
  //---------------------------------------- All States ---------------------------------
  const [selectedButton, setSelectedButton] = useState("Bookings");

  return (
    <div className="flex h-full flex-col gap-8 bg-gray-200 p-6">
      {/* --------------------------------------- Heading --------------------------------- */}
      <Box className="flex w-full gap-3 rounded-md bg-white p-2">
        {["Bookings", "Brokerage Invoices"].map((button) => (
          <Typography
            key={button}
            sx={{ width: "fit-content" }}
            className={`cursor-pointer rounded-md !px-3 !py-1 text-sm transition-all ${
              selectedButton === button
                ? "bg-cyan-500 text-white shadow-md"
                : "bg-gray-200 text-black hover:bg-cyan-400 hover:text-white"
            }`}
            onClick={() => setSelectedButton(button)}
          >
            {button}
          </Typography>
        ))}
      </Box>
      {/* --------------------------- Booking & Brokrage Import Section ------------------------ */}
      {selectedButton === "Bookings" ? <BookingSection /> : <BrokrageSection />}
    </div>
  );
}
