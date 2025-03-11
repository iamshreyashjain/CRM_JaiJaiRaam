import { FaBars } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function PaidClientReportTable({ currentReports }) {
  return (
    <table className="min-w-full bg-white">
      {/* ----------------- TABLE HEAD START ----------------- */}
      <thead>
        <tr className="border-b-2 border-gray-300">
          {/* CHECKBOX */}
          <th className="w-max px-3 py-3">
            <input type="checkbox" />
          </th>
          {/* SUBSCRIPTION START DATE */}
          <th className="border-r px-2 py-3 text-left font-medium">
            <div className="flex items-center justify-between">
              <span className="text-nowrap pr-2">Subscription Start Date</span>
              <FaBars />
            </div>
          </th>
          {/* SUBSCRIPTION END DATE */}
          <th className="border-r px-2 py-3 text-left font-medium">
            <div className="flex items-center justify-between">
              <span className="text-nowrap pr-2">Subscription End Date</span>
              <FaBars />
            </div>
          </th>
          {/* ACTIONS BUTTON */}
          <th className="border-r px-2 py-3 text-left font-medium">
            <span className="text-nowrap pr-2">Action</span>
          </th>
        </tr>
      </thead>
      {/* ----------------- TABLE HEAD END ----------------- */}
      {/* ----------------- TABLE BODY START ----------------- */}
      <tbody>
        {currentReports.map((report, i) => (
          <tr
            key={i}
            className="cursor-pointer border-b border-gray-300 hover:bg-gray-200"
          >
            {/* CHECKBOX */}
            <td className="w-max px-3 py-4 text-center">
              <input type="checkbox" />
            </td>
            {/* FREE TRAIL START DATE */}
            <td className="border-b border-gray-300 px-2 py-4 text-sm leading-5 text-blue-600">
              {report.subsStartDate}
            </td>
            {/* FREE TRAIL END DATE */}
            <td className="border-b border-gray-300 px-2 py-4 text-sm leading-5 text-gray-600">
              {report.subsEndDate}
            </td>
            {/* ACTIONS */}
            <td className="border-b border-gray-300 px-6 py-4 text-sm leading-5 text-gray-600">
              <div className="flex items-center gap-2 text-blue-600">
                <MdEdit
                  size={25}
                  color="white"
                  className="rounded bg-blue-500"
                />
                <RiDeleteBin6Fill size={25} color="red" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {/* ----------------- TABLE BODY END ----------------- */}
    </table>
  );
}
