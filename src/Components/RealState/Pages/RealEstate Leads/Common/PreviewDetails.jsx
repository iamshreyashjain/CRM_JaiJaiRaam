import {
 
  Typography,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
// import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

const PreviewDetails = () => {
  //---------------------------------------------- All States ----------------------------------------------------

  return (
    <div className="flex min-h-screen flex-col gap-6 py-6">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-4 rounded-md p-4 shadow-md">
        <Typography variant="h6" className="font-bold">
          Anand Kumar
        </Typography>
        <div className="flex justify-between gap-6">
          <div className="flex justify-between gap-3 rounded-md border">
            <div className="rounded-md bg-blue-400 px-3 py-1 font-bold text-white">
              0
            </div>
            <div className="py-1 pr-3 !font-semibold">Unit</div>
          </div>
          <div className="flex justify-between gap-3 rounded-md border">
            <div className="rounded-md bg-blue-400 px-3 py-1 font-bold text-white">
              0
            </div>
            <div className="py-1 pr-3 !font-semibold">Task</div>
          </div>
        </div>
      </div>

      {/*--------------------------------------------- Basic Information Cards -------------------------------------------*/}
      <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Stage */}
          <Select
            value="Stage"
            className="!bg-white !shadow-md"
            sx={{ height: 45 }}
          >
            <MenuItem value="Stage">Stage & Status</MenuItem>
            <MenuItem value="Project1">Project 1</MenuItem>
            <MenuItem value="Project2">Project 2</MenuItem>
          </Select>
          {/* Button */}
          <div className="flex w-full flex-wrap justify-end gap-3">
            {/* Save Button */}
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-white shadow-md transition-all hover:bg-cyan-600 md:w-auto">
              <span>Save</span>
            </button>

            {/* Cancel Button */}
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-300 px-4 py-2 text-black shadow-md transition-all hover:bg-gray-100 md:w-auto">
              <span>Cancel</span>
            </button>
          </div>
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Last Note</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Received on</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
      </div>

        {/*------------------------------------------ Requirements Information Section ----------------------------------*/}
        <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Heading */}
          <div><span className="font-semibold text-xl">Requirement</span></div>
          {/* Button */}
          <div className="flex w-full flex-wrap justify-end gap-3">
            {/* Similar Find Button */}
            <button className="flex w-full items-center justify-center border rounded-md bg-gray-100 px-6 py-1 text-sm text-gray-500 shadow-md transition-all hover:bg-cyan-200 md:w-auto">
              <span >Show Matching Properties</span>
            </button>

          </div>
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
      </div>

      {/*------------------------------------------ Task Information Section ----------------------------------------------*/}
      <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Heading */}
          <div><span className="font-semibold text-xl">Task</span></div>
          {/* Button and Drop Down */}
          
           <div className="flex w-full flex-wrap justify-end gap-3">
            {/* Add Task Button */}
            <button className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-white shadow-md transition-all hover:bg-cyan-600 md:w-auto">
              <span>Add Task</span>
            </button>

            {/* Cancel Button */}
            <Select
            value="Stage"
            className="!bg-white !shadow-md"
            sx={{ height: 45 }}
          >
            <MenuItem value="Stage">Open</MenuItem>
            <MenuItem value="Project1">Project 1</MenuItem>
            <MenuItem value="Project2">Project 2</MenuItem>
          </Select>
          </div>
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
      </div>

       {/*------------------------------------------ Booking Information Section ----------------------------------------------*/}
       <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Heading */}
          <div><span className="font-semibold text-xl">Booking</span></div>
         
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
      </div>

        {/*------------------------------------------ Interested Projects Information Section ----------------------------------------------*/}
        <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Heading */}
          <div><span className="font-semibold text-xl whitespace-nowrap">Interested Projects</span></div>
          {/* Button and Drop Down */}
           <div className="flex w-full flex-wrap justify-end gap-3">
            {/* Cancel Button */}
            <Select
            value="Stage"
            className="!bg-white !shadow-md"
            sx={{ height: 45 }}
          >
            <MenuItem value="Stage">Oldest First</MenuItem>
            <MenuItem value="Project1">Project 1</MenuItem>
            <MenuItem value="Project2">Project 2</MenuItem>
          </Select>
          </div>
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
        {/* Units of Interest */}
        <div className="w-full flex flex-col gap-2 ">
        <span className="text-gray-400">Units of Interest</span>
        <div className="w-full p-3 border rounded-md">
           {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
        </div>
        </div>
      </div>

         {/*------------------------------------------ Campaign Responses  Information Section ----------------------------------------------*/}
         <div className="flex flex-col items-center justify-between gap-6 rounded-md p-4 shadow-md">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Heading */}
          <div><span className="font-semibold text-xl whitespace-nowrap">Campaign Responses (1)</span></div>
          {/* Button and Drop Down */}
           <div className="flex w-full flex-wrap justify-end gap-3">
            {/* Cancel Button */}
            <Select
            value="Stage"
            className="!bg-white !shadow-md"
            sx={{ height: 45 }}
          >
            <MenuItem value="Stage">Oldest First</MenuItem>
            <MenuItem value="Project1">Project 1</MenuItem>
            <MenuItem value="Project2">Project 2</MenuItem>
          </Select>
          </div>
        </div>
        <Divider className="my-2 w-full" />
        {/* Information */}
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Configuration</span>
            <span className="font-semibold text-black">.......</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-400">Property Type</span>
            <span className="font-semibold text-black">.......</span>
          </div>
        </div>
     
      </div>

   {/* ------------------------------------------------------- View Profile Button --------------------------------------------------------- */}
   <div className="w-full flex justify-end pt-6">
   <button className="flex w-full items-center justify-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-white shadow-md transition-all hover:bg-cyan-600 md:w-auto">
              <span>View Profile</span>
            </button>
   </div>
    </div>
  );
};

export default PreviewDetails;
