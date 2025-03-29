import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ActivityTab from "./ActivityTab";
//------------------Local Import---------------------

function TabPanel({ value, index, children }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <Box
          sx={{
            overflow: "auto",
            py: 3,
            my: 1,
            "&::-webkit-scrollbar": { display: "none" }, // For Chrome, Safari
            "-ms-overflow-style": "none", // For IE and Edge
            "scrollbar-width": "none", // For Firefox
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// PropTypes validation
TabPanel.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default function LeadDetailsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="bold tabs example"
        variant="scrollable"
        scrollButtons="auto"
        className="rounded-lg !border bg-cyan-100 !font-semibold !text-black !shadow-lg"
        sx={{
          "& .MuiTab-root": {
            fontWeight: "bold",
minWidth: "0px",
            color: "black",
            padding:"12px 10px"
          },
          "& .Mui-selected": {
            color: "black",
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#04A8CB",
            height: "4px",
            borderRadius: "5px",
          },
        }}
      >
        <Tab label="Activity" />
        <Tab label="Starred" />
        <Tab label="Notes" />
        <Tab label="Calls" />
        <Tab label="Site Visit" />
        <Tab label="Feed" />
      </Tabs>

      <TabPanel value={value} index={0}>
        <ActivityTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
      <TabPanel value={value} index={2}>
        3
      </TabPanel>
      <TabPanel value={value} index={3}>
        4
      </TabPanel>
      <TabPanel value={value} index={4}>
        5
      </TabPanel>
      <TabPanel value={value} index={5}>
        6
      </TabPanel>
    </Box>
  );
}
