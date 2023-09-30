import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./Tabs.css";
import Informeautosafe from "./Informeautosafe";
import Transferencia from "./Transferencia";
import Precios from "./Precios";
const TabsSection = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <div
      className="desktop_tabs blur_left_parent"
      style={{
        backgroundColor: "#F5FCFE",
        paddingTop: "33px",
      }}
    >
      <Box
        className="container_width"
        sx={{ typography: "body1", marginTop: "30px", position: "relative" }}
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
            <Informeautosafe />
          </TabPanel>
          <TabPanel value="2">
            <Transferencia />
          </TabPanel>
          <TabPanel value="3">
            <Precios />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default TabsSection;
