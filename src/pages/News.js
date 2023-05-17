import { Stack, Typography, Button, TextField, Divider } from "@mui/material";
import officePic from "../assets/news.jpg";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { ArrowDropDown } from "@material-ui/icons";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

function News() {
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
          <Stack direction={"row"} my={4}>
            <NewspaperIcon />
            <Typography>Latest News Headlines</Typography>
          </Stack>
          <Stack direction={"row"} height={"450px"}>
            <Stack width={"50%"} bgcolor={"black"}></Stack>
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
                    fontFamily={"verdana"}
                    fontSize={"20px"}
                    fontWeight={"bold"}
                    color={"black"}
                  >
                    Outcome of yesterday's visit
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur. Quam viverra
                    faucibus magna quis aliquet tristique eget. Enim adipiscing
                    lobortis fermentum eu molestie. Maecenas amet netus eget
                    diam leo.Lorem ipsum dolor sit amet consectetur. Quam
                    viverra faucibus magna quis aliquet tristique eget. Enim
                    adipiscing lobortis fermentum eu molestie. Maecenas amet
                    netus eget diam leo. Lorem ipsum dolor sit amet consectetur.
                    Quam viverra faucibus magna quis aliquet tristique eget.
                    Enim adipiscing lobortis fermentum eu molestie. Maecenas
                    amet netus eget diam leo.Lorem ipsum dolor sit amet
                    consectetur. Quam viverra faucibus magna quis aliquet
                    tristique eget. Enim adipiscing lobortis fermentum eu
                    molestie. Maecenas amet netus eget diam leo.
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignSelf={"end"} mb={2}>
                  <Typography>2hrs Ago</Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                      width: "1px",
                      backgroundColor: "black",
                      height: "30px",
                    }}
                  />
                  <Typography>Kiambu Town</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack height={"100vh"}>
        <Stack width={"90%"} alignSelf={"center"}>
          <Stack direction={"row"} my={4}>
            <NewspaperIcon />
            <Typography>News Headlines</Typography>
          </Stack>
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
            Filter By
            <ArrowDropDown />
          </Button>
          <Stack direction={"row"} height={"450px"} spacing={2}>
            <Stack width={"33%"}>
              <Stack height={"45%"} bgcolor={"black"}></Stack>
              <Stack height={"50%"} bgcolor={"white"}>
                <Stack
                  width={"90%"}
                  alignSelf={"center"}
                  height={"100%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography
                      sx={{ marginTop: 1, marginBottom: 1 }}
                      fontFamily={"verdana"}
                      fontSize={"18px"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Outcome of yesterday's visit
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Lorem ipsum dolor sit amet consectetur. Quam viverra
                      faucibus magna quis aliquet tristique eget. Enim
                      adipiscing lobortis fermentum eu molestie. Maecenas amet
                      netus eget diam leo.Lorem ipsum dolor sit amet
                      consectetur. Quam viverra faucibus magna quis aliquet
                      tristique eget. Enim adipiscing lobortis fermentum eu
                      molestie. Maecenas amet netus eget diam leo.
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={0.5}
                    alignSelf={"end"}
                    mb={1}
                  >
                    <Typography>2hrs Ago</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      style={{
                        width: "0.5px",
                        backgroundColor: "black",
                        height: "25px",
                      }}
                    />
                    <Typography>Kiambu Town</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack width={"33%"}>
              <Stack height={"45%"} bgcolor={"black"}></Stack>
              <Stack height={"50%"} bgcolor={"white"}>
                <Stack
                  width={"90%"}
                  alignSelf={"center"}
                  height={"100%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography
                      sx={{ marginTop: 1, marginBottom: 1 }}
                      fontFamily={"verdana"}
                      fontSize={"18px"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Outcome of yesterday's visit
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Lorem ipsum dolor sit amet consectetur. Quam viverra
                      faucibus magna quis aliquet tristique eget. Enim
                      adipiscing lobortis fermentum eu molestie. Maecenas amet
                      netus eget diam leo.Lorem ipsum dolor sit amet
                      consectetur. Quam viverra faucibus magna quis aliquet
                      tristique eget. Enim adipiscing lobortis fermentum eu
                      molestie. Maecenas amet netus eget diam leo.
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={0.5}
                    alignSelf={"end"}
                    mb={1}
                  >
                    <Typography>2hrs Ago</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      style={{
                        width: "0.5px",
                        backgroundColor: "black",
                        height: "25px",
                      }}
                    />
                    <Typography>Kiambu Town</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack width={"33%"}>
              <Stack height={"45%"} bgcolor={"black"}></Stack>
              <Stack height={"50%"} bgcolor={"white"}>
                <Stack
                  width={"90%"}
                  alignSelf={"center"}
                  height={"100%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography
                      sx={{ marginTop: 1, marginBottom: 1 }}
                      fontFamily={"verdana"}
                      fontSize={"18px"}
                      fontWeight={"bold"}
                      color={"black"}
                    >
                      Outcome of yesterday's visit
                    </Typography>
                    <Typography fontSize={"15px"}>
                      Lorem ipsum dolor sit amet consectetur. Quam viverra
                      faucibus magna quis aliquet tristique eget. Enim
                      adipiscing lobortis fermentum eu molestie. Maecenas amet
                      netus eget diam leo.Lorem ipsum dolor sit amet
                      consectetur. Quam viverra faucibus magna quis aliquet
                      tristique eget. Enim adipiscing lobortis fermentum eu
                      molestie. Maecenas amet netus eget diam leo.
                    </Typography>
                  </Stack>
                  <Stack
                    direction={"row"}
                    spacing={0.5}
                    alignSelf={"end"}
                    mb={1}
                  >
                    <Typography>2hrs Ago</Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      style={{
                        width: "0.5px",
                        backgroundColor: "black",
                        height: "25px",
                      }}
                    />
                    <Typography>Kiambu Town</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Stack width={"150px"} alignSelf={"center"} mt={3}>
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
