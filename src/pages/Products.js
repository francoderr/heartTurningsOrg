import { Stack, Typography, Button } from "@mui/material";
import productBackdrop from "../assets/productBackdrop.svg";
import Navbar from "../components/Navbar";
import Drawer from "../components/Drawer";
import scream from "../assets/Scream.jpg";
import painting2 from "../assets/painting2.svg";
import painting3 from "../assets/painting3.svg";
import charity2 from "../assets/charity2.svg";
import mic2 from "../assets/mic2.svg";
import painting from "../assets/Vector.png";
import mic from "../assets/mic.png";
import charity from "../assets/charity.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Products() {
  const history = useNavigate();

  const handleBack = () => {
    window.history.back();
  }

  const handleSpeak = () => {
    history("/Speak");
  };

  const handleEvents = () => {
    history("/Events");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Stack>
      {/* <Stack display={{ xs: "inherit", sm: "inherit", md: "none" }}
        width={'500px'}
        bgcolor={'red'}
      >
        <Drawer />
      </Stack> */}
      <Stack
        height={"100vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${productBackdrop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* <Stack display={{ xs: "none", sm: "none", md: "inherit" }}> */}
        <Stack
          style={{
            position: "fixed",
            top: 0,
            zIndex: 1000,
          }}
          width={"100%"}
        >
          <Navbar />
        </Stack>
        {/* </Stack> */}

        <Stack ml={{ xs: 40, sm: 40, md: 10 }} mt={20} width="50%">
          <Typography
            color={"#F4F4F4"}
            fontWeight={600}
            fontSize={"55px"}
            fontFamily={"Inter"}
            lineHeight={"67px"}
            fontStyle={"normal"}
            textAlign={"left"}
          >
            Lorem ipsum dolor sit amet consectetur. Suspendisse ac ipsum duis
            eu.
          </Typography>
          <Button onClick={handleBack}>Back</Button>
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
            <motion.div
              initial={{ opacity: 0.95 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.9, rotate: 60 }}
            >
              <Stack width="100%" height="100%" spacing={5}>
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
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0.95 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.9, rotate: 60 }}
            >
              <Stack
                spacing={4}
                alignItems={"center"}
                justifyContent={"center"}
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
            </motion.div>
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
            <motion.div
              initial={{ opacity: 0.95 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.9, rotate: 60 }}
            >
              <Stack
                spacing={4}
                alignItems={"center"}
                justifyContent={"center"}
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
            </motion.div>
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
      <Footer />
    </Stack>
  );
}

export default Products;
