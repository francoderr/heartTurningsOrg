import { Stack, Typography, Button } from "@mui/material";
import officePic from "../assets/office3.jpg";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import companyIcon from "../assets/companyIcon.svg";
import personnel from "../assets/personnel.svg";
import companyIG from "../assets/companyIG.svg";
import companyFB from "../assets/companyFB.svg";
import companyTwitter from "../assets/companyTwitter.svg";
import companyMapIcon from "../assets/CompanyMapIcon.svg";
import companyBackdrop from "../assets/companyBackdrop.svg";
import googleMaps from "../assets/googleMaps.svg";

function Company() {
  return (
    <Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${companyBackdrop})`,
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
      <Stack
        height={"100vh"}
        alignItems={"center"}
        spacing={5}
        pt={3}
        sx={{ boxSizing: "border-box" }}
      >
        <img alt="" src={companyIcon} />
        <Stack direction={"row"} spacing={5}>
          <Stack direction={"row"}>
            <Stack
              width={"500px"}
              height={"200px"}
              background={"#F4F4F4"}
              borderRadius={"27px 10px"}
              direction={"row"}
              bgcolor={"#F4F4F4"}
            >
              <Stack
                width={"40%"}
                height={"inherit"}
                sx={{
                  backgroundImage: `url(${personnel})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
                // alignItems={"flex-start"}
              ></Stack>
              <Stack
                width={"60%"}
                sx={{ boxSizing: "border-box" }}
                p={1}
                spacing={2}
              >
                <Typography
                  color={"#15275A"}
                  fontWeight={700}
                  fontSize={"20px"}
                  fontFamily={"Inter"}
                  lineHeight={"20px"}
                  fontStyle={"normal"}
                  textAlign={"left"}
                >
                  CEO - Chris K
                </Typography>
                <Typography
                  color={"#15275A"}
                  fontWeight={500}
                  fontSize={"15px"}
                  fontFamily={"Inter"}
                  lineHeight={"18px"}
                  fontStyle={"normal"}
                  textAlign={"left"}
                >
                  Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
                  magna quis aliquet tristique eget. Enim adipiscing lobortis
                  fermentum.Lorem ipsum dolor sit amet consectetur. Quam viverra
                  faucibus magna
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#15275A"}
                    borderRadius={"15px 5px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <img src={companyIG} alt="" />
                  </Stack>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#D9D9D9"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"15px 5px"}
                  >
                    <img src={companyFB} alt="" />
                  </Stack>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#D9D9D9"}
                    borderRadius={"15px 5px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    // sx={{ boxSizing: "border-box" }}
                  >
                    <img src={companyTwitter} alt="" />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"}>
          <Stack
            width={"500px"}
            height={"200px"}
            background={"#F4F4F4"}
            borderRadius={"27px 10px"}
            direction={'row'}
            bgcolor={'#F4F4F4'}
          >
            <Stack
              width={"40%"}
              height={"inherit"}
              sx={{
                backgroundImage: `url(${personnel})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"27px 10px 0px"}
              // alignItems={"flex-start"}
            ></Stack>
            <Stack width={'60%'} sx={{ boxSizing: "border-box" }} p={1} spacing={2}>
              <Typography
                color={"#15275A"}
                fontWeight={700}
                fontSize={"20px"}
                fontFamily={"Inter"}
                lineHeight={"20px"}
                fontStyle={"normal"}
                textAlign={"left"}
              >
                CEO - Chris K
              </Typography>
              <Typography
                color={"#15275A"}
                fontWeight={500}
                fontSize={"15px"}
                fontFamily={"Inter"}
                lineHeight={"18px"}
                fontStyle={"normal"}
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet consectetur. 
                Quam viverra faucibus magna quis aliquet tristique eget. 
                Enim adipiscing lobortis fermentum.Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus magna 
              </Typography>
              <Stack direction={'row'} spacing={2}> 
                	<Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#15275A"}
                  borderRadius={"15px 5px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  >
                    <img src={companyIG} alt=""/>
                  </Stack>
                  <Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#D9D9D9"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"15px 5px"}
                  >
                    <img src={companyFB} alt=""/>
                  </Stack>
                  <Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#D9D9D9"}
                  borderRadius={"15px 5px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  // sx={{ boxSizing: "border-box" }}
                  >
                    <img src={companyTwitter} alt=""/>
                  </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        </Stack>
        <Stack direction={"row"} spacing={5}>
          <Stack direction={"row"}>
            <Stack
              width={"500px"}
              height={"200px"}
              background={"#F4F4F4"}
              borderRadius={"27px 10px"}
              direction={"row"}
              bgcolor={"#F4F4F4"}
            >
              <Stack
                width={"40%"}
                height={"inherit"}
                sx={{
                  backgroundImage: `url(${personnel})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                borderRadius={"27px 10px 0px"}
                // alignItems={"flex-start"}
              ></Stack>
              <Stack
                width={"60%"}
                sx={{ boxSizing: "border-box" }}
                p={1}
                spacing={2}
              >
                <Typography
                  color={"#15275A"}
                  fontWeight={700}
                  fontSize={"20px"}
                  fontFamily={"Inter"}
                  lineHeight={"20px"}
                  fontStyle={"normal"}
                  textAlign={"left"}
                >
                  CEO - Chris K
                </Typography>
                <Typography
                  color={"#15275A"}
                  fontWeight={500}
                  fontSize={"15px"}
                  fontFamily={"Inter"}
                  lineHeight={"18px"}
                  fontStyle={"normal"}
                  textAlign={"left"}
                >
                  Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus
                  magna quis aliquet tristique eget. Enim adipiscing lobortis
                  fermentum.Lorem ipsum dolor sit amet consectetur. Quam viverra
                  faucibus magna
                </Typography>
                <Stack direction={"row"} spacing={2}>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#15275A"}
                    borderRadius={"15px 5px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <img src={companyIG} alt="" />
                  </Stack>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#D9D9D9"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"15px 5px"}
                  >
                    <img src={companyFB} alt="" />
                  </Stack>
                  <Stack
                    width={"40px"}
                    height={"40px"}
                    bgcolor={"#D9D9D9"}
                    borderRadius={"15px 5px"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    // sx={{ boxSizing: "border-box" }}
                  >
                    <img src={companyTwitter} alt="" />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction={"row"}>
          <Stack
            width={"500px"}
            height={"200px"}
            background={"#F4F4F4"}
            borderRadius={"27px 10px"}
            direction={'row'}
            bgcolor={'#F4F4F4'}
          >
            <Stack
              width={"40%"}
              height={"inherit"}
              sx={{
                backgroundImage: `url(${personnel})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"27px 10px 0px"}
              // alignItems={"flex-start"}
            ></Stack>
            <Stack width={'60%'} sx={{ boxSizing: "border-box" }} p={1} spacing={2}>
              <Typography
                color={"#15275A"}
                fontWeight={700}
                fontSize={"20px"}
                fontFamily={"Inter"}
                lineHeight={"20px"}
                fontStyle={"normal"}
                textAlign={"left"}
              >
                CEO - Chris K
              </Typography>
              <Typography
                color={"#15275A"}
                fontWeight={500}
                fontSize={"15px"}
                fontFamily={"Inter"}
                lineHeight={"18px"}
                fontStyle={"normal"}
                textAlign={"left"}
              >
                Lorem ipsum dolor sit amet consectetur. 
                Quam viverra faucibus magna quis aliquet tristique eget. 
                Enim adipiscing lobortis fermentum.Lorem ipsum dolor sit amet consectetur. Quam viverra faucibus magna 
              </Typography>
              <Stack direction={'row'} spacing={2}> 
                	<Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#15275A"}
                  borderRadius={"15px 5px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  >
                    <img src={companyIG} alt=""/>
                  </Stack>
                  <Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#D9D9D9"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  borderRadius={"15px 5px"}
                  >
                    <img src={companyFB} alt=""/>
                  </Stack>
                  <Stack
                  width={"40px"}
                  height={"40px"}
                  bgcolor={"#D9D9D9"}
                  borderRadius={"15px 5px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  // sx={{ boxSizing: "border-box" }}
                  >
                    <img src={companyTwitter} alt=""/>
                  </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        </Stack>
        
        
      </Stack>
      <Stack 
      height={"100vh"}
      alignItems={"center"}
      spacing={2}
      pt={2}
      sx={{ boxSizing: "border-box" }}
      >
       <img alt="" src={companyMapIcon} />
       <Stack
       height={"inherit"}
       width={"98%"}
       sx={{
         backgroundImage: `url(${googleMaps})`,
         backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
         backgroundPosition: "center",
       }}
       >
        
        </Stack> 
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Company;
