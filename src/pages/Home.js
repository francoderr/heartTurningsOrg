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
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import PhoneNav from "../components/PhoneNav";


function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const elementRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (elementRef.current) {
  //       const scrollTop = elementRef.current.scrollTop;
  //       setScrollPosition(scrollTop);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // },[]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // User has scrolled, change the color of the navbar
        let position = window.scrollY;
        setScrollPosition(position);
        // dispatch(setLeColor("black"));
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [homeColor, setHomeColor] = useState("#1976d2");

  useEffect(() => {
    console.log(`scrollPosition: ${scrollPosition}`);
    if (scrollPosition > 520 && scrollPosition < 1850) {
      setHomeColor("#1A6333");
    } else {
      setHomeColor("#1976d2");
    }
  }, [scrollPosition]);

  const ref = useRef(null);

  useAnimationFrame((t) => {
    // const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -90;
    // ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    ref.current.style.transform = `rotateY(${y}deg)`;
    // ref.current.style.transition =  'transform 0.3s ease-in-out';
  });

  return (
    <Stack>
      <Stack height={"100vh"} position={'relative'}>
        <Stack
          style={{
            position: "fixed",
            top: 0,
            zIndex: 1000,
          }}
          width={"100%"}
        >
          <Navbar homeColor={homeColor} />
        </Stack>
        <Stack width="inherit" display={{ xs: "block", md: "none" }}>
          <PhoneNav />
        </Stack>
        {/* </Stack> */}
        <Stack
          mt={{xs:"50px",md:"150px"}}
          width="100%"
          direction={{
            xs: "column",
            sm: "column",
            md: "row",
          }}
          height={{
            xs: "600px",
            md: "400px"
          }}
        >
          <Stack
            width={{
              xs: "100%",
              md: "50%",
            }}
            height="inherit"
            direction={"row"}
            justifyContent={"center"}
          >
            <Stack
              width={"100%"}
              height={"100%"}
              justifyContent={"space-between"}
              alignItems={"center"}
              direction={"row"}
              px={5}
              // mr={10}
              ref={ref}
              sx={{
                position: "relative",
                transformStyle: "preserve-3d",
              }}
            >
              <Stack
                sx={{
                  position: "absolute",
                  transform: "rotateY(0deg) translateZ(200px)",
                }}
                width={"300px"}
                bgcolor={"grey"}
                height={"100%"}
              >
                <img src={Afro} alt="" width={"100%"} height={"100%"} />
              </Stack>
              <Stack
                sx={{
                  position: "absolute",
                  transform: "rotateY(90deg) translateZ(200px)",
                }}
                zIndex={+1}
                width={"300px"}
                bgcolor={"black"}
                height={"100%"}
              >
                <img src={Lady} width={"100%"} height={"100%"} alt="" />
              </Stack>
              <Stack
                // onClick={() => {
                //   console.log('you clicked item 3')
                // }}
                sx={{
                  position: "absolute",
                  transform: "rotateY(180deg) translateZ(200px)",
                }}
                width={"300px"}
                bgcolor={"grey"}
                height={"100%"}
              >
                <img src={Pain} width={"100%"} height={"100%"} alt="" />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            ml={{xs:0, md:"auto"}}
            width={{
              xs: "100%",
              md: "45%",
            }}
            direction={{xs:"column",md:"row"}}
            alignItems={"center"}
            spacing={{xs:6, md:6}}
          >
            <Stack
            //  bgcolor={'red'} 
            height={{xs:"200px", md:'inherit'}}
            width={{xs:"100%",md:"70%"}}
             alignItems={{xs:'center', md:'start'}}
             spacing={{xs:4,md:0}}
             >
              <Typography
                fontFamily={"inter"}
                fontSize={"35px"}
                fontWeight={"bold"}
                textAlign={{xs:"center",md:"left"}}
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
            <Stack  direction={{xs:"row", md:"column"}} spacing={3}>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.25, 1.5, 1] }}
                transition={{ duration: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={twitter} alt="" width={"50px"} />
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.25, 1.5, 1] }}
                transition={{ duration: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={instagram} alt="" width={"50px"} />
              </motion.div>
              <motion.div
                whileHover={{ scale: [null, 1.5, 1.25, 1.5, 1] }}
                transition={{ duration: 1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src={facebook} alt="" width={"50px"} />
              </motion.div>
            </Stack>
          </Stack>
        </Stack>
        <Stack 
        width={'100%'}
        alignItems={"center"}
        pt={{xs:10, md:7}} 
        // position={"absolute"}
        // bottom={6}
        >
          <Button 
          // sx={{ mt: 7 }}
          >
            Scroll Down <ArrowDownwardIcon  />
          </Button>
        </Stack>
      </Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={5}
        // bgcolor={'aqua'}
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
          direction={{xs:"column", md:"row"}}
          width={"100%"}
          justifyContent={"center"}
          spacing={3}
          alignItems={'center'}
        >
          <Stack
            height={{xs:"30%", md:"400px"}}
            width={{xs:"50%", md:"30%"}}
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
            height={{xs:"30%", md:"400px"}}
            width={{xs:"50%", md:"30%"}}
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
                  textAlign={'center'}
                >
                  Speak your heart out
                </Typography>
              </Stack>
            </motion.div>
          </Stack>
          <Stack
            height={{xs:"30%", md:"400px"}}
            width={{xs:"50%", md:"30%"}}
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
        // bgcolor={"rgba(244, 244, 244, 0.5)"}
        direction={{xs:'column', md:"row"}}
        justifyContent={{xs:'inherit', md:"center"}}
        alignItems={"center"}
        // bgcolor="aqua"
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          width={{xs:'100%', md:"15%"}}
          height={{xs:"20%", md:"100vh"}}
          spacing={2}
          // bgcolor="purple"
          direction={{xs:'row', md:'column'}}
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
          width={{xs:'100%',md:"80%"}}
          height={{xs:'80%',md:"500px"}}
          // bgcolor={"#F4F4F4"}
          borderRadius={"27px 10px"}
          direction={{xs:'column',md:"row"}}
          // bgcolor="yellow"
        >
          <Stack
            display={{xs:'none', md:'block'}}
            width={{xs:'100%',md:"40%"}}
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
          <Stack spacing={{xs:3,md:2}}  width={{xs:'100%',md:"55%"}} margin={2} >
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
                width={{xs:'25%', md:"120px"}}
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
                width={{xs:'25%', md:"120px"}}
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
                width={{xs:'25%', md:"120px"}}
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
                display={{xs:'none', md:'block'}}
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
                width={{xs:'25%', md:"120px"}}
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
                width={{xs:'25%', md:"120px"}}
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
                width={{xs:'25%', md:"120px"}}
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
                display={{xs:'none', md:'block'}}
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
            <Stack pt={{xs:7, md:0}} width={"90%"} alignItems={{xs:'center',md:"flex-end"}}>
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
      <Stack height={{xs:'auto',md:"100vh"}} width={"100%"} alignItems={"center"} spacing={2}>
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
          direction={{xs:'column',md:"row"}}
          height={{xs:'auto',md:"580px"}}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={5}
          // bgcolor={'yellow'}
        >
          <Stack
            width={"350px"}
            height={{xs:'30%', md:"450px"}}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
            // bgcolor='aqua'
          >
            <Stack
              width={{xs:'300px',md:"100px"}}
              height={{xs:'300px',md:"100px"}}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              mt={{xs:0,md:-6}}
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
            // height={"450px"}
            height={{xs:'30%', md:"450px"}}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
          >
            <Stack
              width={{xs:'300px',md:"100px"}}
              height={{xs:'300px',md:"100px"}}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              // mt={-6}
              mt={{xs:0,md:-6}}
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
            // height={"450px"}
            height={{xs:'30%', md:"450px"}}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
            alignItems={"center"}
            spacing={7}
          >
            <Stack
              width={{xs:'300px',md:"100px"}}
              height={{xs:'300px',md:"100px"}}
              sx={{
                backgroundImage: `url(${testimonial})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"34px"}
              // mt={-6}
              mt={{xs:0,md:-6}}
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
      <Stack width={'100%'}>
      <Footer />
      </Stack>
    </Stack>
  );
}

export default Home;
