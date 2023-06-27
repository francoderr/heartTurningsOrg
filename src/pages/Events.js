import { Stack, Typography, TextField, Button } from "@mui/material";
import EventsBackdrop from "../assets/EventsBackdrop.svg";
import EventsBackdrop2 from "../assets/EventsBackdrop2.svg";
import SpeakNav from "../components/SpeakNav";
import speakerIcon from "../assets/speakerIcon.svg";
import { ArrowDropDown } from "@material-ui/icons";
import DropDown from "../components/Dropdown";
import Footer from "../components/footer";

function Events() {
  return (
    <Stack>
      <Stack
        height={"100vh"}
        width={"100%"}
        sx={{
          backgroundImage: `url(${EventsBackdrop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <SpeakNav />
        <Stack alignSelf={"center"} mt={40} width={"500px"}>
          <Typography
            color={"#F4F4F4"}
            fontWeight={800}
            fontSize={"60px"}
            fontFamily={"Inter"}
            lineHeight={"73px"}
            fontStyle={"normal"}
            textAlign={"center"}
          >
            Heart Turnings Charity Events
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
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          height={"85%"}
          width={"90%"}
          sx={{
            backgroundImage: `url(${EventsBackdrop2})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          alignItems={"center"}
        >
          <Stack width={"100px"} mt={-6}>
            <img alt="" src={speakerIcon} />
          </Stack>
          <Stack alignSelf={"center"} mt={20} width={"500px"}>
            <Typography
              color={"grey"}
              fontWeight={800}
              fontSize={"60px"}
              fontFamily={"Inter"}
              lineHeight={"73px"}
              fontStyle={"normal"}
              textAlign={"center"}
            >
              Next Event Is On The Way!!
            </Typography>
          </Stack>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#165F2F",
                color: "white",
              },
              mt: 15,
              color: "white",
              width: "250px",
              bgcolor: "#165F2F",
              textTransform: "none",
              borderRadius: "17px, 5px, 17px, 5px",
            }}
          >
            Register Now
          </Button>
        </Stack>
      </Stack>
      <Stack height={"100vh"} width={"100%"} alignItems={"center"} spacing={2}>
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
        <Stack height={"80%"} width={"80%"} spacing={3}>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#165F2F",
                color: "white",
              },
              color: "white",
              width: "250px",
              bgcolor: "#165F2F",
              textTransform: "none",
              borderRadius: "17px, 5px, 17px, 5px",
            }}
          >
            Filter By
            <DropDown />
          </Button>
          <Stack
            direction={"row"}
            height={"70%"}
            width={"100%"}
            justifyContent={"space-between"}
          >
            <Stack
              height={"100"}
              width={"48%"}
              borderRadius={"27px"}
              sx={{
                backgroundImage: `url(${EventsBackdrop2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              //   alignItems={"center"}
            ></Stack>
            <Stack
              height={"100"}
              width={"48%"}
              borderRadius={"27px"}
              sx={{
                backgroundImage: `url(${EventsBackdrop2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              //   alignItems={"center"}
            ></Stack>
          </Stack>
          <Button
            sx={{
              ":hover": {
                bgcolor: "#165F2F",
                color: "white",
              },
              alignSelf: "center",
              color: "white",
              width: "250px",
              height: "70px",
              bgcolor: "#165F2F",
              textTransform: "none",
              borderRadius: "17px, 5px, 17px, 5px",
            }}
          >
            Load More
            <ArrowDropDown />
          </Button>
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}

export default Events;
