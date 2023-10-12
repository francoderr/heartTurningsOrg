import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";
import { Stack, Typography } from "@mui/material";
import React from "react";
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';

function PhoneNav() {
  return (
    <Stack width={"100%"} height={"80px"} direction="row" justifyContent={"space-between"} alignItems={'center'} boxSizing="border-box" >
      <Typography
        fontFamily=" IBM Plex Serif"
        fontSize={"27px"}
        fontWeight={700}
        color="#1D598C"
      >
        Heart Turnings
      </Typography>
      <DoubleArrowRoundedIcon />
    </Stack>
  );
}

export default PhoneNav;
