import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography, Stack  } from "@mui/material";
import { ArrowDownward, ArrowUpward, Timer } from "@material-ui/icons";
import {  CalendarViewMonth } from "@mui/icons-material";

export default function DropDown() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}>
            <ArrowDropDownIcon />
          </Button>
          <Menu {...bindMenu(popupState)}
          sx={{marginLeft: -12}}
          >
            <MenuItem onClick={popupState.close}>
              <Stack direction="row" spacing={2}>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack>
                    <Typography color={"white"}>A</Typography>
                    <Typography color={"white"}>Z</Typography>
                  </Stack>
                  <ArrowUpward style={{ color: "white" }} />
                </Stack>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Timer style={{ color: "white" }} />
                  <ArrowUpward style={{ color: "white" }} />
                </Stack>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <CalendarViewMonth style={{ color: "white" }} />
                  <ArrowUpward style={{ color: "white" }} />
                </Stack>
              </Stack>
            </MenuItem>
            <MenuItem onClick={popupState.close}>
              <Stack direction="row" spacing={2}>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack>
                    <Typography color={"white"}>A</Typography>
                    <Typography color={"white"}>Z</Typography>
                  </Stack>
                  <ArrowDownward style={{ color: "white" }} />
                </Stack>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Timer style={{ color: "white" }} />
                  <ArrowDownward style={{ color: "white" }} />
                </Stack>
                <Stack
                  bgcolor={"#303030"}
                  width={"50px"}
                  height={"50px"}
                  borderRadius={"15px"}
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <CalendarViewMonth style={{ color: "white" }} />
                  <ArrowDownward style={{ color: "white" }} />
                </Stack>
              </Stack>
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
