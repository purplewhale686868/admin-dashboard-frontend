import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import GeoChart from "../components/GeoChart";
import { colors } from "../theme";

const Geo = () => {
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
