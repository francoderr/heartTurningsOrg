import { Stack, Typography, Button } from "@mui/material";
import officePic from "../assets/office3.jpg";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Company() {
  
  return (
    <Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${officePic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Stack mx={10} mt={20} width="50%">
          <Typography
            fontFamily={"verdana"}
            fontSize={"35px"}
            // fontWeight={"bold"}
            color={"white"}
          >
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet
          </Typography>
        </Stack>
        <Stack
          direction={"row"}
          mx={10}
          justifyContent={"space-between"}
          mt={20}
        >
          <Button>Audio on</Button>
          <Button>Pause video</Button>
        </Stack>
      </Stack>
      <Stack height={"100vh"} justifyContent={"center"}>
        <Stack
          width={"90%"}
          height={"90%"}
          bgcolor={"grey"}
          alignSelf={"center"}
        ></Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Company;
