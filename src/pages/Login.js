// import { Stack } from "@mui/material";
import React from "react";
import { Stack, Typography, TextField, Button, Divider } from "@mui/material";
import googleLoginIcon from "../assets/googleLoginIcon.svg"
import fbLoginIcon from "../assets/fbLoginIcon.svg"

function Login() {
  return (
    <Stack>
      <Stack height={"100vh"} width={"100%"} alignItems={"center"}>
        <Stack
          width={"40%"}
          height={"100%"}
          alignItems={"center"}
          spacing={2}
          sx={{ boxSizing: "border-box" }}
          pt={5}
        >
          <Stack
            bgcolor={"#1D598C"}
            width={"100px"}
            height={"100px"}
            borderRadius={"20px"}
            mb={2}
          ></Stack>
          <Typography
            color={"#15275A"}
            fontWeight={600}
            fontSize={"33px"}
            fontFamily={"Inter"}
            lineHeight={"44px"}
            fontStyle={"normal"}
            textAlign={"left"}
          >
            Login
          </Typography>
          {/* <Typography
            color={"#1D598C"}
            fontWeight={500}
            fontSize={"20px"}
            fontFamily={"Inter"}
            lineHeight={"44px"}
            fontStyle={"normal"}
            textAlign={"left"}
          >
            You will receive an email to activate your account.
          </Typography> */}

          <Stack mt={4} width={"80%"} alignSelf={"center"}>
            <TextField
              name="search news"
              variant="outlined"
              // type={"password"}
              label="Email"
              size="small"
              // onChange={handlePassword}
              // onKeyDown={handleKeyDown}
              sx={{
                border: "2px",
                borderRadius: "17px, 5px",
              }}
            />
          </Stack>
          <Stack mt={4} width={"80%"} alignSelf={"center"}>
            <TextField
              name="password"
              variant="outlined"
              type={"password"}
              label="Password"
              size="small"
              // onChange={handlePassword}
              // onKeyDown={handleKeyDown}
              sx={{
                border: "2px",
                borderRadius: "17px, 5px",
              }}
            />
          </Stack>
          <Stack mt={4} width={"80%"} alignSelf={"center"}>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "black",
                  color: "white",
                },
                // width: "150px",
                bgcolor: "#1976d2",
                color: "white",
                textTransform: "none",
              }}
              fullWidth
            >
              Continue
            </Button>
          </Stack>
          <Stack direction={"row"} spacing={1}>
            <Typography
              color={"#15275A"}
              fontWeight={500}
              fontSize={"20px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Dont have an account?
            </Typography>
            <Typography
              color={"#1D598C"}
              fontWeight={500}
              fontSize={"20px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Sign Up
            </Typography>
          </Stack>
          <Stack
            height={"70px"}
            width={"80%"}
            border={"solid 1px #1D598C"}
            sx={{ borderRadius: "17px" }}
            direction={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <img alt="" src={googleLoginIcon} />
            <Typography
              color={"#1D598C"}
              fontWeight={500}
              fontSize={"20px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Continue With Google
            </Typography>
          </Stack>
          <Stack
            height={"70px"}
            width={"80%"}
            border={"solid 1px #1D598C"}
            sx={{ borderRadius: "17px" }}
            direction={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
          >
            <img alt="" src={fbLoginIcon} />
            <Typography
              color={"#1D598C"}
              fontWeight={500}
              fontSize={"20px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Continue With Facebook
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            sx={{ position: "absolute", bottom: 0 }}
          >
            <Typography
              color={"#868686"}
              fontWeight={500}
              fontSize={"15px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Terms of use
            </Typography>
            <Divider
              orientation="vertical"
              style={{
                width: "1px",
                backgroundColor: "#868686",
                height: "30px",
                alignSelf: "center",
              }}
            />
            <Typography
              color={"#868686"}
              fontWeight={500}
              fontSize={"15px"}
              fontFamily={"Inter"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Privacy Policy
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Login;
