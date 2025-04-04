import { Typography } from "@mui/material";
import LeadStageAnalysis from "./PipelineAnalysis/LeadStageAnalysis";

const DefaultReports = () => {
  

  return (
    <div className=" gap-5  flex flex-col">
    <Typography className="!font-bold !text-xl">Pipeline Analysis</Typography>

    <div className="grid grid-cols-1 lg:grid-cols-2 p-3 rounded-lg shadow-sm bg-white gap-2">
    <div>
        <LeadStageAnalysis />
    </div><div className="border border-black">
        sads
    </div><div className="border border-black">
        sads
    </div><div className="border border-black">
        sads
    </div><div className="border border-black">
        sads
    </div>
    </div>
    </div>
  );
};

export default DefaultReports;
