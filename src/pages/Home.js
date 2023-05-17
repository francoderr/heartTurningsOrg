import { Button, Stack, Typography } from "@mui/material";
import Afro from "../assets/Afro.jpg";
import Pain from "../assets/Pain.jpg";
import Lady from "../assets/Lady.jpg";
import Back from "../assets/Back.jpg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import delivery3 from "../assets/delivery3.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Stack>
      <Stack height={"100vh"}>
        <Navbar />
        <Stack mt={5} width="100%" height="400px" direction={"row"}>
          <Stack width="50%" direction={"row"} justifyContent={"center"}>
            <Stack
              width={"100%"}
              height={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
              px={5}
            >
              <Stack zIndex={-1} width={"30%"} bgcolor={"grey"} height={"90%"}>
                <img src={Afro} alt="" width={"100%"} height={"100%"} />
              </Stack>
              <Stack width={"80%"} bgcolor={"black"} height={"100%"}>
                <img src={Lady} width={"100%"} height={"100%"} alt="" />
              </Stack>
              <Stack zIndex={-1} width={"30%"} bgcolor={"grey"} height={"90%"}>
                <img src={Pain} width={"100%"} height={"100%"} alt="" />
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"50%"} direction={"row"} alignItems={"center"}>
            <Stack width={"70%"}>
              <Typography
                fontFamily={"inter"}
                fontSize={"35px"}
                fontWeight={"bold"}
              >
                Paint that memory today to a permanent piece of art!
              </Typography>
              <Button
                style={{
                  width: "200px",
                  background: "#1976d2",
                  color: "white",
                  textTransform: "none",
                  // border: "solid 1px #e7e7e7",
                  // boxShadow: "0 0 12px 0 rgba(120, 90, 236, 0.2)"
                }}
                variant="contained"
                size="small"
              >
                Order Now
              </Button>
            </Stack>
            <Stack spacing={3}>
              <img src={twitter} alt="" width={"35px"} />
              <img src={instagram} alt="" width={"35px"} />
              <img src={facebook} alt="" width={"35px"} />
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={"center"}>
          <Button sx={{ mt: 7 }}>
            Scroll Down <ArrowDownwardIcon sx={{}} />
          </Button>
        </Stack>
      </Stack>

      <Stack height={"100vh"} bgcolor={"black"}>
        <Stack alignItems={"center"} pt={5}>
          <img src={delivery3} alt="" width={"55px"} />
        </Stack>
        <Stack
          width={"100%"}
          direction={"row"}
          pt={5}
          // alignItems={"center"}
          height="500px"
        >
          <Stack width={"50%"} alignItems={"center"}>
            <img src={Back} alt="" width={"60%"} height={"450px"} />
          </Stack>
          <Stack width={"50%"} pt={5} pr={5}>
            <Typography
              fontFamily={"verdana"}
              fontSize={"35px"}
              fontWeight={"bold"}
              color={"#1976d2"}
            >
              Ball Pen Art
            </Typography>
            <Typography
              fontFamily={"verdana"}
              fontSize={"15px"}
              // fontWeight={"bold"}
              color={"white"}
              mb={4}
            >
              Ballpoint pen art is sometimes associated with fork art. Using
              ballpoint to create artwork fits with the non-conformist
              tendencies of self-taught, so-called outsider artists. Also
              commonly referred to as Art Brut. Artists falling in this category
              tend to pride themselves in their unconventional methods
            </Typography>
            {/* <Stack mt={8} alignItems={'left'}> */}
            <Button
              style={{
                width: "200px",
                background: "#1976d2",
                color: "white",
                textTransform: "none",
                // border: "solid 1px #e7e7e7",
                // boxShadow: "0 0 12px 0 rgba(120, 90, 236, 0.2)"
              }}
              variant="contained"
              size="small"
            >
              More Samples <ColorLensIcon />
            </Button>
            {/* </Stack> */}
          </Stack>
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

export default Home;
