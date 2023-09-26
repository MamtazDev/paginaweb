import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
const TabsSection = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div
      className=""
      style={{ backgroundColor: "#f5f8fa", paddingTop: "33px" }}
    >
      <Box
        className="container_width"
        sx={{ typography: "body1", marginTop: "30px" }}
      >
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              centered
              aria-label="lab API tabs example"
              className="all_tabs"
            >
              <Tab
                label="Informe autosafe"
                value="1"
                className={value === "1" ? "tab_design" : "tab_design2"}
              />
              <Tab
                label="Transferencia de dominio"
                className={
                  value === "2"
                    ? "tab_design center_tab_margin"
                    : "tab_design2 center_tab_margin"
                }
                value="2"
              />
              <Tab
                label="Informe de precios"
                className={value === "3" ? "tab_design" : "tab_design2"}
                value="3"
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tab1 />
          </TabPanel>
          <TabPanel value="2">
            <Tab2 />
          </TabPanel>
          <TabPanel value="3">
            <Tab3 />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TabsSection;
