import { useState } from "react";

import { Box } from "@mui/material";


//----------------------- Local Imports --------------------------------


export default function RealEstateReports() {
  //---------------------------------------- All States ---------------------------------
  const [selectedButton, setSelectedButton] = useState("Custom Reports");


  return (
    <div className="flex h-full flex-col gap-8 bg-gray-200 p-6">
      {/* --------------------------------------- Heading --------------------------------- */}
      <Box className="relative flex w-full gap-3 rounded-md bg-white p-2">
        {["Custom Reports", "New Custom Reports", "Default Reports"].map((button) => (
          <>
            <Box
              key={button}
              sx={{ width: "fit-content" }}
              className={`cursor-pointer rounded-md px-3 py-1 text-sm transition-all ${
                selectedButton === button
                  ? "bg-cyan-500 text-white shadow-md"
                  : "bg-gray-200 text-black hover:bg-cyan-400 hover:text-white"
              }`}
              onClick={() => setSelectedButton(button)}
            >
              {button}
              <Box></Box>
            </Box>
          </>
        ))}
      </Box>
     
      {/* --------------------------- Tabs Import Section ------------------------ */}
      {/* {selectedButton === "New Task" ? <NewTask /> : ""}
      {selectedButton === "All" ? <AllTasks /> : ""}
      {selectedButton === "Open" ? <OpenTasks /> : ""}
      {selectedButton === "Completed" ? <CompleteTasks /> : ""}
      {selectedButton === "Archived" ? <ArchivedTasks /> : ""} */}
   
    </div>
  );
}
