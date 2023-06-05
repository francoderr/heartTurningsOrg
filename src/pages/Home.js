import { Button, Stack, Typography } from "@mui/material";
import Afro from "../assets/Afro.jpg";
import Pain from "../assets/Pain.jpg";
import Lady from "../assets/Lady.jpg";
import Back from "../assets/Back.jpg";
import facebook from "../assets/facebook.png";
import scream from "../assets/Scream.jpg";
import instagram from "../assets/instagram.png";
import painting2 from "../assets/painting2.svg";
import painting3 from "../assets/painting3.svg";
import charity2 from "../assets/charity2.svg";
import mic2 from "../assets/mic2.svg";
import twitter from "../assets/twitter.png";
import testimonial from "../assets/testimonial.svg";
import delivery3 from "../assets/delivery3.png";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import painting from "../assets/Vector.png";
import mic from "../assets/mic.png";
import charity from "../assets/charity.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
      <Stack
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={5}
      >
        <Typography
          color={"#1A6333"}
          fontWeight={700}
          fontSize={"33px"}
          fontFamily={"inter"}
          lineHeight={"40px"}
          fontStyle={"normal"}
        >
          Our Services and products
        </Typography>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          spacing={3}
        >
          <Stack
            height={"400px"}
            width={"30%"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={8}
          >
            <img alt="" src={painting} />
            <Typography
              color={"#1A6333"}
              fontWeight={600}
              fontSize={"30px"}
              fontFamily={"inter"}
              lineHeight={"36px"}
            >
              Paintings
            </Typography>
          </Stack>
          <Stack
            height={"400px"}
            width={"30%"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={8}
          >
            <img alt="" src={mic} />
            <Typography
              color={"#1A6333"}
              fontWeight={600}
              fontSize={"30px"}
              fontFamily={"inter"}
              lineHeight={"36px"}
            >
              Speak your heart out
            </Typography>
          </Stack>
          <Stack
            height={"400px"}
            width={"30%"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={8}
          >
            <img alt="" src={charity} />
            <Typography
              color={"#1A6333"}
              fontWeight={600}
              fontSize={"30px"}
              fontFamily={"inter"}
              lineHeight={"36px"}
            >
              Charity Events
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        bgcolor={"rgba(244, 244, 244, 0.5)"}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={"15%"}
          height={"100vh"}
          spacing={2}
        >
          <Stack
            width={"70px"}
            height={"70px"}
            bgcolor={"#1A6333"}
            borderRadius={"15px 5px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img alt="" src={painting2} />
          </Stack>
          <Stack
            width={"70px"}
            height={"70px"}
            bgcolor={"#D9D9D9"}
            borderRadius={"15px 5px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img alt="" src={charity2} />
          </Stack>
          <Stack
            width={"70px"}
            height={"70px"}
            bgcolor={"#D9D9D9"}
            borderRadius={"15px 5px"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <img alt="" src={mic2} />
          </Stack>
        </Stack>
        <Stack
          width={"80%"}
          height={"500px"}
          bgcolor={"#F4F4F4"}
          borderRadius={"27px 10px"}
          direction={"row"}
        >
          <Stack
            width={"40%"}
            height={"500px"}
            sx={{
              backgroundImage: `url(${scream})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            borderRadius={"27px 10px 0px"}
            alignItems={"flex-start"}
          >
            <Stack
              width={"70px"}
              height={"70px"}
              bgcolor={" #D9D9D9"}
              borderRadius={"15px 5px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <img alt="" src={painting3} />
            </Stack>
          </Stack>
          <Stack width={"55%"} margin={2} spacing={2}>
            <Typography
              color={"#165F2F"}
              fontWeight={500}
              fontSize={"20px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
              magna quis aliquet tristique eget. Enim adipiscing lobortis
              fermentum eu molestie. Maecenas amet netus eget diam leo.Lorem
              ipsum dolor sit amet consectetur. Quam viverra faucibus magna quis
              aliquet tristique eget. Enim adipiscing lobortis fermentum eu
              molestie. Maecenas amet netus eget diam leo.
            </Typography>
            <Stack direction={"row"} spacing={3}>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
            </Stack>
            <Stack direction={"row"} spacing={3}>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
              <Stack
                width={"120px"}
                height={"120px"}
                sx={{
                  backgroundImage: `url(${scream})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
              ></Stack>
            </Stack>
            <Stack width={"90%"} alignItems={"flex-end"}>
              <Button
                sx={{
                  width: "154px",
                  height: "50px",
                  bgcolor: "#1A6333",
                  color: "white",
                  borderRadius: "15px 5px",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
              >
                Visit
                <ArrowForwardIcon sx={{ marginLeft: 2 }} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack height={"100vh"} width={"100%"} alignItems={"center"} spacing={2}>
        <Typography
          color={"#15275A"}
          fontWeight={700}
          fontSize={"33px"}
          fontFamily={"Inter"}
          lineHeight={"40px"}
          fontStyle={"normal"}
          textAlign={"left"}
          mt={3}
        >
          Testimonials
        </Typography>
        <Stack
          direction={"row"}
          height="580px"
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
        >
          <Stack
            width={"350px"}
            height={"450px"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
          >
            <Stack
              width={"100px"}
              height={"100px"}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              mt={-6}
            ></Stack>
            <Typography
              color={"#15275A"}
              fontWeight={500}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
              magna quis aliquet tristique eget. Enim adipiscing lobortis
              fermentum eu molestie. Maecenas amet netus eget diam leo.Lorem
              ipsum dolor sit amet consectetur. Quam viverra faucibus magna quis
              aliquet tristique eget. Enim adipiscing lobortis fermentum eu
              molestie. Maecenas amet netus eget diam leo.
            </Typography>
            <Typography
              color={"#15275A"}
              fontWeight={800}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Alex Meta
            </Typography>
          </Stack>
          <Stack
            width={"350px"}
            height={"450px"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
          >
            <Stack
              width={"100px"}
              height={"100px"}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              mt={-6}
            ></Stack>
            <Typography
              color={"#15275A"}
              fontWeight={500}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
              magna quis aliquet tristique eget. Enim adipiscing lobortis
              fermentum eu molestie. Maecenas amet netus eget diam leo.Lorem
              ipsum dolor sit amet consectetur. Quam viverra faucibus magna quis
              aliquet tristique eget. Enim adipiscing lobortis fermentum eu
              molestie. Maecenas amet netus eget diam leo.
            </Typography>
            <Typography
              color={"#15275A"}
              fontWeight={800}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Alex Meta
            </Typography>
          </Stack>
          <Stack
            width={"350px"}
            height={"450px"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
          >
            <Stack
              width={"100px"}
              height={"100px"}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              mt={-6}
            ></Stack>
            <Typography
              color={"#15275A"}
              fontWeight={500}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
              magna quis aliquet tristique eget. Enim adipiscing lobortis
              fermentum eu molestie. Maecenas amet netus eget diam leo.Lorem
              ipsum dolor sit amet consectetur. Quam viverra faucibus magna quis
              aliquet tristique eget. Enim adipiscing lobortis fermentum eu
              molestie. Maecenas amet netus eget diam leo.
            </Typography>
            <Typography
              color={"#15275A"}
              fontWeight={800}
              width={"90%"}
              fontSize={"22px"}
              fontFamily={"Inter"}
              lineHeight={"20px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Alex Meta
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Home;
