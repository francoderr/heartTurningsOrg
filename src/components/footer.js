import { Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function Footer() {
  return(
    <Stack height={"40vh"} bgcolor={"black"} direction={"row"}>
        <Stack width={"70%"} pl={5} justifyContent={"center"} spacing={5}>
          <Typography
            fontFamily={"verdana"}
            fontSize={"22px"}
            fontWeight={"bold"}
            color={"white"}
          >
            Paint that memory today <br /> to a permanent piece of art!
          </Typography>
          <Typography
            fontFamily={"verdana"}
            fontSize={"15px"}
            // fontWeight={"bold"}
            color={"grey"}
          >
            Copyright © Heart Turnings. All Rights Reserved
          </Typography>
        </Stack>
        <Stack width={"30%"} spacing={1} justifyContent={"center"}>
          <Typography
            fontFamily={"verdana"}
            // fontSize={"35px"}
            color={"grey"}
          >
            Home
          </Typography>
          <Typography
            fontFamily={"verdana"}
            // fontSize={"35px"}
            color={"grey"}
          >
            Products
          </Typography>
          <Typography
            fontFamily={"verdana"}
            // fontSize={"35px"}
            color={"grey"}
          >
            News
          </Typography>
          <Typography
            fontFamily={"verdana"}
            // fontSize={"35px"}
            color={"grey"}
          >
            Company
          </Typography>
          <Stack direction={"row"} spacing={1}>
            <InstagramIcon sx={{ color: "grey" }} />
            <TwitterIcon sx={{ color: "grey" }} />
            <FacebookIcon sx={{ color: "grey" }} />
            <MailIcon sx={{ color: "grey" }} />
            <PhoneIcon sx={{ color: "grey" }} />
            <ArrowCircleUpIcon sx={{ color: "grey" }} />
          </Stack>
        </Stack>
      </Stack>
  )
}

export default Footer;
