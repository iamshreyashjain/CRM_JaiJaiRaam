import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";

const leadsData = [
  {
    name: "Amar",
    newLeads: 2,
    opportunity: 2,
    totalLeads: 5,
    percentage: "1.33%",
  },
  {
    name: "Rahul Singh",
    newLeads: 4,
    opportunity: 0,
    totalLeads: 2,
    percentage: "0.67%",
  },
  {
    name: "Priya Sharma",
    newLeads: 6,
    opportunity: 0,
    totalLeads: 9,
    percentage: "3.00%",
  },
  {
    name: "Sneha Verma",
    newLeads: 8,
    opportunity: 0,
    totalLeads: 10,
    percentage: "3.33%",
  },
];

// Custom X-Axis Tick Component (for multiline labels)
const CustomXAxisTick = (props) => {
  const { x, y, payload } = props;
  const lead = leadsData.find((lead) => lead.name === payload.value);

  if (!lead) return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <text textAnchor="middle" fontSize={12} fill="#333">
        <tspan x="0" dy="0.8em">
          {lead.name}
        </tspan>
        <tspan x="0" dy="1.2em">
          (Total: {lead.totalLeads}/50)
        </tspan>
        <tspan x="0" dy="1.2em">
          ({lead.percentage})
        </tspan>
      </text>
    </g>
  );
};

const LeadStageAnalysis = () => {
  return (
    <Paper elevation={1} className="flex flex-col gap-6 rounded-xl p-4">
      {/* Header */}
      <Box className="flex items-center justify-between gap-2">
        <Typography variant="h6" className="!font-semibold">
          Lead Stage Analysis
        </Typography>
        <Button
          className="!rounded-lg !px-8 hover:bg-cyan-500 hover:text-white"
          sx={{ border: "1px solid gray" }}
        >
          View
        </Button>
      </Box>

      <Divider />

      {/* Chart Container */}
      <Box className="mt-5 flex justify-center">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={leadsData} barSize={20}>
            {/* X-Axis with Custom Tick */}
            <XAxis
              dataKey="name"
              tick={<CustomXAxisTick />}
              tickLine={false}
              interval={0} // Ensure all labels are displayed
            />

            {/* Y-Axis */}
            {/* <YAxis /> */}

            {/* Tooltip */}
            <Tooltip
              formatter={(value, name, props) => {
                const { payload } = props;
                return [`${value} Leads`, `${name} (${payload.percentage})`];
              }}
            />
            {/* Label */}
            <Legend
              wrapperStyle={{
                top: "-30px",
                left: 20,
                position: "absolute",
              }}
            />

            {/* Bars */}
            <Bar dataKey="newLeads" fill="#4F46E5" radius={[10, 10, 0, 0]} />
            <Bar dataKey="opportunity" fill="#06B6D4" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default LeadStageAnalysis;
