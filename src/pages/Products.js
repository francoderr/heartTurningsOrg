import { Stack, Typography } from "@mui/material";
import officePic from "../assets/artBg.jpg";
import Navbar from "../components/Navbar";

function Products() {
  return (
    <Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${officePic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
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
      </Stack>
    </Stack>
  );
}

export default Products;
