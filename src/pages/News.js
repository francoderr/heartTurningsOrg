import { Stack, Typography, Button, TextField, Divider } from "@mui/material";
import officePic from "../assets/news.jpg";
import newsTimer from "../assets/newsTimer.svg";
import newsIcon2 from "../assets/newsIcon2.svg";
import businessBackdrop from "../assets/businessBackdrop.svg";
import boxNews from "../assets/boxNews.svg";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
import { ArrowDropDown } from "@material-ui/icons";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import NewsChild from "../components/NewsChild";


function News() {
  const history = useNavigate();

  const handleNewsClick = () => {
    history("/NewsItem");

  }

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
      <Stack height={"100vh"}>
        <Stack mt={4} width={"50%"} alignSelf={"center"}>
          <TextField
            name="search news"
            variant="outlined"
            // type={"password"}
            label="Search Topic, Location or Date"
            size="small"
          // onChange={handlePassword}
          // onKeyDown={handleKeyDown}
          />
        </Stack>
        <Stack width={"90%"} alignSelf={"center"}>
          <Stack direction={"row"} my={4} spacing={2}>
            {/* <NewspaperIcon /> */}
            <Stack
              width={"40px"}
              height={"40px"}
              bgcolor={"#303030"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"15px"}
              p={3}
              sx={{ boxSizing: "border-box" }}
            >
              <img src={newsTimer} alt="" />
            </Stack>
            <Typography
              color={"#303030"}
              fontWeight={800}
              fontSize={"33px"}
              fontFamily={"Playfair Display"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              Latest News Headlines
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            height={"450px"}
            width={"100%"}
            bgcolor={"#F4F4F4"}
            borderRadius={"37px 10px"}
          >
            <Stack
              width={"50%"}
              sx={{
                backgroundImage: `url(${businessBackdrop})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              borderRadius={"37px 10px"}
            ></Stack>
            <Stack width={"50%"} bgcolor={"#f4f4f4"}>
              <Stack
                width={"90%"}
                alignSelf={"center"}
                height={"100%"}
                justifyContent={"space-between"}
              >
                <Stack>
                  <Typography
                    sx={{ marginTop: 4, marginBottom: 4 }}
                    fontFamily={"Abril Fatface"}
                    fontSize={"24px"}
                    fontWeight={"bold"}
                    fontStyle={"normal"}
                    color={"#303030"}
                    lineHeight={"30px"}
                  >
                    Outcome of yesterday's visit
                  </Typography>
                  <Typography
                    fontFamily={"Playfair Display"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    color={"#303030"}
                    lineHeight={"30px"}
                  >
                    Lorem ipsum dolor sit amet consectetur. Quam viverra
                    faucibus magna quis aliquet tristique eget. Enim adipiscing
                    lobortis fermentum eu molestie. Maecenas amet netus eget
                    diam leo.Lorem ipsum dolor sit amet consectetur. Quam
                    viverra faucibus magna quis aliquet tristique eget. Enim
                    adipiscing lobortis fermentum eu molestie. Maecenas amet
                    netus eget diam leo.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignSelf={"end"} mb={2}>
                  <Typography
                    fontFamily={"Playfair Display"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    color={"#5F9BCE"}
                    lineHeight={"30px"}
                  >
                    2hrs Ago
                  </Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      width: "1px",
                      backgroundColor: "#5F9BCE",
                      height: "30px",
                    }}
                  />
                  <Typography
                    fontFamily={"Playfair Display"}
                    fontSize={"20px"}
                    fontWeight={400}
                    fontStyle={"normal"}
                    color={"#5F9BCE"}
                    lineHeight={"30px"}
                  >
                    Kiambu Town
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack height={"100vh"}>
        <Stack width={"90%"} alignSelf={"center"}>
          <Stack direction={"row"} my={4} spacing={2}>
            {/* <NewspaperIcon /> */}
            <Stack
              width={"40px"}
              height={"40px"}
              bgcolor={"#303030"}
              alignItems={"center"}
              justifyContent={"center"}
              borderRadius={"15px"}
              p={3}
              sx={{ boxSizing: "border-box" }}
            >
              <img src={newsIcon2} alt="" />
            </Stack>
            <Typography
              color={"#303030"}
              fontWeight={800}
              fontSize={"33px"}
              fontFamily={"Playfair Display"}
              lineHeight={"44px"}
              fontStyle={"normal"}
              textAlign={"left"}
            >
              News Headlines
            </Typography>
          </Stack>
          <Button
            sx={{
              ":hover": {
                bgcolor: "black",
                color: "white",
              },
              width: "150px",
              bgcolor: "#F4F4F4",
              color: "black",
              textTransform: "none",
            }}
          >
            Filter By
            <ArrowDropDown />
          </Button>
          <Stack direction={"row"} height={"450px"} spacing={2} justifyContent={'center'}>

            <NewsChild />
            <NewsChild />
            <NewsChild />


          </Stack>
          <Stack width={"150px"} alignSelf={"center"}>
            <Button
              sx={{
                ":hover": {
                  bgcolor: "black",
                  color: "white",
                },
                width: "150px",
                bgcolor: "#1976d2",
                color: "white",
                textTransform: "none",
              }}
            >
              Load More
              <ArrowDropDown />
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default News;
